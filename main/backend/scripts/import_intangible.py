"""
Import intangible heritage data into SQLite database.
Merges tangible artifacts with intangible heritage sites.
"""
import asyncio
import uuid
from datetime import datetime
from sqlalchemy import insert

from app.core.database import async_session_maker, init_db
from app.models.site import HeritageSite, HeritageType, UNESCOStatus
from app.models.artisan import ArtisanPersona, KnowledgeChunk
from app.models.audio_asset import AudioAsset


# Generate deterministic UUIDs for each site
def _uuid_from_id(id_str: str) -> str:
    """Generate deterministic UUID v5 from string ID."""
    return str(uuid.uuid5(uuid.NAMESPACE_DNS, f"vietheritage-{id_str}"))


INTANGIBLE_SITES = [
    {
        "id": "int-001",
        "name_vi": "Lễ hội Quan họ Bắc Ninh",
        "name_en": "Quan Ho Bac Ninh Festival",
        "description_vi": "Quan họ là dân ca đối đáp truyền thống của Bắc Ninh, hình thức biểu diễn chủ yếu là nam ca sĩ và nữ ca sĩ đối đáp nhau qua các câu hò.",
        "description_en": "Quan họ is a traditional folk singing style from Bắc Ninh province featuring call-and-response between male and female singers.",
        "latitude": 21.1861,
        "longitude": 106.0763,
        "province": "Bắc Ninh",
        "district": "Gây",
        "heritage_type": "intangible",
        "unesco_status": "inscribed",
        "cultural_layers": ["quan_ho", "bac_ninh", "folk_singing", "unesco"],
        "cover_image": "/images/quanho-cover.jpg",
        "audio_preview": "/audio/quanho-preview.wav",
    },
    {
        "id": "int-002",
        "name_vi": "Nhà ca - Nơi lưu giữ di sản Ca trù",
        "name_en": "Traditional Ca tru House",
        "description_vi": "Ca trù là một loại hình nghệ thuật diễn xướng truyền thống của Việt Nam, kết hợp giữa ca nhảy và nhạc cụ đờn, nhị, sao.",
        "description_en": "Ca trù is a traditional Vietnamese form of chamber music performed with traditional instruments.",
        "latitude": 21.0285,
        "longitude": 105.8542,
        "province": "Hà Nội",
        "district": "Hoàn Kiếm",
        "heritage_type": "intangible",
        "unesco_status": "inscribed",
        "cultural_layers": ["ca_tru", "ha_noi", "chamber_music", "unesco"],
        "cover_image": "/images/catru-cover.jpg",
        "audio_preview": "/audio/catru-preview.wav",
    },
    {
        "id": "int-003",
        "name_vi": "Nhã nhạc cung đình Huế",
        "name_en": "Hue Royal Court Music",
        "description_vi": "Nhã nhạc cung đình Huế là di sản tinh túy của triều đại nhà Nguyễn, biểu diễn sự uy nghi và thứ phái của hoàng gia.",
        "description_en": "The Hue Royal Court Music represents the musical traditions of the Nguyen Dynasty court.",
        "latitude": 16.4637,
        "longitude": 107.5909,
        "province": "Thừa Thiên Huế",
        "district": "Huế",
        "heritage_type": "intangible",
        "unesco_status": "inscribed",
        "cultural_layers": ["nha_nhac", "hue", "court_music", "unesco", "royal"],
        "cover_image": "/images/nhuanhac-cover.jpg",
        "audio_preview": "/audio/nhuanhac-preview.wav",
    },
    {
        "id": "int-004",
        "name_vi": "Đờn ca tài tử Nam Bộ",
        "name_en": "Southern Don Ca Tai Tu Music",
        "description_vi": "Đờn ca tài tử là nghệ thuật âm nhạc truyền thống của miền Tây Nam Bộ, phản ánh đời sống và tâm tưởng của người dân cảnh.",
        "description_en": "Don ca tai tu is a traditional music form of southern Vietnam, combining vocal and instrumental performances.",
        "latitude": 10.0452,
        "longitude": 105.7469,
        "province": "Cần Thơ",
        "district": "Ninh Kiều",
        "heritage_type": "intangible",
        "unesco_status": "inscribed",
        "cultural_layers": ["don_ca_tai_tu", "mien_nam", "chamber_music", "unesco"],
        "cover_image": "/images/donantutu-cover.jpg",
        "audio_preview": "/audio/donantutu-preview.wav",
    },
    {
        "id": "int-005",
        "name_vi": "Hò ca Nghệ An",
        "name_en": "Nghe An Work Songs (Hò)",
        "description_vi": "Hò làng là các điệu dân ca lao động truyền thống của người nông dân Nghệ An, được hát trong quá trình làm việc và vui chơi.",
        "description_en": "Traditional work songs from Nghệ An province, sung by farmers and laborers during harvests and fieldwork.",
        "latitude": 18.6796,
        "longitude": 105.6927,
        "province": "Nghệ An",
        "district": "Vinh",
        "heritage_type": "intangible",
        "unesco_status": "national",
        "cultural_layers": ["ho", "nghe_an", "work_songs", "labor", "national"],
        "cover_image": "/images/ho-nghean-cover.jpg",
        "audio_preview": "/audio/ho-nghean-preview.wav",
    },
]

ARTISAN_PERSONAS = [
    {
        "id": _uuid_from_id("persona-quanho"),
        "name_vi": "Ca sĩ Quan họ Bắc Ninh",
        "name_en": "Bac Ninh Quan Ho Singer",
        "birth_year": 1955,
        "region": "Bắc Ninh",
        "specialty": "Quan họ folk singing",
        "bio_vi": "Ca sĩ truyền thống với hơn 40 năm tuổi, làng nghề từ thuở giàu có.",
        "bio_en": "Traditional folk singer with over 40 years of age, from a family of artisans.",
    },
    {
        "id": _uuid_from_id("persona-catru"),
        "name_vi": "Nghệ nhân Ca trù Hà Nội",
        "name_en": "Hanoi Ca tru Artist",
        "birth_year": 1948,
        "region": "Hà Nội",
        "specialty": "Ca trù chamber music",
        "bio_vi": "Nghệ nhân đờn, nhị, sao - trẻ em trong gia đình làng nghề từ năm 1980.",
        "bio_en": "Master of đờn, nhị, sao instruments - child of artisan family since 1980.",
    },
    {
        "id": _uuid_from_id("persona-nhuanhac"),
        "name_vi": "Ca sĩ Nhã nhạc cung đình",
        "name_en": "Royal Court Music Singer",
        "birth_year": 1952,
        "region": "Huế",
        "specialty": "Nhã nhạc court music",
        "bio_vi": "Nghệ nhân truyền thống làng nghề Nhã nhạc cung đình Huế, bảo tồn di sản triều đình Nguyễn.",
        "bio_en": "Traditional master of Hue Royal Court Music, preserving the Nguyen Dynasty heritage.",
    },
    {
        "id": _uuid_from_id("persona-donantutu"),
        "name_vi": "Nghệ sĩ Đờn ca tài tử",
        "name_en": "Don Ca Tai Tu Artist",
        "birth_year": 1960,
        "region": "Cần Thơ",
        "specialty": "Đờn ca tài tử southern music",
        "bio_vi": "Nghệ sĩ làng nghề miền Tây, mang di sản Đờn ca tài tử tới thế hệ trẻ.",
        "bio_en": "Artist of southern heritage, bringing Don Ca Tai Tu tradition to younger generations.",
    },
    {
        "id": _uuid_from_id("persona-ho"),
        "name_vi": "Ca sĩ Hò Nghệ An",
        "name_en": "Nghe An Work Song Singer",
        "birth_year": 1958,
        "region": "Nghệ An",
        "specialty": "Hò work songs",
        "bio_vi": "Ca sĩ truyền thống biểu diễn các điệu hò làng, tụ hội công việc nông nghiệp.",
        "bio_en": "Traditional singer performing village hò songs for agricultural work gatherings.",
    },
]

KNOWLEDGE_CHUNKS = [
    {
        "id": _uuid_from_id("knowledge-quanho-1"),
        "site_id": _uuid_from_id("int-001"),
        "artisan_persona_id": _uuid_from_id("persona-quanho"),
        "category": "history",
        "content_vi": "Quan họ Bắc Ninh được UNESCO công nhận là di sản văn hóa phi vật thể đại diện vào năm 2009. Đây là loại hình dân ca đối đáp truyền thống giữa nam ca sĩ và nữ ca sĩ qua các câu hò.",
        "content_en": "Quan Ho Bac Ninh was recognized by UNESCO as a Representative Intangible Cultural Heritage in 2009. It is a traditional form of folk singing featuring call-and-response between male and female singers.",
        "source_type": "unesco",
        "verified_by": "UNESCO",
        "verified_at": "2009-10-01",
    },
    {
        "id": _uuid_from_id("knowledge-quanho-2"),
        "site_id": _uuid_from_id("int-001"),
        "artisan_persona_id": _uuid_from_id("persona-quanho"),
        "category": "technique",
        "content_vi": "Kỹ thuật hát Quan họ bao gồm các hát nhảy (nẩy hát), hát rừng (rừng hát), hát lay, hát sổ và hất. Mỗi kỹ thuật có cách thực hiện đặc trưng phản ánh đời sống và tâm tưởng của người dân Bắc Ninh.",
        "content_en": "Quan họ singing techniques include nẩy hát (jumping melody), rừng hát (forest melody), lay hát, sổ hát and hất hát. Each technique has distinctive execution reflecting the lives and sentiments of Bắc Ninh people.",
        "source_type": "interview",
        "verified_by": "Nguyen Thi Hoa",
        "verified_at": "2025-06-15",
    },
    {
        "id": _uuid_from_id("knowledge-catru-1"),
        "site_id": _uuid_from_id("int-002"),
        "artisan_persona_id": _uuid_from_id("persona-catru"),
        "category": "history",
        "content_vi": "Ca trù là di sản văn hóa phi vật thể của Việt Nam, được UNESCO công nhận năm 2009. Ca trù kết hợp giữa ca nhảy (ca vọng) và nhạc cụ đờn, nhị, sao.",
        "content_en": "Ca tru is Vietnam's intangible cultural heritage, recognized by UNESCO in 2009. Ca tru combines vocal performance (ca vọng) with traditional instruments đờn, nhị, sao.",
        "source_type": "unesco",
        "verified_by": "UNESCO",
        "verified_at": "2009-10-01",
    },
    {
        "id": _uuid_from_id("knowledge-catru-2"),
        "site_id": _uuid_from_id("int-002"),
        "artisan_persona_id": _uuid_from_id("persona-catru"),
        "category": "technique",
        "content_vi": "Âm nhạc Ca trù có nhiều hình thức như ca trù tuồng, ca trù hát chèo, ca trù kịch và ca trù đức tin. Mỗi hình thức có nhạc điệu và cách diễn xướng riêng biệt.",
        "content_en": "Ca tru music has various forms including ca tru tuồng, ca tru hát chèo, ca tru kịch and ca tru đức tin. Each form has distinct melodies and performance styles.",
        "source_type": "academic",
        "verified_by": "Prof. Tran Quang Hai",
        "verified_at": "2025-03-20",
    },
    {
        "id": _uuid_from_id("knowledge-nhuanhac-1"),
        "site_id": _uuid_from_id("int-003"),
        "artisan_persona_id": _uuid_from_id("persona-nhuanhac"),
        "category": "history",
        "content_vi": "Nhã nhạc cung đình Huế là nghệ thuật âm nhạc của hoàng gia triều Nguyễn, được UNESCO công nhận là di sản văn hóa phi vật thể thế giới vào năm 2003.",
        "content_en": "Hue Royal Court Music is the musical art of the Nguyen Dynasty royal court, recognized by UNESCO as World Intangible Cultural Heritage in 2003.",
        "source_type": "unesco",
        "verified_by": "UNESCO",
        "verified_at": "2003-11-01",
    },
    {
        "id": _uuid_from_id("knowledge-nhuanhac-2"),
        "site_id": _uuid_from_id("int-003"),
        "artisan_persona_id": _uuid_from_id("persona-nhuanhac"),
        "category": "ritual",
        "content_vi": "Nhã nhạc được sử dụng trong các nghi lễ như cung đình triều đình, đăng đàn tháp, chầu đèn và các lễ hội hoàng hoa hội. Âm nhạc này thể hiện sự uy nghi, trang nghiêm của triều đình.",
        "content_en": "Court music is used in rituals such as royal court ceremonies, musical offerings, incense ceremonies and royal festivals. This music expresses the solemnity and dignity of the dynasty.",
        "source_type": "document",
        "verified_by": "Hue Monuments Conservation Center",
        "verified_at": "2024-01-15",
    },
    {
        "id": _uuid_from_id("knowledge-donantutu-1"),
        "site_id": _uuid_from_id("int-004"),
        "artisan_persona_id": _uuid_from_id("persona-donantutu"),
        "category": "history",
        "content_vi": "Đờn ca tài tử Nam Bộ được UNESCO công nhận là di sản văn hóa phi vật thể năm 2014. Đây là nghệ thuật âm nhạc truyền thống của miền Tây Nam Bộ Việt Nam.",
        "content_en": "Southern Don Ca Tai Tu was recognized by UNESCO as Intangible Cultural Heritage in 2014. This is a traditional music art form of southern Vietnam.",
        "source_type": "unesco",
        "verified_by": "UNESCO",
        "verified_at": "2014-12-01",
    },
    {
        "id": _uuid_from_id("knowledge-donantutu-2"),
        "site_id": _uuid_from_id("int-004"),
        "artisan_persona_id": _uuid_from_id("persona-donantutu"),
        "category": "technique",
        "content_vi": "Đờn ca tài tử sử dụng các nhạc cụ như đờn, đàn tranh, đàn nhị, sáo, và trống. Những nhạc cụ này tạo nên bản giao hưởng đặc trưng của miền Tây.",
        "content_en": "Don Ca Tai Tu uses instruments such as đờn, đàn tranh, đàn nhị, sáo, and trống. These instruments create the distinctive southern musical ensemble.",
        "source_type": "academic",
        "verified_by": "Southern Folk Culture Research Institute",
        "verified_at": "2025-01-10",
    },
    {
        "id": _uuid_from_id("knowledge-ho-1"),
        "site_id": _uuid_from_id("int-005"),
        "artisan_persona_id": _uuid_from_id("persona-ho"),
        "category": "history",
        "content_vi": "Hò là các điệu dân ca lao động truyền thống của người nông dân Việt Nam, được hát trong quá trình làm việc và vui chơi. Hò Nghệ An là một trong những điệu hò đặc sắc của phong cách hò Mỹ Lao.",
        "content_en": "Hò are traditional work songs of Vietnamese farmers, sung during work and celebration. Nghệ An work songs are among the distinctive hò Mỹ Lao styles.",
        "source_type": "academic",
        "verified_by": "Vietnam Folk Music Archive",
        "verified_at": "2024-08-15",
    },
    {
        "id": _uuid_from_id("knowledge-ho-2"),
        "site_id": _uuid_from_id("int-005"),
        "artisan_persona_id": _uuid_from_id("persona-ho"),
        "category": "meaning",
        "content_vi": "Hò không chỉ là điệu ca trong công việc mà còn là di sản văn hóa phản ánh tâm tưởng, tình cảm và đời sống của người nông dân Việt Nam xuyên qua các thế hệ.",
        "content_en": "Hò is not only work songs but also cultural heritage reflecting the sentiments, emotions and lives of Vietnamese farmers across generations.",
        "source_type": "document",
        "verified_by": "Nghe An Cultural Center",
        "verified_at": "2025-02-20",
    },
]

AUDIO_ASSETS = [
    {
        "id": _uuid_from_id("audio-quanho-preview"),
        "site_id": _uuid_from_id("int-001"),
        "title_vi": "Múa hát Quan họ mẫu dệt",
        "title_en": "Quan Ho Weaving Dance",
        "url": "/audio/quanho-preview.wav",
        "genre": "quan_ho",
        "instruments": ["voice"],
        "duration_seconds": 180,
    },
    {
        "id": _uuid_from_id("audio-catru-preview"),
        "site_id": _uuid_from_id("int-002"),
        "title_vi": "Ca trù đờn nhị sao",
        "title_en": "Ca tru đờn nhị sao",
        "url": "/audio/catru-preview.wav",
        "genre": "ca_tru",
        "instruments": ["dan_bau", "dan_nhi", "sao"],
        "duration_seconds": 240,
    },
    {
        "id": _uuid_from_id("audio-nhuanhac-preview"),
        "site_id": _uuid_from_id("int-003"),
        "title_vi": "Nhã nhạc triều Nguyễn",
        "title_en": "Nguyen Dynasty Court Music",
        "url": "/audio/nhuanhac-preview.wav",
        "genre": "nha_nhac",
        "instruments": ["trong_de", "trong_chat", "phach"],
        "duration_seconds": 300,
    },
    {
        "id": _uuid_from_id("audio-donantutu-preview"),
        "site_id": _uuid_from_id("int-004"),
        "title_vi": "Đờn ca tài tử hương lửa",
        "title_en": "Don Ca Tai Tu Hương Lửa",
        "url": "/audio/donantutu-preview.wav",
        "genre": "don_ca_tai_tu",
        "instruments": ["dan_tranh", "dan_ty_ba", "sao"],
        "duration_seconds": 200,
    },
    {
        "id": _uuid_from_id("audio-ho-preview"),
        "site_id": _uuid_from_id("int-005"),
        "title_vi": "Hò làng mùa màng",
        "title_en": "Harvest Village Work Songs",
        "url": "/audio/ho-nghean-preview.wav",
        "genre": "ho",
        "instruments": ["voice"],
        "duration_seconds": 150,
    },
]


async def import_intangible_sites() -> int:
    """Import intangible heritage sites into database."""
    await init_db()

    async with async_session_maker() as db:
        site_count = 0
        for site in INTANGIBLE_SITES:
            stmt = insert(HeritageSite).values(
                id=_uuid_from_id(site["id"]),
                name_vi=site["name_vi"],
                name_en=site["name_en"],
                description_vi=site["description_vi"],
                description_en=site["description_en"],
                latitude=site["latitude"],
                longitude=site["longitude"],
                province=site["province"],
                district=site["district"],
                heritage_type=site["heritage_type"],
                unesco_status=site["unesco_status"],
                cultural_layers=site["cultural_layers"],
                cover_image=site["cover_image"],
                audio_preview=site["audio_preview"],
            )
            await db.execute(stmt)
            site_count += 1

        persona_count = 0
        for persona in ARTISAN_PERSONAS:
            stmt = insert(ArtisanPersona).values(**persona)
            await db.execute(stmt)
            persona_count += 1

        knowledge_count = 0
        for chunk in KNOWLEDGE_CHUNKS:
            stmt = insert(KnowledgeChunk).values(**chunk)
            await db.execute(stmt)
            knowledge_count += 1

        audio_count = 0
        for asset in AUDIO_ASSETS:
            stmt = insert(AudioAsset).values(**asset)
            await db.execute(stmt)
            audio_count += 1

        await db.commit()
        print(f"Imported {site_count} sites, {persona_count} personas, {knowledge_count} knowledge chunks, {audio_count} audio assets")
        return site_count


if __name__ == "__main__":
    asyncio.run(import_intangible_sites())