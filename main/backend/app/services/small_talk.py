"""
Small talk service — cheeky responses via OpenRouter (cloud LLM) with rule-based fallback.

Only triggered for off-topic messages (greetings, weather, jokes, etc.).
Always steers the conversation back to the heritage MCQ survey.
Never answers factual heritage questions — those go to GroundedChatService.
"""
from __future__ import annotations

import logging
import re
from typing import Any, Optional
from app.services.openrouter_service import OpenRouterService

logger = logging.getLogger(__name__)


class SmallTalkService:
    """
    Handles off-topic messages with cheeky responses and steers back to the survey.
    Uses OpenRouter for generation; falls back to rule-based templates.
    """

    def __init__(self, openrouter_client: Optional[OpenRouterService] = None):
        self.openrouter = openrouter_client or OpenRouterService()

    async def respond(self, message: str, lang: str = "vi") -> dict[str, Any]:
        """
        Generate a cheeky response to an off-topic message and steer back to the survey.

        Returns:
            {
                "text": str,          # the cheeky response
                "lang": str,           # "vi" or "en"
                "confidence": float,   # always 0.5 (small talk)
                "steer_to_survey": bool,  # always True
            }
        """
        # Try OpenRouter first
        try:
            result = await self._openrouter_respond(message, lang)
            if result:
                return result
        except Exception as e:
            logger.warning("OpenRouter small talk failed: %s. Using fallback.", e)

        # Rule-based fallback
        return self._rule_based_respond(message, lang)

    async def _openrouter_respond(self, message: str, lang: str) -> Optional[dict[str, Any]]:
        """Use OpenRouter for small talk."""
        if lang == "vi":
            system_prompt = (
                "Bạn là người hướng dẫn bảo tàng vui vẻ, hài hước. "
                "Người dùng vừa nói điều gì đó không liên quan đến di sản. "
                "Hãy trả lời ngắn gọn, hài hước (1-2 câu), rồi hướng họ về bài khảo sát di sản. "
                "Ví dụ: 'Thời tiết à? Tôi chỉ biết thời tiết của các lễ hội di sản! "
                "Hãy làm bài khảo sát ngắn để tôi gợi ý di sản phù hợp nhé!' "
                "Giới hạn 50 từ. Không trả lời câu hỏi về di sản — chỉ trò chuyện và hướng về khảo sát."
            )
        else:
            system_prompt = (
                "You are a cheerful, witty museum curator. "
                "The user said something off-topic. "
                "Give a short, cheeky response (1-2 sentences), then steer them to the heritage survey. "
                "Example: 'Weather? I only know the weather of heritage festivals! "
                "Take the quick survey and I'll recommend heritage sites for you!' "
                "Max 50 words. Do not answer heritage questions — just chat and steer to the survey."
            )

        try:
            response = await self.openrouter.generate(
                prompt=f"{system_prompt}\n\nUser: {message}",
            )
            if response:
                return {
                    "text": response.strip(),
                    "lang": lang,
                    "confidence": 0.5,
                    "steer_to_survey": True,
                }
        except Exception as e:
            logger.warning("OpenRouter generation error: %s", e)

        return None

    def _rule_based_respond(self, message: str, lang: str) -> dict[str, Any]:
        """Rule-based cheeky responses with survey steering."""
        msg_lower = message.lower().strip()

        if lang == "vi":
            # Greetings
            if any(w in msg_lower for w in ["xin chào", "chào", "hello", "hi", "hey"]):
                text = (
                    "Chào bạn! 👋 Tôi là người hướng dẫn bảo tàng. "
                    "Tôi không biết nói chuyện thời sự, nhưng tôi biết 16 di sản UNESCO! "
                    "Hãy làm bài khảo sát ngắn — tôi sẽ gợi ý di sản phù hợp với bạn! 🏛️"
                )
            # Weather
            elif any(w in msg_lower for w in ["thời tiết", "weather", "mưa", "nắng"]):
                text = (
                    "Thời tiết à? 🌧️ Tôi chỉ biết thời tiết của các lễ hội di sản! "
                    "Hội Gióng thường diễn ra vào mùa xuân, còn Lễ hội Vía Bà Chúa Xứ vào mùa hè. "
                    "Làm bài khảo sát để tôi gợi ý di sản cho bạn nhé!"
                )
            # How are you
            elif any(w in msg_lower for w in ["khỏe không", "thế nào", "how are you"]):
                text = (
                    "Tôi rất khỏe, cảm ơn bạn! 😊 Tôi luôn sẵn sàng nói về di sản. "
                    "Bạn có muốn tôi gợi ý vài di sản phù hợp với sở thích của bạn không?"
                )
            # Jokes
            elif any(w in msg_lower for w in ["đùa", "joke", "vui"]):
                text = (
                    "Đây là câu đùa của tôi: 🎭 Tại sao Nhã nhạc cung đình không bao giờ trễ giờ? "
                    "Vì nó luôn đúng nhịp! 🥁 Giờ nói chuyện nghiêm túc — làm khảo sát nhé!"
                )
            # Thanks
            elif any(w in msg_lower for w in ["cảm ơn", "thank", "thanks"]):
                text = (
                    "Rất vui được giúp bạn! 🙏 Hãy làm bài khảo sát để khám phá thêm di sản nhé!"
                )
            # Default
            else:
                text = (
                    "Hmm, tôi không chắc mình hiểu điều đó! 🤔 "
                    "Tôi là chuyên gia về 16 di sản UNESCO Việt Nam. "
                    "Hãy hỏi tôi về một di sản cụ thể, hoặc làm bài khảo sát để nhận gợi ý!"
                )
        else:
            # English
            if any(w in msg_lower for w in ["hello", "hi", "hey", "greetings"]):
                text = (
                    "Hello there! 👋 I'm your museum curator. "
                    "I don't do small talk, but I know 16 UNESCO heritage sites! "
                    "Take the quick survey and I'll recommend heritage for you! 🏛️"
                )
            elif any(w in msg_lower for w in ["weather", "rain", "sunny"]):
                text = (
                    "Weather? 🌧️ I only know the weather of heritage festivals! "
                    "The Gióng Festival happens in spring, Bà Chúa Xứ Festival in summer. "
                    "Take the survey and I'll recommend heritage for you!"
                )
            elif any(w in msg_lower for w in ["how are you", "how's it going"]):
                text = (
                    "I'm great, thank you! 😊 Always ready to talk heritage. "
                    "Want me to recommend some heritage sites for you?"
                )
            elif any(w in msg_lower for w in ["joke", "funny"]):
                text = (
                    "Here's my joke: 🎭 Why is court music never late? "
                    "Because it's always on beat! 🥁 Now, let's do the survey!"
                )
            elif any(w in msg_lower for w in ["thank", "thanks"]):
                text = (
                    "Happy to help! 🙏 Take the survey to discover more heritage!"
                )
            else:
                text = (
                    "Hmm, I'm not sure I understand that! 🤔 "
                    "I'm an expert on Vietnam's 16 UNESCO heritage sites. "
                    "Ask me about a specific heritage, or take the survey for recommendations!"
                )

        return {
            "text": text,
            "lang": lang,
            "confidence": 0.5,
            "steer_to_survey": True,
        }

    def is_off_topic(self, message: str) -> bool:
        """
        Heuristic to detect if a message is off-topic (not about heritage).
        If it contains heritage-related keywords, it's on-topic → use grounded chat.
        """
        msg_lower = message.lower().strip()

        # Heritage-related keywords (VI + EN)
        heritage_keywords = [
            # Vietnamese (with diacritics)
            "di sản", "unesco", "nhã nhạc", "quan họ", "ca trù", "cồng chiêng",
            "hò", "ví", "giặm", "bài chòi", "xoan", "then", "xòe", "gốm",
            "chăm", "hùng vương", "mẫu", "gióng", "kéo co", "bà chúa",
            "tài tử", "nghệ thuật", "âm nhạc", "hát", "lễ hội", "tín ngưỡng",
            "thờ", "nghề", "thủ công", "bảo tàng", "văn hóa", "phi vật thể",
            # Vietnamese (without diacritics — common user input)
            "di san", "nha nhac", "quan ho", "ca tru", "cong chieng",
            "bai choi", "xòe", "gom", "cham", "hung vuong", "mau",
            "giong", "keo co", "ba chua", "tai tu", "nghe thuat",
            "am nhac", "le hoi", "tin nguon", "tho", "nghe", "thu cong",
            "bao tang", "van hoa", "phi vat the",
            # English
            "heritage", "unesco", "music", "singing", "festival", "belief",
            "ritual", "craft", "pottery", "gong", "court", "folk",
            "ancestor", "worship", "dance", "intangible",
        ]

        # If any heritage keyword is present, it's on-topic
        for kw in heritage_keywords:
            if kw in msg_lower:
                return False

        # Very short messages (greetings, etc.) are off-topic
        if len(msg_lower) < 15:
            return True

        # Check for common small-talk patterns
        small_talk_patterns = [
            r"\b(hi|hello|hey|chào)\b",
            r"\b(weather|thời tiết)\b",
            r"\b(how are you|khỏe không)\b",
            r"\b(joke|đùa|vui)\b",
            r"\b(thank|cảm ơn)\b",
            r"\b(bye|tạm biệt)\b",
            r"\b(what.*your name|tên.*gì)\b",
        ]
        for pattern in small_talk_patterns:
            if re.search(pattern, msg_lower):
                return True

        # Default: if it's a question-like structure without heritage keywords,
        # treat as off-topic (the grounded chat would refuse anyway)
        return True


# Singleton
small_talk_service = SmallTalkService()