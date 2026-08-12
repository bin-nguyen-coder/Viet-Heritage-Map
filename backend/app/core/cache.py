"""In-memory cache for frequent queries - Redis-style caching for Render free tier"""
import time
from typing import Any, Optional, Dict
from functools import wraps
import hashlib
import json


class InMemoryCache:
    """Simple TTL-based in-memory cache with size limits"""
    
    def __init__(self, max_size: int = 1000, default_ttl: int = 300):
        self._cache: Dict[str, tuple[Any, float]] = {}  # key -> (value, expiry)
        self.max_size = max_size
        self.default_ttl = default_ttl
    
    def _make_key(self, *args, **kwargs) -> str:
        """Generate cache key from function arguments"""
        key_data = json.dumps({"args": args, "kwargs": kwargs}, sort_keys=True, default=str)
        return hashlib.sha256(key_data.encode()).hexdigest()[:32]
    
    def get(self, key: str) -> Optional[Any]:
        """Get value if not expired"""
        if key in self._cache:
            value, expiry = self._cache[key]
            if time.time() < expiry:
                return value
            else:
                del self._cache[key]
        return None
    
    def set(self, key: str, value: Any, ttl: Optional[int] = None) -> None:
        """Set value with TTL"""
        # Evict oldest if at capacity
        if len(self._cache) >= self.max_size:
            oldest_key = min(self._cache.keys(), key=lambda k: self._cache[k][1])
            del self._cache[oldest_key]
        
        expiry = time.time() + (ttl or self.default_ttl)
        self._cache[key] = (value, expiry)
    
    def delete(self, key: str) -> None:
        """Delete key"""
        self._cache.pop(key, None)
    
    def clear(self) -> None:
        """Clear all cache"""
        self._cache.clear()
    
    def stats(self) -> Dict[str, Any]:
        """Cache statistics"""
        now = time.time()
        valid = sum(1 for _, exp in self._cache.values() if now < exp)
        return {
            "size": len(self._cache),
            "valid_entries": valid,
            "expired_entries": len(self._cache) - valid,
            "max_size": self.max_size,
        }


# Global cache instance
cache = InMemoryCache(max_size=1000, default_ttl=300)  # 5 min default


def cached(ttl: int = 300, key_prefix: str = ""):
    """Decorator for caching function results"""
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            cache_key = f"{key_prefix}:{func.__name__}:{cache._make_key(*args, **kwargs)}"
            
            # Try cache
            cached_value = cache.get(cache_key)
            if cached_value is not None:
                return cached_value
            
            # Execute and cache
            result = await func(*args, **kwargs)
            cache.set(cache_key, result, ttl)
            return result
        return wrapper
    return decorator


def invalidate_pattern(pattern: str) -> int:
    """Invalidate all keys matching pattern (simple prefix match)"""
    count = 0
    keys_to_delete = [k for k in cache._cache.keys() if pattern in k]
    for key in keys_to_delete:
        cache.delete(key)
        count += 1
    return count