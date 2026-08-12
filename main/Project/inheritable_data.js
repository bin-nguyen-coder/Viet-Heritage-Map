// Intangible heritage data for VietHeritage Map
// Extends VNMT.js with UNESCO intangible cultural heritage sites

const INTANGIBLE_HERITAGE = [
    {
        id: "int-001",
        name: "Lễ hội Quan họ Bắc Ninh",
        english: "Quan Ho Bac Ninh Festival",
        location: "Bắc Ninh",
        lat: 21.1861,
        lng: 106.0763,
        category: "intangible",
        badge: "UNESCO",
        type: "folk_singing",
        year: "2009",
        desc: "Traditional folk singing with call-and-response between male and female singers, recognized by UNESCO in 2009.",
        desc_vi: "Quan họ là dân ca đối đáp truyền thống của Bắc Ninh, hình thức biểu diễn chủ yếu là nam ca sĩ và nữ ca sĩ đối đáp nhau qua các câu hò.",
        audio_preview: "/audio/quanho-preview.wav",
        audio_embed: "/audio/quanho-embed.wav"
    },
    {
        id: "int-002",
        name: "Ca trù Hà Nội",
        english: "Traditional Ca tru Music",
        location: "Hà Nội",
        lat: 21.0285,
        lng: 105.8542,
        category: "intangible",
        badge: "UNESCO",
        type: "chamber_music",
        year: "2009",
        desc: "Vietnamese chamber music with traditional instruments đờn, nhị, sao, recognized by UNESCO in 2009.",
        desc_vi: "Ca trù là một loại hình nghệ thuật diễn xướng truyền thống của Việt Nam, kết hợp giữa ca nhảy và nhạc cụ đờn, nhị, sao.",
        audio_preview: "/audio/catru-preview.wav",
        audio_embed: "/audio/catru-embed.wav"
    },
    {
        id: "int-003",
        name: "Nhã nhạc cung đình Huế",
        english: "Hue Royal Court Music",
        location: "Thừa Thiên Huế",
        lat: 16.4637,
        lng: 107.5909,
        category: "intangible",
        badge: "UNESCO",
        type: "court_music",
        year: "2003",
        desc: "The musical traditions of the Nguyen Dynasty court, representing the pinnacle of Vietnamese court music.",
        desc_vi: "Nhã nhạc cung đình Huế là di sản tinh túy của triều đại nhà Nguyễn, biểu diễn sự uy nghi và thứ phái của hoàng gia.",
        audio_preview: "/audio/nhuanhac-preview.wav",
        audio_embed: "/audio/nhuanhac-embed.wav"
    },
    {
        id: "int-004",
        name: "Đờn ca tài tử Nam Bộ",
        english: "Southern Don Ca Tai Tu Music",
        location: "Cần Thơ",
        lat: 10.0452,
        lng: 105.7469,
        category: "intangible",
        badge: "UNESCO",
        type: "chamber_music",
        year: "2014",
        desc: "Traditional music form of southern Vietnam combining vocal and instrumental performances.",
        desc_vi: "Đờn ca tài tử là nghệ thuật âm nhạc truyền thống của miền Tây Nam Bộ, phản ánh đời sống và tâm tưởng của người dân cảnh.",
        audio_preview: "/audio/donantutu-preview.wav",
        audio_embed: "/audio/donantutu-embed.wav"
    },
    {
        id: "int-005",
        name: "Hò ca Nghệ An",
        english: "Nghe An Work Songs",
        location: "Nghệ An",
        lat: 18.6796,
        lng: 105.6927,
        category: "intangible",
        badge: "National",
        type: "work_songs",
        year: "2015",
        desc: "Traditional work songs sung by farmers and laborers during harvests and fieldwork.",
        desc_vi: "Hò làng là các điệu dân ca lao động truyền thống của người nông dân Nghệ An, được hát trong quá trình làm việc và vui chơi.",
        audio_preview: "/audio/ho-nghean-preview.wav",
        audio_embed: "/audio/ho-nghean-embed.wav"
    }
];

// Export for use in VNMT.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { INTANGIBLE_HERITAGE };
}