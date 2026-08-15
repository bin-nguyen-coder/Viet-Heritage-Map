/* ═══════════════════════════════════════════════════════════
   BẢO VẬT QUỐC GIA VIỆT NAM  (357 national treasures)
   SEPARATE DATASET — distinct from the UNESCO intangible-heritage
   "16 sites" kept in data.js / the vnmt TREASURES array.
   Entry schema (compatible with artifact.html):
   id, name, english, location, lat, lng, category, badge, type,
   year, desc, desc_vi  (+ optional quote / model3d fields).
   ═══════════════════════════════════════════════════════════ */
const NATIONAL_TREASURES = [


  // ── BATCH 1 · Quyết định 1426/QĐ-TTg · 1/10/2012 ──────────────
  {
    id: 1,
    name: "Trống đồng Ngọc Lũ",
    english: "Ngoc Lu Bronze Drum",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156, 
    category: "historical",
    badge: "Đông Sơn Relic",
    type: "tools",
    year: "Đông Sơn",
    desc: "An exemplary bronze drum from the Đông Sơn culture.",
    desc_vi: "Chiếc trống đồng cổ có kiểu dáng hài hòa, hoa văn phong phú và nguyên vẹn nhất từng được phát hiện tại Việt Nam."
  },
  {
    id: 2,
    name: "Trống đồng Hoàng Hạ",
    english: "Hoang Ha Bronze Drum",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Đông Sơn Relic",
    type: "tools",
    year: "Đông Sơn",
    desc: "A richly decorated Đông Sơn drum.",
    desc_vi: "Chiếc trống có hoa văn sắc nét mô phỏng cảnh thu hoạch, hội hè và các loài chim muông cổ đại.",
  },
  {
    id: 3,
    name: "Thạp đồng Đào Thịnh",
    english: "Dao Thinh Bronze Tripod",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Đông Sơn Relic",
    type: "tools",
    year: "Đông Sơn",
    desc: "A representative bronze situla found in a dry riverbed from the Đông Sơn culture.",
    desc_vi: "Thạp đồng có kích thước đồ sộ nhất từng được tìm thấy, đóng vai trò như một đồ tế khí và tùy táng đặc trưng của giới quý tộc"
  },
  {
    id: 4,
    name: "Tượng đồng hai người cõng nhau thổi khèn",
    english: "Bronze Flute Players Statue",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Đông Sơn Sculpture",
    type: "art",
    year: "Đông Sơn",
    desc: "A bronze statue of two Đông Sơn figures playing khèn - a panpipe-alike traditional wind instrument made of bamboo.",
    desc_vi: "Tượng đồng nhỏ, tinh xảo miêu tả sinh động cảnh 2 người đàn ông múa nhảy và chơi nhạc cụ."
  },
  {
    id: 5,
    name: "Cây đèn đồng hình người quỳ",
    english: "Kneeling Bronze Lamp",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Đông Sơn Artifact",
    type: "art",
    year: "Đông Sơn",
    desc: "A distinctive Đông Sơn bronze lamp shaped as a kneeling figure.",
    desc_vi: "Cây đèn đồng lớn nhất còn tồn tại từ thời Đông Sơn, phản ánh kĩ thuật đúc khéo léo và thẩm mỹ cao của cư dân Việt cổ.",
  },
  {
    id: 6,
    name: "Trống đồng Cảnh Thịnh",
    english: "Canh Thinh Bronze Drum",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Tây Sơn Artifact",
    type: "tools",
    year: "Tây Sơn",
    desc: "A Tây Sơn period bronze drum.",
    desc_vi: "Trống đồng thời Tây Sơn, là hiện vật gắn với thời đại của vua Quang Trung.",
  },
  {
    id: 7,
    name: "Ấn đồng \"Môn Hạ Sảnh ấn\"",
    english: "\"Mon Ha Sanh\" Bronze Seal",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Trần Dynasty",
    type: "academic",
    year: "Trần",
    desc: "A Trần dynasty bronze seal.",
    desc_vi: "Chiếc ấn dùng để đóng nhiều văn bản quan trọng cuối thời Trần.",
  },
  {
    id: 8,
    name: "Bình gốm hoa lam vẽ Thiên Nga",
    english: "Blue-and-White Swan Vase",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Lê Sơ Ceramic",
    type: "art",
    year: "Lê sơ",
    desc: "A rare early Lê blue-and-white vase decorated with swans."
  },
  {
    id: 9,
    name: "Cuốn \"Đường Kách mệnh\"",
    english: "\"Road to Revolution\" Book",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Hồ Chí Minh Manuscript",
    type: "academic",
    year: "20th Century",
    desc: "The original manuscript of Hồ Chí Minh's seminal work for Communist officials in Guangzhou, China.",
    desc_vi: "Cuốn sách tổng hợp các bài giảng của lãnh tụ Nguyễn Ái Quốc cho cán bộ Cách mạng tại Quảng Châu."
  },
  {
    id: 10,
    name: "Tác phẩm Ngục trung nhật ký",
    english: "\"The Prison Diary\" Book",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Hồ Chí Minh Manuscript",
    type: "academic",
    year: "20th Century",
    desc: "The original prison diary of President Hồ Chí Minh.",
    desc_vi: "Tác phẩm tổng hợp 143 bài thơ được Bác Hồ làm trong thời gian bị giam cầm tại Trung Quốc."
  },
  {
    id: 11,
    name: "Bản thảo \"Lời kêu gọi toàn quốc kháng chiến\"",
    english: "\"Call to National Resistance\" Manuscript",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Hồ Chí Minh Manuscript",
    type: "academic",
    year: "1946",
    desc: "The handwritten appeal for national resistance by Hồ Chí Minh.",
    desc_vi: "Bản thảo viết tay \"Lời kêu gọi toàn quốc kháng chiến\" của chủ tịch Hồ Chí Minh cuối năm 1946.",
  },
  {
    id: 12,
    name: "Bản thảo \"Lời kêu gọi đồng bào và chiến sĩ cả nước\"",
    english: "\"Call to the People and Soldiers\" Manuscript",
    location: "Bảo tàng Hồ Chí Minh, Hà Nội",
    lat: 21.035666082803786, lng: 105.83266760921067, 
    category: "historical",
    badge: "Hồ Chí Minh Manuscript",
    type: "academic",
    year: "1966",
    desc: "The original text of Hồ Chí Minh's 1966 \"Call to the People and Soldiers\" radio appeal.",
    desc_vi: "Sưu tập 4 bản thảo đánh máy và viết tay, trong đó có bản được Chủ tịch Hồ Chí Minh đọc trên Đài Tiếng nói Việt Nam ngày 17-7-1966.",
  },
  {
    id: 13,
    name: "Bản Di chúc của Chủ tịch Hồ Chí Minh",
    english: "Ho Chi Minh's Testament",
    location: "Cục Lưu trữ Văn phòng Trung ương Đảng, Hà Nội",
    lat: 21.006451153347992, lng: 105.75803156033551,
    category: "historical",
    badge: "Hồ Chí Minh Document",
    type: "academic",
    year: "1969",
    desc: "The original will of Hồ Chí Minh.",
    desc_vi: "Toàn văn di chúc của Chủ tịch Hồ Chí Minh, được viết từ năm 1965 đến năm 1969.",
  },
  {
    id: 14,
    name: "Tượng Phật Đồng Dương",
    english: "Dong Duong Buddha Statue",
    location: "Bảo tàng Lịch sử thành phố Hồ Chí Minh",
    lat: 10.788132913434895, lng: 106.70498351310206, 
    category: "religious",
    badge: "Chăm Pa Sculpture",
    type: "religious",
    year: "Chăm Pa",
    desc: "A Cham religious bronze statue from Đồng Dương, Đà Nẵng City.",
    desc_vi: "Hiện vật đại diện cho thời kì hưng thịnh nhất của Phật giáo Chăm Pa vào thế kỉ IX.",
  },
  {
    id: 15,
    name: "Tượng Nữ Thần Devi (Hương Quế)",
    english: "Devi Goddess Statue",
    location: "Bảo tàng Lịch sử thành phố Hồ Chí Minh",
    lat: 10.788132913434895, lng: 106.70498351310206,
    category: "religious",
    badge: "Chăm Pa Sculpture",
    type: "religious",
    year: "Chăm Pa",
    desc: "\"One of the most perfect works of Champa art\" according to John Boisselier.",
    desc_vi: "Tượng mang những đường nét mỹ thuật riêng biệt so với các tác phẩm thời kì Đồng Dương. Được coi là \"Thần Vệ nữ của phương Đông\"."
  },
  {
    id: 16,
    name: "Tượng Thần Vishnu",
    english: "Vishnu God Statue",
    location: "Bảo tàng Lịch sử thành phố Hồ Chí Minh",
    lat: 10.788132913434895, lng: 106.70498351310206,
    category: "religious",
    badge: "Óc Eo Sculpture",
    type: "religious",
    year: "Óc Eo",
    desc: "An Óc Eo period statue of the deity Vishnu.",
    desc_vi: "Tượng thần Vishnu - một trong ba vị thần quan trọng của Ấn Độ giáo."
  },
  {
    id: 17,
    name: "Tượng Phật Lợi Mỹ",
    english: "Loi My Buddha Statue",
    location: "Bảo tàng Lịch sử thành phố Hồ Chí Minh",
    lat: 10.788132913434895, lng: 106.70498351310206,
    category: "religious",
    badge: "Óc Eo Sculpture",
    type: "religious",
    year: "Óc Eo",
    desc: "An Óc Eo Buddha statue from Lợi Mỹ, Đồng Tháp Province.",
    desc_vi: "Một hiện vật tiêu biểu của Phật giáo văn hóa Óc Eo, thường được chọn để trưng bày trong nước và quốc tế."
  },
  {
    id: 18,
    name: "Tượng Thần Surya",
    english: "Surya God Statue",
    location: "Bảo tàng Lịch sử thành phố Hồ Chí Minh",
    lat: 10.788132913434895, lng: 106.70498351310206,
    category: "religious",
    badge: "Óc Eo Sculpture",
    type: "religious",
    year: "Óc Eo",
    desc: "An Óc Eo statue of the sun god Surya.",
    desc_vi: "Tượng thần Mặt Trời Surya, được đánh giá cao bởi cả phương diện mĩ thuật và nội dung thần thoại."
  },
  {
    id: 19,
    name: "Tượng Bồ tát Tara",
    english: "Tara Bodhisattva Statue",
    location: "Bảo tàng Điêu khắc Chăm, Đà Nẵng",
    lat: 16.06035438969859, lng: 108.22341374785412, 
    category: "religious",
    badge: "Chăm Pa Sculpture",
    type: "religious",
    year: "Chăm Pa",
    desc: "A Cham Tara bodhisattva statue.",
    desc_vi: "Tượng đồng có kích thước lớn, là hiện vật tiêu biểu cho việc thờ Bồ tát tại Phật viện Đồng Dương (Đà Nẵng) trong văn hóa Chăm Pa."
  },
  {
    id: 20,
    name: "Đài thờ Mỹ Sơn E1",
    english: "My Son E1 Sanctuary Altar",
    location: "Bảo tàng Điêu khắc Chăm, Đà Nẵng",
    lat: 16.06035438969859, lng: 108.22341374785412, 
    category: "religious",
    badge: "Chăm Pa Relic",
    type: "religious",
    year: "Chăm Pa",
    desc: "The E1 sanctuary altar from Mỹ Sơn Sanctuary.",
    desc_vi: "Đài thờ được chạm khắc tinh xảo, sống động. Là đài thờ duy nhất chạm khắc nhiều nhân vật cùng cảnh sinh hoạt, thiên nhiên,..."
  },
  {
    id: 21,
    name: "Đài thờ Trà Kiệu",
    english: "Tra Kieu Sanctuary Altar",
    location: "Bảo tàng Điêu khắc Chăm, Đà Nẵng",
    lat: 16.06035438969859, lng: 108.22341374785412, 
    category: "religious",
    badge: "Chăm Pa Relic",
    type: "religious",
    year: "Chăm Pa",
    desc: "The Tra Kieu sanctuary altar preserved at the Museum of Cham Sculpture in Đà Nẵng.",
    desc_vi: "Đài thờ Chăm Pa duy nhất còn nguyên vẹn với bệ vuông ở dưới và bệ Yoni tròn ở trên."
  },
  {
    id: 22,
    name: "Tượng Phật A Di Đà",
    english: "Amitabha Buddha Statue",
    location: "Chùa Phật Tích, Bắc Ninh",
    lat: 21.094071134435612, lng: 106.02661568703233, 
    category: "religious",
    badge: "Lý Dynasty",
    type: "religious",
    year: "Lý",
    desc: "A stone-carved Amitabha Buddha statue from the Lý dynasty (11<sup>th</sup> century).",
    desc_vi: "Tượng Phật đá xanh nguyên khối, được trang trí hoa văn thiên nhiên tinh xảo, tỉ mỉ."
  },
  {
    id: 23,
    name: "Tượng Phật nghìn mắt nghìn tay",
    english: "Thousand-Armed Guanyin Statue",
    location: "Chùa Bút Tháp, xã Đình Tổ, huyện Thuận Thành, tỉnh Bắc Ninh",
    lat: 21.060798157536933, lng: 106.0227824090329, 
    category: "religious",
    badge: "Lê Trung Hưng",
    type: "religious",
    year: "Lê Trung Hưng",
    desc: "A wooden thousand-armed thousand-eyed guanyin statue from the 17<sup>th</sup> century.",
    desc_vi: "Tượng Phật gỗ từ năm 1656 với kích thước rất lớn, chạm khắc 11 đầu, 42 tay lớn, 958 tay dài ngắn khác nhau."
  },
  {
    id: 24,
    name: "Bộ Cửu vị thần công",
    english: "Nine-Dragon Cannons Set",
    location: "Bảo tàng Cổ vật Cung đình Huế",
    lat: 16.467945753585866, lng: 107.58130311760907, 
    category: "historical",
    badge: "Nguyễn Artifact",
    type: "tools",
    year: "Nguyễn",
    desc: "The set of nine sacred cannons from the Nguyễn dynasty.",
    desc_vi: "Bộ 9 khẩu thần công, tượng trưng cho 4 mùa Xuân, Hạ, Thu, Đông và Ngũ hành Kim, Mộc, Thủy, Hỏa, Thổ. Thể hiện uy quyền và sức mạnh của vương triều Nguyễn."
  },
  {
    id: 25,
    name: "Bộ Cửu đỉnh",
    english: "Nine Dynastic Tripods",
    location: "Bảo tàng Cổ vật Cung đình Huế",
    lat: 16.46687487200218, lng: 107.57701411692948,
    category: "historical",
    badge: "Nguyễn Artifact",
    type: "art",
    year: "Nguyễn",
    desc: "The royal nine tripod cauldrons of the Nguyễn dynasty.",
    desc_vi: "Bộ 9 chiếc đỉnh đặt ở sân Thế miếu, Hoàng thành Huế, tượng trưng cho quyền lực thống trị của nhà nước quân chủ."
  },
  {
    id: 26,
    name: "Pháo cao xạ 37mm",
    english: "37mm Anti-Aircraft Gun",
    location: "Bảo tàng Phòng không - Không quân, Hà Nội",
    lat: 20.99959538210752, lng: 105.82962645748896, 
    category: "historical",
    badge: "War Artifact",
    type: "tools",
    year: "1954",
    desc: "A 37mm anti-aircraft gun used by the Vietnamese People's Army during the Điện Biên Phủ campaign.",
    desc_vi: "Khẩu pháo phòng không của Quân đội Nhân dân Việt Nam trong chiến dịch Điện Biên Phủ, gắn liền với tấm gương anh hùng Tô Vĩnh Diện hi sinh thân mình cứu pháo."
  },
  {
    id: 27,
    name: "Máy bay MiG-21 F96 số hiệu 5121",
    english: "MiG-21 F96 Aircraft",
    location: "Bảo tàng Lịch sử quân sự Việt Nam, Hà Nội",
    lat: 21.00927118361651, lng: 105.75650269446491,
    category: "historical",
    badge: "War Artifact",
    type: "tools",
    year: "1972",
    desc: "The MiG-21 F96 fighter aircraft operated in the Vietnam War.",
    desc_vi: "Chiếc máy bay đầu tiên trên thế giới bắn rơi pháo đài bay B-52 trên không và trở về an toàn."
  },
  {
    id: 28,
    name: "Sổ trực ban Chiến dịch Hồ Chí Minh",
    english: "Ho Chi Minh Campaign Operations Logbook",
    location: "Bảo tàng Chiến dịch Hồ Chí Minh, Hồ Chí Minh City",
    lat: 10.786999353103877, lng: 106.7043513077696,
    category: "historical",
    badge: "War Document",
    type: "academic",
    year: "1975",
    desc: "The handwritten operations logbook of the Ho Chi Minh Campaign in the last week before Liberation Day.",
    desc_vi: "Cuốn sổ ghi tình hình chiến sự trong tuần cuối cùng trước ngày miền Nam hoàn toàn giải phóng."
  },
  {
    id: 29,
    name: "Xe tăng T54B số hiệu 843",
    english: "T54B Tank No. 843",
    location: "Bảo tàng Lịch sử quân sự Việt Nam, Hà Nội",
    lat: 21.00927118361651, lng: 105.75650269446491,
    category: "historical",
    badge: "War Vehicle",
    type: "tools",
    year: "1975",
    desc: "The first tank that entered the Independence Palace (Saigon) on April 30, 1975.",
    desc_vi: "Chiếc xe tăng đầu tiên húc đổ cổng phụ Dinh Độc Lập ngày 30/4/1975. Xe chở ông Bùi Quang Thận, người cắm lá cờ giải phóng lên nóc Dinh Độc Lập."
  },
  {
    id: 30,
    name: "Xe tăng T59 số hiệu 390",
    english: "T59 Tank No. 390",
    location: "Bảo tàng Tăng thiết giáp, Hà Nội",
    lat: 21.046758928473317, lng: 105.79453598830331,
    category: "historical",
    badge: "War Vehicle",
    type: "tools",
    year: "1975",
    desc: "The second tank that entered the Independence Palace (Saigon) on April 30, 1975.",
    desc_vi: "Chiếc xe tăng thứ hai tiến vào Dinh Độc Lập ngày 30/4/1975, húc đổ cổng chính mở đường cho Quân Giải phóng tiến vào Dinh."
  },

  // ── BATCH 2 · Quyết định 2599/QĐ-TTg · 30/12/2013 ──────────────
  {
    id: 31,
    name: "Trống đồng Đền Hùng",
    english: "Den Hung Bronze Drum",
    location: "Khu di tích lịch sử Đền Hùng, thành phố Việt Trì, tỉnh Phú Thọ",
    lat: 21.364252925428787, lng: 105.31527869884407,
    category: "historical",
    badge: "Đông Sơn Bronze",
    type: "tools",
    year: "Đông Sơn",
    desc: "A Đông Sơn culture bronze drum at Đền Hùng historic site — regarded as the cradle of Vietnamese civilization.",
    desc_vi: "Trống đồng thuộc văn hóa Đông Sơn được phát hiện ngay tại khu vực chân núi Nghĩa Lĩnh.",
    quote: "AC",
  },
  {
    id: 32,
    name: "Trống đồng Cẩm Giang I",
    english: "Cam Giang I Bronze Drum",
    location: "Bảo tàng tỉnh Thanh Hóa",
    lat: 19.814336022023838, lng: 105.78040143805647, 
    category: "historical",
    badge: "Đông Sơn Bronze",
    type: "tools",
    year: "Đông Sơn",
    desc: "A significant Đông Sơn bronze drum unearthed in Cẩm Giang, Thanh Hóa — one of the core regions of the Đông Sơn civilization.",
    desc_vi: "Trống đồng thuộc văn hóa Đông Sơn, khẳng định người Thanh Hóa đã biết chế tạo, sử dụng trống từ khi định cư ở khu vực này."
  },
  {
    id: 33,
    name: "Mộ thuyền Việt Khê",
    english: "Viet Khe Boat Coffin",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Đông Sơn Tomb",
    type: "art",
    year: "Đông Sơn",
    desc: "One of the most complete Đông Sơn burial finds ever discovered, containing a rich array of bronze grave goods.",
    desc_vi: "Ngôi mộ thuyền hoàn chỉnh, nhiều đồ tùy táng nhất thời kì Đông Sơn được phát hiện."
  },
  {
    id: 34,
    name: "Thạp đồng Hợp Minh",
    english: "Hop Minh Bronze Container",
    location: "Bảo tàng tỉnh Yên Bái",
    lat: 21.719387610884965, lng: 104.91450089203778, 
    category: "historical",
    badge: "Đông Sơn Bronze",
    type: "tools",
    year: "Đông Sơn",
    desc: "A bronze cylindrical container from the Đông Sơn culture decorated with intricate geometric and animal motifs of the period.",
    desc_vi: "Chiếc thạp đồng duy nhất được phát hiện có di cốt người cổ bên trong, cho thấy chức năng làm quan tài của thạp."
  },
  {
    id: 35,
    name: "Bộ khóa đai lưng bằng đồng",
    english: "Bronze Belt Buckle Set",
    location: "Khu di tích lịch sử Đền Hùng, thành phố Việt Trì, tỉnh Phú Thọ",
    lat: 21.364252925428787, lng: 105.31527869884407,
    category: "historical",
    badge: "Đông Sơn Bronze",
    type: "tools",
    year: "Đông Sơn",
    desc: "An exquisite set of Đông Sơn bronze belt buckles reflecting the sophisticated craftsmanship and social status symbolism of the era.",
    desc_vi: "Hiện vật đồng được chạm khắc tinh xảo tượng trưng cho quyền lực gắn liền với thủ lĩnh thời Hùng Vương."
  },
  {
    id: 36,
    name: "Kiếm ngắn Núi Nưa",
    english: "Nui Nua Short Sword",
    location: "Bảo tàng tỉnh Thanh Hóa",
    lat: 19.814336022023838, lng: 105.78040143805647, 
    category: "historical",
    badge: "Đông Sơn Weapon",
    type: "tools",
    year: "Đông Sơn",
    desc: "A short bronze sword with unique Mã river style from the late Đông Sơn culture discovered at Núi Nưa, Thanh Hóa.",
    desc_vi: "Kiếm có hoa văn người phụ nữ quyền lực trên chuôi độc đáo, chứng tỏ chế độ mẫu hệ phổ biến ở khu vực Thanh Hóa vào thời kì đầu Công nguyên."
  },
  {
    id: 37,
    name: "Bia \"Xá Lợi Tháp Minh\"",
    english: "Xa Loi Thap Minh Stele",
    location: "Bảo tàng tỉnh Bắc Ninh", 
    lat: 21.184363149219163, lng: 106.07535260928978,
    category: "historical",
    badge: "Ancient Stele",
    type: "academic",
    year: "năm 601",
    desc: "A rare stone stele dated to the year 601 AD, one of the oldest surviving inscribed steles in Vietnam."
  },
  {
    id: 38,
    name: "Bia chùa Bảo Ninh Sùng Phúc",
    english: "Bao Ninh Sung Phuc Pagoda Stele",
    location: "Chùa Bảo Ninh Sùng Phúc, huyện Chiêm Hóa, tỉnh Tuyên Quang",
    lat: 22.079425924593384, lng: 105.1684174661162, 
    category: "religious",
    badge: "Lý Dynasty Stele",
    type: "academic",
    year: "Lý",
    desc: "A Lý dynasty stone stele recording the history of the pagoda and is an important document of early Vietnamese Buddhism."
  },
  {
    id: 39,
    name: "Bia Sùng Thiện Diên Linh",
    english: "Sung Thien Dien Linh Stele",
    location: "Chùa Đọi Sơn, thị xã Duy Tiên, tỉnh Hà Nam",
    lat: 20.584666401385462, lng: 105.97506476940512, 
    category: "religious",
    badge: "Lý Dynasty Stele",
    type: "academic",
    year: "Lý",
    model3d: "https://sketchfab.com/models/84fd26141dcf432b81d15527733ca27b/embed",
    model3d_title: "Bia Sùng Thiện Diên Linh | Bảo Vật Quốc Gia",
    model3d_author: "Atlantic Truong | Vietnam 3D",
    model3d_author_url: "https://sketchfab.com/atlantictruong19",
    script: {
      han: `            <strong>皇越李家第四帝龍隊山崇善延齡塔碑銘御書飛帛碑額</strong>

  夫妙體玄寂，靈光兮非中非外，卓爾於]五太之初；大用繁滋，浩博兮唯形唯顯，森[然於一虛之裏。勿兆朕可測，靡影跡可求。包天壤廣大之容，詎能參覲；混日月光華之彩，寧假尋觀。隨榦運造化樞機，彼端然在；縱推蕩陰陽舒豫，祕要偏幽。豈非玄寂歟?
  上下之紀綱既立;埏埴之規模[聿]興。四序行而玉 燭調;七政齊而璇璣運。雜沓萬類;叢挫眾緣。生生由是著名;蚩蚩以之遂性。不曰繁滋乎? 如此則迅機宏辯，原始要終,不亦難哉!
  唯我大雄氏:中古應 運; 西乾顯靈。完三千之威儀;興四八之妙相。十號備具;百福莊嚴。究彼精微;明茲純粹。悼群生之醉識;悲四類之迷真。衣中忘寶而不自知; 篋裏藏蛇亦非警悟。由是，設醍醐之妙教; 飫 積歲之饑虛。燃燦爛之明燈;燭彌年之昏暗。俾浪心之天真得定;遣妄性之蓬行立安。故,三界皈依;十方回向。住塵世七十九歲;權設法八萬千門。謂:跡既合塵; 身寧隨幻。遂乃,金容掩色於雙樹;白虹騰耀於重天。兜羅綿裸其神姿;紫蘭膏潤其香體。信心戀慕，奉栴檀而作薪;覺性靈通，應闍維而火化。荼毗煙了;舍利凝成。類明月之產蚌胎;肖露珠之瑩金掌。或五彩而照耀;或九色而澄徹。盈盤滿斛;異俗超凡。人主龍王，陰間天上, 時皆造集，覺相分俵。珍惜以寶函重貯;慎守則提刃經巡。各擇其安，靡 常厥所。或香山頂上，人世塵中; 或朝野空間，滄溟宮里。堵波覺梵，神物高藏; 沿古處今，曆傳罔替。興功繼績，不亦盛歟 ?
  恭唯李家:聖憲體道丶聖文神武丶英格民物丶 萬靈照應丶永隆元化丶聰明廣運丶仁智懿義丶純誠明孝皇帝陛下: 堪輿鍾粹，日月儲精。慶兆先符;休徵預啟。父皇入夢，殊邦獻雪象六牙;母后有娠，飛閣廕黃龍五彩。斯則陛下入胎之兆也。
  景星瑩現，銀河應眉月之光; 慶雲曉飛，丹陛舒霜綃之彩。喜氣俄騰于霄漢;異香散靄於宮圍。十月處胎而周期;三陽建寅而誕聖。斯則陛下降誕之徵也。
  悼歲而甫登大寶，天地相扶; 勝衣而統御寰區，人神咸贊。龍睛鳳目;玉潔冰姿。眸澄而青白分明，異重瞳 於舜帝;耳壽而輪郭修廣，嗤三漏於夏王。形頎而長;足方而厚。玉理含其潤;珠庭耀其華。誠千載之英明;冠百王之奇秀。斯則陛下天表之端嚴也。
  惠周動植;智敏風雲。內典經書，精窮玄要;外權法術，總悉指歸。陶金石之英辭，光吞斗極;著殿塔之嘉號，懸照古今。精飛帛以通神;運御毫之絕妙。龍躍鳳翔之勢，法從玉手;鸞迴鵲返之形，體出宸心。雕金牌以置梵宮;鐫翠琰 以貽道觀。詩思撮陶鈞萬化;樂譜和唐梵同音。書窮究於玄機;射至精於妙術。斯則陛下博通於才藝也。
  中秋清景，萬務休時。孝誠展而潔珍羞;盛禮陳而祠聖考。復於三旦;大啟駕儀。乘寶輦而出九重;陟金輅而馳黃道。雉扇擁於兩際;銀綱護於四圍。黃蓋浮空;彩 旗 慧日。星馳柳陌;斗轉花衢。向長瀘之碧川;御靈光之寶殿。千艘而中流電速;萬豉而溢水雷鳴。玉廊宴方伯之會同;丹陛奏仙吏之章表。波心蕩漾，浮金鰲以負三峰;水面夷猶，露甲文而敷四足。轉眸瞥岸;呀口噴津。向冕旒而仰觀;對當空而俯察。望嵯峨之峭壁;奏洋溢之雲韶。洞戶爭開;神仙競出。蓋天上之皃態;豈塵世之嬌
  姿。翹纖手以獻迴風;顰翠眉而歌休運。珍禽作隊，盡率舞以趨蹌;瑞鹿成群，自著行而踴躍。及,金烏西照;寶輅將還。到如砥之途中;留廣天之境外。向崇臺而回陸地，背贔 負以載三山; 對朱盤而招頭，將安身而曳[…]尾。鳩過雲而嘹亮;虎下磴而生獰。奮迅雄威;噬齧小獸。會上林子弟，持翟 羽朱竿。厲聲驅以進帝前，築場闈而守獵界。彎弧趨射，拔劍馳循。人奮勇於片辰;士爭迎於當日。懷鄰國而攜耆提幼;來列土而登拽緣墻。屬目觀光;翹心願見。處處之盡妝羅綺;年年之三日懽 娛。躋人世於壺天;置兆民於樂國。斯則陛下撥覽而新制金鼇也。
  顯聖謀之神妙;制御舶之精奇。著狀設連艦壯雄;立格造千艘秀麗。架重霄之樓閣;崇危峭之檐楹。中嚴黼座彌高，豁聰睿明之遐鋻;旁展繡例光燦，廣列嬪綵之親倍。傾萬寶以嚴粧;備三宮之房室。中流曉漾，疑蜃吐以橫波;隈岸晚停，擬鼇擎之聳漢。斯則陛下新制御舶之巧也。
  廣運神功;弘推聖斷。精修勝事;勤至良緣。建廣昭之登 (燈)台，向端門之廷上。中標一幹，外設七層。虯弓出而捧金蓮; 縫紗籠而獲蘭焰。蘊機微於地下，圓轉如輪; 爍光彩於天中，瑩煌似日。復有:嚴彰寶聖;金殿珍叢。自睿意妝成;坐金色相斗。狀寫靈文;形鋪奇麗。又有:花樓兩座，綰以金鍾。刻釋子而體挂田衣，運幽機而播棰如擊;聞鳴鞘而肅儀轉面，睹英聖而稽首曲躬。出自睿謀，宛如動靜。復有:耀七寶之萃堵，作一行而互排。端中則黃金一峰，坐多寶如來之瑞相，列幾層法駕之真形。檐光爍晨旭之輝;瓦色開碧雲之彩。其次, 則白銀二座，左置阿彌陀之真容，右貯妙色身之粹質。峭舒雄勢;喬奮飛甍。聆朧欺瑞雪之融;燦爛奪秋蟾之潔。更次，則烏文二座。左安廣博身之慈顏; 右備離怖畏之妙相。既已圓高閣;又更起危層。蓋迭素瓊;壁鐫龍狀。又次，則象齒二座。左稀甘露王之形儀;右儼寶勝佛之睟睦。切磋素質;崇架霜楹。棐稜雕絲玉之英;間隙剪靈犀之角。兼精制記辭之美;各鐫于蓮座之傍。披雪精誠，永昭厥後。而又:寫九天以五色;刻四柱以雙懸。沿邊而瑩點千燈，兩面而煉妝金彩。可謂: 絕古今之制度;超造化之生成。傾天下之雍和, 夜為晝賞;暢世間之心目，老換童顏。斯則陛下巧制勝緣之功也。
  精崇皇覺;篤慕勝因。向西禁之名園;廣延[祐]之光寺。跡從前之舊制;出聖意之新謀。鑿靈沼之芳池, 而池中湧一石幹。幹上坼千葉蓮花，花上而橋安紺殿。殿中坐金相之能仁。 池之外周遶畫廊, 環廊之外又疏碧池，每架飛橋以通之。前橋之庭，左右甃琉璃寶塔。以月之朔旦，以年之游春，親乘玉輦，來啟清筳。花香設祺祚之儀;盆盥陳浴佛之式。粧精禁之相於五眾，或袒露進退以為容; 作天王之隊於四方，齊擎器徘徊而獻舞。精勤靡 怠，敬奉移時。而,玄造靈通，咸皆扶祐。斯則陛下制梵剎以祈福壽也。
  上方垂拱;下正弼鄰。偶邊吏之更常，成乖違之有釁。星馳御敵;雷奮挫威。邕州軍之眾億千，潰矣猶風卷翳; 如月江之師百萬，渙然若日消冰。在閫外之將自施;豈宸衷之謀所決。暨後, 致皇極於穆清;躋生民於富壽。扇仁風以化率; 施惠澤以旁宣。乍制環王, 辭宮室而趨庭為庶; 羅于國主, 弃 山河而詣闕稱臣。篤意慕羶;傾懷就日。頃者,磨沙蠻獠，恃險江山。狼獷生心，不循皇化。聖則一怒，大駕啟行。猛將雲隨;謀臣雨會。布師旅於荒野;襲梟獍之頑民。盡酋長成擒;大魁渠俘虜。其餘則:血膏草莽，肉委林泉。縱雄虎而扼鼠,奚難; 翻 巨石而碎卵,何易! 斯則陛下耀武通規也。
  黔黎熙洽;兆庶清夷。春覲奉琛;秋朝述職。會萬國諸侯而晏賞;構眾仙三級之寶臺。銀瓦疊而光照穹旻;金蓮累而鋪陳寶相。上頂則靈禽聳立;四稜則鱗長竞驤 。蓋飾七珍; 帶妝百寶。上階正位而聖明端拱，中級下等而仙妓迴環。庭列伶官，並皆蹈躍。奮天才而成妙曲; 慰群辟而遠還酆。凌空而聲遏行雲;和管而響滋睿渥。斯則陛下修文至德也。
  為天地之真主;究造化之幽機。運智變通;顯謀充塞。精外方之音響;譯諸技之要端。作妙舞之絕倫;示昌朝之同樂。復制:《降雲仙子》而歌聲響亮，贊哲后之元功; 《出蓮寶婺》而弱質蹁躚，慶深仁之美化。斯則陛下之大妙算也。
  德同高厚，則五緯昭符; 惠及飛潛，則萬靈薦祉。神龍二九，光復 於寶殿瓊丹; 雪象一千，呈祥於瑤墀禁御。彰大寶之可久;符純嘏之優隆。故,林顯奇姿;天昭靈狀。復現神象一頭，形質而魁梧異等;鼻額而妙顯神光。驗文彩而清淨有除; 稟聰明而炤彰無外。御號曰: 超群神象。優曇駢芳;舍利玉現。草木效祉;神物舒光。揭錫羡無窮;示垂鴻有慶。靈草兩現;皓鹿六臻。素糜獨來;玄麆 雙至。昭長承上帝之命;契永保旻天之休。紛糾呈妍;聯鑣顯麗。龜五色而千點; 蓮兩鏡而一莖。澤及淵泉，物方廌瑞。感黎氓之寧謐;昭社稷之益隆。月重輪於層霄;金發彩於幽澗 。明照臨於有截;彰宰斷於無垠。故,天象效祥;幽源薦祉。紫檳孤幹，繁長靈苗。侔眾國以衛中邦;類普天而扶元首。辰光九十;節屆五陽。鼠變霜毛;松生偃蓋。擬鶴巢而薦異;期玉兔以昭符。叶寰海之宴清;契兆民之輯睦。瓊鳩白雀而屢集;素鷸玉龍而始呈。舒潔淨之容儀，顯惟精惟一; 革真常之舊質，效克寬克仁。招搖淪,精白驥生;距柔毛,晶榮牛現。群雁集而觀光率賀;猛虎猾而顯世畏威。鳳子成雙;瑞雪深積。飄素霙之盈尺;徵一世之三登。綽異狀之九苞;著成行於群鷺。白慈鳥而競至;皓鵠鷸 以爭翔。彰返哺之精勤;感至孝之純厚。念經終軸而非匹;祝聖萬歲而是常。檳榔啣珠;楊枝洒玉。遶九龍之寶，禎奪好珠;長繁岐之姿，祥超異畝。
  懿夫, 承天地鴻休;紹祖宗景命。五十餘年而統化;百千諸夏以欽威。雨暘協時; 星辰順度。常念:農為治本;政必尚茲。雖歲歲躬行，意孜孜不怠。時會祥大慶九年夏五月日, 駕飛仙之鳳輦，漾耀寶之龍舟。日麗波平，潮回煙斂。歷河瀘之長派，見隊嶺之臨涯。雖聳勢嶙峋，到頂端平坦。使艤岸以維纜，詔從駕之群僚而謂之曰: 
  - 朕欲以茲山而經營梵福, 可得之乎?
  左右相率而奏曰:
  - 聞鄉老所傳: 斯山常以春品，旦覃恆雨以潤黔黎。宜可施功，樂成善果。
  兼請署其山曰:龍隊, 聖情允可。乃命日者，以辯方向。面對涇江，風靜而長舒碧練; 背分疊岫，雨消而濃綴藍光。 右控平原，望乾興之古塹; 左延流澮，會漠水以朝宗。載詔公輸，中分繩墨。施財以明功德，顧民資竭力林衡;運材以盡神奇，鳩工巧成城群匠。鏤貞玟 而作斗;琢翠碔以為楹。 涌矗漢之十三層;啟承風之四十戶。壁鐫龍窟;角挂金鈴。上層緘舍利琅函，佇放祥光於盛世; 絕頂置捧盤仙客，長承玉露於晴天。下層分八將魁梧，擁立則神人仗劍。其中座多寶如來之瑞相也: 弘深願力，寧泯全身。聽蓮偈而必簉威靈;與迦文而半分瑤座。挂珠幡之晃耀;懸寶蓋之玲瓏。階庭陞降而有差;廊廡左右而雙翼。次級, 左建四角宮，含雙龍而鎮地，負八將以朝天。揚氣概於名山;播聖功於後裔。右梵方礄龕室, 貯以賓頭和尚，放于麻黎山。受囑累於如來，為眾生而證福。
  下級, 前構陵漢閣:懸首山之彝器;縻碧海之鯨槌。撾 時韻溢於天程;聞處劍停於苦趣。環垣墉以嚴護，貯軒廡以鋪裝。造橋光啟其通衢，藝 松成行於兩界。竭精誠以崇妙果，希延鳳曆以長新; 窮詭制以疊危層，冀益睿齡之弥 遠。故御題曰: 崇善延齡寶塔。
  其塔經始於會祥大慶九年之夏，畢功於天符睿武二年之秋。因時隙而興營，逮豐登而設立。歷於三耕四稔 而後完焉。及慶成也:敕奉常以整駕; 感風伯以清塵。沉檀霧織於溪山; 幢幡霞爛於街道。鼓鐘喧沸;鐃磬匉訇。前道三寶雲車;後輾一人金輅。傾六宮朱翠;來萬國耆童。華宇前橫，鷲臺中敞。會方袍之潔行; 演覺帝之真詮。英聖凝旒，佇偈終而翹誠稽顙; 仙姬斂袂，聽軸盡而獻舞供酥。頒雪粒之香齋，飫充飢旅; 散泉流之圓寶，賙賑窮民。幽顯咸臻;天龍悉簉 。以:最上功力, 無邊福田。益贊皇綱，等圓方而共永; 將祈寶運，與日月而長清。早誕元娠，永膺曆數。期本支百世;冀社稷億齡。草偃多方; 葵傾萬國。臣民愛戴;祖考匡毘。神道冥扶; 天人咸贊。
  太祖，太宗，聖宗皇帝: 既定寰瀛，沓升霄漢, 憑茲勝利，永躡金蓮;皇妣扶聖靈仁太后:厭居人世，高馭煙霞, 沐此良因，超生淨土。大凡諸侯王宮妃等:精勵幽貞，燮和內治。彌展柔嘉之操 ; 益彰淑慎之誠。佇降前星;叶吹調律。末願: 黎民富庶;寰宇肅清。文軌同儀;華夷共貫。五行順序; 百穀豐登。塞絕煙塵;國無災癘。而臣，忝列雁序，濫廁儒林。紀事之成，實聖之巧。傾天亙地之功，雖有淵雲之才，班馬之學，亦難敘萬分之一焉。既又念: 葵藿 之纖卉; 日月之照臨。千載一時，罄愚何謬。強秉鈞毫，敢伸敘述。
  銘曰:
      至妙至寂，	無象無形。
      強自立名，	希夷必在。
      澹泊靡待，	先天地生。
      涅而不淄，	磨而不磷。
      純粹惟精，	粵有金仙。
      降跡竺乾，	十號俱備。
      四弘廣敷，	六度齊修。
      究斯元味，	[.] [.]傷[.]。
      覺逐浮偽，	設清淨教。
      道歸真性，	俾竫如山。
      三界瞻仰，	十方迴向。
      師奉慈顏，	拯濟既行。
      浮漚冰熯，	厭处人寰。
      白虹騰耀，	雙樹拂衣。
      金容晦影，	蘭膏潤身。
      栴檀作薪，	化火煙通。
      荼毗渙互，	舍利凝成。
      盈盤溢皿，	或炫五色。
      或顯九彩，	燁燁滎煌。
      陰界冥中，	寰宇天宮。
      四種國王，	時皆簉集。
      競奮雄強，	各自名將。
      金函五重，	龍輪平秘。 
      崇塔嚴置，	自茲已降。
      歲月延長，	無不崇奉。
      逮我哲后，	傳獲尤貴。
      仿斯前志，	向龍隊山。
      疊甃雄奇，	高出重雲。
      上層韜藏，	獰涌神光。
      作瑞明君，	山水清秀。
      煙霞氤氳，	迥隔塵氛。
      御題嘉號，	崇善延齡。
      壽祈弥敻，	轂旦佳辰。
      福場圓滿，	甫成相慶。
      輻輳朝樓，	雲臻山頂。
      澄心瑩淨，	猊臺高陟。
      潮音贊申，	集會天人。
      鐘鼓喧闐，	沉檀紛紜。
      錦繡爭春，	承茲福慧。
      囹圄拘繫，	咸脫幽屯。
      臣忝紀事，	學無三冬。
      才非五車，	帝功昭著。
      總開戶牖，	四海會同。
      共贊吾皇，	天長地久。
  天符睿武二年辛丑七月初六日立碑。
  朝列 刑部尚書 兵部員外郎同知 藩工院諸事臣阮公弼奉敕 撰。
  右侍郎 尚書工部 員外郎同知審刑院事上輕車都尉紫金魚袋李寶弓臣奉敕 書。
`,
      hanvan:`<strong>                                                                  ĐẠI VIỆT QUỐC LÝ GIA ĐỆ TỨ ĐẾ 
                                                                  SÙNG THIỆN DIÊN LINH THÁP BI 
  Hoàng Việt Lý gia đệ tứ đế Long Đội sơn Sùng Thiện Diên Linh tháp bi minh. Ngự thư phi bạch bi ngạch.</strong>
  Phù, diệu thể huyền tịch, linh quang hề, phi trung phi ngoại, trác nhĩ ư] ngũ thái chi sơ; đại dụng phồn ti, hạo bác hề, duy hình duy hiển, sâm nhiên ư nhất hư chi lý. Vật triệu trẫm khả trắc, mị ảnh tích khả cầu. Bao thiên nhưỡng quảng đại chi dung, cự năng tham cận; hỗn nhật nguyệt quang hoa chi thái, ninh giả tầm quan. Tùy cán vận tạo hoá khu cơ, bỉ đoan nhiên tại; tòng thôi đãng âm dương thư dự, bí yếu thiên u. Khởi phi huyền tịch dư? 
  Thượng hạ chi kỷ cương ký lập, diên thực chi quy mô duật hưng. Tứ tự hành nhi ngọc chúc điều, thất chính tề nhi toàn cơ vận. Tạp đạp vạn loại, tùng toả chúng duyên. Sinh sinh do thị trứ danh, xuy xuy dĩ chi toại tính. Bất viết phồn tư hồ? 
  Như thử tắc tấn cơ hoằng biện, nguyên thuỷ yếu chung, bất diệc nan tai!
  Duy ngã Đại Hùng thị, trung cổ ứng vận; Tây Càn hiển linh. Hàm tam thiên chi uy nghi, hưng tứ bát chi diệu tướng. Thập hiệu bị cụ, bách phúc trang nghiêm. Cứu bỉ tinh vi, minh tư thuần tuý. Điệu quần sinh chi tuý thức, bi tứ loại chi mê chân. Y trung vong bảo nhi bất tự tri, kíp lý tàng xà diệc phi cảnh ngộ. Do thị, thiết Đề hồ chi diệu giáo; ốc tích tuế chi cơ hư. Nhiên xán lạn chi minh đăng, chúc di niên chi hôn ám. Tì lãng tâm chi thiên chân đắc định; khiển vọng tính chi bồng hành lập an. Cố tam giới quy y, thập phương hồi hướng. Trụ trần thế thất thập cửu tuế, quyền thiết pháp bát vạn thiên môn. Tích vị ký hợp trần, thân ninh tùy tị huyễn. Toại nãi kim dung yểm sắc ư Song Thụ, bạch hồng đằng diệu ư trùng thiên. Đâu la miên khoả kỳ thần tư, tử lan cao nhuận kỳ hương thể. Tín tâm luyến mộ, phụng chiên đàn nhi tác tân; giác tính linh thông, ứng xà duy nhi hoả hoá. Trà tì yên liễu, xá lị ngưng thành. Loại minh nguyệt chi sản bạng thai, tiếu lộ châu chi oánh kim chưởng. Hoặc ngũ thái nhi chiếu diệu, hoặc cửu sắc nhi trừng triệt. Doanh bàn mãn hộc, dị tục siêu phàm. Nhân chủ Long vương, âm gian thiên thượng. Thời giai tháo tập, giác tướng phân biểu. Trân tích dĩ bảo hàm trọng trữ, thận thủ tắc đề nhận kinh tuần. Các trạch kỳ an, mị thường quyết sở. Hoặc Hương Sơn đỉnh thượng, nhân thế trần trung; hoặc triều dã không gian, thương minh cung lý. Đổ ba giác phạn, thần vật cao tàng; duyên cổ xử kim, lịch truyền võng thế. Hưng công kế tích, bất diệc thịnh dư?
  Cung duy Lý gia: Thánh hiến Thể đạo, Thánh văn Thần vũ, Anh cách Dân vật, Vạn linh Chiếu ứng, Vĩnh long Nguyên hoá, Thông minh Quảng vận, Nhân trí Ý nghĩa, Thuần thành Minh hiếu Hoàng đế bệ hạ: kham dư chung tuý, nhật nguyệt trừ tinh. Khánh triệu tiên phù, hưu trưng dự khải. Phụ hoàng nhập mộng, thù bang hiến tuyết tượng lục nha; mẫu hậu hữu thần, phi các ấm hoàng long ngũ thái. Tư tắc Bệ hạ nhập thai chi triệu dã.
  Cảnh tinh oánh hiện, Ngân hà ứng mi nguyệt chi quang; khánh vân hiểu phi, đan bệ thư sương tiêu chi thái. Hỉ khí nha đằng ư tiêu Hán, dị hương tán ái ư cung vi. Thập nguyệt xử thai nhi chu kỳ, tam dương kiến dần nhi đản thánh. Tư tắc Bệ hạ giáng đản chi trưng dã.
  Điệu tuế nhi phủ đăng đại bảo, thiên địa tương phù; thắng y nhi thống ngự hoàn khu, nhân thần hàm tán. Long tình phượng mục, ngọc khiết băng tư. Mâu trừng nhi thanh bạch phân minh, dị trùng đồng ư Thuấn đế; nhĩ thọ nhi luân quách tu quảng, xuy tam lậu ư Hạ vương. Hình kỳ nhi trường, túc phương nhi hậu. Ngọc lý hàm kỳ nhuận, châu đình diệu kỳ hoa. Thành thiên tải chi anh minh, quán bách vương chi kỳ tú. Tư tắc Bệ hạ thiên biểu chi đoan nghiêm dã.
  Huệ chu động thực, trí mẫn phong vân. Nội điển kinh thư, tinh cùng huyền yếu; ngoại quyền pháp thuật, tổng tất chỉ quy. Đào kim thạch chi anh từ, quang thôn Đẩu cực; trứ điện tháp chi gia hiệu, huyền chiếu cổ kim. Tinh phi bạch dĩ thông thần, vận ngự hào chi tuyệt diệu. Long dược phượng tường chi thế, pháp tòng ngọc thủ; loan hồi thước phản chi hình, thể xuất thần tâm. Điêu kim bài dĩ trí Phạn cung, thuyên thuý diễm dĩ di Đạo quán. Thi tứ toát đào quân vạn hoá, nhạc phổ hoà Đường Phạn đồng âm. Thư cùng cứu ư huyền cơ, xạ chí tinh ư diệu thuật. Tư tắc Bệ hạ bác thông ư tài nghệ dã.
  Trung thu thanh cảnh, vạn vụ hưu thời. Hiếu thành triển nhi khiết trân tu, thịnh lễ trần nhi từ thánh khảo. Phục ư tam đán, đại khải giá nghi. Thừa bảo liễn nhi xuất cửu trùng, trắc kim lộ nhi trì hoàng đạo. Trĩ phiến ủng ư lưỡng tế, ngân võng hộ ư tứ vi. Hoàng cái phù không, thái kỳ tuệ nhật. Tinh trì liễu mạch, đẩu chuyển hoa cù. Hướng Trường Lô chi bích xuyên, ngự Linh Quang chi bảo điện. Thiên sưu nhi trung lưu điện tốc, vạn cổ nhi dật thuỷ lôi minh. Ngọc lang yến phương bá chi hội đồng, đan bệ tấu tiên lại chi chương biểu. Ba tâm đãng dạng, phù ki ngao dĩ phụ tam phong; thuỷ diện di do, lộ giáp văn nhi phu tứ túc. Chuyển mâu miết ngạn, nhạ khẩu phún tân. Hướng miện lưu nhi ngưỡng quan, đối đương không nhi phủ sát. Vọng ta nga chi tiễu bích, tấu dương dật chi vân thiều. Động hộ tranh khai, thần tiên cạnh xuất. Cái thiên thượng chi mạo thái, khởi trần thế chi kiều tư. Kiều tiêm thủ dĩ hiến Hồi phong, tần thuý mi nhi ca hưu vận. Trân cầm tác đội, tận xuất vũ dĩ xu thương; thuỵ lộc thành quần, tự trước hàng nhi dũng dược. Cập kim ô tây chiếu , bảo lộ tương hoàn. Đáo như chỉ chi đồ trung, lưu quảng thiên chi cảnh ngoại. Hướng sùng đài nhi hồi lục địa, bội bị phụ dĩ tải tam sơn. Đối chu bàn nhi chiêu đầu, tương an thân nhi duệ vĩ. Cưu quá vân nhi liêu lượng, hổ hạ đắng nhi sinh ninh. Phấn tấn hùng uy, phệ khiết tiểu thú. Hội Thượng Lâm đệ tử, trì địch vũ chu can. Lệ thanh khu dĩ tiến đế tiền, trúc trường vi nhi thủ lạp giới. Loan hồ xu xạ, bạt kiếm trì tuần. Nhân phấn dũng ư phiến thần, sỹ tranh nghênh ư đương nhật. Hoài lân quốc nhi huề kỳ đề ấu, lai liệt thổ nhi đăng duệ duyên tường. Chúc mục quan quang, kiều tâm nguyện kiến. Xứ xứ chi tận trang la ỷ, niên niên chi tam nhật hoan ngu. Tê nhân thế ư Hồ thiên, trí triệu dân ư Lạc quốc. Tư tắc Bệ hạ bát lãm nhi tân chế kim ngao dã.
  Hiển thánh mưu chi thần diệu, chế ngự bạc chi tinh kỳ. Trước trạng thiết liên hạm tráng hùng, lập cách tạo thiên sưu tú lệ. Giá trùng tiêu chi lâu các, sùng nguy tiễu chi thiềm doanh. Trung nghiêm phủ toạ di cao, khoát thông duệ minh chi hà giám; bàng triển tú lệ quang xán, quảng liệt tần thái chi thân bồi. Khuynh vạn bảo dĩ nghiêm trang, bị tam cung chi phòng thất. Trung lưu hiểu dạng, nghi thẩn thổ dĩ hoành ba; ổi ngạn vãn đình, nghĩ ngao kình chi tủng Hán. Tư tắc Bệ hạ tân chế ngự bách chi xảo dã.
  Quảng vận thần công, hoằng suy thánh đoán. Tinh tu thắng sự, cần chí lương duyên. Kiến Quảng Chiêu chi đăng đài, hướng Đoan Môn chi đình thượng. Trung tiêu nhất cán, ngoại thiết thất tằng. Cù cung xuất nhi bổng kim liên, phùng sa lung nhi hộ lan diệm. Uẩn cơ vi ư địa hạ, viên chuyển như luân; thước quang thái ư thiên trung, oánh hoàng tự nhật. Phục hữu nghiêm chương bảo thánh, kim điện trân tùng. Tự duệ ý trang thành, toạ kim sắc tương đấu. Trạng tả linh văn, hình phô kỳ lệ. Hựu hữu hoa lâu lưỡng toạ, quản dĩ kim chung. Khắc Thích tử nhi thể quải điền y, vận u cơ nhi bá truỳ như kích. Văn minh sao nhi túc nghi chuyển diện, đổ anh thánh nhi khể thủ khúc cung. Xuất tự duệ mưu, uyển như động tĩnh. Phục hữu diệu thất bảo nhi tốt đổ, tác nhất hàng nhi hỗ bài. Đoan trung tắc hoàng kim nhất phong, toạ Đa Bảo Như Lai chi thụy tướng, liệt kỷ tằng pháp giá chi chân hình. Thiềm quang thước thần húc chi huy, ngõa sắc khai bích vân chi thái. Kỳ thứ, tắc bạch ngân thị toà, tả trí Adiđà chi chân dung, hữu trữ Diệu Sắc Thân chi tuý chất. Tiễu thư hùng thế, kiều phấn phi manh. Linh lung khi thụy tuyết chi dung, xán lạn đoạt thu thiềm chi khiết. Cánh thứ, tắc ô văn nhị toà. Tả an Quảng Bác Thân chi từ nhan, hữu bị Ly Bố Úy chi diệu tướng. Ký dĩ viên cao các, hựu cánh khởi nguy tằng. Cái điệt tố quỳnh, bích thuyên long trạng. Hựu thứ, tắc tượng xỉ nhị toà. Tả hy Cam Lộ vương chi hình nghi, hữu nghiễm Bảo Thắng Phật chi tụy mục. Thiết tha tố chất, sùng giá sương doanh. Phỉ lăng điêu ty ngọc chi anh; gián khích tiễn linh tê chi giác. Kiêm tinh chế ký từ chi mỹ, các thuyên vu liên tọa chi bàng. Phi tuyết tinh thành, vĩnh chiêu quyết hậu. Nhi hựu tả cửu thiên dĩ ngũ sắc, khắc tứ trụ dĩ song huyền. Duyên biên nhi oánh điểm thiên đăng, lưỡng diện nhi luyện trang kim thái. Khả vị: tuyệt cổ kim chi chế độ, siêu tạo hoá chi sinh thành. Khuynh thiên hạ chi ung hoà, dạ vi trú thưởng; sướng thế gian chi tâm mục, lão hoán đồng nhan. Tư tắc Bệ hạ xảo chế thắng duyên chi công dã.
  Tinh sùng Hoàng giác, đốc mộ thắng nhân. Hướng Tây cấm chi danh viên, quảng Diên Hựu chi quang tự. Tích tòng tiền chi cựu thế, xuất thánh ý chi tân mưu. Tạc Linh Chiêu chi phương trì, nhi trì trung dũng nhất thạch cán. Cán thượng sách thiên diệp liên hoa, hoa thượng nhi kiều an cam điện. Điện trung toạ kim tướng chi Năng Nhân. Trì chi ngoại chu nhiễu họa lang, hoàn lang ngoại hựu sơ Bích trì, mỗi giá phi kiều dĩ thông chi. Tiền kiều chi đình, tả hữu trứu lưu li bảo tháp. Dĩ nguyệt chi sóc đán, dĩ niên chi du xuân, thân thừa ngọc liễn, lai khải thanh diên. Hoa hương thiết kỳ tộ chi nghi, bồn quán trần dục Phật chi thức. Trang tinh cấm chi tướng ư ngũ chúng, hoặc đản lộ tiến thoái dĩ vi dung; tác Thiên vương chi đội ư tứ phương, tề kình khí bồi hồi nhi hiến vũ. Tinh cần mị đãi, kính phụng di thời. Nhi huyền tạo linh thông, hàm giai phù hựu. Tư tắc Bệ hạ chế Phạn sái dĩ kỳ phúc thọ dã. 
  Thượng phương thuỳ củng, hạ chính bật lân. Ngẫu biên lại chi canh thường, thành quai vi chi hữu hấn. Tinh trì ngự địch, lôi phấn toả uy. Ung Châu quân chi chúng ức thiên, hội hỹ do phong quyển ế; Như Nguyệt giang chi sư bách vạn, hoán nhiên nhược nhật tiêu băng. Tại khổn ngoại chi tướng tự thi, khởi thần trung tri mưu sở quyết. Kỵ hậu, trí hoàng cực ư mục thanh, tê sinh dân ư phú thọ. Phiến nhân phong dĩ hoá suất, thi huệ trạch dĩ bàng tuyên. Xạ Chế Hoàn vương, từ cung thất nhi xu đình vi thứ; La Vu quốc chủ, khí sơn hà nhi nghệ khuyết xưng thần. Đốc ý mộ chiên, khuynh hoài tựu nhật. Khoảnh giả Ma Sa man lạo, thị hiểm giang sơn, lang khoáng sinh tâm, bất tuần hoàng hoá. Thánh tắc nhất nộ, đại giá khải hành. Mãnh tướng vân tuỳ, mưu thần vũ hội. Bố sư lữ ư hoang dã, tập kiêu cánh chi ngoan dân. Tận tù trưởng thành cầm, đại khôi cừ phù lỗ. Kỳ dư tắc: huyết cao thảo mãng, nhục uỷ lâm tuyền. Túng hùng hổ nhi ách thử hề nan, phiên cự thạch nhi toái noãn hà dị? Tư tắc Bệ hạ diệu vũ thông quy dã.
  Kiềm lê hy hợp, triệu thứ thanh di. Xuân cận phụng tham, thu triều thuật chức. Hội vạn quốc chư hầu nhi yến thưởng, cấu chúng tiên tam cấp chi bảo đài. Ngân ngoã luỹ nhi quang chiếu khung mân, kim liên luỹ nhi phô trần bảo tướng. Thượng đỉnh tắc linh cầm tủng lập, tứ lăng tắc lân trưởng cạnh nhương. Cái sức thất trân, đới trang bách bảo. Thượng giai chính vị nhi thánh minh đoan củng, trung cấp hạ đẳng nhi tiên kỹ hồi hoàn. Đình liệt linh quan, tịnh giai đạo dược. Phấn thiên tài nhi thành diệu khúc, ủy quần tích nhi viễn hoàn Phong. Lăng không nhi thanh át hành vân, hoà quản nhi hưởng tư duệ ốc. Tư tắc Bệ hạ tu văn chí đức dã.
  Vi thiên địa chi chân chủ, cứu tạo hoá chi u cơ. Vận trí biến thông, hiển mưu sung tắc. Tinh ngoại phương chi âm hưởng, dịch chư kỹ chi yếu đoan. Tác diệu vũ chi tuyệt luân, thị xương triều chi đồng lạc. Phục chế Giáng vân tiên tử nhi ca thanh hưởng lượng, tán triết hậu chi nguyên công; xuất Liên bảo vụ nhi nhược chất biền thiên, khánh thâm nhan chi mỹ hoá. Tư tắc Bệ hạ chi diệu đại toán dã.
  Đức đồng cao hậu, tắc ngũ vĩ chiêu phù; huệ cập phi tiềm, tắc vạn linh tiến chỉ. Thần long nhị cửu, quang phục ư bảo điện quỳnh đan; tuyết tượng nhất thiên, trình tường ư dao trì cấm ngự. Chương đại bảo chi khả cửu , phù thuần hỗ chi ưu long. Cố lâm hiển kỳ tư, thiên chiêu linh trạng. Phục hiện thần tượng nhất đầu, hình chất nhi khôi ngô dị đẳng, tị ngạch nhi diệu hiển thần quang. Nghiệm văn thái nhi thanh tịnh hữu trừ, bẩm thông minh nhi chiếu chương vô ngoại. Ngự hiệu viết: “Siêu quần thần tượng”. Ưu đàm biền phương, xá lị ngọc hiện. Thảo mộc hiệu chỉ, thần vật thư quang. Yết tích tiễn vô cùng, thị thuỳ hồng hữu khánh. Linh thảo lưỡng hiện, hạc lộc lục trăn. Tố mi độc lai, huyền thư song chí. Chiêu trường thừa thượng đế chi mệnh, khế vĩnh bảo mân thiên chi hưu. Phân củ trình nghiên, liên biền hiển lệ. Quy ngũ sắc nhi thiên điểm, liên lưỡng kính nhi nhất hành. Trạch cập uyên tuyền, vật phương tiến thụy. Cảm lê manh chi ninh mật, chiêu xã tắc chi ích phong. Nguyệt trùng luân ư tằng tiêu, kim phát thái ư u giản. Minh chiếu lâm ư hữu tiệt, chương tể đoán ư vô ngân. Cố, thiên tượng hiệu tường, u nguyên tiến chỉ. Tử tân cô cán, phồn trưởng linh miêu. Mâu chúng quốc dĩ vệ trung bang, loại phổ thiên nhi phù nguyên thủ. Thần quang cửu thập, tiết giới ngũ dương. Thử biến sương mao, tùng sinh yển cái. Nghĩ hạc sào nhi tiến dị, kỳ ngọc thố dĩ chiêu phù. Hiệp hoàn hải chi yến thanh, khế triệu dân chi tập mục. Quỳnh cưu bạch tước nhi lũ tập, tố duật ngọc long nhi thuỷ trình. Thư khiết tịnh chi dung nghi, hiển duy tinh duy nhất; cách chân thường chi cựu chất, hiệu khắc khoan khắc nhân. Chiêu dao luân tinh bạch ký sinh, cự nhu mao tinh vinh ngưu hiện. Quần nhạn tập nhi quan quang suất hạ, mãnh hổ hoạt nhi hiển thế uý uy. Phượng tử thành song, thụy tuyết thâm tích. Phiêu tố anh chi doanh xích, trưng nhất thế chi tam đăng. Xước dị trạng chi cửu bao, trước thành hàng chi quần lộ. Bạch từ ô nhi cạnh chí, hạo hộc duật dĩ tranh tường. Chương phản bỗ chi tinh cần, cảm chí hiếu chi thuần hậu. Niệm kinh chung trục nhi phi sất, chúc thánh vạn tuế nhi thị thường. Tân lang hàm châu, dương chi sái ngọc. Nhiễu Cửu Long chi bảo, trinh đoạt hảo châu; trường phồn kỳ chi tư, tường siêu dị mẫu.
  Ý phù, thừa thiên địa hồng hưu, thiệu tổ tông cảnh mệnh. Ngũ thập dư niên nhi thống hoá, bách thiên chư hạ dĩ khâm uy. Vũ dương hợp thì, tinh thần thuận độ. Thường niệm: nông vi trị bản, chính tất thượng tư. Tuy tuế tuế cung hành, ý tư tư bất đãi. Thời Hội Tường Đại Khánh cửu niên hạ ngũ nguyệt nhật: giá phi tiên chi phượng liễn, dạng diệu bảo chi long chu. Nhật lệ ba bình, triều hồi yên liễm. Lịch Hà Lô chi trường phái, kiến Đội Lĩnh chi lâm nhai. Tuy tủng thế lân tuân, đáo đỉnh đoan bình thản. Sử nghĩ ngạn dĩ duy lãm, chiếu tòng giá chi quần liêu. Nhi vị chi viết: 
  - Trẫm dục dĩ tư sơn nhi kinh doanh Phạn phúc, khả đắc chi hồ?.
  Tả hữu tương suất nhi tấu viết: 
  - Văn hương lão sở truyền: Tư sơn thường dĩ xuân phẩm, đán đàm hằng vũ dĩ nhuận kiềm lê. Nghi khả thi công, lạc thành thiện quả.
  Kiêm thỉnh thự kỳ sơn viết: “Long Đội”, thánh tình doãn khả. Nãi mệnh nhật giả, dĩ biện phương hướng. Diện đối Kinh giang, phong tĩnh nhi trường thư bích luyện; bối phân Điệp tụ, vũ tiêu nhi nùng xuyết lam quang. Hữu khống bình nguyên, vọng Càn Hưng chi cổ tiệm; tả diên lưu khoái, hội Mạc thuỷ dĩ triều tông. Tái chiếu Công Thâu, trung phân thằng mặc. Thí tài dĩ minh công đức, cố dân tư kiệt lực lâm hành; vận tài dĩ tận thần kỳ, cưu công xảo thành thành quần tượng. Lũ trinh mân nhi tác đấu, trác thuý vũ dĩ vi doanh. Dũng súc Hán chi thập tam tằng, khải thừa phong chi tứ thập hộ. Bích thuyên long quật, giác quải kim linh. Thượng tằng giam xá lị lang hàm, trữ phóng tường quang ư thịnh thế; tuyệt đỉnh trí bổng bàn tiên khách, trường thừa ngọc lộ ư tình thiên. Hạ tằng phân bát tướng khôi ngô, ủng lập tắc thần nhân trượng kiếm. Kỳ trung tòa Đa Bảo Như Lai chi thụy tướng dã. Hoằng thâm nguyện lực, ninh dẫn toàn thân. Thính Liên kệ nhi tất sứu uy linh, dữ Ca Văn nhi bán phân dao tòa. Quải châu phan chi hoảng diệu, huyền bảo cái chi linh lung. Giai đình thăng giáng nhi hữu sai, lang vũ tả hữu nhi song dực. Thứ cấp, tả kiến tứ giác cung: hàm song long nhi trấn địa, phụ bát tướng dĩ triều thiên. Dương khí khái ư danh sơn, bá thánh công ư hậu duệ. Hữu Phạn phương kiều khám thất, trữ dĩ Tân Đầu hoà thượng, phóng vu Ma Lê sơn. Thụ chúc lụy ư Như Lai, vị chúng sinh nhi chứng phúc. Hạ cấp, tiền cấu Lăng Hán các, huyền Thú Sơn chi di khí, mi Bích Hải chi kình chuỳ. Troa thì vận dật ư thiên trình, văn xứ kiếm đình ư khổ thú. Hoàn viên dung dĩ nghiêm hộ, trữ hiên vũ dĩ phô trang. Tạo kiều quang khải kỳ thông cù, nghệ tùng thành hàng ư lưỡng giới. Kiệt tinh thành dĩ sùng diệu quả, hy diên phượng lịch dĩ trường tân; cùng quỷ chế dĩ điệp nguy tằng, ký ích duệ linh chi di viễn. Cố ngự đề viết: Sùng Thiện Diên Linh bảo tháp.
  Kỳ tháp kinh thuỷ ư Hội Tường Đại Khánh cửu niên chi hạ, tất công ư Thiên Phù Duệ Vũ nhị niên chi thu. Nhân thời khích nhi hưng doanh, đãi phong đăng nhi thiết lập. Lịch ư tam canh tứ nẫm nhi hậu hoàn yên. Cập khánh thành dã, sắc Phụng thường dĩ chỉnh giá, cảm Phong Bá dĩ thanh trần. Trầm đàn vụ chức ư khê sơn, tràng phan hà lạn ư nhai đạo. Cổ chung huyên phí, nạo khánh phanh hoanh. Tiền đạo Tam bảo vân xa, hậu triển nhất nhân kim lộ. Khuynh lục cung chu thuý, lai vạn quốc kỳ đồng. Hoa vũ tiền hoành, Thứu đài trung xưởng. Hội phương bào chi khiết hạnh, diễn Giác đế chi chân thuyên. Anh thánh ngưng lưu, trữ kệ chung nhi kiều thành khể tảng; tiên cơ liễm duệ, thính trục tận nhi hiến vũ cung tô. Ban tuyết lạp chi hương trai, ốc sung cơ lữ; tán tuyền lưu chi viên bảo, chu chẩn cùng dân. U hiển hàm trăn, thiên long tất sứu. Dĩ tối thượng công lực, vô biên phúc điền, ích tán hoàng cương, đẳng viên phương nhi cộng vĩnh; tương kỳ bảo vận, dữ nhật nguyệt nhi trường thanh. Tảo đản nguyên thần, vĩnh ưng lịch số. Kỳ bản chi bách thế, ký xã tắc ức linh. Thảo yển đa phương, quỳ khuynh vạn quốc. Thần dân ái đới, tổ khảo khuông tì. Thần đạo minh phù, thiên nhân hàm tán.
  Thái Tổ, Thái Tông, Thánh Tông Hoàng đế: ký định hoàn doanh, đạp thăng tiêu Hán; bằng tư thắng lợi, vĩnh nhiếp kim liên. Hoàng tỷ Phù Thánh Linh Nhân Thái hậu: yếm cư nhân thế, cao ngự yên hà, mộc thử lương nhân, siêu sinh tịnh độ. Đại phàm chư hầu vương, cung phi đẳng: tinh lệ u trinh, nhiếp hoà nội trị. Di triển nhu gia chi tháo, ích chương thục thận chi thành. Trữ giáng tiền tinh, hiệp xuy trù luật. Mạt nguyện: lê dân phú thứ, hoàn vũ túc thanh, văn quỹ đồng nghi, Hoa Di cộng quán. Ngũ hành thuận tự, bách cốc phong đăng. Tái tuyệt yên trần, quốc vô tai lệ. Nhi thần: thiểm liệt nhạn tự, lạm xí nho lâm. Kỷ sự chi thành, thực thánh chi xảo. Khuynh thiên cắng địa chi công, tuy hữu Uyên, Vân chi tài, Ban, Mã chi học, diệc nan tự vạn phân chi nhất yên. Ký hựu niệm: quỳ hoắc chi tiêm huỷ; nhật nguyệt chi chiếu lâm. Thiên tải nhất thì, khánh ngu hà mậu. Cưỡng bỉnh quân hào, cảm thân tự thuật. 
  Minh viết:
                    Chí diệu chí tịch,
                    Cưỡng tự lập danh,
                    Đạm bạc mị đãi,
                    Niết nhi bất truy,
                    Thuần tuý duy tinh,
                    Giáng tích trúc càn,
                    Tứ hoằng quảng phu,
                    Cứu tư nguyên vị,
                    Giác trục phù ngụy,
                    Đạo quy chân tính,
                    Tam giới chiêm ngưỡng, 
                    Sư phụng từ nhan,
                    Phù âu băng hãn,
                    Bạch hồng đằng diệu,
                    Kim dung hối ảnh,
                    Chiên đàn tác tân,
                    Trà tì hoán hỗ,
                    Doanh bàn dật mãnh,
                    Hoặc hiển cửu thái,
                    Âm giới minh trung,
                    Tứ chủng quốc vương,
                    Cạnh phấn hùng cường,
                    Kim hàm ngũ trùng
                    Sùng tháp nghiêm trí,
                    Tuế nguyệt diên trường,
                    Đãi ngã triết hậu,
                    Phỏng tư tiền chí,
                    Điệp trứu hùng kỳ,
                    Thượng tằng thao tàng,
                    Tác thuỵ minh quân,
                    Yên hà nhân uân,
                    Ngự đề gia hiệu:
                    Thọ kỳ di quýnh,
                    Phúc trường viên mãn,
                    Bức thấu triều lâu,
                    Trừng tâm oánh tịnh,
                    Triều âm tán thân,
                    Chung cổ huyên điền,
                    Cẩm tú tranh xuân,
                    Linh ngữ câu hệ,
                    Thần thiểm kỷ sự,
                    Tài phi ngũ xa,
                    Tổng khai hộ dũ,
                    Cộng tán ngô hoàng,

                    Vô tượng vô hình.
                    Hi di tất tại.
                    Tiên thiên địa sinh.
                    Ma nhi bất lân.
                    Việt hữu kim tiên.
                    Thập hiệu câu bị.
                    Lục độ tề tu. 
                    […][... ] thương [...].
                    Thiết thanh tịnh giáo.
                    Tỉ tĩnh như sơn.
                    Thập phương hồi hướng.
                    Chửng tế ký hành.
                    Yếm xử nhân hoàn.
                    Song thụ phất y.
                    Lan cao nhuận thân.
                    Hoá hoả yên thông.
                    Xá lị ngưng thành.
                    Hoặc huyễn ngũ sắc.
                    Việp việp huỳnh hoàng
                    Hoàn vũ thiên cung.
                    Thì giai sứu tập.
                    Các tự danh tướng.
                    Long luân bình bí.
                    Tự tư dĩ giáng.
                    Vô bất sùng phụng.
                    Truyền hoạch vưu quý.
                    Hướng Long Đội sơn.
                    Cao xuất trùng vân.
                    Ninh dũng thần quang.
                    Sơn thuỷ thanh tú.
                    Quýnh cách trần phân.
                    “Sùng Thiện Diên Linh”.
                    Cốc đán giai thần.
                    Phủ thành tương khánh.
                    Vân trăn sơn đỉnh.
                    Nghê đài cao trắc.
                    Tập hội thiên nhân.
                    Trầm đàn phân vân.
                    Thừa tư phúc tuệ.
                    Hàm thoát u truân.
                    Học vô tam đông.
                    Đế công chiêu trứ,
                    Tứ hải hội đồng.
                    Thiên trường địa cửu.
Thiên Phù Duệ Vũ nhị niên Tân sửu thất nguyệt sơ lục nhật lập bi.
Triều liệt Hình bộ Thượng thư, Binh bộ Viên ngoại lang, Đồng tri phiên công viện chư sự, thần Nguyễn Công Bật phụng sắc soạn.
Hữu thị lang Thượng thư, Công bộ Viên ngoại lang, Đồng tri Thẩm hình viện sự, Thượng khinh xa đô uý, Tử kim ngư đại Lý Bảo Cung thần phụng sắc thư.
`,
      viet: `<strong>                           VĂN BIA THÁP SÙNG THIỆN DIÊN LINH CỦA VUA THỨ TƯ NHÀ LÝ NƯỚC ĐẠI VIỆT 
Bài bi minh tháp Sùng Thiện Diên Linh núi Long Đội của vua thứ tư nhà Lý nước Hoàng Việt. Ngự thư trên trán bia viết bằng lối chữ phi bạch.</strong>
  Ôi! 
  Thể tính diệu huyền, ánh linh quang chừ chẳng ngoài chẳng trong, sừng sững khi vật chất mới nhào; 
  Công dụng mênh mông, cõi bao la chừ đúc hình đúc dáng, tràn đầy nơi hư không chất chứa. 
  Chăng hình thể để tiện suy lường; không dấu tích làm sao tìm kiếm. 
  Bao trùm dáng vũ trụ vô cùng, há dễ coi xem; 
  Hoà trộn ánh nhật nguyệt quang hoa, lẽ nào trông thấy. 
  Tùy tạo hoá then máy vần chuyển, nghiễm nhiên còn đó; 
  Theo âm dương đắp đổi nhặt khoan, màu nhiệm vẫn nguyên. 
  Há chẳng huyền diệu sao?
  Kỷ cương dưới trên đà lập; quy mô bồi đắp đã hưng. 
  Bốn mùa qua mà đuốc ngọc điều hoà; 
  Quỹ đạo chuẩn mà toàn cơ vận động. 
  Muôn loại bời bời; các duyên tế toái. 
  Chúng sinh nhờ đó tỏ danh; vạn vật bởi đây thoả tính. 
  Đó chẳng phải là tràn đầy hay sao? 
  Như vậy thì, biện biệt cơ vi, truy cầu chung thuỷ, chẳng cũng khó thay!
  Duy họ Đại Hùng ta: 
  Ứng vận thời cổ; hiển linh Tây Trúc. 
  Giữ trọn ba nghìn uy nghi; có vẹn ba hai tướng lạ. 
  Mười hiệu đầy đủ; trăm phúc trang nghiêm. 
  Thấu lẽ tinh vi; tỏ điều thuần tuý. 
  Thương quần sinh say sưa cái “thức”; xót bốn loài mê lẫn điều “chân”. 
  Ngọc quên ngực áo mà chẳng tự hay; rắn chứa tráp hòm mà không tỉnh ngộ. 
  Cho nên, 
  Làm nên đạo pháp sữa mầu; nuôi kẻ kinh niên đói khát. 
  Thắp ngọn đèn thêm xán lạn; đốt u ám trải bao năm. 
  Khiến thiên tâm sóng động được yên; làm vọng tính mê lầm được định. 
  Cho nên, 
  Tam giới quy y; thập phương hồi hướng. 
  Trụ trần thế bảy mươi chín năm; giữ thiết pháp tám tư nghìn cửa. 
  Rằng: dấu lẫn bụi trần; thân tùy hư ảo. 
  Thế rồi, 
  Kim thân lịm sắc: rừng Song Thụ; hào quang vọt sáng: chốn thiên không. 
  Lụa tằm tơ bọc lấy vẻ thần; sáp lan tía tẩm nhuần thân báu. 
  Tín tâm hâm mộ, dâng chiên đàn để làm củi; 
  Giác tính linh thông, ứng trà tỳ mà hóa thiêu. 
  Khói đàn tắt hết; xá lị kết nên. 
  Tựa ngọc trai sáng vầng nguyệt tỏ; giống trân châu ánh giọt sương trong. 
  Hoặc chói rạng năm sắc; hoặc trong vắt chín màu. 
  Tràn mâm đầy hộc; khác tục siêu phàm. 
  Hoàng đế long vương, trên trời dưới đất, thời đều tề tựu, giác tướngchia nhau. 
  Trân tiếc thì đem hộp vàng cất đựng; cẩn thận thì cầm gươm quý canh phòng. 
  Đều chọn chốn yên, tùy nơi cất trữ. 
  Hoặc trên đỉnh Hương Sơn, hoặc giữa miền nhân thế;
  Hoặc trong triều ngoài nội, hoặc giữa chốn Long cung. 
  Chùa chiền bảo tháp, thần vật cất cao. 
  Từ xưa tới nay, lưu truyền bất hủ. 
  Hưng công kế nối, cũng chẳng thịnh ru?
  Kính nghĩ: 
  Thánh hiển Thể đạo, Thánh văn Thần vũ, Anh cách Dân vật, Vạn linh Chiếu ứng, Vĩnh long Nguyên hóa, Thông minh Quảng vận, Nhân trí Ý nghĩa, Thuần thành Minh hiếu Hoàng Đế bệ hạ nhà Lý ta. 
  Thiên địa đúc tinh, nhật nguyệt kết túy. 
  Điềm lành báo trước, triệu tốt mở ra. 
  Phụ hoàng nhập mộng, nước ngoài dâng voi trắng sáu ngà; 
  Mẫu hậu hoài thai, gác tía phủ rồng vàng năm sắc. 
  Đó là điềm báo lúc Bệ hạ đầu thai vậy.
  Sao lành chói hiện, ngân hà ứng nét trăng non; 
  Mây tốt sáng bay, bệ ngọc khoe màu lụa bạc.
  Khí vui bỗng vút thẳng trời xanh; hương lạ chợt ngát đầy cung cấm. 
  Mười tháng hoài thai khi tròn cữ; ba dương xuân tiết lúc Thánh sinh. 
  Đó là điềm báo Bệ hạ giáng trần vậy.
  Ấu thơ mà đăng quang ngôi báu, trời đất khuông phò; 
  Trẻ mỏ mà thống ngự non sông, thần người giúp dập. 
  Ngươi rồng mắt phượng, trong ngọc trắng băng. 
  Mắt trong veo mà đen trắng phân minh, khác ngươi hai tròng Thuấn đế; 
  Tai thọ trường mà thành quách cao dầy, hơn tai ba lỗ Hạ vương. 
  Thân cao mà lớn, chân chắc mà dầy. 
  Da nhuần tựa ngọc mài, trán ngời như châu sáng. 
  Thực nghìn năm đúc anh minh, vượt trăm vua phô kỳ tú. 
  Đó là vẻ đoan nghiêm của Bệ hạ vậy.
  Ơn tưới muôn vật; trí vượt gió mây. 
  Sách Nho sách Phật, uyên áo tỏ tường; 
  Pháp thuật pháp quyền, gồm thâu yếu chỉ. 
  Lời tinh diệu ghi tạc đá vàng, sáng lòa Bắc Cực; 
  Hiệu tốt lành chói ngời điện tháp, ánh chiếu xưa nay. 
  Tinh phi bạch, rất đỗi thần kỳ; thảo bút ngự, vô cùng tuyệt diệu. 
  Thế tựa rồng bay phượng múa, phép viết từ tay ngọc viết ra; 
  Hình như loan liệng thước chao, thể chữ tự lòng vua chữ hiện. 
  Chạm biển vàng đặt chốn Phạn cung; khắc bia ngọc dựng nơi Đạo quán. 
  Tứ thơ tóm đất trời biến hóa; điệu nhạc hoà Đường Phạn đồng âm. 
  Thư pháp thì cùng cứu huyền cơ; cung nỏ thì tinh thông diệu thuật.
  Đó là Bệ hạ tài nghệ quán thông vậy.
  Trung thu cảnh đẹp, muôn việc nghỉ ngơi. 
  Lòng hiếu mở mà soạn cỗ bàn; lễ lạt bày để dâng hoàng khảo. 
  Lại sớm mùng ba; sửa sang xa giá. 
  Cưỡi ngựa báu ra ngoài điện đỏ; lên xe châu ruổi ở đường vàng. 
  Quạt lông trĩ buộc ở hai bên; dây nạm bạc néo từ bốn phía. 
  Trời biếc lọng vàng; cờ màu nắng tuệ. 
  Tinh tú giong bờ liễu; Bắc Đẩu chuyển đường hoa. 
  Xuôi Trường Lô dòng xanh; ngự Linh Quang điện báu . 
  Nghìn thuyền đi chớp giật giữa dòng; muôn trống dội sấm vang dậy nước. 
  Dưới hiên ngọc, thết chư hầu hội họp; trong thềm son, tấu chương biểu sứ tiên. 
  Dập dờn lòng sóng, thả rùa vàng đội ba đỉnh núi; 
  Thung dung mặt nước, phô giáp vằn lộ bốn cột chân. 
  Hướng mắt nhìn bờ, há miệng phun bến. 
  Ngửa trông đó mặt rồng, cúi xét ấy trời thẳm. 
  Ngóng vách đá cheo leo, tấu nhạc Thiều réo rắt. 
  Cửa động lặng mở, thần tiên sánh vai. 
  Ấy dáng phong tư thượng giới; há vẻ kiều diễm trần ai. 
  Uốn tay thon hiến khúc Hồi phong, cong mày biếc ca lời thịnh trị. 
  Chim quý họp bầy, thảy đua dáng lượn bay; 
  Hươu lành thành đội, tự xắp hàng vờn nhảy. 
  Gặp lúc: 
  Bóng ác về tây; kiệu xe sắp lại. 
  Đến giữa đường bằng phẳng; ở ngoài cõi Quảng Thiên. 
  Dõi đài cao về mặt đất, xây lưng bí đội ba non. 
  Trước mâm son mà cất cổ; đem thân tĩnh mà lê đuôi. 
  Chim xuyên mây mà ríu rít; hổ xuống núi mà oai phong. 
  Trổ tài dũng mãnh ; thú nhỏ xé nhai. 
  Hội Thượng Lâm đệ tử; cầm lọng trĩ cán son. 
  Tiếng thét vang tiến đến trước vua ; đắp bãi rộng làm trường săn bắn. 
  Cung giương chân chạy ; kiếm tuốt ngựa giong. 
  Thoắt cái người khoe dũng ; thoắt cái kẻ tranh hùng.
  Mến lân bang nên bồng trẻ dắt già ; gọi chư hầu mà băng sông vượt núi. 
  Căng mắt ánh trời ; thỏa lòng mong gặp. 
  Nơi nơi đều sức trang gấm vóc ; năm năm cùng hòa mục ba hôm. 
  Đưa người đời lên chốn Hồ Thiên; đặt muôn dân vào miền lạc quốc. 
  Đó là việc Bệ hạ nhìn rộng mà sáng chế rùa vàng vậy.
  Mưu thánh tỏ thần diệu ; thuyền ngự chế tinh kỳ. 
  Đặt hạm tàu khí ngút oai hùng; đóng nghìn thuyền dáng trông tú lệ. 
  Dựng lầu gác chọc mây; trồng cột diềm ngất núi. 
  Giữa đặt điện vẽ cao vút, để nhà vua phóng mắt nhìn xa; 
  Cạnh phô hàng gấm xa hoa, cho ngự nữ sẵn sàng hầu cận. 
  Dốc muôn báu vật trang hoàng ; xây đủ ba cung phòng ốc. 
  Giữa dòng nắng mai, ngỡ giao long nhả hơi chặn sóng; 
  Trên bến bóng chiều, tưởng kim ngao đội núi ngang mây. 
  Đó là sự tinh xảo trong việc chế tạo thuyền ngự của Bệ hạ vậy.
  Rộng vận thần công ; cả suy thánh đoán. 
  Tinh sửa thắng sự ; chăm tới lương duyên. 
  Dựng đài cao Quảng Chiếu ; hướng sân trước đoan môn. 
  Trong nêu một cột ; ngoài đặt bảy tầng. 
  Thân rồng uốn mà đỡ sen vàng; lụa thêu lồng mà che hoa chúc. 
  Giấu cơ vi ở dưới đất, chuyển tròn bánh xe; 
  Rực ánh sáng ở giữa trời, chói lòa mặt nhật. 
  Lại có: 
  Bảo Thánh vẻ nghiêm; điện vàng hoa ngọc. 
  Do ý Thần dựng nên; đặt tượng Phật hai dãy. 
  Dáng chép linh văn; hình phô bóng bẩy. 
  Lại có: 
  Lầu hoa hai chiếc; trong buộc chuông vàng. 
  Khắc tăng nhân, thân mặc cà sa, chuyển lẫy ngầm, giơ chày thúc tiếng; 
  Nghe tiếng giáo, mặt nên nghiêm túc, nhìn thánh minh, khom cật giập đầu. 
  Thảy đó ý vua; động tĩnh như thật. 
  Lại có : 
  Long lanh phù đồ phô thất bảo, xếp một hàng thứ tự bên nhau. 
  Chính giữa thì một đỉnh vàng: 
  Đặt tượng lành Như Lai Đa Bảo; bày chân hình xe phép mấy tầng. 
  Mái hiên lấp lánh ánh ban mai; vẻ ngói huy hoàng mờ mây biếc. 
  Thứ đến, hai tòa bạch ngân: 
  Trái đặt chân tượng A Di Đà; phải chứa xá lị  Diệu Sắc Thân. 
  Chóp dang thế mạnh; đao xoải cánh bay. 
  Lung linh khinh tuyết trắng đang tan; rực rỡ mờ trăng thu vừa rạng. 
  Thứ nữa lại có hai tòa tháp bằng gỗ mun: 
  Trái đặt Quảng Bác Thân nhân từ; phải đặt Ly Bố Úy diệu tướng. 
  Đã xong gác lớn; lại dựng lầu cao. 
  Mái chồng ngói ngọc; vách trổ dáng rồng. 
  Lại thêm, hai tòa tháp ngà: 
  Trái chạm dung nghi Cam Lồ Vương; phải đặt diệu tướng Bảo Thắng Phật . 
  Giũa mài chất quý; cao dựng cột hiên. 
  Các góc nạm ngọc hiếm; các khe khảm sừng tê. 
  Lại thảo bút văn chương hoa lệ; đều khắc vào bên mé tòa sen. 
  Phơi lòng thành tuyết trắng; soi rọi mãi muôn sau. 
  Mà lại, 
  Đem ngũ sắc vẽ chín tầng trời; dùng đối liễn khắc bốn thân cột. 
  Đôi bên chói điểm nghìn đèn; hai mặt trang nghiêm kim tướng. 
  Khá nói: 
  Vượt xa chế độ cổ kim; trội hẳn sinh thành tạo hóa. 
  Nghiêng hòa vui thiên hạ, đêm trở thành ngày; 
  Rộng mắt lòng thế gian, già nay trẻ lại. 
  Đó là công lao khéo xây dựng thắng duyên của Bệ hạ vậy.
  Tôn sùng đạo Phật, hâm mộ mống lành. 
  Noi Tây Cấm danh lừng thượng uyển; mở Diên Hựu chốn đó danh lam. 
  Theo quy chế vốn có trước kia; Ra mưu tính ý vua nay tỏ.  
  Đào ao thơm mang tên Linh Chiêu; giữa ao kia cột đá vọt đứng. 
  Đỉnh cột nở ngàn cánh hoa sen; hoa đặt vững một tòa điện tía. 
  Trong điện đặt Thích Ca kim tướng; ngoài ao dựng họa lang bọc quanh. 
  Ngoài hành lang lại đào ao Bích Trì khơi vòng, đều bắc các cầu vồng thông vào. 
  Sân nơi cầu trước, tả hữu dựng tháp báu lưu ly. 
  Để sáng mồng một hàng tháng, để mùa xuân hàng năm, nhà vua thân ngồi xe ngọc, đến mở tiệc chay. 
  Hương hoa bày nghi thức cầu an; Ang nước đặt lễ nghi tắm Phật. 
  Ngũ chúng vẽ hình dung cẩn thận, đều hở vai tiến thoái trang nghiêm; 
  Tứ phương đặt mấy đội Thiên vương, giơ pháp khí bồi hồi dâng múa. 
  Tinh cần chẳng trễ; kính phụng theo thời. 
  Vì vậy mà: 
  Tạo hóa linh thông; đều cùng phù hựu. 
  Đó là Bệ hạ dựng Phạn Sái để cầu phúc thọ vậy.
  Trên đang rủ áo; dưới giúp lân bang. 
  Bỗng bọn biên lại trở mặt; gây nên hiềm khích bất hòa. 
  Sao giong đánh địch; sấm động chống thù. 
  Ung Châu giặc ức nghìn, sụp vỡ như gió cuốn sương; 
  Như Nguyệt quân trăm vạn, tan tành như băng phơi nắng. 
  Ngoài biên tái, tướng tự lo; trong cửu trùng, vua mưu quyết. 
  Rồi sau, 
  Đưa hoàng cực lên cõi thanh bình; dẫn sinh dân đến nơi giàu thọ. 
  Quạt gió nhân mà giáo hoá; ra ơn huệ để đỡ đần. 
  Hoàn vương Sạ Chế, lìa hoàng cung đến cửa khuyết, xin làm thứ dân; 
  Quốc chủ La Vu, bỏ giang san tới sân đình, nguyện thành tôi tớ. 
  Dốc ý hồi hóa; nghiêng lòng hướng dương. 
  Gần đây, mán lào Ma Sa, cậy non sông hiểm, mang lòng sói lang, không theo thánh hóa. 
  Vua ta nổi giận; xa giá khởi hành. 
  Mãnh tướng như mây theo; mưu thần như mưa họp. 
  Dàn quân đội ở đồng nội; đánh đám loạn tính bất trung. 
  Bao tù trưởng đều bắt sống, Bao đầu sỏ thảy bỏ tù. 
  Còn lại thì, 
  Máu giây cây cỏ; xác ải khe rừng. 
  Thả hùm thiêng bắt chuột, khó chi; lăn đá to chọi trứng, cũng dễ! 
  Đó là khi Bệ hạ dùng võ dùng mưu vậy!
  Lê dân hoà mục; bách tính yên vui. 
  Xuân xem dâng ngọc; thu thuật chức danh. 
  Họp mấy vạn chư hầu mà ban yến thưởng; xây ba bậc bảo đài mà diễn quần tiên. 
  Lợp ngói bạc mà ánh chiếu trời xanh; ken sen vàng mà hoa phô tướng báu. 
  Đỉnh điện thì linh điểu vút đứng; bốn góc thì xi vẫn ganh đua.   
  Lọng dệt thất trân; dải đeo trăm báu. 
  Thềm trên ngôi chính, thánh thượng rủ áo khoanh tay; 
  Bậc giữa dưới cùng, kỹ nữ như tiên vây kín. 
  Sân bày trăm quan, đều cùng nhảy múa. 
  Ra sức thiên tài mà khoe diệu khúc; vỗ dân phiên thuộc mà về ấp Phong. 
  Vút tầng không mà giọng át mây bay; hoà tiếng sáo mà ơn nhuần thôn xóm. 
  Đó là Bệ hạ tu văn sửa đức vậy !
  Làm chân chúa của đất trời; xét huyền cơ của tạo hoá. 
  Mưu lược biến thông; anh minh choán khắp. 
  Rành rẽ thanh âm bốn cõi; tinh tường kỹ thuật trăm nghề. 
  Chế vũ điệu tuyệt luân; múa hân hoan đời thịnh. 
  Lại soạn: 
  “Giáng vân tiên tử”, hát tiếng véo von, ngợi ca công nghiệp triết vương; 
  “Xuất liên bảo vụ ”, uốn hình yểu điệu, chúc tụng lòng nhân giáo hoá. 
  Đó là sự tính toán diệu kỳ của Bệ hạ vậy !
  Đức sánh đất trời, nên năm sao tỏ bùa; 
  Ơn tới cá chim, thì muôn loài dâng phúc. 
  Mười tám rồng thần, phô sáng chốn thềm quỳnh bảo điện; 
  Một nghìn voi trắng, khoe điềm nơi hiên ngọc cấm cung. 
  Tỏ rõ ngôi báu khá miên trường; tương hợp phúc lành thêm xương thịnh. 
  Cho nên: 
  Trời rạng điềm thiêng ; rừng phô vật lạ. 
  Lại thấy một con voi thần: 
  Dáng hình khôi kỳ đẹp đẽ; vòi trán rạng rỡ thần quang. 
  Nghiệm văn vẻ mà thanh tịnh có thừa; bẩm thông minh mà chiêu chương vô tận. 
  Ngự hiệu là “ Siêu Quần Thần Tượng ”. 
  Ưu đàm hương kết; xá lị ngọc phô. 
  Cỏ cây dâng phúc; thần vật báo điềm. 
  Tỏ ơn sâu vô cùng; truyền phúc lớn bất tận. 
  Cỏ thiêng hai lần xuất hiện; hươu trắng sáu lượt tìm về. 
  Nai trắng lại một con; hoẵng đen về một cặp. 
  Thừa mệnh sáng thượng đế lâu dài; giữ hoà hợp phúc trời mãi mãi. 
  Tới tấp tỏ điềm hay; song song phô vẻ lạ. 
  Rùa nghìn đốm mà năm màu; sen hai gương mà một nhánh. 
  Ơn khắp suối khe; điềm sinh giải trãi. 
  Cảm dân chúng thêm yên bình; tỏ xã tắc càng hưng vượng. 
  Trăng trùng vầng náu tầng mây; vàng khe tối còn khoe sắc. 
  Chứng tỏ: sáng thì có lúc; chứng tỏ: tối cũng có chừng. 
  Cho nên, 
  Tượng trời cát tường; nguồn sâu dâng phúc. 
  Một thân cau tía, nảy lắm chồi thiêng. 
  Tìm phên giậu mà bảo vệ trung ương; kiếm khắp trời mà bù trì thánh chúa. 
  Thiều quang chín chục; tiết đến năm dương. 
  Chuột chuyển lông sương; tùng sinh tán lọng. 
  Như tổ hạc mà tỏ lạ, hẹn thỏ ngọc để dâng bùa. 
  Hòa bốn bể thanh bình; hợp muôn dân hòa mục. 
  Sẻ trắng, cưu vàng vừa đỗ; rồng ngọc, cò trắng mới trình. 
  Bày dung nghi thanh khiết, tỏ rõ “duy nhất duy tinh”; 
  Thay chất cũ chân thường, bắt chước “khắc khoan khắc nhân”. 
  Chiêu dao lặn, rành rành ngựa ký sinh ra; 
  Cựa mọc lông, rờ rỡ trâu đen xuất hiện. 
  Đàn nhạn hợp mà phương xa thần phục; mãnh hổ vờn mà khắp chốn sợ oai. 
  Phượng hoàng kết đôi; tuyết lành dày đọng. 
  Hoa tuyết dầy một thước; thời đại rõ thái hòa. 
  Đem chim phượng chín vẻ khác thường; so đàn cò một hàng sắp đặt. 
  Quạ trắng đua nhau đến; ngỗng trời xoải cánh bay. 
  Tỏ rõ sự tinh cần báo hiếu; cảm thông lòng thuần hậu thảo hiền. 
  Niệm Kinh trọn cuốn mà ai kẻ so bì; 
  Chúc Thánh muôn năm mà lệ thường đã định. 
  Cau quý ngậm châu, nhành dương rưới ngọc. 
  Cửu long chạy đàn quanh lối, điềm lành châu báu sánh đua; 
  Dáng vẻ tràn đầy khắp nơi, triệu tốt phương xa vượt tới.
  Đẹp thay! 
  Chịu phúc dày trời đất; thừa mệnh lớn tổ tông. 
  Hơn năm mươi năm trị quốc; hàng trăm nghìn nước phục uy. 
  Mưa đúng tiết thời; sao theo triền độ. 
  Thường nghĩ: 
  Nhà nông là gốc; chính trị trọng xem. 
  Tuy bao năm đích thân làm lụng; mà chăm chắm chăng lúc nghỉ ngơi. 
  Ngày tháng năm mùa hè, niên hiệu Hội Tường Đại Khánh thứ 9 (1118): 
  Cưỡi xe phượng chơi cõi tiên; cưỡi thuyền rồng lòa nắng báu. 
  Nắng đẹp sóng yên, khói tan triều rặc. 
  Qua sông Lô dằng dặc, thấy núi Đọi lên bờ. 
  Tuy thế núi chênh vênh, nhưng đỉnh non bằng phẳng. 
  Vua sai buộc thuyền vào bến, gọi các quan tòng giá mà bảo rằng: 
  - Trẫm muốn dựng ngôi chùa phúc ở núi này liệu có được chăng?
  Tả hữu cùng bước ra tâu:
  - [Chúng thần] nghe các cụ già trong làng kể lại: Núi này cứ đến đầu xuân thì trời thường mưa để tưới muôn dân. Rất đáng thi công, vui thành thiện quả. 
  Rồi lại xin đặt tên núi này là Long Đội, nhà vua chuẩn y. Bèn hạ lệnh cho viên quan coi việc thiên văn xác định phương hướng: 
  Mặt chùa hướng sông Kinh, gió lặng như thêu lụa biếc; 
  Lưng chiền xây núi Điệp, mưa tan thêm rạng the xanh. 
  Phải thì khống chế bình nguyên, trông tới Càn Hưng lũy cũ; 
  Trái thì men theo lạch nhỏ, hội cùng sông Mạc ra khơi. 
  Chiếu cho thợ mộc, nảy mực căng dây. 
  Thí của mà rõ thêm công đức, xót tiền dân dốc sức lâm hành; 
  Chuyển gỗ mà hết sức thần kỳ, thuê thợ thuyền trổ tài khéo léo. 
  Đẽo đá mân cứng làm đấu, mài đá vũ xanh dựng hiên. 
  Dựng mười ba tầng chọc sông ngân; mở bốn mươi cửa nghênh gió mát. 
  Vách chạm hang rồng; góc treo chuông ngọc. 
  Tầng trên chứa hộp thiêng xá lị, vì đời thịnh mà tỏa hào quang; 
  Đỉnh mái đặt tiên khách bưng mâm, giương trời cao mà hứng sương ngọc. 
  Tầng dưới chia tám tướng khôi ngô, vây quanh có thần nhân chống kiếm. 
  Tòa giữa đặt tượng Đa Bảo Như Lai: nguyện lực sâu rộng, thà mất toàn thân.
  Nghe Liên kệ giúp đỡ oai thiêng, vì Ca Văn chia đôi tòa báu. 
  Treo phướn châu rực rỡ ; cắm lọng tía lung linh. 
  Thềm sân tam cấp xuống lên; hành lang hai bên tả hữu. 
  Phía dưới, bên trái dựng cung tứ giác: 
  Ôm hai rồng mà trấn đất; đội tám tướng chầu trời. 
  Nêu khí tượng cho danh sơn; truyền thánh công cho hậu thế. 
  Bên hữu chùa, dựng nhà khám nhọn vuông, trong đặt Tân Đầu hòa thượng khi bị đày ra Ma Lê sơn. Nhận lời dặn của Như Lai, vì chúng sinh mà chứng phúc. 
  Bậc dưới, trước xây gác Lăng Hán: 
  Treo chuông đồng Thú Sơn ; buộc chầy kình Bích Hải. 
  Đánh thì tiếng vọng cung trời, nghe thì kiếm dừng địa ngục. 
  Quây tường bao để nghiêm giữ, chứa hiên vũ để phô trương. 
  Bắc cầu mở rộng đường đi, trồng thông xắp thành hai dãy. 
  Dốc lòng thành tôn sùng diệu quả, muốn cho lịch số dài lâu; 
  Hết kiểu lạ trùng thiềm điệp ốc, chúc cho tuổi vua trường cửu. 
  Cho nên ngự đề là Sùng Thiện Diên Linh bảo tháp.
  Tháp này bắt đầu xây từ mùa hạ năm Hội Tường Đại Khánh thứ 9 (1118) đến mùa Thu năm Thiên Phù Duệ Vũ thứ hai (1121) thì hoàn thành. 
  Nhân lúc rảnh mà hưng công; gặp được mùa mà dựng lập. 
  Trải qua ba vụ cày, bốn mùa lúa chín, sau mới hoàn tất. 
  Đến khi khánh tạ lạc thành: 
  Sai Phụng Thường chỉnh đốn kiệu xe; cám Phong Bá dọn quang bụi bặm. 
  Khói trầm hương: mù dệt núi khe; bóng cờ phướn: ráng tan đường xá. 
  Chiêng trống vang lừng; khánh chuông ánh ỏi. 
  Trước dẫn xe mây Tam bảo; sau xoay kiệu báu một người. 
  Đốc xanh đỏ sáu cung; đón trẻ già muôn nước. 
  Nhà hoa chắn trước; đài Thứu giữa bày. 
  Hội tì kheo trai khiết; diễn Giác đế chân kinh. 
  Thánh đế nghiêm trang, dứt kệ rồi thành tâm dập trán; 
  Cung nga khép nép, nghe kinh xong dâng múa đề hồ. 
  Ban cơm chay như ngọc, cho khách cơ hàn; 
  Phát của quý tựa sông, cứu dân cùng khổ. 
  U - hiển đều về; rồng- trời cùng tụ. 
  Đem: công lực tối thượng, ruộng phúc vô biên. 
  Ca ngợi kỷ cương, sánh vuông tròn mà vĩnh cửu;
  Cầu mong vận nước, cùng nhật nguyệt để chiếu soi. 
  Sớm sinh Thái tử; nối mãi số trời. 
  Mong cho gia tộc trăm đời; cầu cho xã tắc muôn thuở. 
  Muôn phương cỏ rạp; vạn nước hướng dương. 
  Thần dân yêu mến; tiên tổ hộ phù. 
  Thần đạo ngầm phò; trời người đều giúp.
  Thái Tổ- Thái Tông - Thánh Tông Hoàng đế: định xong bốn bể, nhẹ gót lên tiên, nhờ quả phúc này, thảng thích đài sen; 
  Hoàng tỷ - Phù Thánh - Linh Nhân Thái hậu: chán cõi trần hoàn, ngự nơi khói ráng, gội lương nhân này, siêu sinh Tịnh Độ. 
  Phàm các vương phi của các vua chư hầu: 
  Hiền hòa trinh thục; nội trị tinh cần. 
  Càng nêu tiết tháo nhu hòa; càng tỏ thuần thành thảo thuận. 
  Đợi sinh Thái tử, điệu nhạc cùng hòa. 
  Sau cùng xin nguyện: 
  Nhân dân giàu có; vũ trụ thanh bình. 
  Xa thư một mối; Nam Bắc văn minh. 
  Ngũ hành đắp đổi; Bách cốc bội thu. 
  Biên cương bặt khói; đất nước an lành. 
  Mà chúng thần thì: 
  Thẹn bày hàng nhạn ; lạm dự rừng nho. 
  Ghi chép đã xong, thực nhờ vua sáng. 
  Công lao nghiêng trời lệch đất, dẫu tài như Uyên- Vân, học như Ban- Mã, cũng khó lòng ghi lại được muôn một vậy. 
  Rồi lại nghĩ : 
  Phận rau quỳ, rau hoắc nhỏ nhoi; nhờ được mặt trời, mặt trăng soi tới. 
  Nghìn năm một thuở, dốc hết lòng ngu. 
  Gượng cầm ngòi bút, đánh bạo dâng bày.
Lời minh rằng:
                                Rất diệu rất tĩnh,     		    [Cái đạo] rất mầu nhiệm rất tĩnh tịch,
                                Không tượng không hình.		    Không có tượng cũng không có hình
                                Gượng tự đặt tên,      		    Gượng đặt ra cái tên là "đạo"
                                Hy Dy ở đó.            		    Là cái mà không thể nghe thấy, nhìn thấy được
                                Đạm bạc chẳng đợi,     		    Thuần phác chẳng đợi
                                Sinh trước đất trời.   		    Sinh ra trước cả đất trời.
                                Nhuộm mà chẳng đen,    		    Nhuộm mà chẳng bị đen đi
                                Mài mà không khuyết.   		    Mài mà không bị mòn mất.
                                Thuần túy tinh nhất,   		    Thuần túy tinh chất,
                                Có đấng Tiên vàng,     		    Bèn có vị tiên vàng,
                                Sinh nơi Tây Trúc.     		    Giáng sinh ở nước Tây Trúc. 
                                Mười hiệu đầy đủ,      		    [Ngài] có mười danh hiệu đầy đủ
                                Tứ hoằng rộng ban.     		    Mở rộng bốn thệ nguyện lớn.
                                Tu đủ lục độ,          		    Đều tu hết sáu mức độ,
                                Học sâu đạo Thiền.     		    Nghiên cứu cái vị gốc của đạo.
                                [………thương…….]         		    [………thương…….]
                                Giác đuổi hư ngụy,     		    Giác ngộ [nên đã] dẹp được hết điều hư ngụy,
                                Lập giáo diệu huyền.   		    Dựng lập nên giáo pháp thanh tịnh.
                                Đạo quy chân tính,     		    Đạo quy về với cái bản tính chân thường,
                                Khiến lặng như non.    		    Khiến chân tính ấy tĩnh lặng như núi. 
                                Ba cõi chiêm ngưỡng,   		    Ba giới [thấy vậy] thảy đều ngưỡng vọng ngài,
                                Mười phương hợp duyên. 		    Mười phương [thấy vậy] đều hồi hướng về.
                                Thầy vâng mệnh Phật,   		    Phật Thích Ca vâng mệnh đấng Từ Nhan,
                                Cứu vớt dân lành.      		    Đã thi hành việc cứu vớt, tế độ.
                                Băng tan, bọt nổi,     		    [Thấy đời người tựa như ] bọt nổi, băng tan, 
                                Chán ở nhân hoàn.      		    [Nên ngài] chán cõi nhân gian.
                                Cầu vồng rực rỡ,       		    Cầu vồng trắng vút lên ánh sáng,
                                Phủi áo về ngàn.       		    Phất áo ở chốn rừng song thụ.
                                Kim dung dấu bóng,     		    Dung nhan vàng xế bóng,
                                Sáp lan nhuần thân.    		    Sáp lan tẩm nhuần thân.
                                Chiên đàn làm củi,     		    Gỗ chiên đàn làm củi,
                                Khói vương hỏa đàn.    		    Lửa hỏa thiêu, khói lan.
                                Lửa thiêu vừa lụi,     		    Lễ trà tỳ vừa dứt,		
                                Xá lị ngưng thành.     		    Xá lị đã ngưng kết nên.
                                Đầy mâm đầy chậu,      		    Đầy mâm đầy bàn,
                                Năm sắc rỡ ràng.       		    Hoặc rạng năm sắc,
                                Hoặc thành chín vẻ,    		    Hoặc rõ chín màu.
                                Lung linh chói chang.  		    Lấp lánh chói sáng.
                                Thiên cung hoàn vũ,    		    Trong cõi âm giới,
                                Âm giới dương gian.    		    Cung trời, nhân gian.
                                Bốn loại Quốc vương,   		    Bốn loại quốc vương,
                                Cùng về nhộn nhịp.     		    Thì cùng tụ họp về.
                                Tranh đua sức mạnh,    		    Ganh đua sức hùng cường,
                                Xưng tướng xưng hùng.  		    Ai nấy đều là danh tướng.
                                Hòm vàng năm lớp,      		    Hòm vàng năm lớp,
                                Êm bánh xe rồng.       		    Bánh xe rồng đi êm đềm.
                                Tháp cao nghiêm dựng,  		    Kính cẩn dựng tháp báu cao ngất,
                                Từ nay vô cùng.        		    Từ đó về sau.
                                Tháng dài năm rộng,    		    Năm tháng lâu dài,
                                Sùng phụng tôn thờ.    		    Không đời nào là không phụng thờ.
                                Đến triết vương ta,    		    Đến bậc triết vương triều ta,
                                Truyền giữ càng quý.   		    Truyền đạo, hộ pháp càng thêm quý trọng,
                                Theo chí người xưa,    		    Noi theo ý nguyện sùng đạo của người trước,
                                Hướng về Long Đội.     		    Dõi về núi Long Đội,
                                Điện tháp hùng vĩ,     		    Dựng lên chùa tháp hùng vỹ diệu kỳ,
                                Cao vượt trùng mây.    		    Cao vút mất tầng mây.
                                Tầng trên cất giữ,     		    Tầng trên cùng thì cất chứa xá lị,
                                Tuôn ánh thần quang.   		    Ánh sáng thần kỳ tỏa ra chói lọi.
                                Điềm sinh vua sáng,    		    Tỏ điềm lành minh quân,
                                Sông núi đẹp tươi.     		    Núi sông thanh tú.
                                Mây ráng hòa hợp,      		    Ráng khói ngùn ngụt,
                                Cách biệt bụi trần.    		    Xa cách bụi trần.
                                Vua ghi tên đẹp,       		    Ngự đề tên đẹp,
                                “Sùng Thiện Diên Linh”.		    Sùng Thiện Diên Linh.
                                Cầu dài tuổi thọ,      		    Cầu thọ càng thọ,
                                Tháng tốt ngày lành.   		    Giờ đẹp ngày lành.
                                Họp nhau khánh chúc,   		    Cõi phúc viên mãn,
                                Quả phúc viên thành.   		    Cùng nhau chúc tụng.
                                Viếng chùa tấp nập,    		    Tụ hội cảnh chùa,
                                Mây tụ đỉnh non.       		    Mây đậu trên đỉnh núi.
                                Sáng lòng thanh tịnh,  		    Lòng trong thanh tịnh,
                                Đài nghê bước lên.     		    Bước lên đài nghê.
                                Rì rầm tụng niệm,      		    Lầm rầm tụng niệm như tiếng thủy triều,
                                Tụ hội trời, người.    		    Tập hợp cõi trời lẫn cõi người,
                                Trống chuông gióng giả,		    Chuông trống náo nức, rộn rã,
                                Hương trầm ngạt ngào.  		    Hương trầm cuồn cuộn,
                                Gấm vóc khoe xuân,     		    Gấm vóc tranh đua vẻ xuân.
                                Phúc tuệ nay hưởng.    		    Được thừa hưởng phúc đức và trí tuệ này.
                                Tù ngục cùm gông,      		    Những kẻ bị tù ngục, trói cùm,
                                Khổ đau đều thoát.     		    Đều thoát u mê, ngu độn.
                                Thần được chép việc,   		    Thầm trộm chép lại việc lành,
                                Học chẳng là bao.      		    Học hành chưa được ba đông [ba năm].
                                Tài kia không đủ,      		    Tài cũng chẳng đủ đọc hết năm xe sách.
                                Ghi sáng công vua.     		    Công nghiệp của nhà vua rực rỡ,
                                Mở tung mọi cửa,       		    Mở hết các cửa,
                                Bốn biển về chung.     		    Bốn bể đều hội về cùng.
                                Ca ngợi vua ta,        		    Cùng ca ngợi vua ta,
                                Dài cùng trời đất.     		    Lâu dài như đất trời.
Dựng bia ngày 6 tháng Bảy năm Tân sửu, niên hiệu Thiên Phù Duệ Vũ thứ 2 (1121).
Nguyễn Công Bật, giữ chức Triều liệt Hình bộ Thượng thư, Binh bộ Viên ngoại lang, Đồng tri Phiên công viện chư sự, vâng sắc chỉ soạn văn bia.
Lý Bảo Cung giữ chức Hữu thị lang, Thượng thư, Công bộ Viên ngoại lang, Đồng tri Thẩm hình viện sự, Thượng khinh xa đô úy, Kim tử ngư đại, vâng sắc chỉ viết chữ

`,
  },
    desc: "A monumental Lý dynasty stele erected in 1121, it commemorates the construction of the pagoda's main tower.",
  },
    {
    id: 40,
    name: "Bia chùa Sùng Khánh",
    english: "Sung Khanh Pagoda Stele",
    location: "Chùa Sùng Khánh, huyện Vị Xuyên, tỉnh Hà Giang",
    lat: 22.761383088574853, lng: 104.99792439572346, 
    category: "religious",
    badge: "Trần Dynasty Stele",
    type: "academic",
    year: "Trần",
    desc: "A Trần dynasty stele preserved in situ, it is the furthest stele to the North of Vietnam."
  },
  {
    id: 41,
    name: "Bia Vĩnh Lăng Lam Kinh",
    english: "Vinh Lang Lam Kinh Stele",
    location: "Khu di tích lịch sử Lam Kinh, huyện Thọ Xuân, tỉnh Thanh Hóa",
    lat: 19.926305025374482, lng: 105.40894225431818, 
    category: "historical",
    badge: "Lê Dynasty Stele",
    type: "academic",
    year: "Lê sơ",
    desc: "The great stele at the Vĩnh Lăng royal mausoleum, erected to honor Emperor Lê Thái Tổ — founder of the Lê dynastycal."
  },
  {
    id: 42,
    name: "Chuông chùa Bình Lâm",
    english: "Binh Lam Pagoda Bell",
    location: "Chùa Bình Lâm, huyện Vị Xuyên, tỉnh Hà Giang",
    lat: 22.725107927978264, lng: 105.00817335305189, 
    category: "religious",
    badge: "Trần Dynasty Bell",
    type: "religious",
    year: "Trần",
    desc: "A Trần dynasty bronze bell preserved at Bình Lâm Pagoda in Vị Xuyên, Hà Giang. Its inscription and casting quality make it a rare example of 13th–14th century religious metalwork in the northern highlands."
  },
  {
    id: 43,
    name: "Chuông chùa Vân Bản",
    english: "Van Ban Pagoda Bell",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "religious",
    badge: "Trần Dynasty Bell",
    type: "religious",
    year: "Trần",
    desc: "A bronze bell from Vân Bản Pagoda, dating to the Trần dynasty. Now housed at the National History Museum in Hanoi, it is one of the finest surviving examples of Trần-era bell casting."
  },
  {
    id: 44,
    name: "Đại hồng chung chùa Thiên Mụ",
    english: "Thien Mu Pagoda Great Bell",
    location: "Chùa Thiên Mụ, thành phố Huế, tỉnh Thừa Thiên Huế",
    lat: 16.453270389827086, lng: 107.54556265571601, 
    category: "religious",
    badge: "Nguyễn Bronze Bell",
    type: "religious",
    year: "Nguyễn",
    desc: "The great bronze bell of Thiên Mụ Pagoda in Huế, cast in 1710 under Lord Nguyễn Phúc Chu. Weighing over 2 tonnes, its deep resonant toll can be heard kilometres away and is synonymous with the spirit of Huế."
  },
  {
    id: 45,
    name: "Rồng đá (Xà thần)",
    english: "Stone Dragon (Divine Serpent)",
    location: "Đền thờ Lê Văn Thịnh, huyện Gia Bình, tỉnh Bắc Ninh",
    lat: 21.07223387891158, lng: 106.1682416356275, 
    category: "historical",
    badge: "Lý Dynasty Sculpture",
    type: "religious",
    year: "Lý",
    desc: "A rare Lý dynasty stone dragon sculpture kept at the temple of court official Lê Văn Thịnh in Gia Bình, Bắc Ninh. Its unique coiled serpentine form differs from later Vietnamese dragon iconography."
  },
  {
    id: 46,
    name: "Tượng Phật A Di Đà",
    english: "Amitabha Buddha",
    location: "Chùa Ngô Xá, huyện Ý Yên, tỉnh Nam Định",
    lat: 20.38695773311401, lng: 106.01249271562256,
    category: "religious",
    badge: "Lý Dynasty Statue",
    type: "religious",
    year: "Lý",
    desc: "A monumental Lý dynasty Amitabha Buddha statue at Ngô Xá Pagoda, Ý Yên, Nam Định. One of the largest and finest examples of 11th–12th century Buddhist sculpture in Vietnam."
  },
  {
    id: 47,
    name: "Tượng Quan Âm nghìn mắt nghìn tay",
    english: "Thousand-Eye Thousand-Hand Guanyin",
    location: "Bảo tàng Mỹ thuật Việt Nam, Hà Nội",
    lat: 21.030694022687022, lng: 105.83719480164763, 
    category: "religious",
    badge: "Lê Trung Hưng Statue",
    type: "religious",
    year: "Lê Trung Hưng",
    desc: "An extraordinary Lê Trung Hưng period statue of Guanyin with a thousand eyes and hands, now at the Vietnam Fine Arts Museum. Originally from a Buddhist pagoda, it is considered a masterpiece of Vietnamese sacred sculpture."
  },
  {
    id: 48,
    name: "Ba pho tượng Tam Thế",
    english: "Three Buddhas of the Three Worlds",
    location: "Chùa Linh Ứng, huyện Thuận Thành, tỉnh Bắc Ninh",
    lat: 21.020802816033523, lng: 106.03903923509401,
    category: "religious",
    badge: "Lê Trung Hưng Statue",
    type: "religious",
    year: "Lê Trung Hưng",
    desc: "Three Lê Trung Hưng period Buddhist statues representing the Buddhas of the Past, Present, and Future, preserved at Linh Ứng Pagoda in Thuận Thành, Bắc Ninh — an ancient cradle of Vietnamese Buddhism."
  },
  {
    id: 49,
    name: "Tượng Hoàng hậu Trịnh Thị Ngọc Trúc",
    english: "Queen Trinh Thi Ngoc Truc Portrait Statue",
    location: "Bảo tàng Mỹ thuật Việt Nam, Hà Nội",
    lat: 21.030694022687022, lng: 105.83719480164763, 
    category: "historical",
    badge: "Lê Trung Hưng Statue",
    type: "art",
    year: "Lê Trung Hưng",
    desc: "A portrait statue of Queen Trịnh Thị Ngọc Trúc, consort of Emperor Lê Thần Tông, at the Vietnam Fine Arts Museum. A rare example of royal portrait sculpture from the Lê–Trịnh era."
  },
  {
    id: 50,
    name: "Bộ chân đèn và lư hương gốm men",
    english: "Glazed Ceramic Candlestick and Incense Burner Set",
    location: "Bảo tàng tỉnh Nam Định",
    lat: 20.423497211811735, lng: 106.17487230192759, 
    category: "historical",
    badge: "Mạc Dynasty Ceramic",
    type: "religious",
    year: "Mạc",
    desc: "A set of glazed ceramic ritual objects — candlesticks and an incense burner — from the Mạc dynasty, preserved at Nam Định Provincial Museum. Notable for their rich polychrome glaze and decorative inscriptions."
  },
  {
    id: 51,
    name: "Vạc đồng",
    english: "Bronze Cauldron",
    location: "Bảo tàng tỉnh Thanh Hóa",
    lat: 19.814336022023838, lng: 105.78040143805647, 
    category: "historical",
    badge: "Lê Trung Hưng Bronze",
    type: "art",
    year: "Lê Trung Hưng",
    desc: "A large ceremonial bronze cauldron (vạc) from the Lê Trung Hưng period, preserved at Thanh Hóa Provincial Museum. Used in court rituals, it exemplifies the sophisticated bronze-casting tradition of 17th–18th century Vietnam."
  },
  {
    id: 52,
    name: "Súng thần công",
    english: "Imperial Cannon (Than Cong)",
    location: "Bảo tàng tỉnh Hà Tĩnh",
    lat: 18.354351585284714, lng: 105.89365273730664,
    category: "historical",
    badge: "Nguyễn Weapon",
    type: "tools",
    year: "Nguyễn",
    desc: "An imperial bronze cannon from the Nguyễn dynasty, preserved at Hà Tĩnh Provincial Museum. These \"spirit cannons\" were cast not merely as weapons but as sacred protective objects for the royal court."
  },
  {
    id: 53,
    name: "Bia Võ Cạnh",
    english: "Vo Canh Stele",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Chăm Pa Stele",
    type: "academic",
    year: "Chăm Pa",
    desc: "The Võ Cạnh stele, discovered in Khánh Hòa, bears one of the oldest Sanskrit inscriptions in Southeast Asia (circa 3rd century AD). It records a Cham king's offering and is a foundational document of Chăm Pa civilization."
  },
  {
    id: 54,
    name: "Tượng Avalokitesvara Hoài Nhơn",
    english: "Hoai Nhon Avalokitesvara Statue",
    location: "Bảo tàng Lịch sử thành phố Hồ Chí Minh",
    lat: 10.788132913434895, lng: 106.70498351310206,
    category: "religious",
    badge: "Chăm Pa Statue",
    type: "religious",
    year: "Chăm Pa",
    desc: "A Chăm Pa stone statue of Avalokitesvara (Bodhisattva of Compassion) found in Hoài Nhơn, Bình Định. It represents the height of Cham Buddhist sculptural art and is now held at the HCMC History Museum."
  },
  {
    id: 55,
    name: "Tượng Avalokitesvara Đại Hữu",
    english: "Dai Huu Avalokitesvara Statue",
    location: "Bảo tàng Lịch sử thành phố Hồ Chí Minh",
    lat: 10.788132913434895, lng: 106.70498351310206,
    category: "religious",
    badge: "Chăm Pa Statue",
    type: "religious",
    year: "Chăm Pa",
    desc: "A Chăm Pa Avalokitesvara statue from Đại Hữu, Bình Định, preserved at the HCMC History Museum. Carved in fine sandstone with refined iconographic detail, it is a landmark piece of Cham Buddhist art."
  },
  {
    id: 56,
    name: "Tượng động vật Dốc Chùa",
    english: "Doc Chua Animal Figurines",
    location: "Bảo tàng tỉnh Bình Dương",
    lat: 10.989192314564404, lng: 106.6631671820489, 
    category: "historical",
    badge: "Đồng Nai Bronze",
    type: "art",
    year: "Đồng Nai",
    desc: "A collection of bronze animal figurines from the Dốc Chùa archaeological site, Bình Dương, representing the Đồng Nai culture (circa 500–200 BCE). These objects illuminate the Pre-Óc Eo civilizations of southern Vietnam."
  },
  {
    id: 57,
    name: "Tượng Phật Bình Hòa",
    english: "Binh Hoa Buddha Statue",
    location: "Bảo tàng Lịch sử thành phố Hồ Chí Minh",
    lat: 10.788132913434895, lng: 106.70498351310206,
    category: "religious",
    badge: "Óc Eo Statue",
    type: "religious",
    year: "Óc Eo",
    desc: "An Óc Eo culture Buddha statue found in Bình Hòa, now at the HCMC History Museum. Blending Indian Gupta-style with local artistic sensibility, it is one of the finest early Buddhist sculptures from the Mekong Delta."
  },
  {
    id: 58,
    name: "Tượng Phật Sa Đéc",
    english: "Sa Dec Buddha Statue",
    location: "Bảo tàng Lịch sử thành phố Hồ Chí Minh",
    lat: 10.788132913434895, lng: 106.70498351310206,
    category: "religious",
    badge: "Óc Eo Statue",
    type: "religious",
    year: "Óc Eo",
    desc: "An Óc Eo culture bronze Buddha statue from Sà Đéc (Đồng Tháp), held at the HCMC History Museum. Its elegant form and gilded surface reflect the cosmopolitan trading culture of the Funan/Óc Eo kingdom."
  },
  {
    id: 59,
    name: "Tượng Thần Visnu",
    english: "Vishnu Statue (Dong Thap)",
    location: "Bảo tàng tỉnh Đồng Tháp",
    lat: 10.453408254322879, lng: 105.63334654396976, 
    category: "religious",
    badge: "Óc Eo Statue",
    type: "religious",
    year: "Óc Eo",
    desc: "An Óc Eo culture stone statue of the Hindu god Vishnu, unearthed in Đồng Tháp province and preserved at the provincial museum. It reflects the strong Indian cultural influence on the ancient Mekong Delta civilization."
  },
  {
    id: 60,
    name: "Tượng Thần Visnu",
    english: "Vishnu Statue (Long An)",
    location: "Bảo tàng tỉnh Long An",
    lat: 10.53580518390594, lng: 106.40037485158696, 
    category: "religious",
    badge: "Óc Eo Statue",
    type: "religious",
    year: "Óc Eo",
    desc: "An Óc Eo stone Vishnu statue from Long An province, now at the Long An Provincial Museum. Together with the Đồng Tháp Vishnu, it documents the widespread Hindu religious practice across the ancient southern delta."
  },
  {
    id: 61,
    name: "Tượng Nữ Thần Durga",
    english: "Durga Goddess Statue",
    location: "Bảo tàng Lịch sử thành phố Hồ Chí Minh",
    lat: 10.788132913434895, lng: 106.70498351310206,
    category: "religious",
    badge: "Óc Eo Statue",
    type: "religious",
    year: "Óc Eo",
    desc: "An Óc Eo stone statue of Durga, the warrior goddess, at the HCMC History Museum. Carved with great skill and energy, it is one of the most important examples of Óc Eo Hindu iconography surviving today."
  },
  {
    id: 62,
    name: "Tượng Avalokitesvara (Óc Eo)",
    english: "Avalokitesvara Statue (Oc Eo Culture)",
    location: "Bảo tàng Lịch sử thành phố Hồ Chí Minh",
    lat: 10.788132913434895, lng: 106.70498351310206,
    category: "religious",
    badge: "Óc Eo Statue",
    type: "religious",
    year: "Óc Eo",
    desc: "An Óc Eo Avalokitesvara statue at the HCMC History Museum, testifying to the coexistence of Buddhism and Hinduism in the ancient Funan kingdom. Its refined carving style shows strong links with contemporaneous Indian art."
  },
  {
    id: 63,
    name: "Bộ sưu tập hiện vật vàng",
    english: "Oc Eo Gold Artifact Collection",
    location: "Bảo tàng tỉnh Long An",
    lat: 10.53580518390594, lng: 106.40037485158696, 
    category: "historical",
    badge: "Óc Eo Gold",
    type: "art",
    year: "Óc Eo",
    desc: "A collection of Óc Eo culture gold artifacts preserved at Long An Provincial Museum. Including ornaments, ritual objects, and decorative pieces, it reveals the wealth and cosmopolitan character of the ancient Funan port civilization."
  },
  {
    id: 64,
    name: "Tranh \"Vườn Xuân Trung Nam Bắc\"",
    english: "Spring Garden of Three Regions Painting",
    location: "Bảo tàng Mỹ thuật thành phố Hồ Chí Minh",
    lat: 10.769958307366048, lng: 106.69909492464474,
    category: "historical",
    badge: "Fine Art",
    type: "art",
    year: "20th Century",
    desc: "A monumental lacquer painting by artist Nguyễn Gia Trí, depicting the spring landscapes of Northern, Central, and Southern Vietnam. Considered a masterpiece of Vietnamese lacquer art of the 20th century."
  },
  {
    id: 65,
    name: "Tranh \"Hai thiếu nữ và em bé\"",
    english: "Two Young Women and a Child Painting",
    location: "Bảo tàng Mỹ thuật Việt Nam, Hà Nội",
    lat: 21.030694022687022, lng: 105.83719480164763, 
    category: "historical",
    badge: "Fine Art",
    type: "art",
    year: "20th Century",
    desc: "An iconic oil painting by Tô Ngọc Vân (1944), depicting two young Vietnamese women with a child. One of the most celebrated works of the Vietnam Fine Arts Museum, it defines the golden age of Vietnamese modern painting."
  },
  {
    id: 66,
    name: "Tranh \"Em Thúy\"",
    english: "Little Thuy Portrait Painting",
    location: "Bảo tàng Mỹ thuật Việt Nam, Hà Nội",
    lat: 21.030694022687022, lng: 105.83719480164763, 
    category: "historical",
    badge: "Fine Art",
    type: "art",
    year: "20th Century",
    desc: "A portrait painting of a young girl named Thúy by artist Trần Văn Cẩn (1943). Widely regarded as one of the finest Vietnamese portraits of the 20th century, now held at the Vietnam Fine Arts Museum."
  },
  {
    id: 67,
    name: "Tranh \"Kết nạp Đảng ở Điện Biên Phủ\"",
    english: "Party Admission at Dien Bien Phu Painting",
    location: "Bảo tàng Mỹ thuật Việt Nam, Hà Nội",
    lat: 21.030694022687022, lng: 105.83719480164763, 
    category: "historical",
    badge: "Fine Art",
    type: "art",
    year: "20th Century",
    desc: "A celebrated lacquer painting by Nguyễn Sáng (1963) depicting a Communist Party admission ceremony during the Battle of Điện Biên Phủ. One of the defining works of revolutionary Vietnamese art."
  },

  // ── BATCH 3 · Quyết định 53/QĐ-TTg · 14/01/2015 ─────────────────
  {
    id: 68,
    name: "Trống đồng Hữu Chung",
    english: "Huu Chung Bronze Drum",
    location: "Bảo tàng tỉnh Hải Dương",
    lat: 20.94340934106013, lng: 106.33073087912344, 
    category: "historical",
    badge: "Đông Sơn Bronze",
    type: "tools",
    year: "Đông Sơn",
    desc: "A Đông Sơn culture bronze drum unearthed in Hữu Chung, preserved at Hải Dương Provincial Museum. Its elaborate geometric and bird motifs are among the finest examples of Đông Sơn decorative art."
  },
  {
    id: 69,
    name: "Chuông Thanh Mai",
    english: "Thanh Mai Bell",
    location: "Bảo tàng Hà Nội",
    lat: 21.010414142525732, lng: 105.7869783116489, 
    category: "religious",
    badge: "Ancient Bell",
    type: "religious",
    year: "năm 798",
    desc: "A bronze bell dated to 798 AD, one of the oldest surviving bells in Vietnam. Cast during the Tang occupation period, its inscription is a rare primary source on early Vietnamese Buddhism, now held at the Hanoi Museum."
  },
  {
    id: 70,
    name: "82 bia Tiến sĩ Văn Miếu - Quốc Tử Giám, Hà Nội",
    english: "82 Doctoral Steles at Temple of Literature",
    location: "Văn Miếu - Quốc Tử Giám, Hà Nội",
    lat: 21.028267645756586, lng: 105.83603394865112, 
    category: "historical",
    badge: "Stone Stele",
    type: "academic",
    year: "1484–1780",
    desc: "A set of 82 stone steles erected between 1484 and 1780, each recording the names and origins of doctoral laureates of the Lê and Mạc dynasties. Recognised by UNESCO as a Memory of the World in 2011."
  },
  {
    id: 71,
    name: "Bia \"Khôn Nguyên Chí Đức Chi Bi\"",
    english: "\"Khon Nguyen Chi Duc Chi Bi\" Stele",
    location: "Khu di tích lịch sử Lam Kinh, huyện Thọ Xuân, tỉnh Thanh Hóa",
    lat: 19.926305025374482, lng: 105.40894225431818, 
    category: "historical",
    badge: "Lê Dynasty Stele",
    type: "academic",
    year: "Lê sơ",
    desc: "A 15th-century stele at the Lam Kinh royal mausoleum in Thanh Hóa, inscribed to honour a queen of the early Lê dynasty. Its elegant calligraphy and historical content make it a key document of the period."
  },
  {
    id: 72,
    name: "Bia Thủy Môn Đình",
    english: "Thuy Mon Dinh Stele",
    location: "Bảo tàng tỉnh Lạng Sơn",
    lat: 21.8440365088219, lng: 106.75782573740271, 
    category: "historical",
    badge: "Stone Stele",
    type: "academic",
    year: "năm 1670",
    desc: "A stele dated 1670 from the Thủy Môn Đình gate on the northern border of Vietnam in Lạng Sơn. It records the strategic importance of the frontier pass and the officials who administered it under the Lê–Trịnh lords."
  },
  {
    id: 73,
    name: "Tượng Quan Âm nghìn mắt nghìn tay chùa Đào Xuyên",
    english: "Thousand-Eye Thousand-Hand Guanyin at Dao Xuyen Pagoda",
    location: "Chùa Đào Xuyên, xã Đa Tốn, huyện Gia Lâm, Hà Nội",
    lat: 20.993164447779083, lng: 105.93268858465794,
    category: "religious",
    badge: "Buddhist Statue",
    type: "religious",
    year: "Lê Trung Hưng",
    desc: "A 16th-century gilded wood statue of Guanyin with a thousand eyes and hands at Đào Xuyên Pagoda, Gia Lâm. One of the most accomplished examples of Vietnamese sacred sculpture, remarkable for its symmetry and detail."
  },
  {
    id: 74,
    name: "Bộ tượng Di Đà Tam Tôn chùa Thầy",
    english: "Amitabha Trinity Statues at Chua Thay Pagoda",
    location: "Chùa Thầy, xã Sài Sơn, huyện Quốc Oai, Hà Nội",
    lat: 21.02316820084386, lng: 105.64670091961139, 
    category: "religious",
    badge: "Buddhist Statue",
    type: "religious",
    year: "Lê Trung Hưng",
    desc: "A set of three early 17th-century Buddhist statues representing Amitabha and his two attendant bodhisattvas at Chùa Thầy, one of Vietnam's most celebrated historic pagodas in Quốc Oai, Hà Nội."
  },
  {
    id: 75,
    name: "Tượng Phật giáo thời Tây Sơn chùa Tây Phương",
    english: "Tay Son Era Buddhist Statues at Tay Phuong Pagoda",
    location: "Chùa Tây Phương, xã Thạch Xá, huyện Thạch Thất, Hà Nội",
    lat: 21.02564449999866, lng: 105.58761654844642, 
    category: "religious",
    badge: "Buddhist Statue",
    type: "religious",
    year: "Tây Sơn",
    desc: "A celebrated group of late 18th-century wooden statues at Tây Phương Pagoda, Thạch Thất. Carved during the Tây Sơn dynasty, their vivid, emotionally expressive faces are unique in Vietnamese Buddhist art."
  },
  {
    id: 76,
    name: "Ekamukhalinga / Linga có một đầu thần Siva",
    english: "Ekamukhalinga or the Siva-Headed Linga",
    location: "Ban Quản lý di tích và du lịch Mỹ Sơn, tỉnh Quảng Nam",
    lat: 15.772555893568809, lng: 108.10911059364413, 
    category: "religious",
    badge: "Chăm Pa Sculpture",
    type: "religious",
    year: "Chăm Pa",
    desc: "An early 8th-century Ekamukhalinga — a phallic linga bearing a sculpted face of the god Shiva — from the Mỹ Sơn sanctuary complex in Quảng Nam. A masterwork of early Chăm Pa religious sculpture."
  },
  {
    id: 77,
    name: "Lan can thành bậc",
    english: "Stone Balustrade Steps",
    location: "Bảo tàng tỉnh Nam Định",
    lat: 20.423497211811735, lng: 106.17487230192759,
    category: "historical",
    badge: "Lý Dynasty Stone",
    type: "art",
    year: "Lý",
    desc: "Early 12th-century stone balustrade steps from the Lý dynasty, preserved at Nam Định Provincial Museum. The refined carvings of dragons and lotus motifs exemplify the elegant decorative vocabulary of the Lý court."
  },
  {
    id: 78,
    name: "Máy bay Mic 21 số hiệu 4324",
    english: "MiG-21 Fighter Aircraft No. 4324",
    location: "Bảo tàng Lịch sử quân sự Việt Nam, Hà Nội",
    lat: 21.00927118361651, lng: 105.75650269446491,
    category: "historical",
    badge: "War Aircraft",
    type: "tools",
    year: "20th Century",
    desc: "A MiG-21 fighter jet (No. 4324) flown by the Vietnam People's Air Force during the resistance war against the United States, preserved at the Vietnam Military History Museum. A symbol of aerial heroism."
  },
  {
    id: 79,
    name: "Bản đồ Quyết tâm chiến dịch Hồ Chí Minh",
    english: "Ho Chi Minh Campaign Operations Map",
    location: "Bảo tàng Lịch sử quân sự Việt Nam, Hà Nội",
    lat: 21.00927118361651, lng: 105.75650269446491,
    category: "historical",
    badge: "War Document",
    type: "academic",
    year: "1975",
    desc: "The original operational map used to plan the Hồ Chí Minh Campaign of April 1975, the final offensive that led to the reunification of Vietnam. Preserved at the Vietnam Military History Museum as a defining historical artifact."
  },

  // ── BATCH 4 · Quyết định 2382/QĐ-TTg · 25/12/2015 ───────────────
  {
    id: 80,
    name: "Trống đồng Cổ Loa và bộ sưu tập lưỡi cày đồng",
    english: "Co Loa Bronze Drum and Ploughshare Collection",
    location: "Bảo tàng Hà Nội",
    lat: 21.010414142525732, lng: 105.7869783116489, 
    category: "historical",
    badge: "Đông Sơn Bronze",
    type: "tools",
    year: "Đông Sơn",
    desc: "A Đông Sơn bronze drum discovered at the ancient Cổ Loa citadel, together with a unique collection of bronze ploughshares. Together they illuminate the agricultural and ceremonial life of early Âu Lạc civilisation."
  },
  {
    id: 81,
    name: "Đôi trống đồng Lô Lô",
    english: "Lo Lo Pair of Bronze Drums",
    location: "Bảo tàng tỉnh Hà Giang",
    lat: 22.830796380220704, lng: 104.98434469451614,
    category: "historical",
    badge: "Đông Sơn Bronze",
    type: "tools",
    year: "Đông Sơn",
    desc: "A matched pair of Group D Đông Sơn bronze drums (circa 5th century) preserved by the Lô Lô ethnic minority community of Hà Giang. A rare survival of living drum-keeping tradition in the far northern highlands."
  },
  {
    id: 82,
    name: "Cột kinh Phật chùa Nhất Trụ",
    english: "Buddhist Sutra Pillar, Nhat Tru Pagoda",
    location: "Khu di tích Cố đô Hoa Lư, tỉnh Ninh Bình",
    lat: 20.288157925276295, lng: 105.90818839629017,
    category: "religious",
    badge: "Đinh–Lê Stone",
    type: "religious",
    year: "năm 995",
    desc: "A stone pillar inscribed with Buddhist sutras erected in 995 under Emperor Lê Đại Hành at Hoa Lư, the first imperial capital of Vietnam. One of the oldest surviving Buddhist inscriptions of the independent Vietnamese state."
  },
  {
    id: 83,
    name: "Tượng Thần Visnu",
    english: "Vishnu Statue (Dong Thap, 6th century)",
    location: "Bảo tàng Tổng hợp tỉnh Đồng Tháp",
    lat: 10.470088578920443, lng: 105.76571884873938, 
    category: "religious",
    badge: "Óc Eo Statue",
    type: "religious",
    year: "Óc Eo",
    desc: "A 6th-century stone Vishnu statue from the Óc Eo culture, preserved at Đồng Tháp Provincial Museum. Its four-armed iconography closely follows Indian Gupta artistic conventions, reflecting deep trade links across the ancient delta."
  },
  {
    id: 84,
    name: "Tượng nữ thần Laksmi",
    english: "Laksmi Goddess Statue (Bac Lieu)",
    location: "Bảo tàng tỉnh Bạc Liêu",
    lat: 9.287275914177757, lng: 105.72631916950343, 
    category: "religious",
    badge: "Óc Eo Statue",
    type: "religious",
    year: "Óc Eo",
    desc: "A 7th-century stone statue of Laksmi, goddess of prosperity, from the Óc Eo culture at Bạc Liêu Provincial Museum. Her serene expression and refined drapery mark it as a masterpiece of early southern Vietnamese sculpture."
  },
  {
    id: 85,
    name: "Tượng Nữ thần Laksmi",
    english: "Laksmi Goddess Statue (Dong Thap)",
    location: "Bảo tàng Tổng hợp tỉnh Đồng Tháp",
    lat: 10.470088578920443, lng: 105.76571884873938, 
    category: "religious",
    badge: "Óc Eo Statue",
    type: "religious",
    year: "Óc Eo",
    desc: "A 7th-century Óc Eo stone statue of the goddess Laksmi at Đồng Tháp Provincial Museum. Together with the Bạc Liêu example, it reveals the wide distribution of Hindu goddess worship across the ancient Mekong Delta."
  },
  {
    id: 86,
    name: "Đầu tượng thần Siva",
    english: "Siva Head Sculpture (Quang Nam, 10th century)",
    location: "Bảo tàng tỉnh Quảng Nam",
    lat: 15.579349943610227, lng: 108.47586313235865, 
    category: "religious",
    badge: "Chăm Pa Statue",
    type: "religious",
    year: "Chăm Pa",
    desc: "A Chăm Pa stone head of the god Shiva dated to around the early 10th century, preserved at Quảng Nam Provincial Museum. Its powerful modelling and crown of matted locks are hallmarks of the Mỹ Sơn E1 sculptural style."
  },
  {
    id: 87,
    name: "Tượng Sadashiva",
    english: "Sadashiva Statue (Bac Lieu, 12th century)",
    location: "Bảo tàng tỉnh Bạc Liêu",
    lat: 9.287275914177757, lng: 105.72631916950343, 
    category: "religious",
    badge: "Chăm Pa Statue",
    type: "religious",
    year: "Chăm Pa",
    desc: "A 12th-century stone statue of Sadashiva — the five-faced supreme form of Shiva — preserved at Bạc Liêu Provincial Museum. Its discovery in the southern delta attests to the far reach of Chăm Pa religious influence."
  },
  {
    id: 88,
    name: "Đầu tượng thần Siva",
    english: "Siva Head Sculpture (Bac Lieu, 12th century)",
    location: "Bảo tàng tỉnh Bạc Liêu",
    lat: 9.287275914177757, lng: 105.72631916950343, 
    category: "religious",
    badge: "Chăm Pa Statue",
    type: "religious",
    year: "Chăm Pa",
    desc: "A 12th-century Chăm Pa stone head of Shiva at Bạc Liêu Provincial Museum. Found far south of the Chăm Pa heartland, it is evidence of religious and cultural exchange between Chăm Pa and Óc Eo successor cultures."
  },
  {
    id: 89,
    name: "Pho tượng Trấn Vũ",
    english: "Tran Vu Deity Statue",
    location: "Đền Trấn Vũ, phường Thạch Bàn, quận Long Biên, Hà Nội",
    lat: 21.022247805885367, lng: 105.90145698431623, 
    category: "religious",
    badge: "Nguyễn Statue",
    type: "religious",
    year: "Nguyễn",
    desc: "A bronze statue of the protective deity Trấn Vũ cast in 1802 and enshrined at the Trấn Vũ temple in Long Biên, Hanoi. Its commanding scale and refined casting mark it as an outstanding example of early Nguyễn bronze work."
  },
  {
    id: 90,
    name: "Bệ thờ Vân Trạch Hòa",
    english: "Van Trach Hoa Altar Pedestal",
    location: "Bảo tàng Lịch sử Thừa Thiên - Huế", 
    lat: 16.444364199250696, lng: 107.58163529650726,
    category: "religious",
    badge: "Early Đại Việt Stone",
    type: "religious",
    year: "Lý",
    desc: "A 9th–10th century stone altar pedestal from Vân Trạch Hòa, held at the Thừa Thiên Huế History and Revolution Museum. Its intricate lotus and kīrtimukha carvings bridge late Chăm Pa and early Đại Việt decorative traditions."
  },
  {
    id: 91,
    name: "Phù điêu nữ thần Mahishasuramardini",
    english: "Mahishasuramardini Goddess Relief (Binh Dinh)",
    location: "Bảo tàng tỉnh Bình Định",
    lat: 13.770752734269983, lng: 109.23417282867622,
    category: "religious",
    badge: "Chăm Pa Relief",
    type: "religious",
    year: "Chăm Pa",
    desc: "An early 12th-century Chăm Pa sandstone relief of Mahishasuramardini — Durga slaying the buffalo demon — at Bình Định Provincial Museum. A masterwork of late Chăm sculptural dynamism and narrative storytelling."
  },
  {
    id: 92,
    name: "Hương án chùa Khám Lạng",
    english: "Kham Lang Pagoda Altar Table",
    location: "Chùa Khám Lạng, huyện Lục Nam, tỉnh Bắc Giang",
    lat: 21.26632672541801, lng: 106.39491301232583, 
    category: "religious",
    badge: "Lê Dynasty Altar",
    type: "religious",
    year: "Lê sơ",
    desc: "A large ceremonial altar table (hương án) dated 1432 at Khám Lạng Pagoda, Lục Nam, Bắc Giang. Its elaborate carved panels depicting dragons and clouds are an outstanding example of early Lê dynasty lacquered wood carving."
  },
  {
    id: 93,
    name: "Bức giá tượng (phủ điêu) chạm khắc hình tượng đức Lạc Long Quân và nhân vật về thời kỳ Hùng Vương",
    english: "Lạc Long Quân the patriarch, wood carving",
    location: "Đình Nội (Đền Lạc Long Quân), thôn Bình Đà, huyện Thanh Oai, Hà Nội",
    lat: 20.894544487982735, lng: 105.76678051931361, 
    category: "historical",
    badge: "Nguyễn Relief",
    type: "art",
    year: "Nguyễn",
    desc: "A late 19th–early 20th century carved and gilded wooden votive panel depicting Lạc Long Quân and figures of the Hùng Kings era, preserved at Bình Đà communal house. A rare visual document of the founding myths of Vietnamese civilisation."
  },
  {
    id: 94,
    name: "Mô hình nhà thời Trần",
    english: "Tran Dynasty House Model",
    location: "Bảo tàng tỉnh Nam Định",
    lat: 20.423497211811735, lng: 106.17487230192759,
    category: "historical",
    badge: "Trần Ceramic",
    type: "art",
    year: "Trần",
    desc: "A 13th–14th century ceramic model of a traditional house from the Trần dynasty, preserved at Nam Định Provincial Museum. A rare three-dimensional record of Trần-era domestic architecture and a treasure of decorative ceramics."
  },
  {
    id: 95,
    name: "Bia \"Thanh Hư Động\"",
    english: "Thanh Hu Dong Stele, Con Son",
    location: "Chùa Côn Sơn, thị xã Chí Linh, tỉnh Hải Dương",
    lat: 21.150824206815816, lng: 106.3823875075861,
    category: "historical",
    badge: "Trần Stele",
    type: "academic",
    year: "Trần",
    desc: "A stele inscribed with the name \"Thanh Hư Động\" (Pure Void Grotto), carved during the reign of Emperor Trần Duệ Tông (1372–1377) at Côn Sơn, the mountain retreat of national hero Nguyễn Trãi."
  },
  {
    id: 96,
    name: "Bia điện Nam Giao",
    english: "Nam Giao Altar Stele",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Lê Trung Hưng Stele",
    type: "academic",
    year: "Lê Trung Hưng",
    desc: "A stele dated 1679 from the Nam Giao altar — where Vietnamese emperors performed the Heaven sacrifice — preserved at the National History Museum. Its inscription documents the state rituals of the Lê–Trịnh period."
  },
  {
    id: 97,
    name: "Bia Khiêm Cung Ký",
    english: "Khiem Cung Ky Stele, Hue",
    location: "Trung tâm Bảo tồn Di tích Cố đô Huế, tỉnh Thừa Thiên Huế",
    lat: 16.4721594860747, lng: 107.58401506647661, 
    category: "historical",
    badge: "Nguyễn Stele",
    type: "academic",
    year: "Nguyễn",
    desc: "A stele dated 1875 inscribed by Emperor Tự Đức himself, placed in his mausoleum complex in Huế. The lengthy royal autobiography it contains is one of the most personal and literary inscriptions by any Vietnamese ruler."
  },
  {
    id: 98,
    name: "Bộ sưu tập vạc đồng thời Chúa Nguyễn",
    english: "Nguyen Lords Bronze Cauldron Collection",
    location: "Trung tâm Bảo tồn Di tích Cố đô Huế, tỉnh Thừa Thiên Huế",
    lat: 16.4721594860747, lng: 107.58401506647661, 
    category: "historical",
    badge: "Nguyễn Bronze",
    type: "art",
    year: "Nguyễn",
    desc: "A collection of large bronze cauldrons cast between 1659 and 1684 under the Nguyễn lords, now at the Huế Imperial Citadel. Used for ritual cooking at court ceremonies, they are among the finest examples of 17th-century Vietnamese bronze casting."
  },
  {
    id: 99,
    name: "Cửu Phẩm Liên Hoa chùa Giám",
    english: "Nine-Tiered Lotus Tower, Chua Giam",
    location: "Chùa Giám, xã Cẩm Sơn, huyện Cẩm Giàng, tỉnh Hải Dương",
    lat: 20.965432584221034, lng: 106.2110224612311, 
    category: "religious",
    badge: "Lê Trung Hưng Wood",
    type: "religious",
    year: "Lê Trung Hưng",
    desc: "A towering 17th-century rotating wooden lotus tower (Cửu Phẩm Liên Hoa) at Giám Pagoda, Cẩm Giàng, Hải Dương. One of only a handful surviving in Vietnam, it is an extraordinary feat of Buddhist devotional carpentry."
  },
  {
    id: 100,
    name: "Cây đèn gốm",
    english: "Ceramic Lamp Tree",
    location: "Bảo tàng Hà Nội",
    lat: 21.010414142525732, lng: 105.7869783116489, 
    category: "historical",
    badge: "Mạc Ceramic",
    type: "art",
    year: "Mạc",
    desc: "A tall ceramic lamp stand dated to the Mạc dynasty year Diên Thành 5 (1582), preserved at the Hanoi Museum. Its multi-tiered form adorned with dragons and phoenixes makes it a landmark piece of 16th-century Vietnamese ceramics."
  },
  {
    id: 101,
    name: "Long đình gốm Bát Tràng",
    english: "Bat Trang Ceramic Dragon Pavilion",
    location: "Bảo tàng Hà Nội",
    lat: 21.010414142525732, lng: 105.7869783116489, 
    category: "historical",
    badge: "Lê Trung Hưng Ceramic",
    type: "art",
    year: "Lê Trung Hưng",
    desc: "A 17th-century ceramic ritual pavilion (long đình) from the celebrated Bát Tràng kilns, now at the Hanoi Museum. Its architectural form and fine blue-and-white glaze represent the peak of Bát Tràng's export-quality ceramic tradition."
  },
  {
    id: 102,
    name: "Ấn Sắc mệnh chi bảo",
    english: "Sac Menh Chi Bao Imperial Seal",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Nguyễn Seal",
    type: "academic",
    year: "Nguyễn",
    desc: "A gold imperial seal inscribed \"Sắc mệnh chi bảo\" (Treasure of Imperial Edicts) cast in the 8th year of Emperor Minh Mệnh (1827). Used to authenticate royal decrees, it is one of the most important surviving symbols of Nguyễn dynastic authority."
  },
  {
    id: 103,
    name: "Ngai vua triều Nguyễn",
    english: "Nguyen Dynasty Imperial Throne",
    location: "Điện Thái Hòa, Trung tâm Bảo tồn Di tích Cố đô Huế",
    lat: 16.468829014478032, lng: 107.57883041950393, 
    category: "historical",
    badge: "Nguyễn Throne",
    type: "art",
    year: "Nguyễn",
    desc: "The gilded imperial throne of the Nguyễn dynasty, still in place at the Throne Hall (Điện Thái Hòa) in the Huế Imperial Citadel. The centrepiece of every royal audience, it embodies the majesty of Vietnam's last imperial dynasty."
  },
  {
    id: 104, 
    name: "Áo Tế giao",
    english: "Imperial Tế Giao Ceremonial Robe",
    location: "Bảo tàng Cổ vật Cung đình Huế, tỉnh Thừa Thiên Huế",
    lat: 16.47130938733041, lng: 107.58193008171665, 
    category: "historical",
    badge: "Nguyễn Textile",
    type: "art",
    year: "Nguyễn",
    desc: "The emperor's ceremonial robe worn during the Tế Giao (Heaven and Earth sacrifice) — the highest state ritual of the Nguyễn dynasty — preserved at the Huế Museum of Royal Antiquities. An exceptionally rare survival of Vietnamese imperial textiles."
  },

  // ── BATCH 5 · Quyết định 2496/QĐ-TTg · 22/12/2016 ───────────────
  {
    id: 105,
    name: "Ngẫu tượng Linga - Yoni",
    english: "Linga-Yoni Sacred Dyad",
    location: "Bảo tàng Tổng hợp tỉnh Trà Vinh",
    lat: 9.9162176089586, lng: 106.30510812354282, 
    category: "religious",
    badge: "Óc Eo Ritual",
    year: "Óc Eo",
    type: "religious",
    desc: "A 5th–6th century Linga-Yoni sculpted dyad representing the union of Shiva and Shakti, preserved at Trà Vinh Provincial Museum. One of the earliest and most complete examples of Hindu ritual sculpture from the ancient Mekong Delta."
  },
  {
    id: 106, 
    name: "Phù điêu Trà Liên 1",
    english: "Tra Lien Relief Panel 1",
    location: "Bảo tàng tỉnh Quảng Trị",
    lat: 16.821096448363843, lng: 107.09678857942819,
    category: "religious",
    badge: "Chăm Pa Relief",
    year: "Chăm Pa",
    type: "religious",
    desc: "A late 9th-century Chăm Pa sandstone relief from Trà Liên, Quảng Trị, preserved at the provincial museum. Its refined carving of celestial figures reflects the mature Đồng Dương sculptural style of early medieval Champa."
  },
  {
    id: 107,
    name: "Phù điêu Trà Liên 2",
    english: "Tra Lien Relief Panel 2",
    location: "Bảo tàng tỉnh Quảng Trị",
    lat: 16.821096448363843, lng: 107.09678857942819,
    category: "religious",
    badge: "Chăm Pa Relief",
    year: "Chăm Pa",
    type: "religious",
    desc: "A companion late 9th-century Chăm Pa relief from Trà Liên, forming a pair with Panel 1. Together they document a rare concentration of Chăm Pa artistic heritage in the northern reaches of the ancient kingdom."
  },
  {
    id: 108,
    name: "Phù điêu Thần Brahama",
    english: "Brahma Relief Panel",
    location: "Bảo tàng tỉnh Bình Định",
    lat: 13.770711018018957, lng: 109.23394749530915, 
    category: "religious",
    badge: "Chăm Pa Relief",
    year: "Chăm Pa",
    type: "religious",
    desc: "A 12th–13th century Chăm Pa sandstone relief of Brahma, the four-faced creator deity, at Bình Định Provincial Museum. Carved during the height of the Tháp Mẫm sculptural school, it showcases the most powerful phase of Chăm artistic expression."
  },
  {
    id: 109,
    name: "Thống gốm hoa nâu",
    english: "Brown Floral Glazed Ceramic Jar",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Trần Ceramic",
    year: "Trần",
    type: "art",
    desc: "A large 13th–14th century Trần dynasty ceramic storage jar decorated with brown floral motifs under a cream glaze, preserved at the National History Museum. A distinguished example of the distinctive hoa nâu (brown flower) ware unique to medieval Vietnam."
  },
  {
    id: 110,
    name: "Bia \"Thanh Mai Viên Thông tháp bi\"",
    english: "Thanh Mai Vien Thong Stele",
    location: "Chùa Thanh Mai, thị xã Chí Linh, tỉnh Hải Dương",
    lat: 21.217794060909743, lng: 106.46426116877672,
    category: "historical",
    badge: "Trần Stele",
    year: "Trần",
    type: "academic",
    desc: "A stele dated 1362 erected at Thanh Mai Pagoda, Chí Linh, recording the life of the eminent Trần-dynasty monk Viên Thông. It is a primary source on medieval Vietnamese Buddhism and the mountain monastery tradition."
  },
  {
    id: 111,
    name: "Bia vua Lê Thái Tổ",
    english: "King Le Thai To Memorial Stele",
    location: "Đền thờ vua Lê Thái Tổ, huyện Nậm Nhùn, tỉnh Lai Châu",
    lat: 22.0986832740146, lng: 103.11693512868312,
    category: "historical",
    badge: "Lê Dynasty Stele",
    year: "Lê sơ",
    type: "academic",
    desc: "A stele dated 1431 at the temple of King Lê Thái Tổ in Nậm Nhùn, Lai Châu — the northwesternmost national treasure in Vietnam. Erected to commemorate the founding emperor's military campaign in the region during the liberation war against Ming China."
  },
  {
    id: 112,
    name: "Bia \"Đại Việt Lam Sơn Chiêu Lăng bi\"",
    english: "Dai Viet Lam Son Chieu Lang Stele",
    location: "Khu di tích lịch sử Lam Kinh, huyện Thọ Xuân, tỉnh Thanh Hóa",
    lat: 19.926305025374482, lng: 105.40894225431818, 
    category: "historical",
    badge: "Lê Dynasty Stele",
    year: "Lê sơ",
    type: "academic",
    desc: "A late 15th-century stele at the Lam Kinh royal necropolis, Thanh Hóa, commemorating the mausoleum of a Lê dynasty emperor. Its imposing scale and masterful calligraphy make it one of the grandest royal inscriptions of the period."
  },
  {
    id: 113,
    name: "Đôi chuông chùa Đà Quận",
    english: "Da Quan Pagoda Bell Pair",
    location: "Khu di tích Chùa Đà Quận - Đền Quan Triều, thành phố Cao Bằng",
    lat: 22.685317793173972, lng: 106.18916027487303,
    category: "religious",
    badge: "Mạc Dynasty Bell",
    year: "Mạc",
    type: "religious",
    desc: "A pair of bronze bells cast in 1611 during the Mạc dynasty at Đà Quận Pagoda (also called Viên Minh), Cao Bằng. Cast during the Mạc lords' northern refuge period, they are rare survivors of Mạc-era religious bronze casting."
  },
  {
    id: 114,
    name: "Tượng Thiền sư Vũ Khắc Minh và Tượng Thiền sư Vũ Khắc Trường",
    english: "Monk Vu Khac Minh and Monk Vu Khac Truong Mummy Statues",
    location: "Chùa Đậu, huyện Thường Tín, thành phố Hà Nội",
    lat: 20.83575410336279, lng: 105.85532989684002, 
    category: "religious",
    badge: "Lê Trung Hưng Statue",
    year: "Lê Trung Hưng",
    type: "religious",
    desc: "Two mid-17th century lacquered mummy statues of monk-meditators Vũ Khắc Minh and Vũ Khắc Trường at Chùa Đậu, Thường Tín. Among the world's rarest surviving examples of self-mummification, their intact preserved remains are encased within the lacquer."
  },
  {
    id: 115,
    name: "Tượng Trấn Vũ đền Quán Thánh",
    english: "Tran Vu Statue, Quan Thanh Temple",
    location: "Đền Quán Thánh, quận Ba Đình, Hà Nội",
    lat: 21.043225760647214, lng: 105.83696101961203,
    category: "religious",
    badge: "Lê Trung Hưng Statue",
    year: "Lê Trung Hưng",
    type: "religious",
    desc: "A massive late 17th–early 18th century bronze statue of Trấn Vũ, guardian deity of the North, at Quán Thánh Temple, Ba Đình, Hanoi. Weighing nearly four tonnes, it is one of the largest and most revered bronze castings in Vietnamese history."
  },
  {
    id: 116,
    name: "Cửu Phẩm Liên Hoa chùa Động Ngọ",
    english: "Nine-Tiered Lotus Tower, Dong Ngo Pagoda",
    location: "Chùa Động Ngọ, huyện Thanh Hà, tỉnh Hải Dương",
    lat: 20.91746391711562, lng: 106.36812233586046, 
    category: "religious",
    badge: "Lê Trung Hưng Wood",
    year: "Lê Trung Hưng",
    type: "religious",
    desc: "A rotating nine-tiered wooden lotus tower dated 1692 at Động Ngọ Pagoda, Thanh Hà, Hải Dương. One of only a handful of Cửu Phẩm Liên Hoa towers remaining in Vietnam, it is an extraordinary feat of devotional carpentry and Buddhist cosmology in wood."
  },
  {
    id: 117,
    name: "Ấn vàng \"Đại Việt quốc Nguyễn chúa vĩnh trấn chi bảo\"",
    english: "Nguyen Lords Golden Seal",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Lê–Nguyễn Seal",
    year: "Lê Trung Hưng",
    type: "academic",
    desc: "A gold seal cast in 1709 (Vĩnh Thịnh year 5) inscribed \"Seal of Eternal Protection of the Nguyễn Lords of Đại Việt\", at the National History Museum. The highest symbol of Nguyễn lord sovereignty before the dynasty formally established the empire."
  },
  {
    id: 118,
    name: "Tập Sắc lệnh của Chủ tịch Chính phủ Lâm thời nước Việt Nam Dân chủ Cộng hòa 1945 - 1946",
    english: "Decrees of the Provisional Government Chairman 1945–1946",
    location: "Trung tâm Lưu trữ quốc gia III, Cục Văn thư và Lưu trữ nhà nước, Bộ Nội vụ",
    lat: 21.035094390208087, lng: 105.8119254177674, 
    category: "historical",
    badge: "Founding Document",
    year: "1945",
    type: "academic",
    desc: "A collection of decrees issued by President Hồ Chí Minh as Chairman of the Provisional Government from 30 August 1945 to 28 February 1946 — the founding legal documents of the Democratic Republic of Vietnam, preserved at the National Archives Centre III."
  },

  // ── BATCH 6 · Quyết định 2089/QĐ-TTg · 25/12/2017 ───────────────
  {
  id: 119,
  name: "Dao găm chuôi hình rắn ngậm chân voi",
  english: "Dagger with Snake-Elephant Hilt",
  location: "Bảo tàng tỉnh Nghệ An",
  lat: 18.671752573238535, lng: 105.67119532508532, 
  category: "historical",
  badge: "Ancient Weapon",
  type: "tools",
  year: "2000–2500 years ago",
  desc: "A dagger with a hilt carved as a snake biting an elephant's foot, dated 2000–2500 years ago, preserved at Nghệ An Provincial Museum."
},
{
  id: 120,
  name: "Muôi có cán hình tượng voi",
  english: "Ladle with Elephant Handle",
  location: "Bảo tàng tỉnh Nghệ An",
  lat: 18.671752573238535, lng: 105.67119532508532,
  category: "historical",
  badge: "Ancient Utensil",
  type: "tools",
  year: "2000–2500 years ago",
  desc: "A bronze ladle whose handle is modeled as an elephant figure, dated 2000–2500 years ago, preserved at Nghệ An Provincial Museum."
},
{
  id: 121,
  name: "Đàn đá Lộc Hòa",
  english: "Loc Hoa Lithophone",
  location: "Bảo tàng tỉnh Bình Phước",
  lat: 11.544469250574322, lng: 106.88598155788713, 
  category: "historical",
  badge: "Prehistoric Instrument",
  type: "tools",
  year: "≈3000 years ago",
  desc: "A stone lithophone (đàn đá) from Lộc Hòa, nearly 3,000 years old, preserved at Bình Phước Provincial Museum."
},
{
  id: 122,
  name: "Bộ khuôn đúc Nhơn Thành",
  english: "Nhon Thanh Casting Molds",
  location: "Bảo tàng Thành phố Cần Thơ",
  lat: 10.035110099875055, lng: 105.78682099872577, 
  category: "historical",
  badge: "Ancient Tool",
  type: "tools",
  year: "1st–7th century",
  desc: "A set of casting molds from Nhơn Thành dated to the 1st–7th centuries, preserved at Can Tho City Museum."
},
{
  id: 123,
  name: "Hộp đựng xá lị Tháp Nhạn",
  english: "Thap Nhan Reliquary Box",
  location: "Bảo tàng tỉnh Nghệ An",
  lat: 18.671752573238535, lng: 105.67119532508532,
  category: "religious",
  badge: "Buddhist Relic",
  type: "religious",
  year: "7th–8th century",
  desc: "A reliquary box (hộp xá lị) from Tháp Nhạn, dated to the 7th–8th centuries, preserved at Nghệ An Provincial Museum."
},
{
  id: 124,
  name: "Phù điêu Phật Chămpa Tây Nguyên",
  english: "Cham Buddha Relief (Central Highlands)",
  location: "Bảo tàng tỉnh Gia Lai",
  lat: 13.98516296752836, lng: 108.00600243859282, 
  category: "religious",
  badge: "Cham Relief",
  type: "religious",
  year: "6th–7th century",
  desc: "A Cham Buddhist relief from the Central Highlands (Tây Nguyên), dated to the 6th–7th centuries, preserved at Gia Lai Provincial Museum."
},
{
  id: 125,
  name: "Tượng Thần Vishnu Gò Thành",
  english: "Go Thanh Vishnu Statue",
  location: "Bảo tàng tỉnh Tiền Giang",
  lat: 10.36325519087024, lng: 106.3658366785034, 
  category: "religious",
  badge: "Óc Eo Sculpture",
  type: "religious",
  year: "6th–8th century",
  desc: "A Vishnu statue from Gò Thành, dated to the 6th–8th centuries, preserved at Tiền Giang Provincial Museum."
},
{
  id: 126,
  name: "Cặp tượng chim thần Garuda diệt rắn Tháp Mẫm",
  english: "Garuda vs Serpent Statues (Thap Mam)",
  location: "Bảo tàng tỉnh Bình Định",
  lat: 13.770711018018957, lng: 109.23394749530915, 
  category: "religious",
  badge: "Cham Sculpture",
  type: "religious",
  year: "13th century",
  desc: "A pair of Tháp Mẫm Garuda statues depicting Garuda defeating serpents, dated to the mid-13th century, preserved at Binh Dinh General Museum."
},
{
  id: 127,
  name: "Bộ tượng 10 linh thú Chùa Phật Tích",
  english: "Ten Sacred Animals Set (Phat Tich Pagoda)",
  location: "Chùa Phật Tích, Bắc Ninh",
  lat: 21.094071134435612, lng: 106.02661568703233,
  category: "religious",
  badge: "Ly Dynasty Sculpture",
  type: "religious",
  year: "11th century",
  desc: "A set of ten sacred animal statues from Phật Tích Pagoda, dated to the Lý dynasty (11th century)."
},
{
  id: 128,
  name: "Bộ tượng Phật Tứ Pháp vùng Dâu - Luy Lâu",
  english: "Four Dharma Buddha Statues (Dau–Luy Lau)",
  location: "Chùa Dâu / Chùa Phi Tướng / Chùa Dàn, Bắc Ninh",
  lat: 21.035579364559226, lng: 106.04262120367193, 
  category: "religious",
  badge: "Le Dynasty Sculpture",
  type: "religious",
  year: "18th century",
  desc: "A group of Four Dharma Buddha statues from the Dâu–Luy Lâu region, venerated at several pagodas in Bắc Ninh."
},
{
  id: 129,
  name: "Cột đá chạm rồng chùa Dạm",
  english: "Dragon-Carved Stone Pillar (Dam Pagoda)",
  location: "Chùa Dạm, Nam Sơn, Bắc Ninh",
  lat: 21.144391760556783, lng: 106.10181824043218, 
  category: "historical",
  badge: "Ly Dynasty Stone",
  type: "art",
  year: "11th century",
  desc: "A stone pillar carved with dragon motifs at Chùa Dạm, dated to the 11th century (Lý period)."
},
{
  id: 130,
  name: "Bia \"Đại Việt Lam Sơn Dụ Lăng Bi\" (Bia Lăng vua Lê Hiến Tông)",
  english: "Dai Viet Lam Son Royal Stele (Le Hien Tong)",
  location: "Khu di tích lịch sử Lam Kinh, huyện Thọ Xuân, tỉnh Thanh Hóa",
    lat: 19.926305025374482, lng: 105.40894225431818, 
  category: "historical",
  badge: "Le Dynasty Stele",
  type: "academic",
  year: "late 15th century",
  desc: "The royal stele known as 'Đại Việt Lam Sơn Dụ Lăng Bi' (Stele of King Lê Hiến Tông), from Lam Kinh, late 15th century."
},
{
  id: 131,
  name: "Hệ thống bia ma nhai Động Kính Chủ",
  english: "Dong Kinh Chu Stele System",
  location: "Di tích Động Kính Chủ, Hải Dương",
  lat: 21.031147920721494, lng: 106.50537285982246, 
  category: "historical",
  badge: "19th–20th Century Stele",
  type: "academic",
  year: "19th–early 20th century",
  desc: "The set of ma nhai steles at Động Kính Chủ, dated to the 19th–early 20th centuries, preserved in situ at the site in Hải Dương."
},
{
  id: 132,
  name: "Bia \"Côn Sơn Tư Phúc tự bi\"",
  english: "Con Son Tu Phuc Pagoda Stele",
  location: "Di tích Côn Sơn - Kiếp Bạc, Chí Linh, Hải Dương",
  lat: 21.150824206815816, lng: 106.3823875075861,
  category: "historical",
  badge: "Trần Stele",
  type: "academic",
  year: "1607",
  desc: "The stele 'Côn Sơn Tư Phúc tự bi' dated 1607 (Hoằng Định 8), preserved at the Côn Sơn–Kiếp Bạc complex."
},
{
  id: 133,
  name: "Bia hộp đá Đồi Cốc thời Mạc",
  english: "Doi Coc Stone Box Stele (Mac Period)",
  location: "Đền thờ Trạng nguyên Giáp Hải, Bắc Giang",
  lat: 21.285334647721992, lng: 106.23993709318005, 
  category: "historical",
  badge: "Mac Dynasty Stele",
  type: "academic",
  year: "1549",
  desc: "A stone box stele from Đồi Cốc dated 1549 (Mạc period), preserved at the Giáp Hải temple in Bắc Giang."
},
{
  id: 134,
  name: "Hai cánh cửa chạm rồng Chùa Keo",
  english: "Dragon-Carved Doors (Keo Pagoda)",
  location: "Bảo tàng Mỹ thuật Việt Nam, Hà Nội",
  lat: 21.030694022687022, lng: 105.83719480164763, 
  category: "historical",
  badge: "17th Century Woodwork",
  type: "art",
  year: "17th century",
  desc: "A pair of dragon-carved wooden doors from Chùa Keo, dated to the 17th century, now held at the Vietnam Fine Arts Museum."
},
{
  id: 135,
  name: "Long sàng trước Nghi môn ngoại và trước Bái đường Đền thờ Vua Đinh Tiên Hoàng",
  english: "Royal Bed (Long Sang) at Dinh Tien Hoang Shrine",
  location: "Khu di tích Cố đô Hoa Lư, Ninh Bình",
  lat: 20.284587322571124, lng: 105.90539161609469, 
  category: "historical",
  badge: "17th Century Artifact",
  type: "art",
  year: "17th century",
  desc: "The long sàng (royal bed) placed before the outer gate and main hall at the shrine of King Đinh Tiên Hoàng, dated to the 17th century."
},
{
  id: 136,
  name: "Mộc bản Chùa Bổ Đà",
  english: "Bo Da Pagoda Woodblocks",
  location: "Chùa Bổ Đà, Bắc Giang", 
  lat: 21.24233524263776, lng: 106.05236948673394,
  category: "historical",
  badge: "Woodblock Prints",
  type: "academic",
  year: "mid 18th–19th century",
  desc: "A collection of woodblock printing plates (mộc bản) from Chùa Bổ Đà, dated mid-18th to 19th century and early 20th century."
},
{
  id: 137,
  name: "Ngọc tỷ Đại Nam thụ thiên vĩnh mệnh",
  english: "Dai Nam Imperial Jade Seal",
  location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
  lat: 21.02454924042622, lng: 105.85966981144156,
  category: "historical",
  badge: "Nguyen Imperial Seal",
  type: "academic",
  year: "1847",
  desc: "The imperial jade seal 'Đại Nam thụ thiên vĩnh mệnh' dated 1847 (Thiệu Trị 7), preserved at the National History Museum."
},
{
  id: 138,
  name: "Bình phong sơn mài “Thiếu nữ và phong cảnh”",
  english: "Lacquer Screen \"Young Woman and Landscape\"",
  location: "Bảo tàng Mỹ thuật Việt Nam, Hà Nội",
  lat: 21.030694022687022, lng: 105.83719480164763, 
  category: "historical",
  badge: "20th Century Lacquer",
  type: "art",
  year: "1939",
  desc: "A lacquer folding screen titled 'Thiếu nữ và phong cảnh' (Young Woman and Landscape), dated 1939, preserved at the Vietnam Fine Arts Museum."
},
{
  id: 139,
  name: "Tranh \"Bác Hồ ở Chiến khu Việt Bắc\"",
  english: "Painting \"Uncle Ho in the Viet Bac War Zone\"",
  location: "Bảo tàng Mỹ thuật Việt Nam, Hà Nội",
  lat: 21.030694022687022, lng: 105.83719480164763, 
  category: "historical",
  badge: "20th Century Painting",
  type: "art",
  year: "1980",
  desc: "The painting 'Bác Hồ ở Chiến khu Việt Bắc' (Ho Chi Minh in the Viet Bac base), dated 1980, preserved at the Vietnam Fine Arts Museum."
},
{
  id: 140,
  name: "Tranh sơn mài \"Gióng\"",
  english: "Lacquer Painting \"Giong\"",
  location: "Bảo tàng Mỹ thuật Việt Nam, Hà Nội",
  lat: 21.030694022687022, lng: 105.83719480164763, 
  category: "historical",
  badge: "Late 20th Century Lacquer",
  type: "art",
  year: "1990",
  desc: "The lacquer painting 'Gióng', dated 1990, preserved at the Vietnam Fine Arts Museum."
},
{
  id: 141,
  name: "Tranh \"Thanh niên thành đồng\"",
  english: "Painting \"Youth Become Bronze\"",
  location: "Bảo tàng Mỹ thuật Thành phố Hồ Chí Minh",
  lat: 10.769958307366048, lng: 106.69909492464474,
  category: "historical",
  badge: "War Era Painting",
  type: "art",
  year: "1967–1978",
  desc: "The painting 'Thanh niên thành đồng' (Youth Become Bronze), dated 1967–1978, preserved at the Ho Chi Minh City Museum of Fine Arts."
},
{
  id: 142,
  name: "Tàu vận tải quân sự số hiệu HQ671",
  english: "Military Transport Ship HQ671",
  location: "Bảo tàng Hải quân",
  lat: 20.826177327476803, lng: 106.70016005680827,
  category: "historical",
  badge: "Naval Vessel",
  type: "tools",
  year: "Vietnam War era",
  desc: "The military transport ship HQ671 used during the resistance against the United States, preserved at the Naval Museum."
},

  // ── BATCH 7 · Quyết định 1821/QĐ-TTg · 24/12/2018 ───────────────
  {
    id: 143,
    name: "Bình gốm Đầu Rằm",
    english: "Dau Ram Ceramic Vessel",
    location: "Bảo tàng tỉnh Quảng Ninh", 
    lat: 20.948672139402653, lng: 107.09755230061832,
    category: "historical",
    badge: "Phùng Nguyên Ceramic",
    year: "Phùng Nguyên",
    type: "art",
    desc: "A late Phùng Nguyên culture ceramic vessel dated 3,400–3,000 years ago, preserved at Quảng Ninh Provincial Museum. Its sophisticated shape and surface decoration mark it as an outstanding example of northern Vietnamese Neolithic pottery."
  },
  {
    id: 144,
    name: "Bộ sưu tập bình gốm đất nung Long Thạnh",
    english: "Long Thanh Earthenware Ceramic Collection",
    location: "Bảo tàng Tổng hợp Quảng Ngãi", 
    lat: 15.125539541846619, lng: 108.80850812651427, 
    category: "historical",
    badge: "Neolithic Ceramic",
    year: "Tiền sử",
    type: "art",
    desc: "A collection of fired earthenware vessels from Long Thạnh, Quảng Ngãi, radiocarbon dated to 3,370 ± 40 years ago. Among the earliest examples of Sa Huỳnh cultural precursors, they document the sophisticated ceramic traditions of prehistoric central Vietnam."
  },
  {
    id: 145,
    name: "Tượng Tu sĩ Champa Phú Hưng",
    english: "Phu Hung Cham Monk Statue",
    location: "Bảo tàng Tổng hợp Quảng Ngãi",
    lat: 15.125539541846619, lng: 108.80850812651427,
    category: "religious",
    badge: "Chăm Pa Statue",
    year: "Chăm Pa",
    type: "religious",
    desc: "A 9th–10th century Chăm Pa sandstone statue of a seated monk from Phú Hưng, Quảng Ngãi, at the provincial museum. Its meditative posture and finely carved robes reflect the rich tradition of Buddhist monastic sculpture in medieval Champa."
  },
  {
    id: 146,
    name: "Trống đồng Pha Long",
    english: "Pha Long Bronze Drum",
    location: "Bảo tàng tỉnh Lào Cai", 
    lat: 22.44417006504708, lng: 104.00967405138731, 
    category: "historical",
    badge: "Đông Sơn Bronze",
    year: "Đông Sơn",
    type: "tools",
    desc: "An Đông Sơn culture bronze drum dated approximately 2,500–2,000 years ago, preserved at Lào Cai Provincial Museum. Found in the mountainous northwest borderlands, it extends the known geographic reach of the Đông Sơn civilisation."
  },
  {
    id: 147,
    name: "Mộ chum gỗ nắp trống đồng Phú Chánh",
    english: "Phu Chanh Log Coffin with Bronze Drum Lid",
    location: "Bảo tàng tỉnh Bình Dương", 
    lat: 10.989423592276937, lng: 106.6629694850491,
    category: "historical",
    badge: "Bronze Age Burial",
    year: "Tiền sử",
    type: "art",
    desc: "A unique burial assemblage from Phú Chánh, Bình Dương: a wooden log coffin (C14: 2,100 ± 40 years) sealed with a Đông Sơn bronze drum lid (2nd–1st century BCE). The combination of northern and southern material culture in one burial is extraordinary."
  },
  {
    id: 148,
    name: "Tượng Phật Nhơn Thành",
    english: "Nhon Thanh Buddha Statue",
    location: "Bảo tàng thành phố Cần Thơ",
    lat: 10.035110099875055, lng: 105.78682099872577, 
    category: "religious",
    badge: "Óc Eo Statue",
    year: "Óc Eo",
    type: "religious",
    desc: "A 4th–6th century Óc Eo culture Buddha statue from Nhơn Thành, preserved at Cần Thơ City Museum. Its graceful proportions and fine drapery show direct artistic influence from the Gupta school of Indian Buddhist sculpture."
  },
  {
    id: 149,
    name: "Bình gốm Nhơn Thành",
    english: "Nhon Thanh Ceramic Vessel",
    location: "Bảo tàng thành phố Cần Thơ",
    lat: 10.035110099875055, lng: 105.78682099872577, 
    category: "historical",
    badge: "Óc Eo Ceramic",
    year: "Óc Eo",
    type: "art",
    desc: "A 5th century Óc Eo ceramic vessel from Nhơn Thành, Cần Thơ, preserved at the city museum. Its refined form and glaze technique illustrate the advanced craft production of the ancient Funan trading civilisation of the Mekong Delta."
  },
  {
    id: 150,
    name: "Bộ Linga - Yoni Đá Nổi",
    english: "Da Noi Linga-Yoni Set",
    location: "Bảo tàng tỉnh An Giang", 
    lat: 10.389445882988412, lng: 105.43522183424875,
    category: "religious",
    badge: "Óc Eo Ritual",
    year: "Óc Eo",
    type: "religious",
    desc: "A 5th–6th century Linga-Yoni ritual dyad from Đá Nổi, An Giang, preserved at the provincial museum. One of the finest Óc Eo period Hindu ritual objects, it reflects the cosmopolitan religious landscape of the ancient Funan kingdom."
  },
  {
    id: 151,
    name: "Tượng Thần Brahma Giồng Xoài",
    english: "Giong Xoai Brahma Statue",
    location: "Bảo tàng tỉnh An Giang",
    lat: 10.389445882988412, lng: 105.43522183424875,
    category: "religious",
    badge: "Óc Eo Statue",
    year: "Óc Eo",
    type: "religious",
    desc: "A 6th–7th century stone statue of the four-faced creator god Brahma from Giồng Xoài, An Giang. Its refined iconography and craftsmanship place it among the finest examples of Óc Eo Hindu religious sculpture surviving in Vietnam."
  },
  {
    id: 152,
    name: "Tượng Thần Vishnu Vũng Liêm",
    english: "Vung Liem Vishnu Statue",
    location: "Bảo tàng tỉnh Vĩnh Long", 
    lat: 10.257171364545108, lng: 105.97134914365024,
    category: "religious",
    badge: "Óc Eo Statue",
    year: "Óc Eo",
    type: "religious",
    desc: "A 6th–7th century stone statue of Vishnu from Vũng Liêm, Vĩnh Long, at the provincial museum. Its four arms bearing the characteristic attributes — conch, discus, mace, and lotus — embody the Vaishnavite tradition of the Óc Eo civilisation."
  },
  {
    id: 153,
    name: "Tượng Phật Sơn Thọ - Trà Vinh",
    english: "Son Tho – Tra Vinh Buddha Statue",
    location: "Bảo tàng Lịch sử thành phố Hồ Chí Minh",
    lat: 10.788132913434895, lng: 106.70498351310206,
    category: "religious",
    badge: "Óc Eo Statue",
    year: "Óc Eo",
    type: "religious",
    desc: "A 6th–7th century Óc Eo bronze Buddha statue from Sơn Thọ, Trà Vinh, now at the HCMC History Museum. Its serene expression and gilded surface reflect the cosmopolitan Buddhist art of the ancient Funan kingdom at its height."
  },
  {
    id: 154,
    name: "Tượng Uma Dương Lệ",
    english: "Duong Le Uma Statue",
    location: "Bảo tàng tỉnh Quảng Trị",
    lat: 16.821096448363843, lng: 107.09678857942819,
    category: "religious",
    badge: "Chăm Pa Statue",
    year: "Chăm Pa",
    type: "religious",
    desc: "A 9th–10th century Chăm Pa stone statue of Uma (consort of Shiva) from Dương Lệ, Quảng Trị, at the provincial museum. Her graceful posture and finely detailed jewellery are hallmarks of the Đồng Dương sculptural school."
  },
  {
    id: 155,
    name: "Tượng Thần Shiva chùa Linh Sơn",
    english: "Shiva Statue, Linh Son Pagoda",
    location: "Chùa Linh Sơn, thành phố Quy Nhơn, tỉnh Bình Định",
    lat: 13.869864128965194, lng: 109.250602032002, 
    category: "religious",
    badge: "Chăm Pa Statue",
    year: "Chăm Pa",
    type: "religious",
    desc: "A 15th-century Chăm Pa stone statue of Shiva still venerated at Linh Sơn Pagoda in Quy Nhơn, Bình Định. One of the latest dated Chăm Pa religious sculptures, it documents the continuity of Hindu worship in the region after the decline of the Champa kingdom."
  },
  {
    id: 156,
    name: "Tượng Phật Quan Âm Thiên Thủ Thiên Nhãn",
    english: "Thousand-Hand Guanyin, Me So Pagoda",
    location: "Chùa Mễ Sở (Diên Phúc tự), huyện Văn Giang, tỉnh Hưng Yên",
    lat: 20.892660221124967, lng: 105.91852499923078,
    category: "religious", 
    badge: "Nguyễn Statue",
    year: "Nguyễn",
    type: "religious",
    desc: "A 19th-century gilded wood statue of the Thousand-Hand Thousand-Eye Guanyin at Mễ Sở Pagoda (Diên Phúc tự), Văn Giang, Hưng Yên. Its elaborate radiating arms and intricate lacquered surface make it an exceptional example of late Vietnamese Buddhist sculptural craft."
  },
  {
    id: 157,
    name: "Đài thờ Đồng Dương",
    english: "Dong Duong Altar Pedestal",
    location: "Bảo tàng Điêu khắc Chăm, Đà Nẵng",
    lat: 16.06035438969859, lng: 108.22341374785412, 
    category: "religious",
    badge: "Chăm Pa Altar",
    year: "Chăm Pa",
    type: "religious",
    desc: "A 9th–10th century Chăm Pa stone altar pedestal from the Đồng Dương monastery complex, one of the greatest Buddhist sites of ancient Champa, now preserved at the Museum of Cham Sculpture in Đà Nẵng."
  },
  {
    id: 158,
    name: "Hộp vàng Ngọa Vân - Yên Tử",
    english: "Ngoa Van – Yen Tu Golden Box",
    location: "Bảo tàng tỉnh Quảng Ninh",
    lat: 20.948672139402653, lng: 107.09755230061832,
    category: "religious",
    badge: "Trần Gold",
    year: "Trần",
    type: "art",
    desc: "A 14th-century gold reliquary box from the Ngọa Vân monastery on Yên Tử mountain, Quảng Ninh — the sacred heartland of the Trúc Lâm Zen school founded by Emperor-Monk Trần Nhân Tông. A rare survival of Trần royal Buddhist material culture."
  },
  {
    id: 159,
    name: "Bia \"Sùng Thiên tự bi\"",
    english: "Sung Thien Pagoda Stele",
    location: "Chùa Dâu (Sùng Thiên tự), huyện Gia Lộc, tỉnh Hải Dương",
    lat: 20.813107606970185, lng: 106.24184081241566, 
    category: "historical",
    badge: "Trần Stele",
    year: "Trần",
    type: "academic",
    desc: "A stele dated 1331 (Khai Hựu year 3) at Sùng Thiên Pagoda, Gia Lộc, Hải Dương. Its inscription records the restoration of an ancient pagoda and is a valuable document of Buddhism and local history under the Trần dynasty."
  },
  {
    id: 160,
    name: "Tháp gốm men chùa Trò",
    english: "Glazed Ceramic Tower, Chua Tro",
    location: "Bảo tàng tỉnh Vĩnh Phúc",  
    lat: 21.30576511992085, lng: 105.5930233435271,
    category: "religious",
    badge: "Trần Ceramic",
    year: "Trần",
    type: "art",
    desc: "A 14th-century glazed ceramic pagoda tower from Chùa Trò, preserved at Vĩnh Phúc Provincial Museum. A rare example of the Trần dynasty's sophisticated miniature architectural ceramics, used as votive offerings or altar decorations."
  },
  {
    id: 161,
    name: "Ấn Tuần phủ Đô tướng quân",
    english: "Governor-General Military Commander Seal",
    location: "Bảo tàng Tổng hợp tỉnh Quảng Bình", 
    lat: 17.468242139121028, lng: 106.62348801393924,
    category: "historical",
    badge: "Lê Dynasty Seal",
    year: "Lê sơ",
    type: "academic",
    desc: "A bronze seal dated 1515 (Hồng Thuận year 6) of the Governor-General Military Commander, preserved at Quảng Bình Provincial Museum. An official instrument of early Lê dynasty regional administration and one of the best-preserved bronze seals of the period."
  },
  {
    id: 162,
    name: "Kim sách \"Đế hệ thi\"",
    english: "De He Thi Golden Book",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Nguyễn Seal",
    year: "Nguyễn",
    type: "academic",
    desc: "A gold-leaf book of dynastic poems (\"Đế hệ thi\") compiled by Emperor Minh Mạng in 1823 to establish the naming conventions for the Nguyễn royal lineage, preserved at the National History Museum. A fundamental document of Nguyễn dynasty genealogy and imperial culture."
  },
  {
    id: 163,
    name: "Khuôn in tín phiếu mệnh giá 5 đồng",
    english: "5-Dong Banknote Printing Block",
    location: "Bảo tàng Thành phố Hồ Chí Minh", 
    lat: 10.775986397827785, lng: 106.6996118315418,
    category: "historical",
    badge: "Founding Document",
    year: "1947",
    type: "academic",
    desc: "A 1947 metal printing block used to produce the 5-đồng banknote of the Democratic Republic of Vietnam, preserved at the HCMC Museum. A tangible relic of the early financial infrastructure of the newly independent Vietnamese state during the resistance war."
  },
  {
    id: 164,
    name: "Xe ô tô \"Quốc tế\"",
    english: "\"Quoc Te\" International Automobile",
    location: "Bảo tàng Hậu Cần, Hà Nội",
    lat: 21.01893844122231, lng: 105.77355119242175,
    category: "historical",
    badge: "War Vehicle",
    year: "1949",
    type: "tools",
    desc: "A 1949 automobile known as the \"Quốc tế\" (International), preserved at the Logistics Museum in Hanoi. Used by President Hồ Chí Minh and senior leaders during the resistance war, it is one of the most historically significant vehicles of the independence era."
  },

  // ── BATCH 8 · Quyết định 88/QĐ-TTg · 15/01/2020 ───────────────
  {
    id: 165,
    name: "Sưu tập nha chương",
    english: "Nha Chuong Collection",
    location: "Bảo tàng Hùng Vương, tỉnh Phú Thọ",
    lat: 21.316107585500855, lng: 105.39645889489155, 
    category: "historical",
    badge: "Phùng Nguyên Collection",
    year: "Phùng Nguyên",
    type: "art",
    desc: "A Phùng Nguyên culture collection of nha chương dated around 3,500 years ago, preserved at the Hung Vuong Museum in Phu Tho. These prehistoric ornamented implements illustrate early Vietnamese ritual and personal adornment practices."
  },
  {
    id: 166,
    name: "Trống đồng Quảng Chính",
    english: "Quang Chinh Bronze Drum",
    location: "Bảo tàng tỉnh Quảng Ninh",
    lat: 20.948672139402653, lng: 107.09755230061832,
    category: "historical",
    badge: "Đông Sơn Bronze",
    year: "Đông Sơn",
    type: "tools",
    desc: "A Đông Sơn bronze drum from Quảng Chính dated to the 3rd–2nd century BCE, preserved at the Quang Ninh Provincial Museum. It represents the ritual metalworking mastery of the Đông Sơn civilization in northern Vietnam."
  },
  {
    id: 167,
    name: "Trống đồng Trà Lộc",
    english: "Tra Loc Bronze Drum",
    location: "Bảo tàng tỉnh Quảng Trị",
    lat: 16.821096448363843, lng: 107.09678857942819,
    category: "historical",
    badge: "Đông Sơn Bronze",
    year: "Đông Sơn",
    type: "tools",
    desc: "A Đông Sơn bronze drum from Trà Lộc, Quảng Trị, dated around 2,500 years ago, preserved at the provincial museum managed by the Quang Tri Heritage Centre. Its complex decorative panels are typical of Đông Sơn ritual drums."
  },
  {
    id: 168,
    name: "Linga - Yoni gỗ Nhơn Thành",
    english: "Nhon Thanh Wooden Linga-Yoni",
    location: "Bảo tàng thành phố Cần Thơ",
    lat: 10.035110099875055, lng: 105.78682099872577, 
    category: "religious",
    badge: "Óc Eo Ritual",
    year: "Óc Eo",
    type: "religious",
    desc: "A 5th century Óc Eo wooden Linga-Yoni set from Nhơn Thành, preserved at Can Tho City Museum. It is a rare example of Hindu ritual iconography in organic material from the Mekong Delta antiquity."
  },
  {
    id: 169,
    name: "Tượng Phật gỗ Giồng Xoài",
    english: "Giong Xoai Wooden Buddha Statue",
    location: "Bảo tàng tỉnh An Giang",
    lat: 10.389445882988412, lng: 105.43522183424875,
    category: "religious",
    badge: "Óc Eo Statue",
    year: "Óc Eo",
    type: "religious",
    desc: "A 4th–6th century Óc Eo wood Buddha statue from Giồng Xoài, preserved at An Giang Provincial Museum. Its devotional form attests to the early Buddhist artistic traditions in southern Vietnam."
  },
  {
    id: 170,
    name: "Tượng Phật đá Khánh Bình",
    english: "Khanh Binh Stone Buddha Statue",
    location: "Bảo tàng tỉnh An Giang",
    lat: 10.389445882988412, lng: 105.43522183424875,
    category: "religious",
    badge: "Óc Eo Statue",
    year: "Óc Eo",
    type: "religious",
    desc: "A 6th–7th century Óc Eo stone Buddha from Khánh Bình, An Giang, preserved at the provincial museum. Its serene face and simple drapery reflect the syncretic Hindu-Buddhist style of the ancient Mekong Delta world."
  },
  {
    id: 171,
    name: "Tượng sư tử đá chùa Hương Lãng",
    english: "Heron Lang Stone Lion Statue",
    location: "Chùa Hương Lãng, xã Minh Hải, huyện Văn Lâm, tỉnh Hưng Yên",
    lat: 20.96554188291345, lng: 106.05265991638481, 
    category: "historical",
    badge: "Lý–Trần Sculpture",
    year: "Late 11th–Early 12th century",
    type: "art",
    desc: "A pair of stone lion guardians from Huong Lang Pagoda dated to the late 11th or early 12th century, still preserved at the pagoda in Hung Yen. They represent royal Buddhist architectural sculpture from the early Lý period."
  },
  {
    id: 172,
    name: "Tượng đôi sư tử đá đền - chùa Bà Tấm",
    english: "Ba Tam Stone Lion Pairs",
    location: "Đền - chùa Bà Tấm, xã Dương Xá, huyện Gia Lâm, thành phố Hà Nội",
    lat: 21.00043559325086, lng: 105.96844933293771, 
    category: "historical",
    badge: "Lý Dynasty Sculpture",
    year: "12th century",
    type: "art",
    desc: "A pair of stone guardian lions at the Ba Tam temple-pagoda complex in Gia Lam, Hanoi, dated to the 12th century. They are among the oldest surviving examples of Vietnamese temple guardian sculpture."
  },
  {
    id: 173,
    name: "Hai tượng Hộ pháp chùa Nhạn Sơn",
    english: "Nhan Son Temple Guardian Statues",
    location: "Chùa Nhạn Sơn, xã Nhơn Hậu, thị xã An Nhơn, tỉnh Bình Định",
    lat: 13.910169821720457, lng: 109.07226106776349,
    category: "religious",
    badge: "Trần Dynasty Statues",
    year: "12th–13th century",
    type: "religious",
    desc: "A pair of Thập pháp guardian statues from Nhan Son Pagoda in An Nhon, dated to the 12th–13th century. They illustrate the martial Buddhist iconography used to protect temple precincts during the early Trần era."
  },
  {
    id: 174,
    name: "Tượng Mẫu Âu Cơ",
    english: "Au Co Mother Statue",
    location: "Khu di tích Đền Mẫu Âu Cơ, xã Hiền Lương, huyện Hạ Hòa, tỉnh Phú Thọ",
    lat: 21.60403806546774, lng: 104.91482510464154, 
    category: "religious",
    badge: "19th Century Folk Shrine",
    year: "19th century",
    type: "religious",
    desc: "A 19th century statue of Mother Au Co worshipped at the Au Co shrine complex in Phu Tho. It embodies the national foundation myth and the folk religious cult of the Vietnamese people."
  },
  {
    id: 175,
    name: "Chuông Nhật Tảo",
    english: "Nhat Tao Bell",
    location: "Đình Nhật Tảo, phường Đông Ngạc, quận Bắc Từ Liêm, Hà Nội",
    lat: 21.090680339770007, lng: 105.78762541504014,
    category: "religious",
    badge: "Lý Dynasty Bell",
    year: "10th century",
    type: "religious",
    desc: "A 10th century bell preserved at Nhat Tao communal house in Hanoi, used for Buddhist and village rites. It is one of the oldest known metal bells surviving from early independent Vietnam."
  },
  {
    id: 176,
    name: "Bia \"Cổ Việt thôn Diên Phúc tự bi minh\"",
    english: "Ancient Viet Village Dien Phuc Temple Stele",
    location: "Chùa Cảnh Lâm, xã Tân Việt, huyện Yên Mỹ, tỉnh Hưng Yên",
    lat: 20.860725487975653, lng: 106.06353118353643, 
    category: "historical",
    badge: "Lý–Trần Stele",
    year: "Lý–Trần period",
    type: "academic",
    desc: "A stele from Canh Lam Pagoda in Hung Yen bearing the inscription 'Co Viet thon Dien Phuc tu bi minh', dated to the Ly–Tran period. It is an important record of village religious life and temple patronage in medieval Vietnam."
  },
  {
    id: 177,
    name: "Bia Ma nhai Ngự chế của Vua Lê Thái Tổ",
    english: "Imperial Inscription Stele of King Le Thai To",
    location: "Vách núi Phia Tém, xã Bình Long, huyện Hòa An, tỉnh Cao Bằng",
    lat: 22.726611760019807, lng: 106.13510626920905, 
    category: "historical",
    badge: "Lê Dynasty Stele",
    year: "1431",
    type: "academic",
    desc: "A royal stele inscription carved on the Phia Tem cliff in Cao Bang in 1431, created by King Le Thai To. It commemorates the monarch's imperial order and is an exceptional example of early Le dynasty monumental writing."
  },
  {
    id: 178,
    name: "Đại Việt Lam Sơn Kính Lăng bi - Bia Lăng Vua Lê Túc Tông",
    english: "Lam Son Royal Mausoleum Stele of King Le Tuc Tong",
    location: "Khu di tích lịch sử Lam Kinh, huyện Thọ Xuân, tỉnh Thanh Hóa",
    lat: 19.926305025374482, lng: 105.40894225431818, 
    category: "historical",
    badge: "Lê Dynasty Stele",
    year: "16th century",
    type: "academic",
    desc: "A 16th century stele from the Lam Kinh royal mausoleum complex commemorating King Le Tuc Tong. It is a rare surviving inscription from the Later Le dynasty's ancestral cult."
  },
  {
    id: 179,
    name: "Bia \"Sùng chỉ bi ký\"",
    english: "Sung Chi Commemorative Stele",
    location: "Đền thờ Hà Tông Mục, xã Tùng Lộc, huyện Can Lộc, tỉnh Hà Tĩnh",
    lat: 18.448200149506317, lng: 105.80980802832298, 
    category: "historical",
    badge: "Lê–Trịnh Stele",
    year: "1696",
    type: "academic",
    desc: "A stele dated 1696 from the Ha Tong Muc temple in Ha Tinh. It records the merits of the local lord and is a significant example of late 17th century northern Vietnamese epigraphy."
  },
  {
    id: 180,
    name: "Bia \"Ngự kiến Thiên Mụ tự\"",
    english: "Thien Mu Temple Visit Stele",
    location: "Chùa Thiên Mụ, thành phố Huế, tỉnh Thừa Thiên Huế",
    lat: 16.453270389827086, lng: 107.54556265571601, 
    category: "historical",
    badge: "Nguyễn Dynasty Stele",
    year: "1715",
    type: "academic",
    desc: "A 1715 stele recording royal attendance at Thien Mu pagoda, preserved at the Hue Imperial Antiquities Museum. It documents Nguyễn dynasty religious patronage and imperial ceremony."
  },
  {
    id: 181,
    name: "12 Bia Tiến sĩ Văn Miếu Bắc Ninh",
    english: "12 Doctoral Steles of Bac Ninh Confucian Temple",
    location: "Văn Miếu Bắc Ninh, phường Đại Phúc, thành phố Bắc Ninh, tỉnh Bắc Ninh",
    lat: 21.17476160442157, lng: 106.06891566045836, 
    category: "historical",
    badge: "Thành Thái Steles",
    year: "1889",
    type: "academic",
    desc: "Twelve doctoral steles from Bac Ninh's Temple of Literature, dated to the Year Ky Suu under Emperor Thanh Thai (1889). They honor successful mandarins and preserve the imperial examination culture of late 19th century Vietnam."
  },
  {
    id: 182,
    name: "Bộ chóp tháp Champa Linh Thái",
    english: "Linh Thai Champa Tower Finials",
    location: "Bảo tàng Lịch sử Thừa Thiên - Huế", 
    lat: 16.444364199250696, lng: 107.58163529650726,
    category: "religious",
    badge: "Chăm Pa Architecture",
    year: "Chăm Pa",
    type: "religious",
    desc: "A group of 12th–13th century Champa finials from the Linh Thai tower, preserved in Hue's Thua Thien History Museum. They represent the sculptural ornament of Champa temple architecture."
  },
  {
    id: 183,
    name: "Thống đồng thời Trần",
    english: "Tran Dynasty Bronze Currency",
    location: "Bảo tàng tỉnh Quảng Ninh",
    lat: 20.948672139402653, lng: 107.09755230061832,
    category: "historical",
    badge: "Trần Currency",
    year: "13th–14th century",
    type: "tools",
    desc: "A Hoard of bronze coins from the Tran dynasty period, preserved at Quang Ninh Provincial Museum. These coins reflect medieval Vietnamese monetary circulation and state finance."
  },
  {
    id: 184,
    name: "Mâm bồng gốm men vẽ nhiều màu",
    english: "Polychrome Glazed Ceramic Offering Dish",
    location: "Bảo tàng tỉnh Quảng Ninh",
    lat: 20.948672139402653, lng: 107.09755230061832,
    category: "historical",
    badge: "Lê Sơ Ceramics",
    year: "Early Lê dynasty",
    type: "art",
    desc: "A polychrome glazed ceramic offering dish from the early Lê dynasty, preserved at Quang Ninh Provincial Museum. It demonstrates sophisticated multi-colored enamel decoration in Vietnamese ceramics."
  },
  {
    id: 185,
    name: "Khám thờ gỗ sơn son thếp vàng",
    english: "Lacquered Gilded Shrine Chest",
    location: "Đền - chùa Bà Tấm, xã Dương Xá, huyện Gia Lâm, Hà Nội",
    lat: 21.00043559325086, lng: 105.96844933293771,
    category: "historical",
    badge: "Lê dynasty Shrine",
    year: "16th century",
    type: "art",
    desc: "A 16th century lacquered and gilded wooden shrine chest from the Ba Tam temple-pagoda complex in Gia Lam, Hanoi. It reflects the high craftsmanship of ritual furniture in late medieval Vietnam."
  },
  {
    id: 186,
    name: "Ngai thờ gỗ sơn son thếp vàng",
    english: "Gilded Lacquered Throne",
    location: "Bảo tàng tỉnh Thái Bình",
    lat: 20.45293310231942, lng: 106.34822800283396,
    category: "historical",
    badge: "17th Century Throne",
    year: "17th century",
    type: "art",
    desc: "A 17th century lacquered and gilded wooden throne used for ancestral worship, preserved at Thai Binh Provincial Museum. It exemplifies the elaborate decorative traditions of late imperial Vietnamese court and temple furnishings."
  },
  {
    id: 187,
    name: "Cửa võng đình Diềm",
    english: "Diem Communal Hall Door Panel",
    location: "Đình Diềm, xã Hòa Long, thành phố Bắc Ninh, tỉnh Bắc Ninh",
    lat: 21.21485491043374, lng: 106.05016997594885, 
    category: "historical",
    badge: "17th Century Woodwork",
    year: "17th century",
    type: "art",
    desc: "A 17th century carved wooden lintel and door panel from Diem communal hall in Bac Ninh. It represents the rich tradition of lacquered architecture and woodcarving in northern Vietnamese village shrines."
  },
  {
    id: 188,
    name: "Bộ Phủ Việt đền thờ Vua Đinh Tiên Hoàng",
    english: "Din Viet Worship Set for King Dinh Tien Hoang",
    location: "Khu di tích Cố đô Hoa Lư, Ninh Bình",
    lat: 20.284587322571124, lng: 105.90539161609469, 
    category: "religious",
    badge: "17th Century Shrine Set",
    year: "17th century",
    type: "religious",
    desc: "A 17th century worship set used at the shrine of King Dinh Tien Hoang in Hoa Lu. It illustrates the ceremonial regalia of royal ancestor worship in Vietnam's ancient capital."
  },
  {
    id: 189,
    name: "Bộ Phủ Việt đền thờ Vua Lê Đại Hành",
    english: "Din Viet Worship Set for King Le Dai Hanh",
    location: "Khu di tích Cố đô Hoa Lư, Ninh Bình",
    lat: 20.286158936523815, lng: 105.90572137998917, 
    category: "religious",
    badge: "17th Century Shrine Set",
    year: "17th century",
    type: "religious",
    desc: "A 17th century worship set from the shrine of King Le Dai Hanh at Hoa Lu. It demonstrates the royal ritual furniture and ancestral cult of Vietnam's early dynasties."
  },
  {
    id: 190,
    name: "Long đao",
    english: "Long Spear",
    location: "Khu di tích tưởng niệm Vương triều Mạc, xã Ngũ Đoan, huyện Kiến Thụy, thành phố Hải Phòng",
    lat: 20.71512527725046, lng: 106.67634291693741, 
    category: "historical",
    badge: "Mạc Dynasty Weapon",
    year: "17th–18th century",
    type: "tools",
    desc: "A long ceremonial spear from the Mac dynasty era, preserved at the Mac Dynasty Memorial Site in Hai Phong. It is a rare example of late medieval Vietnamese martial regalia."
  },
  {
    id: 191,
    name: "Ấn \"Lương Tài Hầu chỉ ấn\"",
    english: "Luong Tai Hau Seal Box",
    location: "Bảo tàng Thành phố Hồ Chí Minh",
    lat: 10.775986397827785, lng: 106.6996118315418,
    category: "historical",
    badge: "19th Century Seal",
    year: "19th century",
    type: "academic",
    desc: "A lacquered and gilded wooden seal box of Luong Tai Hau from the late 19th century, preserved at the Ho Chi Minh City Museum. It reflects the administrative offices and noble titles of late Nguyễn dynasty Saigon local officials."
  },

  // ── BATCH 9 · Quyết định 2283/QĐ-TTg · 31/12/2020 ───────────────
  {
    id: 192,
    name: "Sưu tập khuôn đúc Cổ Loa",
    english: "Co Loa Casting Molds Collection",
    location: "Khu di tích Cổ Loa, xã Cổ Loa, huyện Đông Anh, thành phố Hà Nội",
    lat: 21.11160385841638, lng: 105.87332731625372, 
    category: "historical",
    badge: "Đông Sơn / Cổ Loa",
    year: "Đông Sơn (3rd–2nd century BCE)",
    type: "tools",
    desc: "A collection of bronze casting molds from Cổ Loa dating to the Đông Sơn cultural horizon, preserved at the Cổ Loa historical site."
  },
  {
    id: 193,
    name: "Bộ dụng cụ dệt gỗ Phú Chánh",
    english: "Phu Chanh Wooden Weaving Set",
    location: "Bảo tàng tỉnh Bình Dương",
    lat: 10.989192314564404, lng: 106.6631671820489, 
    category: "historical",
    badge: "Textile Tooling",
    year: "Late 3rd century BCE – 1st century CE",
    type: "tools",
    desc: "A wooden loom and weaving toolset from Phú Chánh illustrating ancient textile production, curated at the Bình Dương Provincial Museum."
  },
  {
    id: 194,
    name: "Bộ Linga - Yoni Linh Sơn",
    english: "Linh Son Linga–Yoni Set",
    location: "Bảo tàng tỉnh An Giang",
    lat: 10.389445882988412, lng: 105.43522183424875,
    category: "religious",
    badge: "Hindu Ritual",
    year: "7th century",
    type: "religious",
    desc: "A stone Linga–Yoni set from Linh Sơn, characteristic of early Hindu ritual sculpture, preserved at the An Giang Provincial Museum."
  },
  {
    id: 195,
    name: "Bộ sưu tập trang sức vàng Trà Veo 3 và Lâm Thượng",
    english: "Tra Veo 3 & Lam Thuong Gold Jewelry Collection",
    location: "Bảo tàng Tổng hợp Quảng Ngãi",
    lat: 15.125539541846619, lng: 108.80850812651427,
    category: "historical",
    badge: "Gold Adornment",
    year: "10th–12th century",
    type: "art",
    desc: "A collection of gold jewellery from the Trà Veo 3 and Lâm Thượng hoards, illustrating high-level metalwork, kept at the Quảng Ngãi General Museum."
  },
  {
    id: 196,
    name: "Sưu tập đĩa vàng hoa sen Cộng Vũ", 
    english: "Cong Vu Lotus Motif Gold Discs Collection",
    location: "Kho bạc nhà nước tỉnh Hưng Yên",
    lat: 20.658005603434386, lng: 106.05603067050139,
    category: "historical",
    badge: "Gold Ritual Objects",
    year: "11th–12th century",
    type: "art",
    desc: "A group of gold lotus-disc ritual objects from Cộng Vũ, now held in the Hung Yen Provincial Treasury."
  },
  {
    id: 197,
    name: "Trống đồng Kính Hoa",
    english: "Kinh Hoa Bronze Drum", 
    location: "Bảo tàng Kính Hoa, Hà Nội",
    lat: 21.030451401928165, lng: 105.83677335686808, 
    category: "historical",
    badge: "Đông Sơn Bronze",
    year: "Đông Sơn (4th–3rd century BCE)",
    type: "tools",
    desc: "A Đông Sơn bronze drum known as Kính Hoa, currently held in a private collection in Hanoi."
  },
  {
    id: 198,
    name: "Tượng Ganesha",
    english: "Ganesha Statue",
    location: "Bảo tàng Điêu khắc Chăm, Đà Nẵng",
    lat: 16.06035438969859, lng: 108.22341374785412, 
    category: "religious",
    badge: "Champa Sculpture",
    year: "7th–8th century",
    type: "religious",
    desc: "A Champa-period statue of the deity Ganesha, preserved at the Museum of Cham Sculpture in Đà Nẵng."
  },
  {
    id: 199,
    name: "Tượng Gajasimha",
    english: "Gajasimha Statue",
    location: "Bảo tàng Điêu khắc Chăm, Đà Nẵng",
    lat: 16.06035438969859, lng: 108.22341374785412, 
    category: "religious",
    badge: "Champa Sculpture",
    year: "12th century",
    type: "religious",
    desc: "A 12th century Champa gajasimha (elephant-lion) statue, part of the Cham sculptural corpus at the Đà Nẵng museum."
  },
  {
    id: 200,
    name: "Tượng nam Thần",
    english: "Male Deity Statue",
    location: "Bảo tàng tỉnh Bạc Liêu",
    lat: 9.287275914177757, lng: 105.72631916950343, 
    category: "religious",
    badge: "Óc Eo Sculpture",
    year: "11th–12th century",
    type: "religious",
    desc: "A male deity statue from the Óc Eo cultural context, currently preserved in the Bạc Liêu Provincial Museum."
  },
  {
    id: 201,
    name: "Tượng Phật Hoàng Trần Nhân Tông",
    english: "King Trần Nhân Tông Buddha Statue",
    location: "Tháp Huệ Quang, chùa Hoa Yên, Khu Di tích Yên Tử, xã Thượng Yên Công, thành phố Uông Bí, tỉnh Quảng Ninh",
    lat: 21.15082362526414, lng: 106.7176407261431,
    category: "religious",
    badge: "Trần Dynasty",
    year: "17th century",
    type: "religious",
    desc: "A 17th century statue representing Emperor Trần Nhân Tông in a Buddhist cult context, enshrined at Huệ Quang tower, Yên Tử complex."
  },
  {
    id: 202, 
    name: "Tượng Thái tổ Mạc Đăng Dung",
    english: "Mạc Đăng Dung Ancestral Statue",
    location: "Chùa Trà Phương, xã Thụy Hương, huyện Kiến Thụy, thành phố Hải Phòng",
    lat: 20.744232141863854, lng: 106.65024383049996,
    category: "historical",
    badge: "Mạc Dynasty",
    year: "16th century",
    type: "religious",
    desc: "A 16th century statue of Mạc Đăng Dung venerated at Trà Phương Pagoda in Hải Phòng."
  },
  {
    id: 203,
    name: "Bộ tượng Phật Tam thế chùa Bút Tháp",
    english: "Three-World Buddha Group of Bút Tháp",
    location: "Chùa Bút Tháp, xã Đình Tổ, huyện Thuận Thành, tỉnh Bắc Ninh",
    lat: 21.060798157536933, lng: 106.0227824090329,
    category: "religious",
    badge: "17th Century",
    year: "17th century",
    type: "religious",
    desc: "The Tam Thế (Three-World) Buddha ensemble from Bút Tháp Pagoda, an outstanding 17th century devotional group."
  },
  {
    id: 204,
    name: "Phù điêu nữ Thần Sarasvati",
    english: "Sarasvati Relief",
    location: "Bảo tàng tỉnh Bình Định",
    lat: 13.770711018018957, lng: 109.23394749530915,
    category: "religious",
    badge: "Hindu Relief",
    year: "12th century",
    type: "art",
    desc: "A bas-relief of the goddess Sarasvati dating to the 12th century, kept at the Bình Định General Museum."
  },
  {
    id: 205,
    name: "Phù điêu Vua Pô Rômê",
    english: "King Po Rome Relief",
    location: "Di tích tháp Pô Rômê, xã Phước Hữu, huyện Ninh Phước, tỉnh Ninh Thuận",
    lat: 11.5380, lng: 108.9890,
    category: "historical",
    badge: "Cham Relief",
    year: "17th century",
    type: "art",
    desc: "A sculpted relief depicting King Pô Rômê at the Pô Rômê tower complex, conserved in Ninh Thuận."
  },
  {
    id: 206,
    name: "Phù điêu Thái Hoàng Thái hậu Vũ Thị Ngọc Toàn",
    english: "Empress Vũ Thị Ngọc Toàn Relief",
    location: "Chùa Trà Phương, xã Thụy Hương, huyện Kiến Thụy, thành phố Hải Phòng",
    lat: 20.8800, lng: 106.6570,
    category: "historical",
    badge: "Royal Relief",
    year: "16th century",
    type: "art",
    desc: "A 16th century carved relief of Empress Vũ Thị Ngọc Toàn, housed at Trà Phương Pagoda."
  },
  {
    id: 207,
    name: "Bia Hòa Lai",
    english: "Hoa Lai Stele",
    location: "Bảo tàng tỉnh Ninh Thuận",
    lat: 11.564187215963564, lng: 108.9994689836557,
    category: "historical",
    badge: "Epigraphy",
    year: "Late 8th – Early 9th century",
    type: "academic",
    desc: "The Hòa Lai stele, an early medieval inscription preserved at the Ninh Thuận Provincial Museum."
  },
  {
    id: 208,
    name: "Hệ thống thành bậc đá chùa Hương Lãng",
    english: "Huong Lang Pagoda Terraced Stone Steps",
    location: "Chùa Hương Lãng, xã Minh Hải, huyện Văn Lâm, tỉnh Hưng Yên",
    lat: 20.96554188291345, lng: 106.05265991638481,
    category: "historical",
    badge: "Temple Architecture",
    year: "Late 11th – Early 12th century",
    type: "historical",
    desc: "The terraced stone stair system of Huong Lang Pagoda, an architectural ensemble from the late 11th–early 12th century, still at the pagoda site."
  },
  {
    id: 209, 
    name: "Bộ thành bậc Điện Kính Thiên",
    english: "Dien Kinh Thien Stair Components",
    location: "Điện Kính Thiên, Khu Trung tâm Hoàng thành Thăng Long - Hà Nội",
    lat: 21.036776332252703, lng: 105.84029126421316,
    category: "historical",
    badge: "Imperial Architecture",
    year: "15th century",
    type: "historical",
    desc: "A set of stair components from the historic Điện Kính Thiên hall in the Thăng Long Imperial Citadel, preserved in situ."
  },
  {
    id: 210,
    name: "Bình gốm hoa nâu Kinnari",
    english: "Kinnari Brown-Decorated Vase",
    location: "Bảo tàng tỉnh Quảng Ninh",
    lat: 20.948672139402653, lng: 107.09755230061832,
    category: "historical",
    badge: "Ceramic",
    year: "11th–12th century",
    type: "art",
    desc: "A brown-decorated ceramic vase with kinnari motifs from the 11th–12th centuries, kept at the Quảng Ninh Provincial Museum."
  },
  {
    id: 211,
    name: "Bình gốm hoa sen",
    english: "Lotus-Decorated Ceramic Vase",
    location: "Bảo tàng tỉnh Quảng Ninh",
    lat: 20.948672139402653, lng: 107.09755230061832,
    category: "historical",
    badge: "Ceramic",
    year: "11th–12th century",
    type: "art",
    desc: "A lotus-motif ceramic vase of the 11th–12th centuries, preserved at the Quảng Ninh museum."
  },
  {
    id: 212,
    name: "Thạp gốm hoa nâu",
    english: "Brown-Decorated Ceramic Jar",
    location: "Bảo tàng tỉnh Quảng Ninh",
    lat: 20.948672139402653, lng: 107.09755230061832,
    category: "historical",
    badge: "Ceramic",
    year: "11th–12th century",
    type: "art",
    desc: "A large brown-glazed ceramic jar decorated with floral motifs from the Quảng Ninh collections."
  },
  {
    id: 213,
    name: "Hương án chùa Bút Tháp",
    english: "Bút Tháp Incense Table (Hương án)",
    location: "Chùa Bút Tháp, xã Đình Tổ, huyện Thuận Thành, tỉnh Bắc Ninh",
    lat: 21.060798157536933, lng: 106.0227824090329,
    category: "religious",
    badge: "17th Century Furnishing",
    year: "17th century",
    type: "religious",
    desc: "A 17th century incense table from Bút Tháp Pagoda used in liturgical practice, preserved at the pagoda."
  },
  {
    id: 214,
    name: "Tòa Cửu phẩm liên hoa chùa Bút Tháp",
    english: "Nine-Tiered Lotus Throne of Bút Tháp",
    location: "Chùa Bút Tháp, xã Đình Tổ, huyện Thuận Thành, tỉnh Bắc Ninh",
    lat: 21.060798157536933, lng: 106.0227824090329,
    category: "religious",
    badge: "17th Century",
    year: "17th century",
    type: "religious",
    desc: "The nine-tiered lotus throne (Cửu phẩm liên hoa) at Bút Tháp Pagoda, a distinctive 17th century devotional furnishing."
  },
  {
    id: 215,
    name: "Cửa võng đình Thổ Hà",
    english: "Tho Ha Communal Hall Lintel",
    location: "Đình Thổ Hà, xã Vân Hà, huyện Việt Yên, tỉnh Bắc Giang",
    lat: 21.203047989148963, lng: 106.04232493790845,
    category: "historical",
    badge: "17th Century Woodwork",
    year: "17th century",
    type: "art",
    desc: "A carved lintel (cửa võng) from Thổ Hà communal hall representing 17th century village architectural woodwork, preserved at the đình."
  },

  // ── BATCH 10 · Quyết định 2198/QĐ-TTg · 25/12/2021 ───────────────
  {
    id: 216,
    name: "Trống đồng Gia Phú",
    english: "Gia Phu Bronze Drum",
    location: "Bảo tàng tỉnh Lào Cai",
    lat: 22.44417006504708, lng: 104.00967405138731,
    category: "historical",
    badge: "Đông Sơn Bronze",
    year: "Đông Sơn (3rd–2nd century BCE)",
    type: "tools",
    desc: "A Đông Sơn bronze drum from the Gia Phú find, preserved at the Lào Cai Provincial Museum."
  },
  {
    id: 217,
    name: "Thạp đồng Văn hóa Đông Sơn",
    english: "Đông Sơn Bronze Jar",
    location: "Bảo tàng tỉnh Quảng Ninh",
    lat: 20.948672139402653, lng: 107.09755230061832,
    category: "historical",
    badge: "Đông Sơn",
    year: "3rd–2nd century BCE",
    type: "tools",
    desc: "A bronze tripod jar (thạp) from the Đông Sơn cultural assemblage, held at the Quảng Ninh Provincial Museum."
  },
  {
    id: 218,
    name: "Mặt nạ vàng Giồng Lớn",
    english: "Giong Lon Gold Mask", 
    location: "Bảo tàng tỉnh Bà Rịa - Vũng Tàu",
    lat: 10.350308509387895, lng: 107.06955479837507,
    category: "historical",
    badge: "Gold Ritual Object",
    year: "1st century BCE – 2nd century CE",
    type: "art",
    desc: "A gold funerary mask from the Giồng Lớn context, preserved at the Bà Rịa–Vũng Tàu Provincial Museum."
  },
  {
    id: 219,
    name: "Sưu tập qua đồng Long Giao",
    english: "Long Giao Bronze Mirror Collection",
    location: "Bảo tàng tỉnh Đồng Nai", 
    lat: 10.958372700687931, lng: 106.82964525957036,
    category: "historical",
    badge: "Bronze Mirrors",
    year: "1st–3rd century",
    type: "art",
    desc: "A hoard of bronze mirrors and related metalwork from Long Giao, curated at the Đồng Nai Provincial Museum."
  },
  {
    id: 220,
    name: "Phù điêu Phật Linh Sơn Bắc", 
    english: "Linh Son Bac Buddha Relief",
    location: "Ban Quản lý di tích Văn hóa Óc Eo, tỉnh An Giang",
    lat: 10.254782872639185, lng: 105.15488751777913,
    category: "religious",
    badge: "Óc Eo Relief",
    year: "3rd–4th century",
    type: "religious",
    desc: "A stone relief of the Buddha from Linh Sơn Bắc, preserved by the Óc Eo heritage management in An Giang."
  },
  {
    id: 221,
    name: "Nhẫn Nandin Giồng Cát",
    english: "Nandin Ring from Giong Cat",
    location: "Ban Quản lý di tích Văn hóa Óc Eo, tỉnh An Giang",
    lat: 10.254782872639185, lng: 105.15488751777913,
    category: "historical",
    badge: "Óc Eo Jewelry",
    year: "5th century",
    type: "art",
    desc: "A precious ring associated with Nandin motifs found at Giồng Cát, maintained by the Óc Eo site authorities."
  },
  {
    id: 222,
    name: "Tượng Thần Vishnu Bình Hòa",
    english: "Binh Hoa Vishnu Statue",
    location: "Bảo tàng tỉnh Đồng Nai",
    lat: 10.958372700687931, lng: 106.82964525957036,
    category: "religious",
    badge: "Hindu Sculpture",
    year: "c. 6th–7th century",
    type: "religious",
    desc: "A statue of the deity Vishnu from Bình Hòa, illustrating early Hindu influence in southern Vietnam, preserved at Đồng Nai Museum."
  },
  {
    id: 223,
    name: "Sưu tập vàng lá chạm khắc hình voi Gò Thành",
    english: "Go Thanh Engraved Gold-Leaf Elephant Set",
    location: "Bảo tàng tỉnh Tiền Giang",
    lat: 10.36325519087024, lng: 106.3658366785034,
    category: "historical",
    badge: "Goldwork",
    year: "6th–8th century",
    type: "art",
    desc: "A collection of gold-leaf ornaments with elephant motifs from Gò Thành, held at the Tiền Giang Provincial Museum."
  },
  {
    id: 224,
    name: "Đài thờ Mỹ Sơn A10", 
    english: "My Son A10 Sanctuary",
    location: "Đền A10, khu đền tháp Mỹ Sơn, huyện Duy Xuyên, tỉnh Quảng Nam",
    lat: 15.762616911754739, lng: 108.12509426247114,
    category: "religious",
    badge: "Champa Sanctuary",
    year: "9th–10th century",
    type: "religious",
    desc: "The A10 sanctuary tower from Mỹ Sơn, part of the Cham temple complex, preserved in situ at the My Son site."
  },
  {
    id: 225, 
    name: "Lá đề chim phượng Hoàng thành Thăng Long",
    english: "Phoenix Leaf Panel, Thang Long Citadel",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical",
    badge: "Imperial Decoration",
    year: "11th century",
    type: "art",
    desc: "An architectural decorative panel with phoenix motif (lá đề chim phượng) from the Thăng Long Imperial Citadel collection, conserved at the Thang Long Preservation Centre."
  },
  {
    id: 226, 
    name: "Sưu tập gốm men trắng An Biên",
    english: "An Bien White-Glazed Ceramics Collection",
    location: "Sưu tập tư nhân An Biên, thành phố Hải Phòng",
    lat: 20.862074186512505, lng: 106.6827070274161,
    category: "historical",
    badge: "Ceramics",
    year: "11th–12th century",
    type: "art",
    desc: "A private assemblage of white-glazed ceramics attributed to the An Biên workshops, currently held in a private collection in Hải Phòng."
  },
  {
    id: 227,
    name: "Phù điêu Thần Hộ pháp Mả Chùa",
    english: "Guardian Deity Relief from Ma Chua",
    location: "Bảo tàng tỉnh Bình Định",
    lat: 13.770711018018957, lng: 109.23394749530915,
    category: "religious",
    badge: "Guardian Relief",
    year: "12th century",
    type: "religious",
    desc: "A stone relief of a guardian deity from the Mả Chùa archaeological context, preserved at the Bình Định Museum."
  },
  {
    id: 228,
    name: "Thống gốm hoa nâu An Sinh",
    english: "An Sinh Brown-Decorated Ceramic Bowl",
    location: "Bảo tàng tỉnh Quảng Ninh",
    lat: 20.948672139402653, lng: 107.09755230061832,
    category: "historical",
    badge: "Ceramic",
    year: "13th century",
    type: "art",
    desc: "A brown-glazed ceramic bowl (thống) from the An Sinh corpus, in the holdings of the Quảng Ninh Provincial Museum."
  },
  {
    id: 229,
    name: "Thạp gốm hoa nâu thời Trần",
    english: "Tran-era Brown-Decorated Ceramic Jar",
    location: "Bảo tàng tỉnh Quảng Ninh",
    lat: 20.948672139402653, lng: 107.09755230061832,
    category: "historical",
    badge: "Tran Ceramics",
    year: "13th–14th century",
    type: "art",
    desc: "A brown-decorated ceramic jar from the Trần period, preserved at the Quảng Ninh museum."
  },
  {
    id: 230,
    name: "Bàn thờ Phật bằng đá chùa Xuân Lũng",
    english: "Stone Buddha Altar of Xuan Lung Pagoda",
    location: "Chùa Xuân Lũng, xã Xuân Lũng, huyện Lâm Thao, tỉnh Phú Thọ",
    lat: 21.365093516141464, lng: 105.2703540058129, 
    category: "religious",
    badge: "14th Century",
    year: "14th century",
    type: "religious",
    desc: "A carved stone altar used for Buddha veneration at Xuân Lũng Pagoda, preserved in situ."
  },
  {
    id: 231,
    name: "Hai bát sứ ngự dụng Hoàng thành Thăng Long",
    english: "Two Imperial Porcelain Bowls, Thang Long",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical",
    badge: "Imperial Porcelain",
    year: "15th century",
    type: "art",
    desc: "A pair of imperial-use porcelain bowls from the Thăng Long citadel assemblage, conserved at the Thăng Long Preservation Centre."
  },
  {
    id: 232,
    name: "Bình gốm men vẽ nhiều màu",
    english: "Polychrome Painted Ceramic Vase",
    location: "Bảo tàng tỉnh Quảng Ninh",
    lat: 20.948672139402653, lng: 107.09755230061832,
    category: "historical",
    badge: "Ceramics",
    year: "15th century",
    type: "art",
    desc: "A multicolour painted ceramic vase from the 15th century in the Quảng Ninh museum holdings."
  },
  {
    id: 233, 
    name: "Tháp đất nung đền An Xá",
    english: "An Xa Terracotta Tower",
    location: "Đền An Xá, xã An Viên, huyện Tiên Lữ, tỉnh Hưng Yên",
    lat: 20.681798883856104, lng: 106.10471561267265,
    category: "historical",
    badge: "Terracotta Architecture",
    year: "16th–17th century",
    type: "historical",
    desc: "A terracotta tower structure from An Xá shrine, preserved at the An Xá temple complex."
  },
  {
    id: 234,
    name: "Cây hương chùa Tứ Kỳ",
    english: "Incense Stand of Tu Ky Pagoda",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "religious",
    badge: "17th Century Furnishing",
    year: "17th century",
    type: "religious",
    desc: "A 17th century incense stand from Tu Ky Pagoda, now kept at the National Museum of History."
  },
  {
    id: 235,
    name: "Hương án chùa Keo (Thái Bình)",
    english: "Keo Pagoda Incense Table", 
    location: "Chùa Keo, xã Duy Nhất, huyện Vũ Thư, tỉnh Thái Bình",
    lat: 20.360796794579883, lng: 106.2972457901102,
    category: "religious",
    badge: "17th Century Furnishing",
    year: "17th century",
    type: "religious",
    desc: "An incense table (hương án) from Keo Pagoda in Thái Bình, dating to the 17th century and preserved at the temple."
  },
  {
    id: 236,
    name: "Ấn \"Hoàng đế Tôn thân chi bảo\"",
    english: "Imperial Seal \"Hoang de Ton than chi bao\"",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Imperial Seal",
    year: "1827",
    type: "academic",
    desc: "The imperial seal inscribed 'Hoàng đế Tôn thân chi bảo' dated 1827, preserved at the National Museum of Vietnamese History."
  },
  {
    id: 237,
    name: "Mộc bản sách \"Hải Thượng y tông tâm lĩnh\"",
    english: "Woodblocks of 'Hai Thuong y tong tam linh'",
    location: "Bảo tàng tỉnh Bắc Ninh",
    lat: 21.184363149219163, lng: 106.07535260928978,
    category: "historical",
    badge: "Woodblock Prints",
    year: "1885",
    type: "academic",
    desc: "The original woodblock printing set for the medical text 'Hải Thượng y tông tâm lĩnh' (1885), preserved at the Bắc Ninh Museum."
  },
  {
    id: 238,
    name: "Bộ sưu tập bản phác thảo mẫu Quốc huy Việt Nam của Họa sĩ Bùi Trang Chước",
    english: "Bùi Trang Chước Vietnam Coat of Arms Sketches Collection",
    location: "Trung tâm Lưu trữ quốc gia III, Cục Văn thư và Lưu trữ nhà nước, Bộ Nội vụ",
    lat: 21.035094390208087, lng: 105.8119254177674, 
    category: "historical",
    badge: "Modern Design",
    year: "1953–1955",
    type: "academic",
    desc: "A collection of draft sketches for the Vietnamese coat of arms by artist Bùi Trang Chước from 1953–1955, held at the National Archives Center III."
  },

  // ── BATCH 11 · Quyết định 41/QĐ-TTg · 30/01/2023 ───────────────
  {
    id: 239,
    name: "Sưu tập công cụ sơ kỳ đá cũ An Khê",
    english: "An Khe Early Paleolithic Toolset",
    location: "Bảo tàng tỉnh Gia Lai",
    lat: 13.98516296752836, lng: 108.00600243859282, 
    category: "historical",
    badge: "Paleolithic Tools",
    year: "c. 800,000 years ago",
    type: "tools",
    desc: "An assemblage of early Paleolithic stone tools from An Khê, preserved at the Gia Lai Provincial Museum."
  },
  {
    id: 240,
    name: "Trống đồng Tiên Nội I",
    english: "Tien Noi I Bronze Drum", 
    location: "Bảo tàng tỉnh Hà Nam",
    lat: 20.54122568286816, lng: 105.90405953765803,
    category: "historical",
    badge: "Đông Sơn Bronze",
    year: "Đông Sơn (4th–3rd century BCE)",
    type: "tools",
    desc: "A Đông Sơn culture bronze drum from the Tiên Nội I context, held at the Hà Nam Provincial Museum."
  },
  {
    id: 241,
    name: "Trống đồng Kính Hoa II",
    english: "Kinh Hoa II Bronze Drum",
    location: "Bảo tàng Kính Hoa, Hà Nội",
    lat: 21.030451401928165, lng: 105.83677335686808, 
    category: "historical",
    badge: "Đông Sơn Bronze",
    year: "2nd–1st century BCE",
    type: "tools",
    desc: "A late pre-imperial Đông Sơn drum known as Kính Hoa II, currently in the private collection of Nguyễn Văn Kính in Hanoi."
  },
  {
    id: 242,
    name: "Thạp đồng Văn hoá Đông Sơn", 
    english: "Đông Sơn Bronze Jar",
    location: "Bảo tàng Hoàng gia Nam Hồng, thành phố Từ Sơn, tỉnh Bắc Ninh",
    lat: 21.113796310596054, lng: 105.95256605588365,
    category: "historical",
    badge: "Đông Sơn",
    year: "c. 2200–2300 years ago (3rd–2nd century BCE)",
    type: "tools",
    desc: "A bronze tripod jar (thạp) from the Đông Sơn cultural horizon, preserved at the Nam Hồng Royal Museum in Từ Sơn."
  },
  {
    id: 243,
    name: "Thạp đồng Kính Hoa",
    english: "Kinh Hoa Bronze Tripod Jar",
    location: "Bảo tàng Kính Hoa, Hà Nội",
    lat: 21.030451401928165, lng: 105.83677335686808, 
    category: "historical",
    badge: "Đông Sơn",
    year: "3rd–2nd century BCE",
    type: "tools",
    desc: "A bronze thạp associated with the Kính Hoa group, held in the private Nguyễn Văn Kính collection in Hanoi."
  },
  {
    id: 244,
    name: "Sưu tập đàn đá Bình Đa",
    english: "Binh Da Lithophone Collection",
    location: "Bảo tàng tỉnh Đồng Nai",
    lat: 10.958372700687931, lng: 106.82964525957036,
    category: "historical",
    badge: "Musical Lithophones",
    year: "from c. 3,000 years ago",
    type: "art",
    desc: "An assemblage of stone slit-drums (lithophones) from Bình Đa, illustrating ancient musical technology, held at the Đồng Nai Provincial Museum."
  },
  {
    id: 245,
    name: "Mukhalinga Ba Thê",
    english: "Ba The Mukhalinga",
    location: "Bảo tàng tỉnh An Giang",
    lat: 10.389445882988412, lng: 105.43522183424875,
    category: "religious",
    badge: "Hindu Ritual",
    year: "6th century",
    type: "religious",
    desc: "A mukhalinga (multi-faced linga) from Ba Thê, preserved at the An Giang Provincial Museum."
  },
  {
    id: 246, 
    name: "Cặp tượng voi đá thành Đồ Bàn",
    english: "Pair of Stone Elephants from Do Ban Citadel",
    location: "Khu di tích Thành Hoàng Đế, xã Nhơn Hậu, thị xã An Nhơn, tỉnh Bình Định",
    lat: 13.923890779144182, lng: 109.070929467961,
    category: "historical",
    badge: "12th Century Sculpture",
    year: "Late 12th century",
    type: "art",
    desc: "A matched pair of carved stone elephants from the Đồ Bàn citadel, preserved at the Thành Hoàng Đế historic site in Bình Định."
  },
  {
    id: 247,
    name: "Hai chiếc đĩa gốm men ngọc (Thời Lý)",
    english: "Two Celadon Dishes (Lý Dynasty)",
    location: "Sưu tập tư nhân An Biên, thành phố Hải Phòng",
    lat: 20.862074186512505, lng: 106.6827070274161,
    category: "historical",
    badge: "Lý Dynasty Ceramics",
    year: "11th–12th century",
    type: "art",
    desc: "A pair of finely potted celadon dishes attributed to the Lý period, in the private An Biên collection in Hải Phòng."
  },
  {
    id: 248,
    name: "Đĩa gốm men lam tím (Lê sơ)",
    english: "Blue-Violet Glazed Dish (Early Lê)",
    location: "Sưu tập tư nhân An Biên, thành phố Hải Phòng",
    lat: 20.862074186512505, lng: 106.6827070274161,
    category: "historical",
    badge: "Lê Sơ Ceramics",
    year: "15th century",
    type: "art",
    desc: "A rare blue-violet glazed ceramic dish from the early Lê period, held in a private collection in Hải Phòng."
  },
  {
    id: 249,
    name: "Đầu rồng thời Trần",
    english: "Dragon Head (Trần Dynasty)",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical",
    badge: "Trần Sculpture",
    year: "13th century",
    type: "art",
    desc: "A carved dragon head element from the Trần period architectural program, conserved at the Thăng Long Preservation Centre."
  },
  {
    id: 250,
    name: "Bia chùa Giàu (Ngô gia thị bi)", 
    english: "Giau Temple Stele (Ngo gia thi bi)",
    location: "Chùa Giàu, xã Đinh Xá, thành phố Phủ Lý, tỉnh Hà Nam",
    lat: 20.55557896356997, lng: 105.97799502029997,
    category: "historical",
    badge: "Epigraphy",
    year: "Bính Ngọ (1366)",
    type: "academic",
    desc: "The Giau Temple stele (Ngô gia thị bi) dated Bính Ngọ (1366), preserved at Chùa Giàu in Phủ Lý."
  },
  {
    id: 251,
    name: "Bia đá chùa Tĩnh Lự",
    english: "Tinh Lu Temple Stone Stele",
    location: "Chùa Tĩnh Lự, xã Lãng Ngâm, huyện Gia Bình, tỉnh Bắc Ninh",
    lat: 21.075579652455044, lng: 106.15521316629138,
    category: "historical",
    badge: "17th Century Stele",
    year: "28 August 1648 (Phuc Thai 6)",
    type: "academic",
    desc: "A dated stone stele from Tĩnh Lự Temple carved on 28 August 1648, preserved at the temple in Gia Bình."
  },
  {
    id: 252,
    name: "Chuông chùa Rối",
    english: "Roi Pagoda Bell",
    location: "Bảo tàng tỉnh Hà Tĩnh",
    lat: 18.354351585284714, lng: 105.89365273730664,
    category: "religious",
    badge: "14th Century Bell",
    year: "Late 14th century",
    type: "religious",
    desc: "A large temple bell from Chùa Rối dating to the latter 14th century, preserved at the Hà Tĩnh Museum."
  },
  {
    id: 253,
    name: "Lư hương gốm hoa lam",
    english: "Blue-and-White Ceramic Incense Burner",
    location: "Sưu tập tư nhân An Biên, thành phố Hải Phòng",
    lat: 20.862074186512505, lng: 106.6827070274161,
    category: "religious",
    badge: "Lê Sơ Furnishing",
    year: "15th century",
    type: "religious",
    desc: "A blue-and-white glazed ceramic incense censer from the early Lê period, in a private Hải Phòng collection."
  },
  {
    id: 254,
    name: "Tượng Quan Thế Âm chùa Cung Kiệm",
    english: "Guanyin Statue of Cung Kiem Pagoda",
    location: "Chùa Cung Kiệm - Thượng Phúc tự, xã Nhân Hòa, huyện Quế Võ, tỉnh Bắc Ninh",
    lat: 21.185452083027933, lng: 106.15953394617873,
    category: "religious",
    badge: "15th Century",
    year: "Kỷ Tỵ (1449)",
    type: "religious",
    desc: "A statue of Avalokiteshvara (Quan Thế Âm) dated to the year Kỷ Tỵ (1449), venerated at Cung Kiệm Pagoda."
  },
  {
    id: 255,
    name: "Sưu tập bát, đĩa gốm hoa lam ngự dụng thời Lê sơ",
    english: "Imperial Blue-and-White Tableware (Early Lê)",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical",
    badge: "Imperial Ceramics",
    year: "15th–early 16th century",
    type: "art",
    desc: "A collection of blue-and-white porcelain bowls and dishes used by the court during the early Lê, conserved at Thăng Long Preservation Centre."
  },
  {
    id: 256,
    name: "Sưu tập vũ khí Trường Giảng Võ",
    english: "Truong Giang Vo Weapons Collection",
    location: "Bảo tàng Hà Nội",
    lat: 21.010414142525732, lng: 105.7869783116489, 
    category: "historical",
    badge: "Weaponry",
    year: "15th–18th century",
    type: "tools",
    desc: "An assortment of arms and armour from the Trường Giảng Võ collection, preserved at the Hanoi Museum."
  },
  {
    id: 257,
    name: "Bệ thờ đất nung đền An Xá",
    english: "An Xa Terracotta Altar Base",
    location: "Đền An Xá, xã An Viên, huyện Tiên Lữ, tỉnh Hưng Yên",
    lat: 21.031147920721494, lng: 106.0800,
    category: "historical",
    badge: "Terracotta Furnishing",
    year: "16th century",
    type: "historical",
    desc: "A terracotta altar base from the An Xá shrine complex, dated to around the 16th century."
  },
  {
    id: 258,
    name: "Hai đài đồng đốt trầm, nắp tượng nghê",
    english: "Two Bronze Incense Burners with Nghê Lid",
    location: "Sưu tập tư nhân An Biên, thành phố Hải Phòng",
    lat: 20.862074186512505, lng: 106.6827070274161,
    category: "religious",
    badge: "17th Century Metalwork",
    year: "16th–17th century",
    type: "religious",
    desc: "A bronze incense burner (hải đài) with a lid sculpted as a nghê, in the private An Biên collection."
  },
  {
    id: 259,
    name: "Bộ thành bậc Điện Kính Thiên",
    english: "Dien Kinh Thien Stair Set",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical",
    badge: "Imperial Architecture",
    year: "17th century",
    type: "historical",
    desc: "A set of stair components from the Điện Kính Thiên hall, preserved by the Thăng Long Preservation Centre."
  },
  {
    id: 260, 
    name: "Bộ tượng Trúc Lâm Tam Tổ chùa Phổ Minh",
    english: "Truc Lam Three Patriarchs Group (Pho Minh)",
    location: "Chùa Phổ Minh, phường Lộc Vượng, thành phố Nam Định, tỉnh Nam Định",
    lat: 20.454153964908762, lng: 106.16321935477622,
    category: "religious",
    badge: "17th Century",
    year: "17th century",
    type: "religious",
    desc: "The Trúc Lâm Three Patriarchs sculptural group from Phổ Minh Pagoda, venerated in Nam Định."
  },
  {
    id: 261,
    name: "Súng Thần công thời Lê Trung hưng",
    english: "Royal Cannon (Later Lê)",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical",
    badge: "17th Century Artillery",
    year: "17th century",
    type: "tools",
    desc: "A royal artillery piece (thần công) dated to the Later Lê revival period, preserved at the Thăng Long Preservation Centre."
  },
  {
    id: 262,
    name: "Kim sách tấn phong Quốc mẫu Vương Thái phi",
    english: "Investiture Golden Book for Queen Mother Vương Thái phi",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Imperial Document",
    year: "Cảnh Hưng 57 (1796)",
    type: "academic",
    desc: "A gilt document (kim sách) recording the investiture of Queen Mother Vương Thái phi in 1796, preserved at the National Museum of Vietnamese History."
  },
  {
    id: 263,
    name: "Tượng An Dương Vương",
    english: "An Duong Vuong Statue",
    location: "Khu di tích Cổ Loa, xã Cổ Loa, huyện Đông Anh, thành phố Hà Nội",
    lat: 21.11160385841638, lng: 105.87332731625372, 
    category: "historical",
    badge: "National Founder",
    year: "16 May 1897 (Đinh Dậu)",
    type: "religious",
    desc: "A statue of An Dương Vương dated 16 May 1897, currently venerated at the Cổ Loa historic site and recorded in the Thăng Long preservation holdings."
  },
  {
    id: 264,
    name: "Tượng \"Chân dung Chủ tịch Hồ Chí Minh\"",
    english: "Portrait Statue of President Hồ Chí Minh",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Modern Portrait",
    year: "1946",
    type: "academic",
    desc: "A 1946 portrait statue representing President Hồ Chí Minh, preserved at the National Museum of Vietnamese History."
  },
  {
    id: 265,
    name: "Xe tăng T59 số hiệu 377", 
    english: "T59 Tank No. 377",
    location: "Ủy ban nhân dân huyện Đăk Tô, tỉnh Kon Tum",
    lat: 14.66081858123453, lng: 107.8384867788499,
    category: "historical",
    badge: "War Vehicle",
    year: "1972",
    type: "tools",
    desc: "T59 tank number 377 from 1972, preserved at the People's Committee office in Đăk Tô, Kon Tum province."
  },

  // ── BATCH 12 · Quyết định 73/QĐ-TTg · 18/01/2024 ───────────────
  {
    id: 266,
    name: "Sưu tập mũi khoan đá Thác Hai",
    english: "Thac Hai Stone Drill Collection",
    location: "Bảo tàng tỉnh Đắk Lắk", 
    lat: 12.676110277817344, lng: 108.04219409446807,
    category: "historical",
    badge: "Paleolithic Tools",
    year: "c. 4,000–3,000 years ago",
    type: "tools",
    desc: "A collection of stone drill tips and related tools from Thác Hai, preserved at the Đắk Lắk Provincial Museum."
  },
  {
    id: 267,
    name: "Thạp đồng Kính Hoa II",
    english: "Kinh Hoa II Bronze Tripod Jar",
    location: "Bảo tàng Kính Hoa, Hà Nội",
    lat: 21.030451401928165, lng: 105.83677335686808, 
    category: "historical",
    badge: "Đông Sơn Bronze",
    year: "3rd–2nd century BCE",
    type: "tools",
    desc: "A Đông Sơn bronze tripod jar associated with the Kính Hoa II group, in the private Nguyễn Văn Kính collection."
  },
  {
    id: 268,
    name: "Sưu tập đàn đá Khánh Sơn",
    english: "Khanh Son Lithophone Collection",
    location: "Bảo tàng tỉnh Khánh Hòa",
    lat: 12.24969639637227, lng: 109.19620948231558,
    category: "historical",
    badge: "Musical Lithophones",
    year: "c. 2,500–3,000 years ago",
    type: "art",
    desc: "A set of stone musical instruments (lithophones) from Khánh Sơn, held at the Khánh Hòa Provincial Museum."
  },
  {
    id: 269,
    name: "Bình đồng Đông Sơn (An Biên)",
    english: "Đông Sơn Bronze Vessel (An Bien)",
    location: "Sưu tập tư nhân An Biên, thành phố Hải Phòng",
    lat: 20.862074186512505, lng: 106.6827070274161,
    category: "historical",
    badge: "Đông Sơn Bronze",
    year: "2nd–1st century BCE",
    type: "tools",
    desc: "A Đông Sơn bronze vessel from the An Biên collection, reflecting late Đông Sơn metalwork."
  },
  {
    id: 270,
    name: "Trống đồng Sao Vàng",
    english: "Sao Vang Bronze Drum",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Đông Sơn Drum",
    year: "c. 2,000 years ago",
    type: "tools",
    desc: "The Sao Vàng Đông Sơn bronze drum, preserved at the National Museum of Vietnamese History."
  },
  {
    id: 271,
    name: "Sưu tập vàng lá Châu Thành, Trà Vinh",
    english: "Chau Thanh Gold-Leaf Collection",
    location: "Bảo tàng Tổng hợp tỉnh Trà Vinh",
    lat: 9.9162176089586, lng: 106.30510812354282, 
    category: "historical",
    badge: "Óc Eo Goldwork",
    year: "Óc Eo (7th–9th century)",
    type: "art",
    desc: "A collection of intricately worked gold leaf artifacts from Châu Thành, Trà Vinh, preserved at the provincial museum."
  },
  {
    id: 272,
    name: "Phù điêu Đản sinh Brahma Mỹ Sơn E1",
    english: "My Son E1 Birth-of-Brahma Relief",
    location: "Bảo tàng Điêu khắc Chăm, Đà Nẵng",
    lat: 16.06035438969859, lng: 108.22341374785412, 
    category: "religious",
    badge: "Champa Relief",
    year: "7th–8th century",
    type: "religious",
    desc: "A relief depicting the birth of Brahma from the Mỹ Sơn E1 sanctuary, preserved at the Museum of Cham Sculpture."
  },
  {
    id: 273,
    name: "Tượng Shiva Mỹ Sơn C1",
    english: "My Son C1 Shiva Statue",
    location: "Bảo tàng Điêu khắc Chăm, Đà Nẵng",
    lat: 16.06035438969859, lng: 108.22341374785412, 
    category: "religious",
    badge: "Champa Sculpture",
    year: "8th century",
    type: "religious",
    desc: "A statue of Shiva from the My Son C1 complex, preserved at the Cham Sculpture Museum in Đà Nẵng."
  },
  {
    id: 274,
    name: "Linga vàng Po Dam",
    english: "Po Dam Gold Linga",
    location: "Bảo tàng tỉnh Bình Thuận",
    lat: 10.929994264065115, lng: 108.09798884629635,
    category: "religious",
    badge: "Gold Linga",
    year: "8th–9th century",
    type: "religious",
    desc: "A small gold linga from Po Dam, representative of Champa gold ritual objects, kept at Bình Thuận Provincial Museum."
  },
  {
    id: 275, 
    name: "Bia Phước Thiện",
    english: "Phuoc Thien Stele",
    location: "Bảo tàng tỉnh Ninh Thuận",
    lat: 11.564187215963564, lng: 108.9994689836557,
    category: "historical",
    badge: "Epigraphy",
    year: "Late 8th – Early 9th century",
    type: "academic",
    desc: "The Phước Thiện stele, an early medieval inscription preserved at the Ninh Thuận Provincial Museum."
  },
  {
    id: 276,
    name: "Phù điêu Nữ thần Uma",
    english: "Uma Goddess Relief",
    location: "Bảo tàng tỉnh Bạc Liêu",
    lat: 9.287275914177757, lng: 105.72631916950343, 
    category: "religious",
    badge: "Champa Relief",
    year: "9th–10th century",
    type: "art",
    desc: "A relief panel depicting the goddess Uma, held at the Bạc Liêu Provincial Museum."
  },
  {
    id: 277,
    name: "Phù điêu Apsara Trà Kiệu",
    english: "Tra Kieu Apsara Relief",
    location: "Bảo tàng Điêu khắc Chăm, Đà Nẵng",
    lat: 16.06035438969859, lng: 108.22341374785412, 
    category: "religious",
    badge: "Apsara Relief",
    year: "10th century",
    type: "art",
    desc: "An apsara relief from Trà Kiệu, preserved at the Museum of Cham Sculpture in Đà Nẵng."
  },
  {
    id: 278, 
    name: "Sưu tập cột kinh Phật thời Đinh",
    english: "Đinh Dynasty Buddhist Pillar Collection",
    location: "Bảo tàng tỉnh Ninh Bình",
    lat: 20.25882690799382, lng: 105.98068945282171,
    category: "historical",
    badge: "Đinh Era",
    year: "10th century",
    type: "religious",
    desc: "A collection of Buddhist dharani pillars (cột kinh Phật) dating to the Đinh period, held at the Ninh Bình Provincial Museum."
  },
  {
    id: 279,
    name: "Lá đề trang trí chim phượng đất nung thời Lý",
    english: "Lý Dynasty Terracotta Phoenix Leaf",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical",
    badge: "Imperial Decoration",
    year: "11th century",
    type: "art",
    desc: "A terracotta decorative phoenix leaf (lá đề) from the Lý dynasty, conserved at the Thăng Long Preservation Centre."
  },
  {
    id: 280,
    name: "Hai tượng sư tử đá thành Đồ Bàn",
    english: "Pair of Do Ban Stone Lions",
    location: "Bảo tàng tỉnh Bình Định",
    lat: 13.770711018018957, lng: 109.23394749530915,
    category: "historical",
    badge: "12th Century Sculpture",
    year: "Late 11th – Early 12th century",
    type: "art",
    desc: "A pair of stone lions from the Đồ Bàn citadel, preserved at the Bình Định Provincial Museum."
  },
  {
    id: 281,
    name: "Bình gốm hoa nâu",
    english: "Brown-Decorated Ceramic Vase",
    location: "Sưu tập tư nhân An Biên, thành phố Hải Phòng",
    lat: 20.862074186512505, lng: 106.6827070274161,
    category: "historical",
    badge: "Ceramic",
    year: "11th–12th century",
    type: "art",
    desc: "A brown-decorated ceramic vase in the An Biên private collection."
  },
  {
    id: 282,
    name: "Chum gốm hoa nâu Hiệp An thời Trần",
    english: "Hiep An Brown-Decorated Jar (Tran)",
    location: "Bảo tàng tỉnh Hải Dương",
    lat: 20.94340934106013, lng: 106.33073087912344,
    category: "historical",
    badge: "Tran Ceramics",
    year: "13th–14th century",
    type: "art",
    desc: "A brown-glazed storage jar attributed to Hiệp An workshops from the Trần period, held at the Hải Dương Museum."
  },
  {
    id: 283,
    name: "Đao cẩn tam khí, Hoàng thành Thăng Long",
    english: "Three-Metal Polearm (Tran Dynasty)",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical",
    badge: "Trần Weapon",
    year: "14th century",
    type: "tools",
    desc: "A ceremonial polearm constructed of three metals from the Trần era, preserved at the Thăng Long Preservation Centre."
  },
  {
    id: 284,
    name: "Bia \"Đại bi Diên Minh tự bi\"",
    english: "Dai Bi Dien Minh Tu Stele",
    location: "Ủy ban nhân dân xã Lạc Đạo, huyện Văn Lâm, tỉnh Hưng Yên",
    lat: 20.986674120316867, lng: 106.0133514030534,
    category: "historical",
    badge: "Trần Stele",
    year: "1327 (Trần)",
    type: "academic",
    desc: "The 'Đại bi Diên Minh tự bi' stele dated 1327 (Khai Thái 4), preserved at the Lạc Đạo commune office."
  },
  {
    id: 285,
    name: "Mô hình đất nung kiến trúc thời Lê sơ",
    english: "Early Lê Terracotta Architectural Model",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical",
    badge: "Architectural Model",
    year: "15th century",
    type: "historical",
    desc: "A terracotta model representing Early Lê architectural forms from the Imperial Citadel collection."
  },
  {
    id: 286,
    name: "Thẻ bài cung nữ ra vào nội cung thời Lê sơ",
    english: "Palace Attendant Entry Token (Early Lê)",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical",
    badge: "Imperial Token",
    year: "1466 (Quang Thuận 7)",
    type: "historical",
    desc: "A wooden entry token used by palace attendants to access the inner court in 1466, preserved at the Thăng Long Preservation Centre."
  },
  {
    id: 287,
    name: "Lư hương gốm men lam xám",
    english: "Gray-Blue Glazed Ceramic Incense Burner",
    location: "Sưu tập tư nhân An Biên, thành phố Hải Phòng",
    lat: 20.862074186512505, lng: 106.6827070274161,
    category: "religious",
    badge: "Mạc Dynasty Ceramics",
    year: "c. 1588–1591 (Hưng Trị)",
    type: "religious",
    desc: "A gray-blue glazed ceramic incense censer dated to the Hưng Trị era, in a private Hải Phòng collection."
  },
  {
    id: 288, 
    name: "Tượng thờ Vua Pô Klong Garai",
    english: "Worship Statue of King Pô Klong Garai",
    location: "Tháp Pô Klong Garai, phường Đô Vinh, thành phố Phan Rang - Tháp Chàm, tỉnh Ninh Thuận",
    lat: 11.601792919813594, lng: 108.94650666279479,
    category: "religious",
    badge: "Champa Royal",
    year: "16th–17th century",
    type: "religious",
    desc: "A worship statue of King Pô Klong Garai venerated at the Pô Klong Garai tower site in Ninh Thuận."
  },
  {
    id: 289,
    name: "Bộ tượng Tam Thế Phật chùa Côn Sơn",
    english: "Three-World Buddha Group of Côn Sơn Pagoda",
    location: "Chùa Côn Sơn, thị xã Chí Linh, tỉnh Hải Dương",
    lat: 21.150824206815816, lng: 106.3823875075861,
    category: "religious",
    badge: "Lê Trung Hưng",
    year: "Lê Trung Hưng period",
    type: "religious",
    desc: "The Tam Thế Phật sculptural group from Côn Sơn Pagoda, venerated at the temple."
  },
  {
    id: 290, 
    name: "Mộc bản chùa Trăm Gian",
    english: "Woodblocks of Trăm Gian Pagoda",
    location: "Chùa Trăm Gian, xã An Bình, huyện Nam Sách, tỉnh Hải Dương",
    lat: 21.028383841839652, lng: 106.36334597215469,
    category: "historical",
    badge: "Woodblock Prints",
    year: "17th–20th century",
    type: "academic",
    desc: "A set of woodblocks used for printing at Trăm Gian Pagoda, spanning the 17th–20th centuries, preserved at the pagoda."
  },
  {
    id: 291,
    name: "Cặp rồng đá thành bậc đền Thượng (Cổ Loa)",
    english: "Pair of Stone Dragons, Upper Shrine (Cổ Loa)",
    location: "Khu di tích Cổ Loa, xã Cổ Loa, huyện Đông Anh, thành phố Hà Nội",
    lat: 21.11160385841638, lng: 105.87332731625372, 
    category: "historical",
    badge: "18th Century Sculpture",
    year: "1732 (Long Đức 1)",
    type: "art",
    desc: "A pair of carved stone dragons forming the stair balustrade of the Upper Shrine at Cổ Loa, dated to 1732."
  },
  {
    id: 292,
    name: "Mộc bản chùa Dâu",
    english: "Woodblocks of Dau Pagoda",
    location: "Chùa Dâu, phường Thanh Khương, thị xã Thuận Thành, tỉnh Bắc Ninh",
    lat: 21.035579364559226, lng: 106.04262120367193, 
    category: "historical",
    badge: "Woodblock Prints",
    year: "1752–1859",
    type: "academic",
    desc: "Woodblock printing plates from Dâu Pagoda covering the period 1752–1859, preserved at the pagoda."
  },
  {
    id: 293,
    name: "Bảo kiếm an dân",
    english: "An Dan Royal Sword",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical",
    badge: "Imperial Sword",
    year: "Khải Định era (1916–1925)",
    type: "tools",
    desc: "A ceremonial royal sword from the Khải Định period, preserved at the National Museum of Vietnamese History."
  },
  {
    id: 294,
    name: "Khuôn in tín phiếu mệnh giá một đồng và khuôn in tín phiếu mệnh giá năm mươi đồng",
    english: "Printing Blocks for 1-đồng and 50-đồng Notes",
    location: "Bảo tàng Tổng hợp Quảng Ngãi",
    lat: 15.125539541846619, lng: 108.80850812651427,
    category: "historical",
    badge: "Monetary Printing",
    year: "From 1947",
    type: "academic",
    desc: "Metal printing blocks used for producing 1-đồng and 50-đồng credit notes dated from 1947, preserved at the Quảng Ngãi General Museum."
  },


  // ── BATCH 13 · Quyết định 1712/QĐ-TTg · 31/12/2024 ──────────────
  {
    id: 295, 
    name: "Đàn đá Đắk Sơn",
    english: "Dak Son Stone Lithophone",
    location: "Bảo tàng tỉnh Đắk Nông",
    lat: 12.008901815073035, lng: 107.69709064645508,
    category: "historical", 
    badge: "Prehistoric Music", 
    year: "Tiền sử", 
    type: "art",
    desc: "A stone lithophone from Đắk Sơn dated approximately 3,500–3,000 years ago, preserved at Đắk Nông Provincial Museum. One of the oldest musical instruments discovered in the Central Highlands, reflecting the rich prehistoric acoustic culture of southern Vietnam."
  },
  {
    id: 296,
    name: "Chõ gốm", 
    english: "Ceramic Steamer Vessel",
    location: "Bảo tàng Gốm thời dựng nước, TP Hồ Chí Minh",
    lat: 10.788022557457188, lng: 106.70474130245552,
    category: "historical", 
    badge: "Đông Sơn Ceramic", 
    year: "Đông Sơn", 
    type: "art",
    desc: "An Đông Sơn culture ceramic steamer vessel (chõ gốm) dated approximately 2,500–2,000 years ago, from the private collection of Phạm Gia Chi Bảo, HCMC. A rare functional household object that reveals the domestic life of ancient Vietnamese Bronze Age communities."
  },
  {
    id: 297,
    name: "Trống đồng Vũ Bản",
    english: "Vu Ban Bronze Drum",
    location: "Bảo tàng tỉnh Hà Nam",
    lat: 20.54122568286816, lng: 105.90405953765803,
    category: "historical", 
    badge: "Đông Sơn Bronze", 
    year: "Đông Sơn", 
    type: "tools",
    desc: "An Đông Sơn culture bronze drum dated to the 3rd–2nd century BCE, preserved at Hà Nam Provincial Museum. Its richly decorated tympanum with geometric and bird motifs is a hallmark of the Đông Sơn artistic tradition."
  },
  {
    id: 298,
    name: "Trống đồng Đông Sơn (Sưu tập Kính Hoa)",
    english: "Dong Son Bronze Drum (Kinh Hoa Collection)",
    location: "Bảo tàng Kính Hoa, Hà Nội",
    lat: 21.030451401928165, lng: 105.83677335686808, 
    category: "historical", 
    badge: "Đông Sơn Bronze", 
    year: "Đông Sơn", 
    type: "tools",
    desc: "A Đông Sơn bronze drum dated to the 3rd–2nd century BCE from the private Kính Hoa collection of Nguyễn Văn Kính, Hanoi. The drum's exceptional preservation and decorative quality make it a standout piece of Vietnamese Bronze Age craftsmanship."
  },
  {
    id: 299, 
    name: "Trống đồng Đông Sơn (Sưu tập Hoàng Long)",
    english: "Dong Son Bronze Drum (Hoang Long Collection)",
    location: "Sưu tập tư nhân Lương Hoàng Long, TP Hội An, Quảng Nam",
    lat: 15.5792106901736924613656486, lng: 108.31773662318834,
    category: "historical", 
    badge: "Đông Sơn Bronze",
    year: "Đông Sơn", 
    type: "tools",
    desc: "A Đông Sơn bronze drum dated to the 3rd–2nd century BCE from the private collection of Lương Hoàng Long in Hội An. Its discovery in central Vietnam extends the geographic distribution of Đông Sơn material culture southward along the coast."
  },
  {
    id: 300,
    name: "Thạp đồng Đông Sơn (Sưu tập Hoàng Long)",
    english: "Dong Son Bronze Container (Hoang Long Collection)",
    location: "Sưu tập tư nhân Lương Hoàng Long, TP Hội An, Quảng Nam",
    lat: 15.5792106901736924613656486, lng: 108.31773662318834,
    category: "historical", 
    badge: "Đông Sơn Bronze", 
    year: "Đông Sơn", 
    type: "tools",
    desc: "A Đông Sơn bronze thạp (cylindrical container) dated to the 3rd–1st century BCE from the Hoàng Long private collection in Hội An. Paired with the Hoàng Long drum, this thạp is decorated with concentric bands of ritual imagery characteristic of the Đông Sơn ceremonial aesthetic."
  },
  {
    id: 301,
    name: "Bộ sưu tập trang sức vàng Lai Nghi",
    english: "Lai Nghi Gold Jewellery Collection",
    location: "Bảo tàng Quảng Nam",
    lat: 15.579210690173692, lng: 108.47559366773898,
    category: "historical", 
    badge: "Sa Huỳnh Gold", 
    year: "Tiền sử", 
    type: "art",
    desc: "A collection of gold jewellery from the Lai Nghi burial site, Quảng Nam, dated from the 3rd century BCE to the mid-1st century CE. These ornaments — beads, earrings, and pendants — document the sophisticated goldworking tradition of the Sa Huỳnh culture."
  },
  {
    id: 302,
    name: "Hạt mã não hình thú Lai Nghi",
    english: "Lai Nghi Animal-Shaped Carnelian Beads",
    location: "Bảo tàng Quảng Nam",
    lat: 15.579210690173692, lng: 108.47559366773898,
    category: "historical", 
    badge: "Sa Huỳnh Jewellery", 
    year: "Tiền sử", 
    type: "art",
    desc: "Animal-shaped carnelian (mã não) beads from the Lai Nghi burial site, dated from the 3rd century BCE to the mid-1st century CE. These finely carved miniature animal forms, found alongside gold ornaments, testify to the long-distance trade networks of the Sa Huỳnh culture."
  },
  {
    id: 303,
    name: "Tượng đồng tê tê Long Giao",
    english: "Long Giao Bronze Pangolin Figurine",
    location: "Bảo tàng tỉnh Đồng Nai",
    lat: 10.958372700687931, lng: 106.82964525957036,
    category: "historical", 
    badge: "Bronze Age Figurine", 
    year: "Tiền sử", 
    type: "art",
    desc: "A bronze figurine of a pangolin from Long Giao, Đồng Nai, dated to approximately the 1st–2nd century CE. This exquisitely detailed zoomorphic sculpture is one of the most unusual and accomplished examples of ancient southern Vietnamese bronze art."
  },
  {
    id: 304,
    name: "Đầu tượng Phật Linh Sơn Bắc",
    english: "Linh Son Bac Buddha Head",
    location: "Ban Quản lý Di tích Văn hóa Óc Eo, tỉnh An Giang",
    lat: 10.254782872639185, lng: 105.15488751777913,
    category: "religious", 
    badge: "Óc Eo Statue", 
    year: "Óc Eo", 
    type: "religious",
    desc: "A 1st–3rd century stone Buddha head from Linh Sơn Bắc, An Giang, managed by the Óc Eo Cultural Heritage Authority. Among the earliest Buddhist sculptures yet discovered in Vietnam, it shows direct artistic descent from the Amaravati school of southern India."
  },
  {
    id: 305,
    name: "Mộ vò Gò Cây Trâm",
    english: "Go Cay Tram Jar Burial",
    location: "Ban Quản lý Di tích Văn hóa Óc Eo, tỉnh An Giang",
    lat: 10.254782872639185, lng: 105.15488751777913,
    category: "historical", 
    badge: "Óc Eo Burial", 
    year: "Óc Eo", 
    type: "art",
    desc: "A 4th–5th century funerary jar burial assemblage from Gò Cây Trâm, An Giang, under the Óc Eo Cultural Heritage Authority. The complete burial with ceramic vessel and grave goods provides rare data on Funan-era mortuary practices in the Mekong Delta."
  },
  {
    id: 306,
    name: "Tượng Avalokitesvara Bắc Bình",
    english: "Bac Binh Avalokitesvara Statue",
    location: "Bảo tàng tỉnh Bình Thuận",
    lat: 10.929994264065115, lng: 108.09798884629635,
    category: "religious", 
    badge: "Chăm Pa Statue", 
    year: "Chăm Pa", 
    type: "religious",
    desc: "An 8th–9th century Chăm Pa stone statue of Avalokitesvara from Bắc Bình, Bình Thuận. Its tall ushnisha and graceful downward gaze reflect the mature Panduranga regional style of Cham Buddhist sculptural art."
  },
  {
    id: 307,
    name: "Phù điêu Shiva múa Phong Lệ",
    english: "Phong Le Dancing Shiva Relief",
    location: "Bảo tàng Điêu khắc Chăm, Đà Nẵng",
    lat: 16.06035438969859, lng: 108.22341374785412, 
    category: "religious", 
    badge: "Chăm Pa Relief", 
    year: "Chăm Pa", 
    type: "religious",
    desc: "A 10th-century Chăm Pa sandstone relief of the dancing Shiva (Nataraja) from Phong Lệ, Đà Nẵng, at the Museum of Cham Sculpture. Its dynamic multi-armed posture captures the energetic sculptural language of the Mỹ Sơn A1 artistic period at its most expressive."
  },
  {
    id: 308,
    name: "Phù điêu Uma Chánh Lộ",
    english: "Chanh Lo Uma Relief",
    location: "Bảo tàng Điêu khắc Chăm, Đà Nẵng",
    lat: 16.06035438969859, lng: 108.22341374785412, 
    category: "religious", 
    badge: "Chăm Pa Relief", 
    year: "Chăm Pa", 
    type: "religious",
    desc: "An 11th-century Chăm Pa sandstone relief of the goddess Uma from Chánh Lộ, Quảng Ngãi, now at the Museum of Cham Sculpture in Đà Nẵng. Her serene expression and richly decorated jewellery are hallmarks of the refined Chánh Lộ sculptural style."
  },
  {
    id: 309,
    name: "Sưu tập Đầu phượng thời Lý, Hoàng thành Thăng Long",
    english: "Ly Dynasty Phoenix Head Collection, Thang Long Citadel",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical", 
    badge: "Lý Dynasty Ornament", 
    year: "Lý", 
    type: "art",
    desc: "A collection of 11th–12th century phoenix-head architectural ornaments from Thăng Long Imperial Citadel, preserved by the Thăng Long Heritage Conservation Centre. These gilded terracotta phoenix heads decorated the ridgelines of Lý dynasty palatial halls and are among the finest examples of Vietnamese medieval decorative art."
  },
  {
    id: 310,
    name: "Sáu tượng Kim Cương chùa Đọi Sơn",
    english: "Six Vajrapani Guardian Statues, Doi Son Pagoda",
    location: "Chùa Đọi Sơn, thị xã Duy Tiên, tỉnh Hà Nam",
    lat: 20.584666401385462, lng: 105.97506476940512, 
    category: "religious", 
    badge: "Lý Dynasty Statue", 
    year: "Lý", 
    type: "religious",
    desc: "Six Lý dynasty stone guardian statues (Kim Cương / Vajrapani) dated 1118–1121 at Đọi Sơn Pagoda, Hà Nam. Their powerful, detailed carvings — rare survivals of Lý period monumental stone sculpture — guard the sacred approach to one of Vietnam's most revered ancient pagodas."
  },
  {
    id: 311,
    name: "Bia chùa Linh Xứng",
    english: "Linh Xung Pagoda Stele",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical", 
    badge: "Lý Dynasty Stele", 
    year: "Lý", 
    type: "academic",
    desc: "A stele dated to the 3rd day of the 3rd month of Bính Ngọ (1126) of the Lý dynasty, recording the history of Linh Xứng Pagoda, now at the National History Museum. Its inscription is an important primary source on Buddhist architecture and royal patronage during the Lý period."
  },
  {
    id: 312,
    name: "Mộc bài Đa Bối",
    english: "Da Boi Wooden Administrative Plaque",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical", 
    badge: "Trần Document", 
    year: "Trần", 
    type: "academic",
    desc: "A wooden administrative plaque (mộc bài) dated the 25th day of the 11th month of Kỷ Tỵ, Thiệu Long year 12 (1269), preserved at the National History Museum. One of the oldest surviving wooden official documents from the Trần dynasty, offering a direct window into 13th-century Vietnamese bureaucratic practice."
  },
  {
    id: 313,
    name: "Tượng rồng Tháp Mẫm",
    english: "Thap Mam Dragon Statue",
    location: "Bảo tàng Điêu khắc Chăm, Đà Nẵng",
    lat: 16.06035438969859, lng: 108.22341374785412, 
    category: "religious", 
    badge: "Chăm Pa Statue", 
    year: "Chăm Pa",
    type: "religious",
    desc: "A 12th–13th century Chăm Pa stone dragon statue from the Tháp Mẫm site, Bình Định, now at the Museum of Cham Sculpture. Its sinuous form and elaborate scale detail represent the dynamic decorative power of the Tháp Mẫm sculptural school at its height."
  },
  {
    id: 314,
    name: "Phù điêu Kala Núi Bà",
    english: "Nui Ba Kala Relief",
    location: "Bảo tàng tỉnh Phú Yên",
    lat: 13.09482418991011, lng: 109.3023653736175,
    category: "religious", 
    badge: "Chăm Pa Relief", 
    year: "Chăm Pa", 
    type: "religious",
    desc: "A 14th-century Chăm Pa stone relief of Kala — the devouring time-deity whose gaping face guards sacred portals — from Núi Bà, Phú Yên, at the provincial museum. A powerful example of late Cham decorative sculpture on the southern frontier of the Champa kingdom."
  },
  {
    id: 315,
    name: "Bình Ngự dụng thời Lê sơ, Hoàng thành Thăng Long",
    english: "Le So Imperial Vase, Thang Long Citadel",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical", 
    badge: "Lê Dynasty Ceramic", 
    year: "Lê sơ", 
    type: "art",
    desc: "A 15th-century Lê sơ imperial ceramic vase (bình ngự dụng) from Thăng Long Citadel, preserved by the Thăng Long Heritage Conservation Centre. Its fine blue-and-white decoration and exceptional glaze quality mark it as a piece made exclusively for the Lê imperial court."
  },
  {
    id: 316,
    name: "Đôi rồng đá thành bậc đình Trích Sài",
    english: "Stone Dragon Steps, Trich Sai Communal House",
    location: "Đình Trích Sài, phường Bưởi, quận Tây Hồ, Hà Nội",
    lat: 21.05516230738844, lng: 105.81144495465232,
    category: "historical", 
    badge: "Lê Dynasty Stone", 
    year: "Lê sơ", 
    type: "art",
    desc: "A pair of 15th-century carved stone dragons flanking the entrance steps of Trích Sài Communal House, Tây Hồ, Hanoi. Among the most finely executed examples of Lê sơ architectural stone carving to survive in situ at a village communal house."
  },
  {
    id: 317,
    name: "Sưu tập gốm sứ cung Trường Lạc thời Lê sơ, Hoàng thành Thăng Long",
    english: "Truong Lac Palace Ceramics Collection, Thang Long Citadel",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical", 
    badge: "Lê Dynasty Ceramic", 
    year: "Lê sơ", 
    type: "art",
    desc: "A collection of 15th–16th century Lê sơ imperial ceramics from Trường Lạc Palace within Thăng Long Citadel. These fine porcelains — bowls, plates, and vessels inscribed for royal use — document the sophisticated ceramic culture of the Lê court at the height of Vietnamese imperial power."
  },
  {
    id: 318,
    name: "Khánh đá chùa Điều",
    english: "Stone Khanh Percussion Instrument, Chua Dieu",
    location: "Chùa Điều, huyện Bình Lục, tỉnh Hà Nam",
    lat: 20.480166756156066, lng: 106.092137632371,
    category: "religious", 
    badge: "Lê Dynasty Stone", 
    year: "Lê Trung Hưng", 
    type: "religious",
    desc: "A stone percussion instrument (khánh) dated the 6th day of the 8th month of Nhâm Thân, Chính Hòa year 13 (1692) at Chùa Điều, Bình Lục, Hà Nam. Suspended and struck during Buddhist ceremonies, this khánh is one of the best-preserved ritual stone instruments from the Lê–Trịnh period."
  },
  {
    id: 319,
    name: "Đôi tượng nghê đồng",
    english: "Pair of Bronze Nghe Mythical Beast Statues",
    location: "Bảo tàng Hà Nội",
    lat: 21.010414142525732, lng: 105.7869783116489, 
    category: "historical", 
    badge: "Lê Dynasty Bronze", 
    year: "Lê Trung Hưng", 
    type: "art",
    desc: "A 17th-century pair of bronze nghê statues — the distinctive Vietnamese mythical guardian beast — at the Hanoi Museum. These finely cast figures with their alert, crouching posture are outstanding examples of Lê Trung Hưng period ornamental bronze sculpture."
  },
  {
    id: 320,
    name: "Chuông Ngọ Môn thời Minh Mạng",
    english: "Ngo Mon Bell of Emperor Minh Mang",
    location: "Bảo tàng Cổ vật Cung đình Huế, Thừa Thiên Huế",
    lat: 16.47130938733041, lng: 107.58193008171665, 
    category: "religious", 
    badge: "Nguyễn Bronze Bell", 
    year: "Nguyễn", 
    type: "religious",
    desc: "A large bronze bell cast on the 6th day of the 4th month of Minh Mạng year 3 (1822) for the Ngọ Môn gatehouse of the Huế Imperial Citadel, preserved at the Huế Museum of Royal Antiquities. Its deep resonance once marked the rhythms of court life at the Nguyễn imperial capital."
  },
  {
    id: 321, 
    name: "Ấn vàng \"Hoàng đế chi bảo\"",
    english: "Hoang De Chi Bao Imperial Gold Seal",
    location: "Bảo tàng Hoàng gia Nam Hồng, tỉnh Bắc Ninh",
    lat: 21.113796310596054, lng: 105.95256605588365,
    category: "historical", 
    badge: "Nguyễn Imperial Seal", 
    year: "Nguyễn", 
    type: "academic",
    desc: "The gold imperial seal inscribed \"Hoàng đế chi bảo\" (Imperial Treasure of the Emperor), cast in the 3rd month of Minh Mạng year 4 (1823), preserved at the Nam Hồng Royal Museum, Bắc Ninh. The highest symbol of Nguyễn imperial sovereignty, used to authenticate the most important state documents."
  },
  {
    id: 322,
    name: "Phù điêu thời Minh Mạng",
    english: "Minh Mang Era Relief Panel",
    location: "Bảo tàng Cổ vật Cung đình Huế, Thừa Thiên Huế",
    lat: 16.47130938733041, lng: 107.58193008171665, 
    category: "historical", 
    badge: "Nguyễn Relief", 
    year: "Nguyễn", 
    type: "art",
    desc: "A decorative relief panel dated 1829 from Emperor Minh Mạng's reign, preserved at the Huế Museum of Royal Antiquities. Its elaborate floral and dragon motifs executed in enamelled porcelain inlay represent the mature Nguyễn court decorative style."
  },
  {
    id: 323,
    name: "Cặp tượng rồng thời Thiệu Trị",
    english: "Pair of Thieu Tri Dragon Statues",
    location: "Bảo tàng Cổ vật Cung đình Huế, Thừa Thiên Huế",
    lat: 16.47130938733041, lng: 107.58193008171665, 
    category: "historical",
    badge: "Nguyễn Dragon", 
    year: "Nguyễn", 
    type: "art",
    desc: "A pair of dragon statues dated 1842 from Emperor Thiệu Trị's reign, preserved at the Huế Museum of Royal Antiquities. Cast in refined bronze with gilded details, these dragons flanked the imperial throne and embody the dynastic power and cosmological symbolism of the Nguyễn court."
  },
  { 
    id: 324, 
    name: "Bộ tượng Tam tổ Trúc Lâm",
    english: "Truc Lam Three Patriarchs Statues, Vinh Nghiem Pagoda",
    location: "Chùa Vĩnh Nghiêm, huyện Yên Dũng, tỉnh Bắc Giang",
    lat: 21.213571761355954, lng: 106.32432842454054,
    category: "religious", 
    badge: "Nguyễn Statue", 
    year: "Nguyễn", 
    type: "religious",
    desc: "A 19th-century set of three lacquered wooden statues of the Trúc Lâm Zen patriarchs — Emperor Trần Nhân Tông, Pháp Loa, and Huyền Quang — at Vĩnh Nghiêm Pagoda, Bắc Giang. One of the most venerated Buddhist sites in northern Vietnam, this triad embodies the living tradition of Vietnamese Zen Buddhism."
  },
  {
    id: 325,
    name: "Ngai Hoàng đế Duy Tân",
    english: "Emperor Duy Tan Imperial Throne",
    location: "Bảo tàng Cổ vật Cung đình Huế, Thừa Thiên Huế",
    lat: 16.47130938733041, lng: 107.58193008171665, 
    category: "historical", 
    badge: "Nguyễn Throne", 
    year: "Nguyễn", 
    type: "art",
    desc: "The imperial throne of Emperor Duy Tân, dated to the early 20th century, at the Huế Museum of Royal Antiquities. A symbol of the Nguyễn dynasty's final decades under French colonial rule, it carries both the grandeur of traditional Vietnamese royal craftsmanship and the poignancy of a sovereignty increasingly constrained."
  },
  {
    id: 326,
    name: "Bộ kim phẩm đền Nghè",
    english: "Nghe Temple Gold Ritual Set",
    location: "Bảo tàng Hải Phòng",
    lat: 20.861870553367446, lng: 106.68270304714729,
    category: "religious", 
    badge: "Modern Ritual", 
    year: "Nguyễn", 
    type: "art",
    desc: "An early 20th-century set of gilded ritual objects from Đền Nghè, Hải Phòng, preserved at the city museum. Dedicated to the protective goddess Lê Chân — legendary founder of Hải Phòng — these objects represent the living tradition of Vietnamese communal religious life."
  },
  {
    id: 327, 
    name: "Ba chiếc xe ô tô phục vụ Chủ tịch Hồ Chí Minh",
    english: "Three Automobiles of President Ho Chi Minh",
    location: "Khu Di tích Chủ tịch Hồ Chí Minh tại Phủ Chủ tịch, Hà Nội",
    lat: 21.038115603296244, lng: 105.83312580604893,
    category: "historical", 
    badge: "Presidential Vehicles", 
    year: "1954–1969", 
    type: "tools",
    desc: "Three automobiles used by President Hồ Chí Minh from 1954 to 1969, preserved at the Presidential Palace Historic Site, Hanoi. These vehicles — witnesses to decisive moments of Vietnamese history — connect the revolutionary leader's daily life to the era of national reunification."
  },

  // ── BATCH 14 · Quyết định 236/QĐ-TTg · 03/02/2026 ────────────────
  {
    id: 328, 
    name: "Sưu tập trống đồng Làng Vạc Văn hoá Đông Sơn",
    english: "Lang Vac Dong Son Bronze Drum Collection",
    location: "Bảo tàng Nghệ An - Xô viết Nghệ Tĩnh, tỉnh Nghệ An",
    lat: 18.67197074083024, lng: 105.66943762421522,
    category: "historical", 
    badge: "Đông Sơn Bronze", 
    year: "Đông Sơn", 
    type: "tools",
    desc: "A collection of Đông Sơn culture bronze drums from the Làng Vạc archaeological site, Nghệ An, dated to the 3rd–1st century BCE. Làng Vạc is one of the most significant Đông Sơn excavation sites, and this ensemble documents the rich Bronze Age culture of the north-central Vietnamese plain."
  },
  {
    id: 329,
    name: "Sưu tập muôi đồng Văn hoá Đông Sơn",
    english: "Dong Son Bronze Ladle Collection",
    location: "Bảo tàng Kính Hoa, Hà Nội",
    lat: 21.030451401928165, lng: 105.83677335686808, 
    category: "historical", 
    badge: "Đông Sơn Bronze", 
    year: "Đông Sơn", 
    type: "tools",
    desc: "A collection of Đông Sơn culture bronze ladles (muôi) dated to approximately the 2nd–1st century BCE, at the Kính Hoa Museum, Hanoi. These finely cast ritual vessels, decorated with zoomorphic handles, reveal the sophisticated ceremonial dining culture of ancient Vietnamese Bronze Age society."
  },
  {
    id: 330,
    name: "Bộ chuông đồng Văn hoá Đông Sơn",
    english: "Dong Son Bronze Bell Set",
    location: "Bảo tàng Kính Hoa, Hà Nội",
    lat: 21.030451401928165, lng: 105.83677335686808, 
    category: "historical", 
    badge: "Đông Sơn Bronze", 
    year: "Đông Sơn", 
    type: "tools",
    desc: "A set of Đông Sơn culture bronze bells (chuông đồng) dated to approximately the 2nd century BCE–1st century CE, at the Kính Hoa Museum. These ritual percussion instruments, with their characteristic boat-shaped form, are among the most evocative objects of ancient Vietnamese musical and ceremonial life."
  },
  {
    id: 331,
    name: "Bộ áo giáp đồng Văn hoá Đông Sơn",
    english: "Dong Son Bronze Armour Set",
    location: "Bảo tàng Kính Hoa, Hà Nội",
    lat: 21.030451401928165, lng: 105.83677335686808, 
    category: "historical", 
    badge: "Đông Sơn Bronze", 
    year: "Đông Sơn", 
    type: "tools",
    desc: "A set of Đông Sơn culture bronze armour plates (áo giáp đồng) dated to approximately the 1st century BCE–1st century CE, at the Kính Hoa Museum. The only known bronze armour set from the Đông Sơn culture, it transforms our understanding of Bronze Age Vietnamese military technology and elite warrior culture."
  },
  {
    id: 332,
    name: "Chậu trống đồng Văn hoá Đông Sơn",
    english: "Dong Son Bronze Drum Basin",
    location: "Bảo tàng Kính Hoa, Hà Nội",
    lat: 21.030451401928165, lng: 105.83677335686808, 
    category: "historical", 
    badge: "Đông Sơn Bronze", 
    year: "Đông Sơn", 
    type: "tools",
    desc: "A Đông Sơn culture bronze drum-shaped basin (chậu trống đồng) dated to approximately the 1st century BCE–1st century CE, at the Kính Hoa Museum. This rare hybrid vessel — combining the form of a drum tympanum with that of a deep basin — illustrates the remarkable versatility of Đông Sơn bronze craftsmanship."
  },
  {
    id: 333,
    name: "Bát bồng gốm Văn hoá Hoa Lộc",
    english: "Hoa Loc Pedestal Bowl",
    location: "Bảo tàng Gốm thời dựng nước, TP Hồ Chí Minh",
    lat: 10.788022557457188, lng: 106.70474130245552,
    category: "historical", 
    badge: "Hoa Lộc Ceramic", 
    year: "Tiền sử", 
    type: "art",
    desc: "A pedestal bowl (bát bồng) from the Hoa Lộc culture dated approximately 4,000–3,800 years ago, at the Museum of Ceramics in the Nation-Building Era, HCMC. The Hoa Lộc culture produced some of the most elegant Neolithic pottery in Southeast Asia, distinguished by its burnished surface and incised geometric decoration."
  },
  {
    id: 334,
    name: "Tượng Phật bằng đá Văn hóa Óc Eo",
    english: "Oc Eo Stone Buddha Statue",
    location: "Sưu tập tư nhân Đào Danh Đức, Hà Nội",
    lat: 21.024191439472848, lng: 105.85991300009727,
    category: "religious", 
    badge: "Óc Eo Statue", 
    year: "Óc Eo", 
    type: "religious",
    desc: "A 6th–7th century Óc Eo culture stone Buddha statue from the private collection of Đào Danh Đức, Hanoi. Its graceful proportions and fine drapery show direct descent from the Gupta and post-Gupta schools of Buddhist sculpture in India, brought to the ancient Mekong Delta through maritime trade."
  },
  { 
    id: 335, 
    name: "Tượng thần Vishnu bằng đá Văn hóa Óc Eo",
    english: "Oc Eo Stone Vishnu Statue",
    location: "Sưu tập tư nhân Đào Danh Đức, Hà Nội",
    lat: 21.024191439472848, lng: 105.85991300009727,
    category: "religious", 
    badge: "Óc Eo Statue", 
    year: "Óc Eo", 
    type: "religious",
    desc: "A 6th–7th century Óc Eo culture stone statue of Vishnu from the private collection of Đào Danh Đức, Hanoi. Its four arms bearing the characteristic divine attributes reflect the Vaishnavite tradition that flourished alongside Buddhism in the ancient Funan kingdom of the Mekong Delta."
  },
  {
    id: 336,
    name: "Tượng đồng Nữ thần Durga Văn hoá Chăm Pa",
    english: "Cham Pa Bronze Durga Goddess Statue",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "religious", 
    badge: "Chăm Pa Statue", 
    year: "Chăm Pa", 
    type: "religious",
    desc: "A 7th-century Chăm Pa bronze statue of Durga, the warrior goddess, at the National History Museum, Hanoi. Cast with remarkable technical skill, its dynamic ten-armed form slaying the buffalo demon Mahisha is one of the most powerful representations of Shakti power in ancient Southeast Asian art."
  },
  {
    id: 337,
    name: "Sưu tập đồ thờ bằng vàng tháp Chăm An Phú",
    english: "An Phu Cham Tower Gold Ritual Objects Collection",
    location: "Bảo tàng Pleiku, tỉnh Gia Lai",
    lat: 13.98516296752836, lng: 108.00600243859282,
    category: "religious", 
    badge: "Chăm Pa Gold", 
    year: "Chăm Pa", 
    type: "religious",
    desc: "A collection of 9th–10th century gold ritual objects recovered from the An Phú Cham tower site, preserved at Pleiku Museum, Gia Lai. These finely crafted gold items — leaves, flowers, and votive ornaments — document the lavish ritual practices of Chăm Pa highland communities."
  },
  {
    id: 338,
    name: "Nắp hộp gốm men xanh lục thời Lý, Hoàng thành Thăng Long",
    english: "Ly Dynasty Green-Glazed Ceramic Box Lid, Thang Long",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical", 
    badge: "Lý Dynasty Ceramic", 
    year: "Lý", 
    type: "art",
    desc: "An 11th-century Lý dynasty green-glazed ceramic box lid (nắp hộp men xanh lục) excavated from Thăng Long Citadel, preserved by the Thăng Long Heritage Conservation Centre. Its lustrous celadon glaze and refined incised decoration reflect the Chinese-influenced but distinctively Vietnamese imperial ceramic tradition of the Lý court."
  },
  {
    id: 339, 
    name: "Bia đá chùa Nghĩa Xá",
    english: "Nghia Xa Pagoda Stone Stele",
    location: "Chùa Nghĩa Xá (Viên Quang tự), xã Xuân Trường, tỉnh Ninh Bình",
    lat: 20.246840870508386, lng: 106.30996604113244,
    category: "historical", 
    badge: "Lý Dynasty Stele", 
    year: "Lý", 
    type: "academic",
    desc: "A stone stele dated Thiên Phù Duệ Vũ year 3 (1122) at Nghĩa Xá Pagoda (Viên Quang tự), Ninh Bình. Its inscription records the construction and royal patronage of the pagoda under Emperor Lý Nhân Tông, making it a primary source on Lý dynasty Buddhist architecture and state religion."
  },
  {
    id: 340,
    name: "Thành bậc rồng thời Lý, Hoàng thành Thăng Long",
    english: "Ly Dynasty Dragon Steps, Thang Long Citadel",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical",
    badge: "Lý Dynasty Stone", 
    year: "Lý", 
    type: "art",
    desc: "A 12th–13th century Lý dynasty carved stone dragon staircase balustrade (thành bậc rồng) from Thăng Long Citadel. The sinuous dragons ascending the steps symbolised imperial power and protected the sacred approach to the throne hall, representing the pinnacle of Lý architectural stone carving."
  },
  {
    id: 341,
    name: "Chậu gốm hoa nâu thời Trần, Hoàng thành Thăng Long",
    english: "Tran Dynasty Brown Floral Ceramic Basin, Thang Long",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical", 
    badge: "Trần Ceramic", 
    year: "Trần", 
    type: "art",
    desc: "A 13th-century Trần dynasty brown floral ceramic basin (chậu gốm hoa nâu) excavated from Thăng Long Citadel. Decorated with the distinctive hoa nâu (brown flower) painted design on cream glaze, it is an outstanding example of the imperial ceramic production at the Đại Việt capital."
  },
  {
    id: 342,
    name: "Sưu tập đĩa đèn đồng thời Trần, Hoàng thành Thăng Long",
    english: "Tran Dynasty Bronze Oil Lamp Dish Collection, Thang Long",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical", 
    badge: "Trần Bronze", 
    year: "Trần", 
    type: "art",
    desc: "A collection of 13th–14th century Trần dynasty bronze oil lamp dishes (đĩa đèn đồng) from Thăng Long Citadel. These elegant functional objects lit the chambers of the imperial palace and are among the few surviving examples of Trần metalwork from the royal capital."
  },
  {
    id: 343, 
    name: "Bia Ma nhai kỷ công Thành Nam thời Trần",
    english: "Tran Dynasty Thanh Nam Rock Inscription",
    location: "Vách núi Thành Nam, xã Con Cuông, tỉnh Nghệ An",
    lat: 19.055927676537056, lng: 104.8653086131026,
    category: "historical", 
    badge: "Trần Inscription", 
    year: "Trần", 
    type: "academic",
    desc: "A cliff inscription (ma nhai) dated the 12th month of Ất Hợi, Khai Hựu year 7 (1335), carved on the Thành Nam mountain face in Con Cuông, Nghệ An. This in-situ Trần dynasty military commemorative inscription is a rare primary source on 14th-century Vietnamese frontier history."
  },
  {
    id: 344,
    name: "Bàn thờ Phật bằng đá chùa Thượng Nương",
    english: "Stone Buddhist Altar, Thuong Nuong Pagoda",
    location: "Chùa Thượng Nương, thôn Tam Tứ, xã Liêm Hà, tỉnh Ninh Bình",
    lat: 20.503677134060045, lng: 105.9540703376119, 
    category: "religious", 
    badge: "Trần Stone Altar", 
    year: "Trần", 
    type: "religious",
    desc: "A stone Buddhist altar dated Đại Trị year 7 (1364) at Thượng Nương Pagoda, Ninh Bình. Its richly carved panels of lotus, dragons, and celestial beings represent the mature Trần dynasty stone-carving tradition, blending Buddhist and indigenous Vietnamese decorative motifs."
  },
  {
    id: 345, 
    name: "Bàn thờ Phật bằng đá chùa Hương Trai",
    english: "Stone Buddhist Altar, Huong Trai Pagoda",
    location: "Chùa Hương Trai, xã Dương Hoà, Hà Nội",
    lat: 21.056980982669014, lng: 105.67443975134967,
    category: "religious", 
    badge: "Trần Stone Altar",
    year: "Trần", 
    type: "religious",
    desc: "A stone Buddhist altar dated Đại Định year 2 (1370) at Hương Trai Pagoda, Dương Hoà, Hanoi. A companion piece to the Đại Bi altar, its elaborate carved reliefs of lotus flowers and guardian figures are a significant example of late Trần dynasty sacred stone furniture."
  },
  {
    id: 346, 
    name: "Bàn thờ Phật bằng đá chùa Đại Bi",
    english: "Stone Buddhist Altar, Dai Bi Pagoda",
    location: "Chùa Đại Bi, xã Dương Hoà, Hà Nội",
    lat: 21.053513153671297, lng: 105.67656360536596,
    category: "religious", 
    badge: "Trần Stone Altar", 
    year: "Trần", 
    type: "religious",
    desc: "A stone Buddhist altar dated Long Khánh year 2 (1374) at Đại Bi Pagoda, Dương Hoà, Hanoi. Its carved surface with lotus medallions, celestial musicians, and dragons illustrates the rich iconographic programme of Trần dynasty Buddhist altar art in the Hanoi region."
  },
  {
    id: 347, 
    name: "Bộ tranh khắc ma nhai 18 vị La Hán Động Liên Hoa",
    english: "18 Arhat Rock Engravings, Lien Hoa Cave",
    location: "Động Liên Hoa, chùa Phong Phú, phường Tây Hoa Lư, tỉnh Ninh Bình",
    lat: 20.30864471479066, lng: 105.9417548819574,
    category: "religious", 
    badge: "Trần Rock Art", 
    year: "Trần", 
    type: "art",
    desc: "A set of cliff engravings depicting the 18 Lohans (La Hán) in Liên Hoa Cave at Phong Phú Pagoda, Ninh Bình, dated to the Trần dynasty. Carved directly into the living rock of a sacred cave, these dynamic Lohan figures are exceptional examples of Trần dynasty Buddhist narrative rock art."
  },
  {
    id: 348, 
    name: "Sách đồng Khâm Ban của Lê Thánh Tông",
    english: "Le Thanh Tong Bronze Edict Book",
    location: "Đình Cầu Không, xã Bắc Lý, tỉnh Ninh Bình",
    lat: 20.566530630809524, lng: 106.07758608282002,
    category: "historical", 
    badge: "Lê Dynasty Bronze Book", 
    year: "Lê sơ", 
    type: "academic",
    desc: "A bronze edict book (sách đồng Khâm Ban) issued by Emperor Lê Thánh Tông on the 6th day of the 3rd month, Hồng Đức year 3 (1472), preserved at Cầu Không Communal House, Ninh Bình. This officially sealed bronze book bestowing royal recognition on a local deity is a rare survival of Lê sơ administrative bronze craftsmanship."
  },
  {
    id: 349,
    name: "Bình gốm men trắng vẽ rồng thời Lê Sơ, Hoàng thành Thăng Long",
    english: "Le So White-Glazed Dragon Ceramic Vase, Thang Long",
    location: "Trung tâm Bảo tồn Di sản Thăng Long - Hà Nội",
    lat: 21.033249030383676, lng: 105.839235707325,
    category: "historical", 
    badge: "Lê Dynasty Ceramic", 
    year: "Lê sơ", 
    type: "art",
    desc: "A 15th-century Lê sơ white-glazed ceramic vase painted with dragons from Thăng Long Citadel, at the Thăng Long Heritage Conservation Centre. The vibrant cobalt-blue dragon design on a pure white ground is a hallmark of the finest Lê sơ imperial porcelain, made exclusively for use at the royal palace."
  },
  {
    id: 350, 
    name: "Bàn thờ Phật bằng đá thời Mạc chùa Nhạn Tháp",
    english: "Mac Dynasty Stone Buddhist Altar, Nhan Thap Pagoda",
    location: "Chùa Nhạn Tháp, xã Mễ Sở, tỉnh Hưng Yên",
    lat: 20.89357813936107, lng: 105.91643632951796,
    category: "religious", 
    badge: "Mạc Stone Altar",
    year: "Mạc", 
    type: "religious",
    desc: "A 16th-century Mạc dynasty stone Buddhist altar at Nhạn Tháp Pagoda, Mễ Sở, Hưng Yên. The Mạc dynasty, often overlooked in Vietnamese history, produced distinctive religious art that synthesised Lê traditions with new Chinese influences, and this altar is one of its finest surviving examples."
  },
  {
    id: 351, 
    name: "Bộ 03 ngai thờ gỗ thời Mạc đền Đa Hòa",
    english: "Set of Three Mac Dynasty Wooden Votive Thrones, Da Hoa Temple",
    location: "Đền Đa Hòa, xã Mễ Sở, tỉnh Hưng Yên",
    lat: 20.8781507164806, lng: 105.93073251703109,
    category: "religious", badge: "Mạc Wooden Throne", year: "Mạc", type: "religious",
    desc: "A set of three 16th-century Mạc dynasty lacquered wooden votive thrones at Đa Hòa Temple, Mễ Sở, Hưng Yên. Their elaborate carved and gilded dragons, phoenixes, and lotus motifs exemplify the rich decorative woodcarving tradition of the Mạc dynasty temples dedicated to the protective deity Chử Đồng Tử."
  },
  {
    id: 352, 
    name: "Chuông chùa An Xá",
    english: "An Xa Pagoda Bell (Bac Bien Pagoda)",
    location: "Chùa Bắc Biên, phường Bồ Đề, Hà Nội",
    lat: 21.055479794421608, lng: 105.86423985716058,
    category: "religious", badge: "Lê Trung Hưng Bell", year: "Lê Trung Hưng", type: "religious",
    desc: "A bronze bell dated Chính Hòa year 11 (1690), reign of Emperor Lê Hy Tông, at Bắc Biên Pagoda (formerly An Xá Pagoda), Bồ Đề, Hanoi. Its sonorous tone and finely inscribed surface recording the pagoda's donors and patrons make it an important document of late 17th-century Buddhist community life in Hanoi."
  },
  {
    id: 353,
    name: "03 bia đá chùa Keo Hành Thiện thời Lê Trung hưng",
    english: "Three Steles of Keo Hanh Thien Pagoda",
    location: "Chùa Keo Hành Thiện (Thần Quang tự), xã Xuân Hồng, tỉnh Ninh Bình",
    lat: 20.34181559367642, lng: 106.32160554016325,
    category: "historical", badge: "Lê Trung Hưng Stele", year: "Lê Trung Hưng", type: "academic",
    desc: "Three stone steles dated Hoằng Định year 13 (1613), Cảnh Trị year 9 (1671), and Chính Hòa year 25 (1704) at Keo Hành Thiện Pagoda (Thần Quang tự). These three successive steles record the history, restorations, and donor communities of one of the most celebrated Lê-period pagodas in northern Vietnam."
  },
  {
    id: 354, 
    name: "Tượng Phật bằng gỗ Mẫu Man Nương chùa Tổ",
    english: "Man Nuong Wooden Buddha Statue, Chua To",
    location: "Chùa Phúc Nghiêm (chùa Tổ), phường Song Liễu, tỉnh Bắc Ninh",
    lat: 21.03064872277727, lng: 106.0327097811914,
    category: "religious", badge: "Nguyễn Wooden Statue", year: "Nguyễn", type: "religious",
    desc: "An 18th-century lacquered wooden statue of Mẫu Man Nương — the Vietnamese Earth Mother and patron of Buddhism — at Phúc Nghiêm Pagoda (Chùa Tổ), Song Liễu, Bắc Ninh. She is regarded as the progenitor of the Tứ Pháp (Four Dharma Goddesses), whose cult is central to Vietnamese popular Buddhism."
  },
  {
    id: 355, 
    name: "Bộ tượng gốm men nhiều màu Tam quan Đại đế",
    english: "Polychrome Ceramic Tam Quan Dai De Statues Set",
    location: "Sưu tập tư nhân Lê Thanh Nghĩa, TP Hồ Chí Minh",
    lat: 10.787844819299172, lng: 106.70500514888936,
    category: "religious", badge: "Polychrome Ceramic", year: "Nguyễn", type: "art",
    desc: "A late 19th–early 20th century set of polychrome glazed ceramic statues of the Three Immortal Officials (Tam Quan Đại Đế) from the private collection of Lê Thanh Nghĩa, HCMC. These vibrant southern Vietnamese religious ceramics blend Chinese Taoist iconography with local artistic sensibility."
  },
  {
    id: 356,
    name: "Bộ cồng chiêng Kơ Đơ",
    english: "\"Ko Do\" Gong Set",
    location: "Bảo tàng Pleiku, tỉnh Gia Lai",
    lat: 13.98516296752836, lng: 108.00600243859282,
    category: "historical", badge: "Highland Music", year: "Nguyễn", type: "art",
    desc: "An early 20th-century Kơ Đơ gong set from the Central Highlands ethnic community, preserved at Pleiku Museum, Gia Lai. Part of the UNESCO-recognised intangible heritage of Central Highlands gong culture, this set embodies the living musical and ceremonial traditions of the highland peoples of southern Vietnam."
  },
  {
    id: 357,
    name: "Sổ vàng Trường Nguyễn Ái Quốc",
    english: "Nguyen Ai Quoc School Golden Book",
    location: "Bảo tàng Lịch sử quốc gia, Hà Nội",
    lat: 21.02454924042622, lng: 105.85966981144156,
    category: "historical", badge: "Founding Document", year: "1949–1950", type: "academic",
    desc: "The golden commemorative book of the Nguyễn Ái Quốc School, dated 1949–1950 and preserved at the National History Museum, Hanoi. This institution — Vietnam's foremost political training school for revolutionary cadres, named after Hồ Chí Minh's revolutionary pseudonym — shaped the leadership of the Democratic Republic of Vietnam."
  }
]