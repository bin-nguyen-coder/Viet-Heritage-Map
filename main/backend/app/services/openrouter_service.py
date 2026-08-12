"""
OpenRouter service for $0-cost cloud LLM inference.
Provides fallback when local Ollama is unavailable.
"""
import asyncio
from typing import List, Optional, Literal
import httpx
from app.core.config import settings


class OpenRouterService:
    """Generate text and embeddings using OpenRouter API"""

    API_BASE = "https://openrouter.ai/api/v1"

    def __init__(self, api_key: Optional[str] = None):
        self.api_key = api_key or settings.OPENROUTER_API_KEY
        self._client: Optional[httpx.AsyncClient] = None

    async def _get_client(self) -> httpx.AsyncClient:
        """Lazy-create the HTTP client to avoid DNS resolution at import time."""
        if self._client is None:
            referer = settings.RENDER_EXTERNAL_URL or "https://aegisai-vaic-26.onrender.com"
            self._client = httpx.AsyncClient(
                base_url=self.API_BASE,
                headers={
                    "Authorization": f"Bearer {self.api_key}",
                    "HTTP-Referer": referer,
                    "X-Title": "VietHeritage Map",
                },
            )
        return self._client

    async def generate(
        self,
        prompt: str,
        model: Optional[str] = None,
        temperature: float = 0.3,
        max_tokens: int = 500,
    ) -> str:
        """Generate text using OpenRouter"""
        if not self.api_key:
            raise ValueError("OPENROUTER_API_KEY not configured")

        model_name = model or settings.OPENROUTER_MODEL
        client = await self._get_client()
        
        response = await client.post(
            "/chat/completions",
            json={
                "model": model_name,
                "messages": [{"role": "user", "content": prompt}],
                "temperature": temperature,
                "max_tokens": max_tokens,
            },
        )
        response.raise_for_status()
        data = response.json()
        return data["choices"][0]["message"]["content"]

    async def embeddings(
        self,
        prompt: str,
        model: Optional[str] = None,
    ) -> List[float]:
        """Generate embeddings using OpenRouter"""
        if not self.api_key:
            raise ValueError("OPENROUTER_API_KEY not configured")

        model_name = model or settings.OPENROUTER_EMBED_MODEL
        client = await self._get_client()
        
        response = await client.post(
            "/embeddings",
            json={
                "model": model_name,
                "input": prompt,
            },
        )
        response.raise_for_status()
        data = response.json()
        return data["data"][0]["embedding"]

    async def close(self):
        if self._client:
            await self._client.aclose()
            self._client = None


# Global instance for reuse
_openrouter_instance: Optional[OpenRouterService] = None


def get_openrouter() -> OpenRouterService:
    global _openrouter_instance
    if _openrouter_instance is None:
        _openrouter_instance = OpenRouterService()
    return _openrouter_instance


async def cleanup_openrouter():
    global _openrouter_instance
    if _openrouter_instance:
        await _openrouter_instance.close()
        _openrouter_instance = None