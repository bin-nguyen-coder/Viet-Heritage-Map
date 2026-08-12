from fastapi import APIRouter, UploadFile, File, HTTPException, Form
from app.schemas.audio import AudioScoreResponse
from app.services.audio_analysis import VocalSimilarityAnalyzer
import logging

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/audio", tags=["audio"])


@router.post("/analyze", response_model=AudioScoreResponse)
async def analyze_audio(
    file: UploadFile = File(...),
    reference_id: int = Form(...),
):
    """
    Analyze user singing against a reference vocal sample.
    Returns a 0-100 similarity score indicating how close the user's voice
    matches the traditional singing style.
    """
    if file.content_type not in ["audio/wav", "audio/mpeg", "audio/mp4", "audio/m4a", "audio/x-m4a", "audio/webm"]:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported file type: {file.content_type}",
        )

    audio_bytes = await file.read()
    if len(audio_bytes) > 10 * 1024 * 1024:
        raise HTTPException(status_code=413, detail="File too large (max 10MB)")

    if len(audio_bytes) < 1000:
        raise HTTPException(status_code=400, detail="File too small or empty")

    try:
        analyzer = VocalSimilarityAnalyzer()
        return analyzer.analyze(audio_bytes, reference_id)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.exception(f"Audio analysis failed: {e}")
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")