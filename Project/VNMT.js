/* ═══════════════════════════════════════
   UNESCO INTANGIBLE CULTURAL HERITAGE OF VIETNAM
   Data covers entries inscribed on the UNESCO
   Representative List, Urgent Safeguarding List,
   and Vietnam national intangible heritage.

   NOTE: There are NO individual markers and NO
   clusters on the map. Heritage is discovered by
   clicking a province, which opens a pie-chart
   modal listing the heritage it contains.
   Provinces are coloured by their heritage's
   dominant colour (status or genre dimension).
═══════════════════════════════════════ */
const TREASURES = [
  {
    id: 1,
    name: 'Nhã nhạc cung đình Huế',
    english: 'Huế Royal Court Music (Nhã nhạc)',
    lat: 16.4637, lng: 107.5909,
    location: 'Thừa Thiên Huế · Kinh đô Huế',
    provinces: ['Thừa Thiên Huế'],
    year: '2003',
    status: 'representative',
    genre: 'instrumental',
    badge: 'UNESCO',
    desc_vi: 'Nhã nhạc là âm nhạc cung đình Việt Nam, được biểu diễn trong các dịp lễ triều đình nhà Nguyễn tại Huế. Được UNESCO công nhận Di sản văn hóa phi vật thể đại diện của nhân loại năm 2003, là loại hình nghệ thuật âm nhạc truyền thống tinh tế bậc nhất.',
    desc: 'Nhã nhạc is Vietnamese court music performed at ceremonies of the Nguyễn dynasty in Huế. Inscribed on the UNESCO Representative List in 2003, it is among the most refined traditional musical art forms of Vietnam.',
  },
  {
    id: 2,
    name: 'Không gian văn hóa Cồng Chiêng Tây Nguyên',
    english: 'Gong Culture of the Central Highlands',
    lat: 12.7149, lng: 108.2436,
    location: 'Đắk Lắk · Gia Lai · Kon Tum',
    provinces: ['Đắk Lắk','Gia Lai','Quảng Ngãi'],
    year: '2005',
    status: 'representative',
    genre: 'instrumental',
    badge: 'UNESCO',
    desc_vi: 'Không gian văn hóa Cồng Chiêng Tây Nguyên gắn liền với đời sống tinh thần của các dân tộc Ba Na, Xê Đăng, Cơ Ho, M\'Nông, Ê Đê. UNESCO công nhận Di sản văn hóa phi vật thể đại diện của nhân loại năm 2005.',
    desc: 'The Gong Culture of the Central Highlands is central to the spiritual life of the Ba Na, Xê Đăng, Cơ Ho, M\'Nông and Ê Đê peoples. Inscribed on the UNESCO Representative List in 2005.',
  },
  {
    id: 3,
    name: 'Quan họ Bắc Ninh',
    english: 'Quan họ Folk Singing of Bắc Ninh',
    lat: 21.1861, lng: 106.0763,
    location: 'Bắc Ninh · Vùng Kinh Bắc',
    provinces: ['Bắc Ninh'],
    year: '2009',
    status: 'representative',
    genre: 'singings',
    badge: 'UNESCO',
    desc_vi: 'Quan họ là thể loại dân ca đối đáp đặc trưng của vùng Kinh Bắc, được công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại năm 2009. Ca hát diễn ra trong các lễ hội làng, bóng dáng thân thiện, mười câu mười lời trao gửi tình nghĩa trăm năm.',
    desc: 'Quan họ is an antiphonal folk singing genre from the Kinh Bắc region, inscribed on the UNESCO Representative List in 2009. Performed during village festivals, its gracious melodies and ten-verse exchanges express hundred-year bonds of friendship and affection.',
    audio_preview: 'audio/quanho-preview.wav',
    audio_vocal_only: 'audio/quanho-embed.wav',
  },
  {
    id: 4,
    name: 'Ca trù',
    english: 'Ca trù (Hát Ả Đào) Chamber Singing',
    lat: 21.0285, lng: 105.8542,
    location: 'Hà Nội · Bách Khoa · Khâm Thiên',
    provinces: ['Hà Nội'],
    year: '2009',
    status: 'urgent',
    genre: 'singings',
    badge: 'UNESCO',
    desc_vi: 'Ca trù là thể loại nghệ thuật diễn xướng phòng cổ truyền thống, họa tiết phong phú, cách nhả chữ rung luyến tinh tế với đào nương, kép đàn và quan viên. UNESCO đưa vào Danh sách di sản cần bảo vệ khẩn cấp năm 2009.',
    desc: 'Ca trù is a complex form of sung chamber music with refined ornamentation, performed by a female singer (đào nương), lute player (kép đàn) and percussionist (quán viên). UNESCO inscribed it on the Urgent Safeguarding List in 2009.',
  },
  {
    id: 5,
    name: 'Hội Gióng Phù Đổng',
    english: 'Gióng Festival of Phù Đổng & Sóc Sơn',
    lat: 21.2766, lng: 105.8461,
    location: 'Hà Nội · Gia Lâm · Sóc Sơn',
    provinces: ['Hà Nội'],
    year: '2010',
    status: 'representative',
    genre: 'festival',
    badge: 'UNESCO',
    desc_vi: 'Hội Gióng là lễ hội lớn tưởng nhớ Thánh Gióng đánh thắng giặc Ân, truyền thuyết về anh hùng dân tộc. Được UNESCO công nhận Di sản văn hóa phi vật thể đại diện của nhân loại năm 2010.',
    desc: 'The Gióng Festival commemorates Saint Gióng, who defeated the Ân invaders according to Vietnamese legend. Inscribed on the UNESCO Representative List in 2010.',
  },
  {
    id: 6,
    name: 'Tín ngưỡng thờ cúng Hùng Vương',
    english: 'Worship of the Hùng Kings in Phú Thọ',
    lat: 21.3254, lng: 105.2116,
    location: 'Phú Thọ · Đền Hùng',
    provinces: ['Phú Thọ'],
    year: '2012',
    status: 'national',
    genre: 'belief',
    badge: 'UNESCO',
    desc_vi: 'Tín ngưỡng thờ cúng Hùng Vương là tục thờ tổ tiên sâu sắc nhất của người Việt, gắn với tín niệm các vua Hùng sáng lập nước. UNESCO công nhận Di sản văn hóa phi vật thể đại diện của nhân loại năm 2012.',
    desc: 'The worship of the Hùng Kings is the most profound ancestor-veneration practice of the Vietnamese, rooted in the legend of the Hùng Kings who founded the nation. Inscribed on the UNESCO Representative List in 2012.',
  },
  {
    id: 7,
    name: 'Đờn ca tài tử',
    english: 'Đờn ca tài tử of Southern Vietnam',
    lat: 10.0452, lng: 105.7469,
    location: 'Cần Thơ · Đồng bằng sông Cửu Long',
    provinces: ['Cần Thơ','An Giang','Vĩnh Long','Đồng Tháp','Cà Mau', 'Tây Ninh'],
    year: '2013',
    status: 'representative',
    genre: 'singings',
    badge: 'UNESCO',
    desc_vi: 'Đờn ca tài tử là nghệ thuật âm nhạc truyền thống của người Nam Bộ, bắt nguồn từ nhạc lễ và nhạc sân khấu cải lương thế kỷ XIX. UNESCO công nhận Di sản văn hóa phi vật thể đại diện nhân loại năm 2013.',
    desc: 'Đờn ca tài tử is a traditional musical art of southern Vietnam, originating from ritual music and cải lương theatre of the 19th century. Inscribed on the UNESCO Representative List in 2013.',
  },
  {
    id: 8,
    name: 'Dân ca Ví, Giặm Nghệ Tĩnh',
    english: 'Ví & Giặm Folk Songs of Nghệ Tĩnh',
    lat: 18.6796, lng: 105.6927,
    location: 'Nghệ An · Hà Tĩnh · Vùng Nghệ Tĩnh',
    provinces: ['Nghệ An','Hà Tĩnh'],
    year: '2014',
    status: 'representative',
    genre: 'singings',
    badge: 'UNESCO',
    desc_vi: 'Ví và Giặm là hai thể loại dân ca đặc trưng của người dân xứ Nghệ, được sử dụng trong lao động, sinh hoạt và bộc lộ tình cảm. UNESCO công nhận Di sản văn hóa phi vật thể đại diện năm 2014.',
    desc: 'Ví and Giặm are two distinctive folk song genres of the Nghệ Tĩnh region, performed during labour and daily life to express emotion and community bonds. Inscribed on the UNESCO Representative List in 2014.',
  },
  {
    id: 9,
    name: 'Nghi lễ và trò chơi kéo co',
    english: 'Tugging Rituals and Games',
    lat: 21.3200, lng: 105.5200,
    location: 'Hà Nội · Lào Cai · Vĩnh Phúc · Bắc Ninh',
    provinces: ['Hà Nội','Lào Cai','Phú Thọ','Bắc Ninh'],
    year: '2015',
    status: 'national',
    genre: 'festival',
    badge: 'UNESCO',
    desc_vi: 'Nghi lễ và trò chơi kéo co là tập tục văn hóa dân gian phổ biến ở nhiều địa phương, cầu mong mùa màng tươi tốt, thịnh vượng. UNESCO công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại năm 2015.',
    desc: 'Tugging rituals and games are a widespread folk cultural practice in many localities, praying for bountiful harvests and prosperity. Inscribed on the UNESCO Representative List in 2015.',
  },
  {
    id: 10,
    name: 'Tín ngưỡng thờ Mẫu tam tòa',
    english: 'Viet Belief in Mother Goddesses of Three Realms',
    lat: 20.4195, lng: 106.1667,
    location: 'Nam Định · Phủ Dày',
    provinces: ['Ninh Bình'],
    year: '2016',
    status: 'national',
    genre: 'belief',
    badge: 'UNESCO',
    desc_vi: 'Tín ngưỡng thờ Mẫu tam tòa (Thiên – Địa – Thủy) thể hiện qua nghi lễ Hầu đồng và hát văn. UNESCO công nhận Di sản văn hóa phi vật thể đại diện của nhân loại năm 2016.',
    desc: 'The Vietnamese belief in the Mother Goddesses of the Three Realms (Heaven–Earth–Water) is expressed through Hầu đồng (spirit mediumship) rites and hát văn. Inscribed on the UNESCO Representative List in 2016.',
  },
  {
    id: 11,
    name: 'Nghệ thuật Bài Chòi',
    english: 'Bài Chòi Art of Central Vietnam',
    lat: 15.8801, lng: 108.3380,
    location: 'Quảng Nam · Quảng Ngãi · Bình Định',
    provinces: ['Đà Nẵng','Quảng Ngãi','Gia Lai'],
    year: '2017',
    status: 'representative',
    genre: 'singings',
    badge: 'UNESCO',
    desc_vi: 'Bài Chòi là nghệ thuật diễn xướng kết hợp giữa trò chơi bài và hát Wooden của nông dân miền Trung. UNESCO công nhận Di sản văn hóa phi vật thể đại diện của nhân loại năm 2017.',
    desc: 'Bài Chòi is a performative art combining card play with traditional singing by farmers of central Vietnam. Inscribed on the UNESCO Representative List in 2017.',
  },
  {
    id: 12,
    name: 'Hát Xoan Phú Thọ',
    english: 'Xoan Singing of Phú Thọ',
    lat: 21.4092, lng: 105.4012,
    location: 'Phú Thọ · Đền Hùng',
    provinces: ['Phú Thọ'],
    year: '2017',
    status: 'representative',
    genre: 'singings',
    badge: 'UNESCO',
    desc_vi: 'Hát Xoan (hát Cửa đình) là loại hình nghệ thuật diễn xướng nghi lễ cổ của vùng đất tổ Hùng Vương, gắn với thờ cúng các vua Hùng. UNESCO ghi danh khẩn cấp năm 2011, chuyển sang Danh sách đại diện năm 2017.',
    desc: 'Xoan singing is a ritual performance art from the Hùng Kings\' ancestral land, associated with worship at the Hùng temples. UNESCO inscribed it on the Urgent Safeguarding List in 2011 and moved it to the Representative List in 2017.',
  },
  {
    id: 13,
    name: 'Thực hành Then của người Tày, Nùng, Thái',
    english: 'Then Practice of the Tày, Nùng & Thái',
    lat: 22.6607, lng: 106.2520,
    location: 'Cao Bằng · Hà Giang · Lạng Sơn',
    provinces: ['Cao Bằng','Lạng Sơn','Tuyên Quang'],
    year: '2019',
    status: 'representative',
    genre: 'singings',
    badge: 'UNESCO',
    desc_vi: 'Thực hành Then là loại hình dân ca nghi lễ của người Tày, Nùng, Thái ở vùng Đông Bắc, gắn liền với đàn tính. UNESCO công nhận Di sản văn hóa phi vật thể đại diện của nhân loại năm 2019.',
    desc: 'Then practice is a ritual folk music genre of the Tày, Nùng and Thái peoples of the northeast, accompanied by the tính lute. Inscribed on the UNESCO Representative List in 2019.',
  },
  {
    id: 14,
    name: 'Nghệ thuật Xòe Thái',
    english: 'Xòe Dance Art of the Thái People',
    lat: 21.4500, lng: 103.9000,
    location: 'Yên Bái · Sơn La · Lai Châu · Điện Biên',
    provinces: ['Lào Cai','Sơn La','Lai Châu','Điện Biên'],
    year: '2021',
    status: 'representative',
    genre: 'festival',
    badge: 'UNESCO',
    desc_vi: 'Xòe Thái là điệu múa truyền thống đặc sắc của người Thái ở Tây Bắc, thể hiện tinh thần cộng đồng, tình yêu quê hương. UNESCO công nhận Di sản văn hóa phi vật thể đại diện của nhân loại năm 2021.',
    desc: 'Xòe is a distinctive traditional dance of the Thái people in the Northwest, expressing community spirit and love of homeland. Inscribed on the UNESCO Representative List in 2021.',
  },
  {
    id: 15,
    name: 'Nghệ thuật làm gốm của người Chăm',
    english: 'Cham Pottery Making Art',
    lat: 11.5800, lng: 108.9500,
    location: 'Ninh Thuận · Bình Thuận',
    provinces: ['Lâm Đồng','Khánh Hòa'],
    year: '2022',
    status: 'urgent',
    genre: 'craft',
    badge: 'UNESCO',
    desc_vi: 'Nghệ thuật làm gốm của người Chăm là kỹ thuật làm gốm thủ công truyền thống độc đáo, không dùng bàn xoay, được truyền qua nhiều thế hệ. UNESCO công nhận Di sản văn hóa phi vật thể đại diện của nhân loại năm 2022.',
    desc: 'Cham pottery making is a unique traditional handcraft technique without a potter\'s wheel, passed down through generations. Inscribed on the UNESCO Representative List in 2022.',
  },
  {
    id: 16,
    name: 'Lễ hội Vía Bà Chúa Xứ Núi Sam',
    english: 'Festival of the Bà Chúa Xứ Goddess of Núi Sam',
    lat: 10.6950, lng: 105.1100,
    location: 'An Giang · Núi Sam · Châu Đốc',
    provinces: ['An Giang'],
    year: '2024',
    status: 'representative',
    genre: 'belief',
    badge: 'UNESCO',
    desc_vi: 'Lễ hội Vía Bà Chúa Xứ Núi Sam là lễ hội dân gian lớn ở miền Tây Nam Bộ, tôn vinh nữ thần bảo hộ vùng đất Châu Đốc. UNESCO công nhận Di sản văn hóa phi vật thể đại diện của nhân loại năm 2024.',
    desc: 'The Festival of the Bà Chúa Xứ Goddess of Núi Sam is a major folk festival in the Mekong Delta, honoring the protective goddess of the Châu Đốc region. Inscribed on the UNESCO Representative List in 2024.',
  },
];

/* ═══════════════════════════════════════
   LANGUAGE / I18N
═══════════════════════════════════════ */
let lang = localStorage.getItem('vnmt_lang') || 'vi';

const STRINGS = {
  vi: {
    headerEyebrow: 'Di Sản Phi Vật Thể Được UNESCO Công Nhận',
    titleLine1: 'Di Sản',
    titleEm: 'Phi Vật Thể',
    titleLine2: 'Việt Nam',
    statShownLabel: 'Hiển thị',
    statTotalLabel: 'Tổng số',
    statLocsLabel: 'Tỉnh thành',
    searchPlaceholder: 'Tìm theo tên hoặc địa điểm…',
    allStatuses: 'Tất cả trạng thái',
    allGenres: 'Tất cả thể loại',
    mapReset: '⟳ Đặt lại',
    homeLink: '← Trang chủ',
    dbLink: 'Kho lưu trữ',
    viewToggleLabel: 'Xem theo',
    viewStatus: 'Trạng thái',
    viewGenre: 'Thể loại',
    tileStyleLabel: 'Kiểu bản đồ',
    tileOsm: 'Bản đồ đường phố',
    footerCopyright: '© 2026 Di sản văn hóa phi vật thể Việt Nam',
    footerCredit: 'Bản đồ: <em>CartoDB / OpenStreetMap</em> · Ranh giới tỉnh: <em>vn_geo.json</em>',
    legendStatus: 'Trạng thái UNESCO',
    legendGenre: 'Thể loại di sản',
    resultCountUnit: 'Di sản',
    provinceHover: 'Di sản',
    ntProvinceHover: 'Bảo vật',
    pieCta: 'Xem chi tiết →',
    /* ── National Treasures mode ── */
    modeUnesco: 'UNESCO',
    modeTreasure: 'Bảo vật',
    ntEyebrow: '357 Bảo Vật Quốc Gia Việt Nam',
    ntEyebrowEn: 'National Treasures',
    ntLegend: 'Loại bảo vật',
    ntCatAll: 'Tất cả',
    ntCatHistorical: 'Lịch sử',
    ntCatReligious: 'Tôn giáo',
    ntStatLocs: 'Điểm',
    ntTotalLabel: 'Bảo vật',
    ntCatLabel: 'Phân loại',
    ntDescLabel: 'Mô tả',
    ntLocLabel: 'Vị trí',
    ntTypeLabel: 'Loại',
    ntYearLabel: 'Niên đại',
    ntViewCategory: 'Loại',
    ntViewEra: 'Niên đại',
    ntProvinceTitle: 'Bảo vật trong tỉnh',
  },
  en: {
    headerEyebrow: 'UNESCO-Recognized Intangible Cultural Heritage',
    titleLine1: 'Intangible',
    titleEm: 'Heritage',
    titleLine2: 'Vietnam',
    statShownLabel: 'Shown',
    statTotalLabel: 'Total',
    statLocsLabel: 'Provinces',
    searchPlaceholder: 'Search by name or location…',
    allStatuses: 'All Statuses',
    allGenres: 'All Genres',
    mapReset: '⟳ Reset view',
    homeLink: '← Home',
    dbLink: 'Database',
    viewToggleLabel: 'View by',
    viewStatus: 'Status',
    viewGenre: 'Genre',
    tileStyleLabel: 'Map Style',
    tileOsm: 'Street Map',
    footerCopyright: '© 2026 Vietnam Intangible Cultural Heritage',
    footerCredit: 'Map: <em>CartoDB / OpenStreetMap</em> · Province borders: <em>vn_geo.json</em>',
    legendStatus: 'UNESCO Status',
    legendGenre: 'Heritage Genre',
    resultCountUnit: 'heritages',
    provinceHover: 'heritages',
    ntProvinceHover: 'Treasures',
    pieCta: 'View details →',
    /* ── National Treasures mode ── */
    modeUnesco: 'UNESCO',
    modeTreasure: 'Treasures',
    ntEyebrow: '357 National Treasures of Vietnam',
    ntEyebrowEn: 'National Treasures',
    ntLegend: 'Treasure type',
    ntCatAll: 'All',
    ntCatHistorical: 'Historical',
    ntCatReligious: 'Religious',
    ntStatLocs: 'Sites',
    ntTotalLabel: 'Treasures',
    ntCatLabel: 'Category',
    ntDescLabel: 'Description',
    ntLocLabel: 'Location',
    ntTypeLabel: 'Type',
    ntYearLabel: 'Period',
    ntViewCategory: 'Type',
    ntViewEra: 'Era',
    ntProvinceTitle: 'Treasures in province',
  },
};

function t(key) { return STRINGS[lang][key]; }

function resultCountText(shown, total) {
  return lang === 'vi'
    ? `${shown} trên ${total} ${t('resultCountUnit')}`
    : `${shown} of ${total} ${t('resultCountUnit')}`;
}
function provinceHoverText(n) {
  return lang === 'vi' ? `${n} ${t('provinceHover')}` : `${n} ${t('provinceHover')}`;
}

/* Tooltip content for a province, mode-aware:
   UNESCO mode → heritage count; Treasures mode → artifact (treasure) count. */
function provinceTooltipHTML(name) {
  const items = nationalMode
    ? (ntProvinceIndex[name] || [])
    : (provinceIndex[name] || []);
  if (!items.length) return `<div class="tt-title">${name}</div>`;
  const dot = nationalMode ? '#d4875e' : provinceDominantColor(name);
  const label = nationalMode
    ? `${items.length} ${t('ntProvinceHover')}`
    : provinceHoverText(items.length);
  return `<div class="tt-title">${name}</div>
     <div class="tt-meta"><span class="tt-dot" style="background:${dot}"></span>${label}</div>`;
}

/* Rebuild every province tooltip (used on mode / language change). */
function refreshProvinceTooltips() {
  Object.keys(provinceLayers).forEach(name => {
    const layer = provinceLayers[name];
    if (layer) layer.setTooltipContent(provinceTooltipHTML(name));
  });
}

/* ═══════════════════════════════════════
   UNESCO STATUS & GENRE CONFIGURATION  (bilingual)
═══════════════════════════════════════ */
const STATUS_CONFIG = {
  urgent: {
    color:'#d4524a',
    vi: { label:'Danh sách cần bảo vệ khẩn cấp', short:'Cấp thiết' },
    en: { label:'Urgent Safeguarding List', short:'Urgent' },
  },
  representative: {
    color:'#c9a84c',
    vi: { label:'Danh sách đại diện của nhân loại', short:'Đại diện' },
    en: { label:'Representative List of Humanity', short:'Representative' },
  },
  national: {
    color:'#5a8a9f',
    vi: { label:'Di sản văn hóa phi vật thể quốc gia', short:'Quốc gia' },
    en: { label:'National Intangible Heritage', short:'National' },
  },
};

const GENRE_CONFIG = {
  instrumental: {
    color:'#4caf84',
    vi: { label:'Âm nhạc · Nhạc cụ', short:'Âm nhạc' },
    en: { label:'Instrumental Music', short:'Instrumental' },
  },
  singings: {
    color:'#c9943a',
    vi: { label:'Hát · Dân ca', short:'Hát' },
    en: { label:'Singing · Folk Songs', short:'Singings' },
  },
  belief: {
    color:'#9b6fbf',
    vi: { label:'Tín ngưỡng · Lễ nghi', short:'Tín ngưỡng' },
    en: { label:'Belief & Ritual', short:'Belief' },
  },
  festival: {
    color:'#c45c4a',
    vi: { label:'Lễ hội dân gian', short:'Lễ hội' },
    en: { label:'Folk Festival', short:'Festival' },
  },
  craft: {
    color:'#e88d4a',
    vi: { label:'Nghề thủ công truyền thống', short:'Thủ công' },
    en: { label:'Traditional Craft', short:'Craft' },
  },
};

/* bilingual label readers — form is 'label' or 'short' */
function statusLabel(key, form='label') { return STATUS_CONFIG[key]?.[lang]?.[form] || ''; }
function genreLabel(key, form='label') { return GENRE_CONFIG[key]?.[lang]?.[form] || ''; }

/* — manual status overrides for entries whose status is ambiguous — */
const STATUS_OVERRIDES = {
  12: 'representative',  // Hát Xoan — moved from Urgent (2011) to Representative (2017)
};

/* ── STATUS reader — status is a direct field on each heritage item ── */
function getStatus(t) {
  if (t && STATUS_OVERRIDES[t.id]) return STATUS_OVERRIDES[t.id];
  return t.status || 'national';
}

/* ── GENRE reader — genre is a direct field on each heritage item ── */
function getGenre(t) {
  return t.genre || 'ho';
}

/* ── Convenience wrappers: colour lookups ── */
function statusColor(t) { return STATUS_CONFIG[getStatus(t)]?.color || '#8a7c5e'; }
function genreColor(t)  { return GENRE_CONFIG[getGenre(t)]?.color   || '#8a7c5e'; }
function activeColor(t) { return viewMode === 'status' ? statusColor(t) : genreColor(t); }

/* ═══════════════════════════════════════
   STATE
═══════════════════════════════════════ */
let viewMode     = 'status';   // 'status' | 'genre'
let activeFilter = 'all';      // status key, genre key, or 'all'
let searchQuery  = '';
let activeItemId = null;
let activeProvince = null;     // name of province currently highlighted from a card click

/* ═══════════════════════════════════════
   NATIONAL TREASURES MODE  (separate layer from the 16 UNESCO sites)
   ═══════════════════════════════════════ */
let nationalMode = false;      // false → UNESCO province map; true → Bảo vật marker layer
let ntLayer   = null;          // L.markerClusterGroup for NATIONAL_TREASURES
let ntMarkers = {};            // id -> L.marker  (for activation / filtering)
let ntView    = 'type';        // 'type' | 'era'  (national-treasure view dimension)
let ntProvinceIndex = {};      // province name -> treasure ids (built after vn_geo loads)
let PROVINCE_GEO = {};         // province name -> GeoJSON geometry

const NT_CATEGORY_CONFIG = {
  all:        { color:'#d4875e', vi:{label:'Tất cả',            short:'Tất cả'},    en:{label:'All',       short:'All'}       },
  historical: { color:'#d4875e', vi:{label:'Bảo vật lịch sử',   short:'Lịch sử'},   en:{label:'Historical',short:'Historical'} },
  religious:  { color:'#a97fd0', vi:{label:'Bảo vật tôn giáo',  short:'Tôn giáo'},  en:{label:'Religious', short:'Religious'} },
};

const NT_TYPE_CONFIG = {
  all:        { color:'#8a7c5e', vi:{label:'Tất cả',              short:'Tất cả'},    en:{label:'All',        short:'All'}       },
  academic:   { color:'#5a8a9f', vi:{label:'Văn bia · Học thuật', short:'Học thuật'}, en:{label:'Academic',    short:'Academic'}   },
  art:        { color:'#d4875e', vi:{label:'Nghệ thuật',          short:'Nghệ thuật'}, en:{label:'Art',         short:'Art'}       },
  historical: { color:'#c4624a', vi:{label:'Lịch sử',             short:'Lịch sử'},    en:{label:'Historical',  short:'Historical'} },
  religious:  { color:'#a97fd0', vi:{label:'Tôn giáo',            short:'Tôn giáo'},   en:{label:'Religious',   short:'Religious'} },
  tools:      { color:'#4caf84', vi:{label:'Công cụ · Vũ khí',    short:'Công cụ'},    en:{label:'Tools',       short:'Tools'}     },
};

const NT_ERA_CONFIG = {
  all:        { color:'#8a7c5e', vi:{label:'Tất cả',         short:'Tất cả'},   en:{label:'All',        short:'All'}    },
  dongson:    { color:'#c4624a', vi:{label:'Đông Sơn',       short:'Đông Sơn'}, en:{label:'Đông Sơn',   short:'Đông Sơn'} },
  prehistoric:{ color:'#8a6f3f', vi:{label:'Tiền sử',        short:'Tiền sử'},  en:{label:'Prehistoric',short:'Prehistoric'} },
  ly:         { color:'#d4875e', vi:{label:'Nhà Lý',         short:'Lý'},       en:{label:'Lý dynasty', short:'Lý'}       },
  tran:       { color:'#4caf84', vi:{label:'Nhà Trần',       short:'Trần'},     en:{label:'Trần dynasty',short:'Trần'}     },
  dinh:       { color:'#7fa64b', vi:{label:'Nhà Đinh',       short:'Đinh'},     en:{label:'Đinh dynasty',short:'Đinh'}     },
  le:         { color:'#e8c96a', vi:{label:'Nhà Lê',         short:'Lê'},       en:{label:'Lê dynasty', short:'Lê'}       },
  mac:        { color:'#b08968', vi:{label:'Nhà Mạc',        short:'Mạc'},      en:{label:'Mạc dynasty', short:'Mạc'}      },
  nguyen:     { color:'#5a8a9f', vi:{label:'Nhà Nguyễn',     short:'Nguyễn'},   en:{label:'Nguyễn dynasty',short:'Nguyễn'}   },
  tayson:     { color:'#c45c4a', vi:{label:'Tây Sơn',        short:'Tây Sơn'},  en:{label:'Tây Sơn',    short:'Tây Sơn'}     },
  cham:       { color:'#a97fd0', vi:{label:'Văn hóa Chăm Pa',short:'Chăm Pa'},  en:{label:'Champa',     short:'Champa'}     },
  oceo:       { color:'#6fbf9b', vi:{label:'Văn hóa Óc Eo',  short:'Óc Eo'},    en:{label:'Óc Eo',      short:'Óc Eo'}     },
  modern:     { color:'#d4524a', vi:{label:'Hiện đại',       short:'Hiện đại'}, en:{label:'Modern',     short:'Modern'}     },
  other:      { color:'#8a7c5e', vi:{label:'Khác',           short:'Khác'},     en:{label:'Other',      short:'Other'}     },
};

function ntCategory(t) { return (t && t.category === 'religious') ? 'religious' : 'historical'; }
function ntType(t)     { return (t && t.type) ? t.type : ntCategory(t); }

/* Map a treasure to an era group from its year/badge text */
function ntEraKey(t) {
  const s = (((t.year || '') + ' ' + (t.badge || '') + ' ' + (t.name || '')) + ' ' + (t.english || '')).toLowerCase();
  if (/đông sơn|dong son|ngọc lũ|đào thịnh|hoàng hạ/.test(s)) return 'dongson';
  if (/phùng nguyên|sa huỳnh|hoa lộc|đồng nai|tiền sử|prehistoric|3\.000|3,000|2000–3000|2000-3000|4\.000|4,000|3 000|4 000/.test(s)) return 'prehistoric';
  if (/óc eo|oc eo|funan/.test(s)) return 'oceo';
  if (/chăm pa|cham pa|champa|\bcham\b|mỹ sơn|pô klong|po klong|đồng dương|trà kiệu|tháp|khmer/.test(s)) return 'cham';
  if (/hùng vương|hung vuong|ân lạc|Âu Lạc|an dương/.test(s)) return 'dongson';
  if (/nhà đinh|\bđinh\b|cột kinh phật thời đinh/.test(s)) return 'dinh';
  if (/nhà lý|thời lý|\bly\b|thăng long|phật tích/.test(s)) return 'ly';
  if (/nhà trần|thời trần|\btrần\b|yên tử|trúc lâm/.test(s)) return 'tran';
  if (/nhà mạc|thời mạc|\bmạc\b/.test(s)) return 'mac';
  if (/tây sơn|tay son/.test(s)) return 'tayson';
  if (/nhà nguyễn|triều nguyễn|nguyễn dynasty|thời nguyễn|\bnguyễn\b|huế|hoàng thành|thiệu trị|minh mạng|tự đức|thái hòa/.test(s)) return 'nguyen';
  if (/nhà lê|thời lê|lam kinh|lê dynasty|\blê\s*$|lê sơ|lê trung|lê trung hưng|kính thiên|kinh thien/.test(s)) return 'le';
  if (/20th century|20th-century|19th|18th|17th|16th|15th|14th|13th|12th|11th|10th|9th|8th|7th|6th|century|19[0-9]{2}|20[0-9]{2}|1847|1975|1972|1954|1947|1946|1969|1966|2012|2013|2015|16[0-9]{2}|17[0-9]{2}|18[0-9]{2}|hiện đại|modern/.test(s)) return 'modern';
  return 'other';
}

/* Dimension-aware helpers for the national-treasure views */
function ntDimConfig() { return ntView === 'era' ? NT_ERA_CONFIG : NT_TYPE_CONFIG; }
function ntDimKey(t)   { return ntView === 'era' ? ntEraKey(t) : ntType(t); }
function ntDimAll()    { return 'all'; }
function ntDimColor(t) { const k = ntDimKey(t); return ntDimConfig()[k]?.color || '#d4875e'; }
function ntDimLabel(k) { return ntDimConfig()[k]?.[lang]?.short || k || ''; }

/* keep aliases used by earlier code */
function ntCatColor(t) { return NT_CATEGORY_CONFIG[ntCategory(t)]?.color || '#d4875e'; }
function ntCatLabel(k) { return NT_CATEGORY_CONFIG[k]?.[lang]?.short || k || ''; }

/* Treasure location, translated to English when in English mode */
function ntLocation(t) {
  const loc = t ? (t.location || '') : '';
  return (lang === 'en' && LOCATION_EN && LOCATION_EN[loc]) ? LOCATION_EN[loc] : loc;
}

/* Minimal HTML-escape helper (names/locations come from a data file) */
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

/* ═══════════════════════════════════════
   MAP INIT
═══════════════════════════════════════ */
const map = L.map('map', {
  center:[16.0, 107.8], zoom:5.4, zoomControl:false, preferCanvas:true
});
/* No zoom control — scroll-wheel & double-click zoom remain functional.
   Bottom-right corner is reserved for the Map Style box. */

const TILES = {
  positron:{ url:'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
             opt:{ attribution:'&copy; OpenStreetMap contributors &copy; CARTO',
                   subdomains:'abcd', maxZoom:19 }},
  osm:     { url:'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
             opt:{ attribution:'&copy; OpenStreetMap contributors', maxZoom:19 }},
};
let currentTile = L.tileLayer(TILES.positron.url, TILES.positron.opt).addTo(map);

document.querySelectorAll('.tile-option').forEach(btn => {
  btn.addEventListener('click', () => {
    const k = btn.dataset.tile;
    if (!TILES[k]) return;
    map.removeLayer(currentTile);
    currentTile = L.tileLayer(TILES[k].url, TILES[k].opt).addTo(map);
    currentTile.bringToBack();
    document.querySelectorAll('.tile-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ═══════════════════════════════════════
   PROVINCE BORDERS (vn_geo.json)
   — NO markers / NO clusters on the map.
   Provinces are coloured by heritage.
═══════════════════════════════════════ */
const NEUTRAL_FILL   = '#1a1400';
const NEUTRAL_FILLOP = 0.04;
const NEUTRAL_BORDER = '#3a2f10';
const NEUTRAL_WEIGHT = 1;

const provinceLayers = {};   // name -> Leaflet layer

const borderLayer = L.geoJSON(null, {
  style: () => ({
    color: NEUTRAL_BORDER,
    weight: NEUTRAL_WEIGHT,
    opacity: 0.9,
    fillColor: NEUTRAL_FILL,
    fillOpacity: NEUTRAL_FILLOP,
    smoothFactor: 1,
  }),
  onEachFeature: (feature, layer) => {
    const name = feature.properties?.name || 'Unknown';
    provinceLayers[name] = layer;

    /* tooltip: province name (+ count once index is built) */
    const tip = provinceTooltipHTML(name);
    layer.bindTooltip(tip, {
      sticky: true,
      direction: 'top',
      className: 'artifact-tooltip',
    });

    layer.on('mouseover', () => {
      if (activeProvince !== name) {
        layer.setStyle({
          weight: 2.6,
          color: '#fff200',
          fillOpacity: Math.min(0.55, (layer.options.fillOpacity || NEUTRAL_FILLOP) + 0.18),
        });
        layer.bringToFront();
      }
    });
    layer.on('mouseout', () => {
      if (activeProvince !== name) recolorProvince(name);
    });
    layer.on('click', () => {
      onProvinceClick(name);
    });
  },
}).addTo(map);

fetch('vn_geo.json')
  .then(r => r.json())
  .then(geo => {
    borderLayer.addData(geo);
    buildProvinceIndex(geo);
    /* record province geometry + build national-treasure province index */
    PROVINCE_GEO = {};
    (geo.features || []).forEach(f => {
      const nm = f.properties?.name || 'Unknown';
      PROVINCE_GEO[nm] = f.geometry;
    });
    buildNTProvinceIndex();
    /* attach tooltips (now that provinceIndex is built) + apply heritage colours */
    Object.keys(provinceLayers).forEach(name => {
      const layer = provinceLayers[name];
      layer.setTooltipContent(provinceTooltipHTML(name));
      recolorProvince(name);
    });
    renderCards();   // refresh province-count stat now that index is built
  })
  .catch(err => console.warn('vn_geo.json load failed:', err));

/* ═══════════════════════════════════════
   PROVINCE CLICK → PIE CHART MODAL
═══════════════════════════════════════ */
/* Point-in-polygon test (ray-casting) */
function pointInPolygon(lng, lat, coords) {
  let inside = false;
  for (let i = 0, j = coords.length - 1; i < coords.length; j = i++) {
    const xi = coords[i][0], yi = coords[i][1];
    const xj = coords[j][0], yj = coords[j][1];
    const intersect = ((yi > lat) !== (yj > lat)) &&
      (lng < (xj - xi) * (lat - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

/* Check if a point is inside a MultiPolygon geometry */
function pointInMultiPolygon(lng, lat, coordinates) {
  for (const polygon of coordinates) {
    for (const ring of polygon) {
      if (pointInPolygon(lng, lat, ring)) return true;
    }
  }
  return false;
}

/* Province → heritage index
   Attribution uses the explicit `provinces` array on each heritage item when
   available, guaranteeing correct province assignment regardless of how the
   province polygons are drawn. For items lacking a `provinces` array, we fall
   back to a geometric point-in-polygon test. */
let provinceIndex = {};

function buildProvinceIndex(geo) {
  provinceIndex = {};
  geo.features.forEach(feature => {
    const name = feature.properties?.name || 'Unknown';
    if (!provinceIndex[name]) provinceIndex[name] = [];
  });

  /* Precompute the polygon geometry for each province name for fallback. */
  const geoByName = {};
  geo.features.forEach(feature => {
    const name = feature.properties?.name || 'Unknown';
    geoByName[name] = feature.geometry;
  });

  TREASURES.forEach(t => {
    if (Array.isArray(t.provinces) && t.provinces.length) {
      /* explicit mapping — preferred */
      t.provinces.forEach(name => {
        if (provinceIndex[name]) {
          if (!provinceIndex[name].some(h => h.id === t.id)) {
            provinceIndex[name].push(t);
          }
        }
      });
    } else {
      /* geometric fallback */
      for (const name in geoByName) {
        const geom = geoByName[name];
        if (geom.type === 'MultiPolygon' &&
            pointInMultiPolygon(t.lng, t.lat, geom.coordinates)) {
          provinceIndex[name].push(t);
          break;
        }
      }
    }
  });
}

/* ═══════════════════════════════════════
   PROVINCE COLOURING  (by heritage uniqueness)
═══════════════════════════════════════ */
/* Returns the heritage items of a province that also satisfy the
   active filter (status/genre). If activeFilter === 'all', all items. */
function visibleHeritageInProvince(name) {
  const items = provinceIndex[name] || [];
  if (activeFilter === 'all') return items;
  return items.filter(t => viewMode === 'status'
    ? getStatus(t) === activeFilter
    : getGenre(t)  === activeFilter);
}

/* Dominant dimension-key (status or genre) for a province, among the
   visible (filter-passing) items. Returns null if none. */
function provinceDominantKey(name) {
  const items = visibleHeritageInProvince(name);
  if (!items.length) return null;
  const counts = {};
  items.forEach(t => {
    const key = viewMode === 'status' ? getStatus(t) : getGenre(t);
    counts[key] = (counts[key] || 0) + 1;
  });
  return Object.entries(counts).sort((a,b) => b[1] - a[1])[0][0];
}

/* Dominant colour for a province (used in tooltips). Falls back to neutral. */
function provinceDominantColor(name) {
  const key = provinceDominantKey(name);
  if (!key) return NEUTRAL_BORDER;
  const CONFIG = viewMode === 'status' ? STATUS_CONFIG : GENRE_CONFIG;
  return CONFIG[key]?.color || '#8a7c5e';
}

/* Apply a Leaflet style to a province layer based on its heritage.
   Honours the active viewMode and filter; respects the active highlight.
   In national-treasure mode provinces are kept neutral white (no colour). */
function recolorProvince(name) {
  const layer = provinceLayers[name];
  if (!layer) return;
  if (activeProvince === name) return;  // don't override active highlight
  if (nationalMode) { layer.setStyle(NT_PROVINCE_NEUTRAL); return; }

  const visible = visibleHeritageInProvince(name);
  const total   = (provinceIndex[name] || []).length;

  if (!visible.length) {
    /* Province has no (matching) heritage → neutral. If it has heritage but
       none pass the filter, keep a faint tint so it doesn't vanish entirely. */
    const tinted = total > 0;
    layer.setStyle({
      color: tinted ? '#5a4a1a' : NEUTRAL_BORDER,
      weight: tinted ? 1.2 : NEUTRAL_WEIGHT,
      fillColor: tinted ? '#2a1f0a' : NEUTRAL_FILL,
      fillOpacity: tinted ? 0.10 : NEUTRAL_FILLOP,
    });
    return;
  }

  const key = provinceDominantKey(name);
  const CONFIG = viewMode === 'status' ? STATUS_CONFIG : GENRE_CONFIG;
  const color = CONFIG[key]?.color || '#8a7c5e';
  /* Saturation grows with heritage count, capped so labels stay readable. */
  const fillOpacity = Math.min(0.42, 0.20 + visible.length * 0.06);

  layer.setStyle({
    color: color,
    weight: 1.6,
    fillColor: color,
    fillOpacity: fillOpacity,
  });
}

/* Neutral province style used in national-treasure mode.
   Keeps the province borders visible (grey outline) but removes colour fill.
   NOTE: fillColor must be a real colour and fillOpacity > 0 — a fully
   transparent fill (`transparent` / 0) makes the SVG path "invisible" to
   pointer events (Leaflet uses the default `visiblePainted`), so the hover
   tooltip would only fire on the thin border, not the province interior. */
const NT_PROVINCE_NEUTRAL = {
  color: '#9aa0a6',
  weight: 1.2,
  opacity: 0.9,
  fillColor: '#1a1400',
  fillOpacity: 0.01,
};

/* Force every province to the neutral white style (used in Bảo vật mode). */
function neutralizeProvinces() {
  Object.keys(provinceLayers).forEach(name => {
    const l = provinceLayers[name];
    if (l) l.setStyle(NT_PROVINCE_NEUTRAL);
  });
}

/* Recolour every province — called on view-mode / filter / language change. */
function recolorAllProvinces() {
  Object.keys(provinceLayers).forEach(recolorProvince);
}

/* ═══════════════════════════════════════
   PIE-CHART MODAL  (lists a province's heritage)
═══════════════════════════════════════ */
/* Generate SVG pie chart for a province's heritage items */
function buildProvincePieSVG(counts, total) {
  const sz = 100, cx = sz/2, r = cx - 6, ir = cx * 0.42;
  const CONFIG = viewMode === 'status' ? STATUS_CONFIG : GENRE_CONFIG;
  const slices = Object.entries(counts).sort((a,b) => b[1] - a[1]);

  let paths = '', dividers = '', angle = -90;
  for (const [key, count] of slices) {
    const color = CONFIG[key]?.color || '#8a7c5e';
    const sweep = (count / total) * 360;
    if (sweep >= 359.9) {
      paths = `<circle cx="${cx}" cy="${cx}" r="${r}" fill="${color}"/>`;
      break;
    }
    const a1 = angle * Math.PI / 180;
    const a2 = (angle + sweep) * Math.PI / 180;
    const x1 = (cx + r * Math.cos(a1)).toFixed(2);
    const y1 = (cx + r * Math.sin(a1)).toFixed(2);
    const x2 = (cx + r * Math.cos(a2)).toFixed(2);
    const y2 = (cx + r * Math.sin(a2)).toFixed(2);
    paths += `<path d="M${cx},${cx} L${x1},${y1} A${r},${r} 0 ${sweep>180?1:0},1 ${x2},${y2} Z" fill="${color}"/>`;
    dividers += `<line x1="${cx}" y1="${cx}" x2="${x1}" y2="${y1}" stroke="rgba(10,9,0,0.5)" stroke-width="1"/>`;
    angle += sweep;
  }
  return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${cx}" cy="${cx}" r="${r+1}" fill="rgba(10,9,0,0.3)"/>
    ${paths}
    ${slices.length > 1 ? dividers : ''}
    <circle cx="${cx}" cy="${cx}" r="${ir}" fill="rgba(10,9,0,0.85)"/>
    <text x="${cx}" y="${cx}" text-anchor="middle" dominant-baseline="central"
          fill="#e8c96a" font-family="DM Sans,sans-serif" font-weight="700"
          font-size="18px">${total}</text>
  </svg>`;
}

/* Show province pie-chart modal — lists each heritage item with a
   clickable row that opens the full detail modal. */
function showProvinceModal(provinceName) {
  const artifacts = provinceIndex[provinceName] || [];
  const total = artifacts.length;
  const CONFIG = viewMode === 'status' ? STATUS_CONFIG : GENRE_CONFIG;

  const counts = {};
  artifacts.forEach(t => {
    const key = viewMode === 'status' ? getStatus(t) : getGenre(t);
    counts[key] = (counts[key] || 0) + 1;
  });

  const pieSVG = total > 0 ? buildProvincePieSVG(counts, total) : '';
  const legendRows = Object.entries(counts).sort((a,b) => b[1]-a[1]).map(([key, count]) => {
    const cfg = CONFIG[key];
    const label = viewMode === 'status' ? statusLabel(key, 'short') : genreLabel(key, 'short');
    return `<div class="province-pie-row">
      <span class="province-pie-dot" style="background:${cfg?.color || '#8a7c5e'}"></span>
      <span class="province-pie-label">${label}</span>
      <span class="province-pie-count">${count}</span>
    </div>`;
  }).join('');

  /* List of heritage items — clicking a row opens its detail modal. */
  const itemRows = artifacts.map(item => {
    const status = getStatus(item);
    const genre  = getGenre(item);
    const color  = activeColor(item);
    const title  = lang === 'vi' ? item.name : item.english;
    return `
      <div class="province-item" data-id="${item.id}">
        <span class="province-item-dot" style="background:${color}"></span>
        <div class="province-item-body">
          <div class="province-item-title">${title}</div>
          <div class="province-item-tags">
            <span style="color:${statusColor(item)}">${statusLabel(status,'short')}</span>
            <span style="color:${genreColor(item)}">${genreLabel(genre,'short')}</span>
          </div>
        </div>
        <button class="province-item-cta" type="button">${t('pieCta')}</button>
      </div>`;
  }).join('');

  const dimLabel = viewMode === 'status'
    ? (lang === 'vi' ? 'Phân bố UNESCO' : 'UNESCO status distribution')
    : (lang === 'vi' ? 'Phân bố thể loại' : 'Genre distribution');

  const html = total > 0 ? `
    <div class="province-modal-title">${provinceName}</div>
    <div class="province-modal-sub">${dimLabel}</div>
    <div class="province-pie-wrap">
      <div class="province-pie">${pieSVG}</div>
      <div class="province-pie-legend">${legendRows}</div>
    </div>
    <div class="province-pie-total">
      ${lang === 'vi' ? 'Tổng di sản' : 'Total heritage'}: <strong>${total}</strong>
    </div>
    <div class="province-item-list">${itemRows}</div>
  ` : `
    <div class="province-modal-title">${provinceName}</div>
    <div class="province-modal-sub">${dimLabel}</div>
    <div class="province-pie-empty">
      ${lang === 'vi' ? 'Chưa có di sản phi vật thể trong tỉnh này' : 'No intangible heritage in this province'}
    </div>
  `;

  const modal = document.getElementById('province-modal');
  document.getElementById('province-modal-content').innerHTML = html;
  modal.classList.add('visible');

  /* wire up item rows → navigate to artifact.html */
  modal.querySelectorAll('.province-item').forEach(row => {
    row.addEventListener('click', () => {
      const id = parseInt(row.dataset.id, 10);
      closeProvinceModal();
      window.location.href = `artifact.html?id=${id}`;
    });
  });
}

function closeProvinceModal() {
  document.getElementById('province-modal').classList.remove('visible');
}

document.getElementById('province-modal-close').addEventListener('click', closeProvinceModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeProvinceModal();
});

/* ═══════════════════════════════════════
   DETAIL MODAL (opened from sidebar card or province modal row)
═══════════════════════════════════════ */
function buildModalHTML(t) {
  const title = lang === 'vi' ? t.name : t.english;
  const engTitle = lang === 'vi' ? t.english : '';
  const status = getStatus(t);
  const genre  = getGenre(t);
  const stC    = STATUS_CONFIG[status]?.color || '#8a7c5e';
  const gnC    = GENRE_CONFIG[genre]?.color   || '#8a7c5e';
  const desc   = lang === 'vi' ? (t.desc_vi || t.desc) : t.desc;
  const pending = (lang === 'vi' && !t.desc_vi)
    ? ' <span class="desc-pending">(EN)</span>' : '';
  const imageUrl = t.image || `images/artifacts/${t.id}.jpg`;
  const hasAudioPreview = t.audio_preview;
  const isSingingType = ['singings', 'folk_singing', 'chamber_music', 'court_music', 'work_songs'].includes(genre);

  const lblYear    = lang === 'vi' ? 'Năm công nhận' : 'Recognition year';
  const lblGenre   = lang === 'vi' ? 'Thể loại'      : 'Genre';
  const lblLoc     = lang === 'vi' ? 'Địa điểm'      : 'Location';
  const lblCoord   = lang === 'vi' ? 'Tọa độ'        : 'Coordinates';
  const lblStatus  = lang === 'vi' ? 'Trạng thái'     : 'Status';
  const lblDesc    = lang === 'vi' ? 'Mô tả'          : 'Description';

    // Audio analysis result state (will be populated after recording)
    const audioAnalysisSection = `
      <div class="modal-audio-analysis" id="modal-audio-analysis-${t.id}" hidden>
        <div class="modal-audio-analysis-header">
          <h4>${lang === 'vi' ? 'Kết quả phân tích' : 'Analysis Results'}</h4>
          <button class="modal-audio-close" onclick="hideAudioAnalysis(${t.id})">✕</button>
        </div>
        <div class="audio-analysis-content" id="audio-analysis-content-${t.id}">
          <div class="audio-analysis-loading" id="audio-analysis-loading-${t.id}" hidden>
            <div class="spinner"></div>
            <span>${lang === 'vi' ? 'Đang phân tích...' : 'Analyzing...'}</span>
          </div>
          <div class="audio-analysis-results" id="audio-analysis-results-${t.id}" hidden>
            <div class="vocal-score-display">
              <div class="vocal-score-value" id="analysis-score-${t.id}">—</div>
              <div class="vocal-score-label">${lang === 'vi' ? 'Độ tương đồng phong cách' : 'Style Similarity'}</div>
              <div class="vocal-score-feedback" id="analysis-feedback-${t.id}"></div>
            </div>
          </div>
          <div class="audio-analysis-error" id="audio-analysis-error-${t.id}" hidden>
            <p id="audio-analysis-error-msg-${t.id}"></p>
            <button class="retry-btn" onclick="analyzeUserRecording(${t.id})">${lang === 'vi' ? 'Thử lại' : 'Retry'}</button>
          </div>
        </div>
      </div>
    `;

    // Build audio samples section (single reference only)
    const audioPrefix = window.location.pathname.includes('/legacy/') ? '/legacy/' : '';
    const previewSrc = hasAudioPreview ? audioPrefix + t.audio_preview : '';
    const nameLabel = lang === 'vi' ? t.name : t.english;

    const audioSamplesSection = hasAudioPreview ? `
      <div class="modal-audio-section">
        <h4>${lang === 'vi' ? 'Mẫu âm thanh' : 'Audio Sample'}</h4>
        <div class="audio-sample-item">
          <span class="audio-sample-label">${lang === 'vi' ? 'Nghe tham khảo' : 'Reference'}:</span>
          <audio controls src="${previewSrc}" class="modal-audio-player"></audio>
          <p class="modal-audio-caption">${nameLabel}</p>
        </div>
      </div>
      ` : '';

  return `
    <div class="modal-image-container">
      <img src="${imageUrl}" alt="${title}" class="modal-image" onerror="this.onerror=null; this.src='images/artifacts/placeholder.svg'" />
    </div>
    <div class="modal-badge-row">
      <span class="modal-badge modal-badge-status" style="color:${stC};border-color:${stC}55">${statusLabel(status)}</span>
      <span class="modal-badge" style="color:${gnC};border-color:${gnC}55">${genreLabel(genre)}</span>
      <span class="modal-badge modal-badge-unesco" style="color:${stC};border-color:${stC}55">${t.badge || 'UNESCO'}</span>
    </div>
    <div class="modal-title">${title}</div>
    ${engTitle ? `<div class="modal-subtitle">${engTitle}</div>` : ''}
    <div class="modal-info-grid">
      <div class="modal-info-item">
        <div class="modal-info-label">📅 ${lblYear}</div>
        <div class="modal-info-value">${t.year}</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">🏷️ ${lblGenre}</div>
        <div class="modal-info-value">${genreLabel(genre)}</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">🏷️ ${lblStatus}</div>
        <div class="modal-info-value">${statusLabel(status,'short')}</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">📍 ${lblLoc}</div>
        <div class="modal-info-value">${t.location}</div>
      </div>
      <div class="modal-info-item">
        <div class="modal-info-label">🗺️ ${lblCoord}</div>
        <div class="modal-info-value">${t.lat.toFixed(4)}, ${t.lng.toFixed(4)}</div>
      </div>
    </div>
    <div class="modal-desc-section">
      <div class="modal-desc-label">${lblDesc}</div>
      <div class="modal-desc">${desc}${pending}</div>
    </div>
    
    ${audioSamplesSection}
    
    ${isSingingType ? `
    <div class="modal-practice-section">
      <h4>${lang === 'vi' ? 'Thử hát & Phân tích' : 'Try Singing & Analyze'}</h4>
    <p class="modal-practice-hint">${lang === 'vi' ? 'Ghi âm giọng hát của bạn để AI phân tích độ tương đồng với phong cách truyền thống' : 'Record your singing for AI analysis of traditional style similarity'}</p>
      <div class="recorder-controls">
        <button class="record-btn" id="record-btn-${t.id}" onclick="toggleRecording(${t.id})">
          <svg class="record-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="8"></circle>
          </svg>
          <svg class="stop-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" hidden>
            <rect x="6" y="6" width="12" height="12" rx="2"></rect>
          </svg>
          <span class="record-text">${lang === 'vi' ? 'Bắt đầu ghi âm' : 'Start Recording'}</span>
        </button>
        <button class="playback-btn" id="playback-btn-${t.id}" onclick="playbackRecording(${t.id})" hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          <span>${lang === 'vi' ? 'Nghe lại' : 'Playback'}</span>
        </button>
        <button class="analyze-btn" id="analyze-btn-${t.id}" onclick="analyzeUserRecording(${t.id})" hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
          <span>${lang === 'vi' ? 'Phân tích' : 'Analyze'}</span>
        </button>
        <button class="clear-btn" id="clear-btn-${t.id}" onclick="clearRecording(${t.id})" hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          <span>${lang === 'vi' ? 'Xóa' : 'Clear'}</span>
        </button>
      </div>
      <div class="recording-visualizer" id="recording-visualizer-${t.id}" hidden>
        <canvas id="waveform-canvas-${t.id}" width="400" height="80"></canvas>
      </div>
      <div class="recording-timer" id="recording-timer-${t.id}" hidden>00:00</div>
    </div>
    ${audioAnalysisSection}
    ` : ''}
  `;
}

function openArtifactModal(id) {
  const t = TREASURES.find(x => x.id === id);
  if (!t) return;
  document.getElementById('modal-content').innerHTML = buildModalHTML(t);
  document.getElementById('modal-overlay').classList.add('visible');
}

function stopAllRecordings() {
  /* CRITICAL: Stop all active recordings, timers, and media streams */
  Object.keys(recordingState).forEach(id => {
    const state = recordingState[id];
    if (!state) return;

    /* Stop MediaRecorder if active */
    if (mediaRecorders[id] && mediaRecorders[id].state !== 'inactive') {
      try { mediaRecorders[id].stop(); } catch(e) { /* already stopped */ }
    }

    /* Stop all media stream tracks */
    if (state.stream) {
      state.stream.getTracks().forEach(track => {
        try { track.stop(); } catch(e) { /* already stopped */ }
      });
      state.stream = null;
    }

    /* Cancel animation frame */
    if (state.animationFrame) {
      cancelAnimationFrame(state.animationFrame);
      state.animationFrame = null;
    }

    /* Mark as not recording */
    state.isRecording = false;

    /* Close audio context if exists */
    if (state.audioContext && state.audioContext.state !== 'closed') {
      try { state.audioContext.close(); } catch(e) { /* ignore */ }
    }
  });

  /* Clear all recording timers */
  Object.keys(recordingTimers).forEach(id => {
    if (recordingTimers[id]) {
      clearInterval(recordingTimers[id]);
      recordingTimers[id] = null;
    }
  });
}

function closeArtifactModal() {
  /* CRITICAL: Stop all microphone recordings before closing */
  stopAllRecordings();

  document.getElementById('modal-overlay').classList.remove('visible');
  activeItemId = null;
  /* clear any active province highlight */
  if (activeProvince) {
    const prev = activeProvince;
    activeProvince = null;
    recolorProvince(prev);
  }
  hideMapInfoBox();
  renderCards();
}

document.getElementById('modal-close').addEventListener('click', closeArtifactModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target.id === 'modal-overlay') closeArtifactModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeArtifactModal();
});

/* ═══════════════════════════════════════
   FILTERING  (sidebar cards)
═══════════════════════════════════════ */
function getFilteredItems() {
  if (nationalMode) return ntFilteredItems();

  let items = [...TREASURES];

  if (activeFilter !== 'all') {
    if (viewMode === 'status')
      items = items.filter(t => getStatus(t) === activeFilter);
    else
      items = items.filter(t => getGenre(t)  === activeFilter);
  }
  if (searchQuery) {
    const q = searchQuery;
    items = items.filter(t =>
      t.name.toLowerCase().includes(q)     ||
      t.english.toLowerCase().includes(q)  ||
      t.location.toLowerCase().includes(q) ||
      t.year.toLowerCase().includes(q)
    );
  }
  return items;
}

/* ── NATIONAL TREASURES: filtered sidebar list ── */
function ntFilteredItems() {
  let items = Array.isArray(NATIONAL_TREASURES) ? [...NATIONAL_TREASURES] : [];
  if (activeFilter !== 'all') {
    items = items.filter(t => ntDimKey(t) === activeFilter);
  }
  if (searchQuery) {
    const q = searchQuery;
    items = items.filter(t =>
      String(t.name||'').toLowerCase().includes(q)     ||
      String(t.english||'').toLowerCase().includes(q)  ||
      String(t.location||'').toLowerCase().includes(q) ||
      String(t.year||'').toLowerCase().includes(q)     ||
      String(t.badge||'').toLowerCase().includes(q)
    );
  }
  return items;
}

/* ═══════════════════════════════════════
   RENDER FILTER BAR  (dynamic)
═══════════════════════════════════════ */
function renderFilterBar() {
  if (nationalMode) { renderNTFilterBar(); return; }

  const CONFIG    = viewMode === 'status' ? STATUS_CONFIG : GENRE_CONFIG;
  const allLabel  = viewMode === 'status' ? t('allStatuses') : t('allGenres');

  document.getElementById('filter-bar').innerHTML = `
    <button class="filter-btn ${activeFilter==='all'?'active':''}" data-filter="all">${allLabel}</button>
    ${Object.entries(CONFIG).map(([key, cfg]) => {
      const active = activeFilter === key;
      const short  = cfg[lang]?.short || '';
      return `<button class="filter-btn ${active?'active':''}" data-filter="${key}"
                style="${active?`border-color:${cfg.color};color:${cfg.color};background:${cfg.color}22`:''}">
        <span style="display:inline-block;width:7px;height:7px;border-radius:50%;
                     background:${cfg.color};margin-right:5px;vertical-align:middle;"></span>
        ${short}
      </button>`;
    }).join('')}
  `;

  document.querySelectorAll('#filter-bar .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      activeItemId = null;
      renderFilterBar();
      recolorAllProvinces();
      renderCards();
    });
  });
}

/* ── NATIONAL TREASURES: dimension filter bar (category | era) ── */
function renderNTFilterBar() {
  const CONFIG = ntDimConfig();
  const html = `
    <button class="filter-btn ${activeFilter==='all'?'active':''}" data-filter="all">${t('ntCatAll')}</button>
    ${Object.entries(CONFIG).filter(([k]) => k !== 'all').map(([key, cfg]) => {
      const active = activeFilter === key;
      return `<button class="filter-btn ${active?'active':''}" data-filter="${key}"
                style="${active?`border-color:${cfg.color};color:${cfg.color};background:${cfg.color}22`:''}">
        <span style="display:inline-block;width:7px;height:7px;border-radius:50%;
                     background:${cfg.color};margin-right:5px;vertical-align:middle;"></span>
        ${cfg[lang]?.short || key}
      </button>`;
    }).join('')}
  `;
  document.getElementById('filter-bar').innerHTML = html;

  document.querySelectorAll('#filter-bar .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      activeItemId = null;
      renderFilterBar();
      applyNTMarkerFilter();
      renderCards();
    });
  });
}

/* ═══════════════════════════════════════
   RENDER MAP LEGEND  (dynamic)
═══════════════════════════════════════ */
function renderLegend() {
  if (nationalMode) { renderNTLegend(); return; }

  const CONFIG = viewMode === 'status' ? STATUS_CONFIG : GENRE_CONFIG;
  const title  = viewMode === 'status' ? t('legendStatus') : t('legendGenre');
  document.getElementById('map-legend').innerHTML = `
    <div class="legend-title">${title}</div>
    ${Object.entries(CONFIG).map(([, cfg]) => `
      <div class="legend-row">
        <span class="legend-dot" style="background:${cfg.color}"></span>
        ${cfg[lang]?.short || ''}
      </div>`).join('')}
  `;
}

/* ── NATIONAL TREASURES: dimension legend (category | era) ── */
function renderNTLegend() {
  const CONFIG = ntDimConfig();
  const treasures = Array.isArray(NATIONAL_TREASURES) ? NATIONAL_TREASURES : [];
  const present = new Set(treasures.map(ntDimKey));
  present.add('all');
  const rows = Object.entries(CONFIG).filter(([k]) => k !== 'all' && present.has(k)).map(([k, cfg]) => `
    <div class="legend-row nt">
      <span class="legend-dot" style="background:${cfg.color}"></span>
      ${cfg[lang]?.short || k}
    </div>`).join('');
  document.getElementById('map-legend').innerHTML = `
    <div class="legend-title">${ntView === 'era' ? (lang==='vi'?'Niên đại':'Era') : t('ntLegend')}</div>
    ${rows}
  `;
}

/* ═══════════════════════════════════════
   RENDER CARDS  (sidebar list)
═══════════════════════════════════════ */
function renderCards() {
  if (nationalMode) { renderNTCards(); return; }

  const items = getFilteredItems();

  document.getElementById('stat-shown').textContent = items.length;
  document.getElementById('stat-total').textContent = TREASURES.length;
  /* Provinces-with-heritage count, respecting the active filter */
  const provincesWithHeritage = new Set();
  items.forEach(t => {
    Object.keys(provinceIndex).forEach(name => {
      if ((provinceIndex[name] || []).some(h => h.id === t.id)) provincesWithHeritage.add(name);
    });
  });
  document.getElementById('stat-locs').textContent  = provincesWithHeritage.size;
  document.getElementById('result-count').textContent =
    resultCountText(items.length, TREASURES.length);

  document.getElementById('artifact-list').innerHTML = items.map((t, i) => {
    const status = getStatus(t);
    const genre  = getGenre(t);
    const color  = activeColor(t);
    const badge  = viewMode === 'status'
      ? statusLabel(status, 'short')
      : genreLabel(genre, 'short');
    const title = lang === 'vi' ? t.name : t.english;
    return `
      <div class="a-card${activeItemId===t.id?' active':''}"
           data-id="${t.id}"
           onclick="activateItem(${t.id})"
           style="animation-delay:${Math.min(i*0.035,0.5)}s">
        <div class="a-num" style="color:${color}">${String(t.id).padStart(2,'0')}</div>
        <div class="a-body">
          <div class="a-title">${title}</div>
          <div class="a-desc">${lang === 'vi' ? (t.desc_vi || t.desc) : t.desc}${(lang === 'vi' && !t.desc_vi) ? ' <span class="desc-pending">(EN)</span>' : ''}</div>
          <div class="a-loc"><span class="a-pin">●</span>${t.location}</div>
        </div>
        <span class="a-badge" style="color:${color};border-color:${color}33">${badge}</span>
      </div>`;
  }).join('');
}

/* ── NATIONAL TREASURES: sidebar cards + header stats ── */
function renderNTCards() {
  const selloc = document.getElementById('stat-locs-label');
  if (selloc) selloc.textContent = t('ntStatLocs');

  const items = getFilteredItems();
  const total = (Array.isArray(NATIONAL_TREASURES) ? NATIONAL_TREASURES.length : 0);

  document.getElementById('stat-shown').textContent = items.length;
  document.getElementById('stat-total').textContent = total;
  /* Distinct treasure locations */
  const locs = new Set(items.map(x => x.location).filter(Boolean));
  document.getElementById('stat-locs').textContent = locs.size;
  document.getElementById('result-count').textContent =
    `${items.length}/${total} ${t('ntTotalLabel')}`;

  document.getElementById('artifact-list').innerHTML = items.map((t, i) => {
    const color = ntDimColor(t);
    const cat   = ntDimLabel(ntDimKey(t));
    const title = lang === 'vi' ? (t.name || t.english) : (t.english || t.name);
    const desc  = lang === 'vi' ? (t.desc_vi || t.desc) : t.desc;
    return `
      <div class="a-card nt-card${activeItemId===t.id?' active':''}"
           data-id="${t.id}"
           onclick="activateItem(${t.id})"
           style="animation-delay:${Math.min(i*0.01,0.4)}s">
        <div class="a-num" style="color:${color}">${String(t.id).padStart(3,'0')}</div>
        <div class="a-body">
          <div class="a-title">${esc(title)}</div>
          <div class="a-desc">${esc(desc||'')}</div>
          <div class="a-loc"><span class="a-pin">●</span>${esc(ntLocation(t))}</div>
        </div>
        <span class="a-badge" style="color:${color};border-color:${color}44">${esc(cat)}</span>
      </div>`;
  }).join('');
}

/* ═══════════════════════════════════════
   ACTIVATE ITEM  (from sidebar card or province modal row)
═══════════════════════════════════════ */
function activateItem(id) {
  activeItemId = id;

  if (nationalMode) {
    const tr = (Array.isArray(NATIONAL_TREASURES) ? NATIONAL_TREASURES : []).find(x => x.id === id);
    if (!tr) return;
    renderActiveMapInfo();
    openNTModal(tr);
    /* pan to its marker (show and highlight) */
    const m = ntMarkers[id];
    if (m) {
      map.flyTo([tr.lat, tr.lng], 8, { duration: 1.0, easeLinearity: 0.25 });
      if (typeof m.openPopup === 'function') m.openPopup();
    } else if (typeof tr.lat === 'number' && typeof tr.lng === 'number') {
      map.flyTo([tr.lat, tr.lng], 8, { duration: 1.0, easeLinearity: 0.25 });
    }
    renderCards();
    setTimeout(() => {
      document.querySelector(`.a-card[data-id="${id}"]`)
        ?.scrollIntoView({ behavior:'smooth', block:'nearest' });
    }, 50);
    return;
  }

  const t = TREASURES.find(x => x.id === id);
  if (!t) return;

  renderActiveMapInfo();
  openArtifactModal(id);

  /* Find the province containing this heritage and highlight it on the map. */
  let owningProvince = null;
  for (const [name, items] of Object.entries(provinceIndex)) {
    if (items.some(h => h.id === id)) { owningProvince = name; break; }
  }
  if (owningProvince) {
    /* clear previous highlight */
    if (activeProvince && activeProvince !== owningProvince) {
      const prev = activeProvince;
      activeProvince = null;
      recolorProvince(prev);
    }
    activeProvince = owningProvince;
    const layer = provinceLayers[owningProvince];
    if (layer) {
      const key = provinceDominantKey(owningProvince);
      const CONFIG = viewMode === 'status' ? STATUS_CONFIG : GENRE_CONFIG;
      const color = key ? (CONFIG[key]?.color || '#8a7c5e') : '#e8c96a';
      layer.setStyle({
        color: '#fff200',
        weight: 3,
        fillColor: color,
        fillOpacity: Math.min(0.6, 0.30 + (provinceIndex[owningProvince] || []).length * 0.05),
      });
      layer.bringToFront();
      map.flyToBounds(layer.getBounds(), { duration: 1.0, padding: [40, 40] });
    }
  } else {
    map.flyTo([t.lat, t.lng], 8, { duration: 1.0, easeLinearity: 0.25 });
  }

  renderCards();
  setTimeout(() => {
    document.querySelector(`.a-card[data-id="${id}"]`)
      ?.scrollIntoView({ behavior:'smooth', block:'nearest' });
  }, 50);
}
window.activateItem = activateItem;

/* ═══════════════════════════════════════
   VIEW TOGGLE  (Status ↔ Genre)
═══════════════════════════════════════ */
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const v = btn.dataset.view;
    activeFilter = 'all';
    activeItemId = null;
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (nationalMode) {
      /* National treasures: Type / Era dimension */
      ntView = (v === 'era') ? 'era' : 'type';
      rebuildNTLayer();
      renderFilterBar();
      renderLegend();
      renderCards();
    } else {
      viewMode = v;
      recolorAllProvinces();
      renderFilterBar();
      renderLegend();
      renderCards();
    }
  });
});

/* ═══════════════════════════════════════
   SEARCH
═══════════════════════════════════════ */
document.getElementById('search-input').addEventListener('input', e => {
  searchQuery = e.target.value.toLowerCase().trim();
  renderCards();
});

/* ═══════════════════════════════════════
   RESET
═══════════════════════════════════════ */
document.getElementById('map-reset').addEventListener('click', () => {
  map.flyTo([16.0, 107.8], 5.4, { duration:1.0 });
  activeItemId = null;
  if (activeProvince) {
    const prev = activeProvince;
    activeProvince = null;
    recolorProvince(prev);
  }
  hideMapInfoBox();
  renderCards();
});

/* ═══════════════════════════════════════
   STATIC TEXT (non-data UI chrome)
═══════════════════════════════════════ */
function showMapInfoBox(html) {
  const box = document.getElementById('map-info');
  box.innerHTML = html;
  box.classList.add('visible');
}

function hideMapInfoBox() {
  document.getElementById('map-info').classList.remove('visible');
}

/* shows the currently selected heritage's info, or hides the box if none is selected */
function renderActiveMapInfo() {
  if (activeItemId === null) { hideMapInfoBox(); return; }

  if (nationalMode) {
    const tr = (Array.isArray(NATIONAL_TREASURES) ? NATIONAL_TREASURES : []).find(x => x.id === activeItemId);
    if (!tr) { hideMapInfoBox(); return; }
    const tTitle = lang === 'vi' ? (tr.name || tr.english) : (tr.english || tr.name);
    const tSub   = lang === 'vi' ? (tr.english || '') : (tr.name || '');
    const color  = ntCatColor(tr);
    const cat    = ntCatLabel(ntCategory(tr));
    showMapInfoBox(`
      <div class="map-info-title">${esc(tTitle)}</div>
      <div class="map-info-sub">${esc(tSub)}</div>
      <div class="map-info-tags">
        <span style="color:${color};border-color:${color}55;background:${color}11">${esc(cat)}</span>
        ${tr.badge ? `<span style="color:${color};border-color:${color}55;background:${color}11">${esc(tr.badge)}</span>` : ''}
      </div>
      ${tr.year ? `<div class="map-info-count">${esc(ntLocation(tr))} · ${esc(tr.year)}</div>` : ''}
    `);
    return;
  }

  const t = TREASURES.find(x => x.id === activeItemId);
  if (!t) { hideMapInfoBox(); return; }
  const title = lang === 'vi' ? t.name : t.english;
  const sub    = lang === 'vi' ? t.english : t.name;
  const color  = activeColor(t);
  const status = getStatus(t);
  const genre  = getGenre(t);
  const stLbl  = statusLabel(status,'short');
  const gnLbl  = genreLabel(genre,'short');
  const stC    = STATUS_CONFIG[status]?.color || '#8a7c5e';
  const gnC    = GENRE_CONFIG[genre]?.color   || '#8a7c5e';
  showMapInfoBox(`
    <div class="map-info-title">${title}</div>
    <div class="map-info-sub">${sub}</div>
    <div class="map-info-tags">
      <span style="color:${stC};border-color:${stC}55;background:${stC}11">${stLbl}</span>
      <span style="color:${gnC};border-color:${gnC}55;background:${gnC}11">${gnLbl}</span>
    </div>
    <a class="map-info-btn" href="artifact.html?id=${t.id}" target="_blank">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/>
        <line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
      <span>${lang === 'vi' ? 'Xem chi tiết' : 'View Details'}</span>
    </a>
    <div class="map-info-count" id="map-info-count"></div>
  `);
}

function applyStaticI18n() {
  document.documentElement.lang = lang;
  document.documentElement.classList.toggle('lang-vi', lang === 'vi');

  document.getElementById('header-eyebrow').textContent = nationalMode ? t('ntEyebrow') : t('headerEyebrow');
  document.getElementById('title-line1').textContent    = t('titleLine1');
  document.getElementById('title-em').textContent       = t('titleEm');
  document.getElementById('title-line2').textContent    = t('titleLine2');

  document.getElementById('stat-shown-label').textContent = t('statShownLabel');
  document.getElementById('stat-total-label').textContent = t('statTotalLabel');
  document.getElementById('stat-locs-label').textContent  = t('statLocsLabel');

  document.getElementById('search-input').placeholder = t('searchPlaceholder');

  document.getElementById('map-reset').textContent = t('mapReset');
  const hl = document.getElementById('lang-home-link');
  if (hl) hl.textContent = t('homeLink');
  const dl = document.getElementById('lang-db-link');
  if (dl) dl.textContent = t('dbLink');

  document.querySelectorAll('.mode-btn').forEach(b => {
    b.textContent = b.dataset.mode === 'treasure' ? t('modeTreasure') : t('modeUnesco');
  });

  document.getElementById('view-toggle-label').textContent = t('viewToggleLabel');
  const vb = document.querySelectorAll('.view-btn');
  if (vb && vb.length >= 2) {
    if (nationalMode) {
      vb[0].textContent = t('ntViewCategory');
      vb[1].textContent = t('ntViewEra');
      vb[0].dataset.view = 'type';
      vb[1].dataset.view = 'era';
      vb[0].classList.toggle('active', ntView === 'type');
      vb[1].classList.toggle('active', ntView === 'era');
    } else {
      vb[0].textContent = t('viewStatus');
      vb[1].textContent = t('viewGenre');
      vb[0].dataset.view = 'status';
      vb[1].dataset.view = 'genre';
      vb[0].classList.toggle('active', viewMode === 'status');
      vb[1].classList.toggle('active', viewMode === 'genre');
    }
  }

  document.getElementById('tile-switcher-label').textContent = t('tileStyleLabel');
  document.getElementById('tile-osm-label').textContent      = t('tileOsm');

  document.getElementById('footer-copyright').textContent = t('footerCopyright');
  document.getElementById('footer-credit').innerHTML      = t('footerCredit');

  document.querySelectorAll('.lang-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.lang === lang)
  );

  renderActiveMapInfo();
}

/* ═══════════════════════════════════════
   LANGUAGE TOGGLE
═══════════════════════════════════════ */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.lang === lang) return;
    lang = btn.dataset.lang;
    localStorage.setItem('vnmt_lang', lang);

    applyStaticI18n();
    /* refresh tooltips + province colours in the new language */
    refreshProvinceTooltips();
    renderFilterBar();
    renderLegend();
    renderCards();
    if (document.getElementById('modal-overlay').classList.contains('visible')) {
      openArtifactModal(activeItemId);
    }
    setTimeout(() => map.invalidateSize(), 50);
  });
});

/* ═══════════════════════════════════════
   URL PARAMETER — status/genre deep-link
   e.g. VNMT.html?status=representative
        VNMT.html?genre=singings
═══════════════════════════════════════ */
(function readURLParams() {
  const p = new URLSearchParams(window.location.search);
  const urlStatus = p.get('status');
  const urlGenre  = p.get('genre');
  if (urlStatus && STATUS_CONFIG[urlStatus]) {
    viewMode     = 'status';
    activeFilter = urlStatus;
    document.querySelector('.view-btn[data-view="status"]')?.classList.add('active');
    document.querySelector('.view-btn[data-view="genre"]')?.classList.remove('active');
  } else if (urlGenre && GENRE_CONFIG[urlGenre]) {
    viewMode     = 'genre';
    activeFilter = urlGenre;
    document.querySelector('.view-btn[data-view="status"]')?.classList.remove('active');
    document.querySelector('.view-btn[data-view="genre"]')?.classList.add('active');
  }
})();

/* ═══════════════════════════════════════
   GENRE VIETNAMESE LABEL MAP (for backend genre labels)
═══════════════════════════════════════ */
const GENRE_VI_MAP = {
  'quan_ho': 'Quan họ',
  'ho': 'Hò',
};

/* ═══════════════════════════════════════
   AUDIO RECORDING & ANALYSIS
═══════════════════════════════════════ */

// Audio recording state per artifact
const recordingState = {};
const mediaRecorders = {};
const recordedChunks = {};
const recordingTimers = {};
let recordingStartTime = {};

/* ═══════════════════════════════════════
   AUDIO CONTEXT INITIALIZATION
═══════════════════════════════════════ */
async function initAudioContext(id) {
  if (!recordingState[id]) {
    recordingState[id] = {
      isRecording: false,
      audioBlob: null,
      audioContext: null,
      analyser: null,
      stream: null,
      animationFrame: null
    };
  }
  const state = recordingState[id];
  if (!state.audioContext) {
    state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return state;
}

/* ═══════════════════════════════════════
   RECORDING TOGGLE
═══════════════════════════════════════ */
async function toggleRecording(id) {
  const state = await initAudioContext(id);
  const recordBtn = document.getElementById(`record-btn-${id}`);
  const playbackBtn = document.getElementById(`playback-btn-${id}`);
  const analyzeBtn = document.getElementById(`analyze-btn-${id}`);
  const clearBtn = document.getElementById(`clear-btn-${id}`);
  const visualizer = document.getElementById(`recording-visualizer-${id}`);
  const timer = document.getElementById(`recording-timer-${id}`);

  if (state.isRecording) {
    // Stop recording
    stopRecording(id);
    recordBtn.classList.remove('recording');
    recordBtn.querySelector('.record-icon').hidden = false;
    recordBtn.querySelector('.stop-icon').hidden = true;
    recordBtn.querySelector('.record-text').textContent = lang === 'vi' ? 'Bắt đầu ghi âm' : 'Start Recording';
    
    // Show playback and analyze buttons
    playbackBtn.hidden = false;
    analyzeBtn.hidden = false;
    clearBtn.hidden = false;
    visualizer.hidden = true;
    timer.hidden = true;
    
    if (recordingTimers[id]) {
      clearInterval(recordingTimers[id]);
      recordingTimers[id] = null;
    }
  } else {
    // Start recording
    try {
      state.stream = await navigator.mediaDevices.getUserMedia({ 
        audio: { 
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          sampleRate: 22050
        } 
      });

      const mediaRecorder = new MediaRecorder(state.stream, {
        mimeType: 'audio/webm;codecs=opus'
      });
      
      mediaRecorders[id] = mediaRecorder;
      recordedChunks[id] = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          recordedChunks[id].push(e.data);
        }
      };

      mediaRecorder.onstop = () => {
        state.audioBlob = new Blob(recordedChunks[id], { type: 'audio/webm' });
        state.stream.getTracks().forEach(track => track.stop());
        
        // Create object URL for playback
        if (state.audioBlob) {
          state.audioUrl = URL.createObjectURL(state.audioBlob);
        }
      };

      mediaRecorder.start(100); // Collect data every 100ms
      state.isRecording = true;
      
      // Update UI
      recordBtn.classList.add('recording');
      recordBtn.querySelector('.record-icon').hidden = true;
      recordBtn.querySelector('.stop-icon').hidden = false;
      recordBtn.querySelector('.record-text').textContent = lang === 'vi' ? 'Dừng ghi âm' : 'Stop Recording';
      
      playbackBtn.hidden = true;
      analyzeBtn.hidden = true;
      clearBtn.hidden = true;
      visualizer.hidden = false;
      timer.hidden = false;
      
      // Setup visualizer
      setupVisualizer(id);
      
       // Start timer
       let seconds = 0;
       recordingTimers[id] = setInterval(() => {
         seconds++;
         const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
         const secs = (seconds % 60).toString().padStart(2, '0');
         timer.textContent = `${mins}:${secs}`;
         
         // Auto-stop at 30 seconds - use stopAndResetRecording to avoid recursion
         if (seconds >= 30) {
           stopAndResetRecording(id);
         }
       }, 1000);
      
    } catch (err) {
      console.error('Recording failed:', err);
      alert(lang === 'vi' ? 'Không thể truy cập micro. Vui lòng cho phép quyền truy cập.' : 'Cannot access microphone. Please allow permission.');
    }
  }
}

function stopRecording(id) {
  if (mediaRecorders[id] && mediaRecorders[id].state !== 'inactive') {
    mediaRecorders[id].stop();
  }
  if (recordingState[id]) {
    recordingState[id].isRecording = false;
  }
}

/**
 * Stop recording and reset UI (used for auto-stop at 30 seconds)
 * Avoids recursion by not calling toggleRecording
 */
function stopAndResetRecording(id) {
  const state = recordingState[id];
  const recordBtn = document.getElementById(`record-btn-${id}`);
  const playbackBtn = document.getElementById(`playback-btn-${id}`);
  const analyzeBtn = document.getElementById(`analyze-btn-${id}`);
  const clearBtn = document.getElementById(`clear-btn-${id}`);
  const visualizer = document.getElementById(`recording-visualizer-${id}`);
  const timer = document.getElementById(`recording-timer-${id}`);

  // Stop recording
  if (mediaRecorders[id] && mediaRecorders[id].state !== 'inactive') {
    mediaRecorders[id].stop();
  }
  
  if (state) {
    state.isRecording = false;
    
    // Stop stream tracks
    if (state.stream) {
      state.stream.getTracks().forEach(track => {
        try { track.stop(); } catch(e) { /* already stopped */ }
      });
      state.stream = null;
    }
    
    // Cancel animation frame
    if (state.animationFrame) {
      cancelAnimationFrame(state.animationFrame);
      state.animationFrame = null;
    }
  }
  
  // Clear timer
  if (recordingTimers[id]) {
    clearInterval(recordingTimers[id]);
    recordingTimers[id] = null;
  }

  // Update UI
  if (recordBtn) {
    recordBtn.classList.remove('recording');
    recordBtn.querySelector('.record-icon').hidden = false;
    recordBtn.querySelector('.stop-icon').hidden = true;
    recordBtn.querySelector('.record-text').textContent = lang === 'vi' ? 'Bắt đầu ghi âm' : 'Start Recording';
  }
  
  if (playbackBtn) playbackBtn.hidden = false;
  if (analyzeBtn) analyzeBtn.hidden = false;
  if (clearBtn) clearBtn.hidden = false;
  if (visualizer) visualizer.hidden = true;
  if (timer) timer.hidden = true;
}

function setupVisualizer(id) {
  const state = recordingState[id];
  const canvas = document.getElementById(`waveform-canvas-${id}`);
  if (!canvas || !state.stream) return;

  const ctx = canvas.getContext('2d');
  const analyser = state.audioContext.createAnalyser();
  analyser.fftSize = 256;
  
  const source = state.audioContext.createMediaStreamSource(state.stream);
  source.connect(analyser);
  state.analyser = analyser;

  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  const draw = () => {
    if (!state.isRecording) return;
    
    state.animationFrame = requestAnimationFrame(draw);
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;
    
    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * canvas.height * 0.8;
      const hue = 45 + (dataArray[i] / 255) * 30; // Gold to orange
      ctx.fillStyle = `hsl(${hue}, 80%, 50%)`;
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }
  };
  
  draw();
}

function playbackRecording(id) {
  const state = recordingState[id];
  if (state.audioUrl) {
    const audio = new Audio(state.audioUrl);
    audio.play();
  }
}

function clearRecording(id) {
  const state = recordingState[id];
  const recordBtn = document.getElementById(`record-btn-${id}`);
  const playbackBtn = document.getElementById(`playback-btn-${id}`);
  const analyzeBtn = document.getElementById(`analyze-btn-${id}`);
  const clearBtn = document.getElementById(`clear-btn-${id}`);
  const visualizer = document.getElementById(`recording-visualizer-${id}`);
  const timer = document.getElementById(`recording-timer-${id}`);

  // Revoke object URL
  if (state.audioUrl) {
    URL.revokeObjectURL(state.audioUrl);
    state.audioUrl = null;
  }
  state.audioBlob = null;
  
  // Reset UI
  recordBtn.classList.remove('recording');
  recordBtn.querySelector('.record-icon').hidden = false;
  recordBtn.querySelector('.stop-icon').hidden = true;
  recordBtn.querySelector('.record-text').textContent = lang === 'vi' ? 'Bắt đầu ghi âm' : 'Start Recording';
  
  playbackBtn.hidden = true;
  analyzeBtn.hidden = true;
  clearBtn.hidden = true;
  visualizer.hidden = true;
  timer.hidden = true;
  timer.textContent = '00:00';
  
  // Clear canvas
  const canvas = document.getElementById(`waveform-canvas-${id}`);
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

/**
 * Convert WebM/Opus audio blob to WAV/PCM for backend compatibility
 * Uses Web Audio API to decode and re-encode
 */
async function convertWebMToWav(webmBlob) {
  const arrayBuffer = await webmBlob.arrayBuffer();
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  let audioBuffer;
  try {
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  } catch (decodeErr) {
    console.warn('Audio decode failed:', decodeErr);
    await audioContext.close();
    throw new Error(lang === 'vi' ? 'Không thể giải mã âm thanh. Vui lòng dùng trình duyệt khác.' : 'Cannot decode audio. Please try a different browser.');
  }
  
  // Create WAV file from audio buffer
  const numChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const length = audioBuffer.length;
  const bytesPerSample = 2; // 16-bit
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = length * blockAlign;
  const headerSize = 44;
  const totalSize = headerSize + dataSize;
  
  // Create WAV header
  const wavBuffer = new ArrayBuffer(totalSize);
  const view = new DataView(wavBuffer);
  
  // RIFF header
  writeString(view, 0, 'RIFF');
  view.setUint32(4, totalSize - 8, true);
  writeString(view, 8, 'WAVE');
  
  // fmt chunk
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // PCM format chunk size
  view.setUint16(20, 1, true); // PCM format
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true); // bits per sample
  
  // data chunk
  writeString(view, 36, 'data');
  view.setUint32(40, dataSize, true);
  
  // Write audio data (interleaved channels, 16-bit PCM)
  let offset = headerSize;
  for (let i = 0; i < length; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      const sample = Math.max(-1, Math.min(1, audioBuffer.getChannelData(ch)[i]));
      view.setInt16(offset, sample * 0x7FFF, true);
      offset += 2;
    }
  }
  
  await audioContext.close();
  return new Blob([wavBuffer], { type: 'audio/wav' });
}

function writeString(view, offset, string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

async function analyzeUserRecording(id) {
  const state = recordingState[id];
  if (!state.audioBlob) {
    alert(lang === 'vi' ? 'Chưa có file ghi âm' : 'No recording available');
    return;
  }

  const analyzeBtn = document.getElementById(`analyze-btn-${id}`);
  const loading = document.getElementById(`audio-analysis-loading-${id}`);
  const results = document.getElementById(`audio-analysis-results-${id}`);
  const error = document.getElementById(`audio-analysis-error-${id}`);
  const scoreEl = document.getElementById(`analysis-score-${id}`);
  const feedbackEl = document.getElementById(`analysis-feedback-${id}`);
  const analysisSection = document.getElementById(`modal-audio-analysis-${id}`);

  // Show analysis section
  analysisSection.hidden = false;
  loading.hidden = false;
  results.hidden = true;
  error.hidden = true;
  analyzeBtn.disabled = true;

  try {
    // Convert WebM to WAV for backend compatibility
    const wavBlob = await convertWebMToWav(state.audioBlob);
    
    const formData = new FormData();
    formData.append('file', wavBlob, `recording_${id}.wav`);
    formData.append('reference_id', id);
    
    const response = await fetch('/api/v1/audio/analyze', {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const score = data.score || 0;
    const feedback = data.feedback || '';
    
    // Set score display with color coding
    scoreEl.textContent = score.toFixed(1);
    scoreEl.className = 'vocal-score-value';
    if (score >= 80) {
      scoreEl.classList.add('score-excellent');
    } else if (score >= 65) {
      scoreEl.classList.add('score-good');
    } else if (score >= 50) {
      scoreEl.classList.add('score-fair');
    } else {
      scoreEl.classList.add('score-poor');
    }
    feedbackEl.textContent = feedback;

    loading.hidden = true;
    results.hidden = false;
    
  } catch (err) {
    console.error('Analysis failed:', err);
    loading.hidden = true;
    error.hidden = false;
    const errMsg = err instanceof Error ? err.message : String(err);
    document.getElementById(`audio-analysis-error-msg-${id}`).textContent = 
      lang === 'vi' ? `Phân tích thất bại: ${errMsg}` : `Analysis failed: ${errMsg}`;
  } finally {
    analyzeBtn.disabled = false;
  }
}

/**
 * Hide the audio analysis results section
 */
function hideAudioAnalysis(id) {
  const analysisSection = document.getElementById(`modal-audio-analysis-${id}`);
  if (analysisSection) analysisSection.hidden = true;
}

// Expose globally for onclick handlers
window.toggleRecording = toggleRecording;
window.playbackRecording = playbackRecording;
window.clearRecording = clearRecording;
window.analyzeUserRecording = analyzeUserRecording;
window.hideAudioAnalysis = hideAudioAnalysis;
window.stopAllRecordings = stopAllRecordings;

/* ═══════════════════════════════════════
   NATIONAL TREASURES (357) — separate marker layer
   Clearly separated from the 16 UNESCO intangible-heritage sites.
   ═══════════════════════════════════════ */

/* Icon for a single treasure marker (coloured by active dimension: type | era) */
function ntDivIcon(t) {
  const color = ntDimColor(t);
  return L.divIcon({
    className: 'nt-marker',
    html: `<span class="nt-dot" style="background:${color}"></span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

/* Rebuild the treasure marker layer (called on view-dimension change) */
function rebuildNTLayer() {
  if (!nationalMode) return;
  if (ntLayer && map.hasLayer(ntLayer)) map.removeLayer(ntLayer);
  ntMarkers = {};
  ntLayer = buildNTLayer();
  applyNTMarkerFilter();
  if (!map.hasLayer(ntLayer)) ntLayer.addTo(map);
}

/* Polar + sector path helpers for the pie-chart cluster icons */
function ntPolar(cx, cy, r, deg) {
  const rad = (deg - 90) * Math.PI / 180;   // start at 12 o'clock
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}
function ntSectorPath(cx, cy, r, a0, a1) {
  if (a1 - a0 >= 360) {
    return `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy + r} A ${r} ${r} 0 1 1 ${cx} ${cy - r} Z`;
  }
  const p0 = ntPolar(cx, cy, r, a0);
  const p1 = ntPolar(cx, cy, r, a1);
  const large = (a1 - a0) > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${p0[0]} ${p0[1]} A ${r} ${r} 0 ${large} 1 ${p1[0]} ${p1[1]} Z`;
}

/* Cluster icon — pie chart showing the proportion of its treasures by active dimension */
function ntClusterIcon(cluster) {
  const n = cluster.getChildCount();
  const s = n < 10 ? 36 : n < 100 ? 46 : 56;

  // Tally treasure dimension keys among this cluster's children (cached on marker)
  const CONFIG = ntDimConfig();
  const counts = {};
  cluster.getAllChildMarkers().forEach(m => {
    const key = ntView === 'era' ? m.options.ntEraKey : m.options.ntTypeKey;
    if (!key) return;
    counts[key] = (counts[key] || 0) + 1;
  });

  const total = Math.max(1, Object.values(counts).reduce((a, b) => a + b, 0));
  const order = Object.keys(CONFIG).filter(k => k !== 'all' && counts[k]);

  let acc = 0;
  const slices = order.map(k => {
    const span = (counts[k] / total) * 360;
    const a0 = acc;
    const a1 = acc + span;
    acc = a1;
    const color = CONFIG[k]?.color || '#d4875e';
    return `<path d="${ntSectorPath(50, 50, 50, a0, a1)}" fill="${color}" stroke="rgba(10,9,0,0.85)" stroke-width="1"/>`;
  }).join('');

  const html = `
    <svg class="nt-cluster-pie" viewBox="0 0 100 100" width="${s}" height="${s}">
      ${slices}
      <circle cx="50" cy="50" r="27" fill="rgba(10,9,0,0.92)" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
      <text x="50" y="50" text-anchor="middle" dominant-baseline="central"
            font-size="${n < 100 ? 16 : 13}" fill="#f7f0e1"
            font-family="'DM Sans', sans-serif" font-weight="700">${n}</text>
    </svg>`;

  return L.divIcon({
    className: 'nt-cluster-wrap',
    html,
    iconSize: [s, s],
    iconAnchor: [s / 2, s / 2],
  });
}

/* Build (once) the marker-cluster layer for all national treasures */
function buildNTLayer() {
  const cluster = L.markerClusterGroup({
    chunkedLoading: true,
    animate: true,
    polygonOptions: { color: '#d4875e', fillColor: '#d4875e', fillOpacity: 0.15 },
    showCoverageOnHover: false,
    maxClusterRadius: 34,
    iconCreateFunction: ntClusterIcon,
  });

  const treasures = Array.isArray(NATIONAL_TREASURES) ? NATIONAL_TREASURES : [];
  treasures.forEach(t => {
    if (typeof t.lat !== 'number' || typeof t.lng !== 'number') return;
    const title = lang === 'vi' ? (t.name || t.english) : (t.english || t.name);
    const meta  = [t.badge, t.year].filter(Boolean).join(' · ');
    const marker = L.marker([t.lat, t.lng], { icon: ntDivIcon(t), ntId: t.id, ntTypeKey: ntType(t), ntEraKey: ntEraKey(t) });
    marker.bindTooltip(`<div class="tt-title">${esc(title)}</div>` +
      (meta ? `<div class="tt-meta">${esc(meta)}</div>` : ''),
      { direction: 'top', className: 'nt-tooltip', sticky: true });
    marker.on('click', () => {
      activeItemId = t.id;
      renderActiveMapInfo();
      openNTModal(t);
      renderCards();
    });
    ntMarkers[t.id] = marker;
    cluster.addLayer(marker);
  });
  return cluster;
}

/* Show/hide treasure markers to match the active filter (dimension-aware) */
function applyNTMarkerFilter() {
  if (!ntLayer) return;
  ntLayer.eachLayer(m => {
    const tr = (Array.isArray(NATIONAL_TREASURES) ? NATIONAL_TREASURES : []).find(x => x.id === m.options.ntId);
    if (!tr) return;
    const match = activeFilter === 'all' || ntDimKey(tr) === activeFilter;
    const present = ntLayer.hasLayer(m);
    if (match && !present) ntLayer.addLayer(m);
    else if (!match && present) ntLayer.removeLayer(m);
  });
}

/* National treasure detail modal (artifact schema — separate from UNESCO modal) */
function openNTModal(t) {
  const title = lang === 'vi' ? (t.name || t.english) : (t.english || t.name);
  const sub   = lang === 'vi' ? (t.english || '') : (t.name || '');
  const typeKey = ntType(t);
  const catKey  = ntCategory(t);
  const eraKey  = ntEraKey(t);
  const typeC = NT_TYPE_CONFIG[typeKey]?.color     || '#d4875e';
  const catC  = NT_CATEGORY_CONFIG[catKey]?.color  || '#a97fd0';
  const eraC  = NT_ERA_CONFIG[eraKey]?.color       || '#8a7c5e';
  const typeLbl = NT_TYPE_CONFIG[typeKey]?.[lang]?.short     || typeKey;
  const catLbl  = ntCatLabel(catKey);
  const eraLbl  = NT_ERA_CONFIG[eraKey]?.[lang]?.short       || eraKey;
  const desc  = lang === 'vi' ? (t.desc_vi || t.desc) : t.desc;
  const pending = (lang === 'vi' && !t.desc_vi) ? ' <span class="desc-pending">(EN)</span>' : '';
  const model3d = t.model3d || '';
  const imageUrl = t.image || `images/treasures/${t.id}.jpg`;

  const lblType  = lang === 'vi' ? 'Loại' : 'Type';
  const lblCat   = lang === 'vi' ? 'Phân loại' : 'Category';
  const lblYear  = lang === 'vi' ? 'Niên đại' : 'Period';
  const lblLoc   = lang === 'vi' ? 'Địa điểm' : 'Location';
  const lblCoord = lang === 'vi' ? 'Tọa độ' : 'Coordinates';
  const lblDesc  = lang === 'vi' ? 'Mô tả' : 'Description';

  const coord = (typeof t.lat === 'number' && typeof t.lng === 'number')
    ? `<div class="modal-info-item"><div class="modal-info-label">🗺️ ${lblCoord}</div><div class="modal-info-value">${t.lat.toFixed(4)}, ${t.lng.toFixed(4)}</div></div>` : '';

  let html = `
    <div class="modal-image-container">
      <img src="${imageUrl}" alt="${esc(title)}" class="modal-image" onerror="this.onerror=null; this.src='images/artifacts/placeholder.svg'" />
    </div>
    <div class="modal-badge-row">
      <span class="modal-badge" style="color:${typeC};border-color:${typeC}55">${esc(typeLbl)}</span>
      <span class="modal-badge" style="color:${catC};border-color:${catC}55">${esc(catLbl)}</span>
      <span class="modal-badge" style="color:${eraC};border-color:${eraC}55">${esc(eraLbl)}</span>
    </div>
    <div class="modal-title">${esc(title)}</div>
    ${sub ? `<div class="modal-subtitle">${esc(sub)}</div>` : ''}
    <div class="modal-info-grid">
      <div class="modal-info-item"><div class="modal-info-label">🏷️ ${lblType}</div><div class="modal-info-value">${esc(typeLbl)}</div></div>
      <div class="modal-info-item"><div class="modal-info-label">🏷️ ${lblCat}</div><div class="modal-info-value">${esc(catLbl)}</div></div>
      <div class="modal-info-item"><div class="modal-info-label">📅 ${lblYear}</div><div class="modal-info-value">${esc(t.year || '')}</div></div>
      <div class="modal-info-item"><div class="modal-info-label">📍 ${lblLoc}</div><div class="modal-info-value">${esc(ntLocation(t))}</div></div>
      ${coord}
    </div>
    ${desc ? `<div class="modal-desc-section"><div class="modal-desc-label">${lblDesc}</div><div class="modal-desc">${esc(desc)}${pending}</div></div>` : ''}
  `;

  if (model3d) {
    html += `<div class="modal-desc-section"><div class="modal-desc-label">3D</div>
      <iframe src="${model3d}" title="${esc(title)}" style="width:100%;height:420px;border:0;border-radius:8px;background:#000" allowfullscreen></iframe>
    </div>`;
  }

  document.getElementById('modal-content').innerHTML = html;
  document.getElementById('modal-overlay').classList.add('visible');
}

/* ═══════════════════════════════════════
   MODE SWITCH  (UNESCO ↔ National Treasures)
═══════════════════════════════════════ */
/* ═══════════════════════════════════════
   NATIONAL-TREASURE PROVINCE MODAL  + Province-Borders toggle
═══════════════════════════════════════ */

/* ── National-treasure province attribution ────────────────────────────
   Each treasure's `location` string reliably ends with the province (or
   municipality) where it is held. We resolve that name directly instead of
   running a geometric point-in-polygon test, which is unreliable against the
   simplified vn_geo.json boundaries (it mis-attributed hundreds of items,
   e.g. reporting 0 for Hà Nội). This keeps province tooltips / modals
   accurate. */

/* Every Vietnamese province + municipality name, used to parse locations. */
const NT_PROVINCE_NAMES = [
  'An Giang','Bà Rịa - Vũng Tàu','Bạc Liêu','Bắc Giang','Bắc Kạn','Bắc Ninh','Bến Tre',
  'Bình Dương','Bình Định','Bình Phước','Bình Thuận','Cà Mau','Cao Bằng','Cần Thơ','Đà Nẵng',
  'Đắk Lắk','Đắk Nông','Điện Biên','Đồng Nai','Đồng Tháp','Gia Lai','Hà Giang','Hà Nam','Hà Nội',
  'Hà Tĩnh','Hải Dương','Hải Phòng','Hậu Giang','Hòa Bình','Hồ Chí Minh','Hưng Yên','Khánh Hòa',
  'Kiên Giang','Kon Tum','Lai Châu','Lạng Sơn','Lào Cai','Lâm Đồng','Long An','Nam Định','Nghệ An',
  'Ninh Bình','Ninh Thuận','Phú Thọ','Phú Yên','Quảng Bình','Quảng Nam','Quảng Ngãi','Quảng Ninh',
  'Quảng Trị','Sóc Trăng','Sơn La','Tây Ninh','Thái Bình','Thái Nguyên','Thanh Hóa','Thừa Thiên Huế',
  'Tiền Giang','Trà Vinh','Tuyên Quang','Vĩnh Long','Vĩnh Phúc','Yên Bái'
];

/* Raw location-province name → the name used by the map (vn_geo.json). */
const NT_PROVINCE_ALIAS = {
  'Hồ Chí Minh': 'TP Hồ Chí Minh',
};

/* 2025 provincial reshuffle: pre-merger province → post-merger name.
   Artifacts were recognised before the merger, so their `location` strings
   still carry the old names; this maps them to the new province names. */
const NT_PROVINCE_MERGE = {
  'Yên Bái': 'Lào Cai',
  'Hà Giang': 'Tuyên Quang',
  'Bắc Kạn': 'Thái Nguyên',
  'Vĩnh Phúc': 'Phú Thọ',
  'Hòa Bình': 'Phú Thọ',
  'Bắc Giang': 'Bắc Ninh',
  'Thái Bình': 'Hưng Yên',
  'Hải Dương': 'Hải Phòng',
  'Hà Nam': 'Ninh Bình',
  'Nam Định': 'Ninh Bình',
  'Quảng Bình': 'Quảng Trị',
  'Quảng Nam': 'Đà Nẵng',
  'Kon Tum': 'Quảng Ngãi',
  'Bình Định': 'Gia Lai',
  'Ninh Thuận': 'Khánh Hòa',
  'Đắk Nông': 'Lâm Đồng',
  'Bình Thuận': 'Lâm Đồng',
  'Phú Yên': 'Đắk Lắk',
  'Bà Rịa - Vũng Tàu': 'TP Hồ Chí Minh',
  'Bình Dương': 'TP Hồ Chí Minh',
  'Bình Phước': 'Đồng Nai',
  'Long An': 'Tây Ninh',
  'Sóc Trăng': 'Cần Thơ',
  'Hậu Giang': 'Cần Thơ',
  'Bến Tre': 'Vĩnh Long',
  'Trà Vinh': 'Vĩnh Long',
  'Tiền Giang': 'Đồng Tháp',
  'Bạc Liêu': 'Cà Mau',
  'Kiên Giang': 'An Giang',
};

/* Resolve the province a treasure is held in, from its `location` string. */
function ntProvinceOf(t) {
  const loc = (t && t.location) ? t.location : '';
  if (!loc) return null;
  let raw = null;
  /* A few locations omit the province name — resolve them explicitly. */
  if (loc.indexOf('Cung đình Huế') !== -1 && loc.indexOf('Thừa Thiên') === -1) raw = 'Thừa Thiên Huế';
  else if (loc.indexOf('Thừa Thiên - Huế') !== -1) raw = 'Thừa Thiên Huế';
  else if (loc.indexOf('Cố đô Huế') !== -1 && loc.indexOf('Thừa Thiên') === -1) raw = 'Thừa Thiên Huế';
  else if (loc.indexOf('Lưu trữ quốc gia III') !== -1) raw = 'Hà Nội';
  else if (loc === 'Bảo tàng Hải quân') raw = 'Hải Phòng';
  else {
    /* Otherwise take the right-most province/city name that appears. */
    let best = null, bestIdx = -1;
    for (const p of NT_PROVINCE_NAMES) {
      const idx = loc.lastIndexOf(p);
      if (idx > bestIdx) { bestIdx = idx; best = p; }
    }
    raw = best;
  }
  if (!raw) return null;
  /* Normalise name aliases (e.g. Hồ Chí Minh → TP Hồ Chí Minh). */
  raw = NT_PROVINCE_ALIAS[raw] || raw;
  /* Apply the 2025 provincial reshuffle: merged provinces → new name. */
  return NT_PROVINCE_MERGE[raw] || raw;
}

/* Index of national treasures by province (from the `location` field). */
function buildNTProvinceIndex() {
  ntProvinceIndex = {};
  if (!PROVINCE_GEO) return;
  Object.keys(PROVINCE_GEO).forEach(name => { ntProvinceIndex[name] = []; });
  const treasures = Array.isArray(NATIONAL_TREASURES) ? NATIONAL_TREASURES : [];
  treasures.forEach(t => {
    const p = ntProvinceOf(t);
    if (p && ntProvinceIndex[p]) ntProvinceIndex[p].push(t.id);
  });
}

/* SVG pie chart for national treasures (dimension-aware colours) */
function buildNTPieSVG(counts, total) {
  const CONFIG = ntDimConfig();
  const sz = 100, cx = sz/2, r = cx - 6, ir = cx * 0.42;
  const slices = Object.entries(counts).sort((a,b) => b[1] - a[1]);
  let paths = '', dividers = '', angle = -90;
  for (const [key, count] of slices) {
    const color = CONFIG[key]?.color || '#8a7c5e';
    const sweep = (count / total) * 360;
    if (sweep >= 359.9) { paths = `<circle cx="${cx}" cy="${cx}" r="${r}" fill="${color}"/>`; break; }
    const a1 = angle * Math.PI / 180, a2 = (angle + sweep) * Math.PI / 180;
    const x1 = (cx + r * Math.cos(a1)).toFixed(2), y1 = (cx + r * Math.sin(a1)).toFixed(2);
    const x2 = (cx + r * Math.cos(a2)).toFixed(2), y2 = (cx + r * Math.sin(a2)).toFixed(2);
    paths += `<path d="M${cx},${cx} L${x1},${y1} A${r},${r} 0 ${sweep>180?1:0},1 ${x2},${y2} Z" fill="${color}"/>`;
    dividers += `<line x1="${cx}" y1="${cx}" x2="${x1}" y2="${y1}" stroke="rgba(10,9,0,0.5)" stroke-width="1"/>`;
    angle += sweep;
  }
  return `<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${cx}" cy="${cx}" r="${r+1}" fill="rgba(10,9,0,0.3)"/>
    ${paths}
    ${slices.length > 1 ? dividers : ''}
    <circle cx="${cx}" cy="${cx}" r="${ir}" fill="rgba(10,9,0,0.85)"/>
    <text x="${cx}" y="${cx}" text-anchor="middle" dominant-baseline="central"
          fill="#e8c96a" font-family="DM Sans,sans-serif" font-weight="700" font-size="18px">${total}</text>
  </svg>`;
}

/* Dispatch a province click by mode. */
function onProvinceClick(name) {
  if (nationalMode) openNTProvinceModal(name);
  else showProvinceModal(name);
}

/* National-treasure province modal (chart + clickable list). */
function openNTProvinceModal(provinceName) {
  const ids = ntProvinceIndex[provinceName] || [];
  const treasures = (Array.isArray(NATIONAL_TREASURES) ? NATIONAL_TREASURES : [])
    .filter(t => ids.includes(t.id));
  const total = treasures.length;
  const counts = {};
  treasures.forEach(t => { const k = ntDimKey(t); counts[k] = (counts[k] || 0) + 1; });

  const pieSVG = total > 0 ? buildNTPieSVG(counts, total) : '';
  const legendRows = Object.entries(counts).sort((a,b) => b[1]-a[1]).map(([key, count]) => {
    const cfg = ntDimConfig()[key];
    return `<div class="province-pie-row">
      <span class="province-pie-dot" style="background:${cfg?.color || '#8a7c5e'}"></span>
      <span class="province-pie-label">${esc(ntDimLabel(key))}</span>
      <span class="province-pie-count">${count}</span>
    </div>`;
  }).join('');

  const itemRows = treasures.map(item => {
    const color = ntDimColor(item);
    const title = lang === 'vi' ? (item.name || item.english) : (item.english || item.name);
    return `
      <div class="province-item" data-id="${item.id}">
        <span class="province-item-dot" style="background:${color}"></span>
        <div class="province-item-body">
          <div class="province-item-title">${esc(title)}</div>
          <div class="province-item-tags">
            <span style="color:${color}">${esc(item.year || '')}</span>
            <span style="color:${color}">${esc(ntDimLabel(ntDimKey(item)))}</span>
          </div>
        </div>
        <button class="province-item-cta" type="button">${t('pieCta')}</button>
      </div>`;
  }).join('');

  const dimLabel = ntView === 'era'
    ? (lang === 'vi' ? 'Phân bố niên đại' : 'Era distribution')
    : (lang === 'vi' ? 'Phân bố theo loại' : 'Type distribution');

  const html = total > 0 ? `
    <div class="province-modal-title">${esc(provinceName)}</div>
    <div class="province-modal-sub">${dimLabel}</div>
    <div class="province-pie-wrap">
      <div class="province-pie">${pieSVG}</div>
      <div class="province-pie-legend">${legendRows}</div>
    </div>
    <div class="province-pie-total">
      ${lang === 'vi' ? 'Tổng bảo vật' : 'Total treasures'}: <strong>${total}</strong>
    </div>
    <div class="province-item-list">${itemRows}</div>
  ` : `
    <div class="province-modal-title">${esc(provinceName)}</div>
    <div class="province-modal-sub">${dimLabel}</div>
    <div class="province-pie-empty">
      ${lang === 'vi' ? 'Chưa có bảo vật trong tỉnh này' : 'No treasures in this province'}
    </div>
  `;

  const modal = document.getElementById('province-modal');
  document.getElementById('province-modal-content').innerHTML = html;
  modal.classList.add('visible');

  modal.querySelectorAll('.province-item').forEach(row => {
    row.addEventListener('click', () => {
      const id = parseInt(row.dataset.id, 10);
      closeProvinceModal();
      window.open(`treasure.html?id=${id}`, '_blank');
    });
  });
}

/* Province-borders toggle (shared by both modes) */
(function wireProvinceToggle() {
  const btn = document.getElementById('btn-provinces');
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (map.hasLayer(borderLayer)) map.removeLayer(borderLayer);
    else borderLayer.addTo(map);
    btn.classList.toggle('active', map.hasLayer(borderLayer));
  });
})();

function setNationalMode(on) {
  if (on === nationalMode) return;
  nationalMode = on;

  activeFilter = 'all';
  activeItemId = null;
  activeProvince = null;
  if (on) ntView = 'type';
  hideMapInfoBox();
  closeArtifactModal();

  document.querySelectorAll('.mode-btn').forEach(b =>
    b.classList.toggle('active', (b.dataset.mode === 'treasure') === on));

  if (on) {
    /* show treasure marker layer; provinces become neutral white (no colour) */
    neutralizeProvinces();
    if (!ntLayer) ntLayer = buildNTLayer();
    if (!map.hasLayer(ntLayer)) ntLayer.addTo(map);
    if (typeof ntLayer.bringToFront === 'function') ntLayer.bringToFront();
  } else {
    /* back to UNESCO province map and restore province colours */
    if (ntLayer && map.hasLayer(ntLayer)) map.removeLayer(ntLayer);
    if (!map.hasLayer(borderLayer)) borderLayer.addTo(map);
    recolorAllProvinces();
  }

  /* header eyebrow reflects the active dataset */
  const eyebrow = document.getElementById('header-eyebrow');
  if (eyebrow) eyebrow.textContent = on ? t('ntEyebrow') : t('headerEyebrow');

  applyStaticI18n();   // re-labels view buttons + set active view
  renderFilterBar();
  renderLegend();
  renderCards();
  refreshProvinceTooltips();
  setTimeout(() => map.invalidateSize(), 50);
}

/* Mode-toggle wiring */
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => setNationalMode(btn.dataset.mode === 'treasure'));
});

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
applyStaticI18n();
renderFilterBar();
renderLegend();
renderCards();
setTimeout(() => map.invalidateSize(), 50);
