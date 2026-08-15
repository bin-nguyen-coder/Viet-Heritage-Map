/* ═══════════════════════════════════════════════════════════
   TREASURE COMMON — shared configs + helpers for national treasures.
   Used by database.html (archive search). Mirrors VNMT.js definitions.
   ═══════════════════════════════════════════════════════════ */

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

/* Treasure location, translated to English when in English mode */
function ntLocation(t) {
  const loc = t ? (t.location || '') : '';
  return (typeof lang !== 'undefined' && lang === 'en' && LOCATION_EN && LOCATION_EN[loc]) ? LOCATION_EN[loc] : loc;
}
