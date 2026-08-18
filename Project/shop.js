/* ═══════════════════════════════════════
   SHOP PAGE CONTENT DATA
   Structured for easy maintenance and bilingual support
   Mirrors the pattern used by about.js / journey.js
═══════════════════════════════════════ */

// ── Page-level meta ──────────────────────────────────────────────
const SHOP_META = {
  title: {
    vi: 'Cửa hàng di sản — VietHeritage Map',
    en: 'Heritage Shop — VietHeritage Map'
  },
  pageEyebrow: {
    vi: 'Cửa hàng',
    en: 'The Shop'
  },
  pageTitleMain: {
    vi: 'Di sản',
    en: 'Heritage'
  },
  pageTitleSub: {
    vi: 'mang về nhà',
    en: 'you can bring home'
  },
  pageDesc: {
    vi: 'Những sản phẩm thủ công lấy cảm hứng từ 16 di sản văn hóa phi vật thể của Việt Nam — hợp tác cùng các làng nghề truyền thống, mỗi món quà đều góp phần gìn giữ nghề.',
    en: 'Handcrafted products inspired by Vietnam\'s 16 intangible cultural heritages — partnered with traditional craft villages, every gift helps preserve the craft.'
  }
};

// ── Product categories ───────────────────────────────────────────
const SHOP_CATEGORIES = [
  {
    id: 'all',
    label: {
      vi: 'Tất cả',
      en: 'All'
    }
  },
  {
    id: 'craft',
    label: {
      vi: 'Thủ công mỹ nghệ',
      en: 'Handicrafts'
    }
  },
  {
    id: 'ceramic',
    label: {
      vi: 'Gốm sứ',
      en: 'Ceramics'
    }
  },
  {
    id: 'textile',
    label: {
      vi: 'Dệt may',
      en: 'Textiles'
    }
  },
  {
    id: 'instrument',
    label: {
      vi: 'Nhạc cụ',
      en: 'Instruments'
    }
  },
  {
    id: 'book',
    label: {
      vi: 'Sách & Ấn phẩm',
      en: 'Books & Media'
    }
  }
];

// ── Products ─────────────────────────────────────────────────────
const SHOP_PRODUCTS = [
  {
    id: 1,
    image: 'images/artifacts/1.jpg',
    category: 'craft',
    name: {
      vi: 'Trống đồng Đông Sơn thu nhỏ',
      en: 'Miniature Đông Sơn Bronze Drum'
    },
    price: 890000,
    heritage: { vi: 'Nhã nhạc cung đình Huế', en: 'Huế Royal Court Music' },
    desc: {
      vi: 'Mô phỏng trống đồng Đông Sơn, biểu tượng của nền văn minh Việt cổ. Đồng mạ thủ công, có thể dùng làm đồ trang trí.',
      en: 'A miniature replica of the Đông Sơn bronze drum, the icon of ancient Vietnamese civilization. Hand-cast bronze, perfect as a decorative piece.'
    }
  },
  {
    id: 2,
    image: 'images/artifacts/2.jpg',
    category: 'ceramic',
    name: {
      vi: 'Ấm gốm Bàu Trúc',
      en: 'Bàu Trúc Ceramic Teapot'
    },
    price: 450000,
    heritage: { vi: 'Nghệ thuật làm gốm Chăm', en: 'Cham Ceramic Art' },
    desc: {
      vi: 'Ấm trà thủ công của người Chăm tại làng Bàu Trúc (Ninh Thuận), kỹ thuật không dùng bàn xoay được UNESCO ghi danh.',
      en: 'A handmade teapot from the Cham people of Bàu Trúc village (Ninh Thuận), using the UNESCO-inscribed wheel-free technique.'
    }
  },
  {
    id: 3,
    image: 'images/artifacts/3.jpg',
    category: 'textile',
    name: {
      vi: 'Khăn quàng lụa Hội An',
      en: 'Hội An Silk Scarf'
    },
    price: 320000,
    heritage: { vi: 'Nghề thủ công truyền thống', en: 'Traditional Craft' },
    desc: {
      vi: 'Khăn lụa tơ tằm dệt tay, nhuộm màu tự nhiên từ vỏ cây — biểu trưng cho kỹ nghệ làng nghề phố cổ.',
      en: 'Hand-woven silk scarf dyed with natural bark pigments — a hallmark of the old-town craft tradition.'
    }
  },
  {
    id: 4,
    image: 'images/artifacts/4.jpg',
    category: 'instrument',
    name: {
      vi: 'Đàn đáy thu nhỏ',
      en: 'Miniature Đàn Đáy'
    },
    price: 1200000,
    heritage: { vi: 'Ca trù', en: 'Ca trù Singing' },
    desc: {
      vi: 'Mô hình đàn đáy — nhạc cụ chủ đạo của nghệ thuật Ca trù. Thân đàn tràm phủ da trăn, sơn then.',
      en: 'A model of the đàn đáy, the signature instrument of Ca trù. Melaleuca body, python-skin face, lacquered finish.'
    }
  },
  {
    id: 5,
    image: 'images/artifacts/5.jpg',
    category: 'craft',
    name: {
      vi: 'Mặt nạ tuồng sơn mài',
      en: 'Lacquered Tuồng Mask'
    },
    price: 680000,
    heritage: { vi: 'Nhã nhạc cung đình Huế', en: 'Huế Royal Court Music' },
    desc: {
      vi: 'Mặt nạ sơn mài vẽ tay tái hiện nghệ thuật hát bội, tinh xảo theo phương pháp truyền thống.',
      en: 'A hand-painted lacquer mask recreating tuồng theatre, crafted with traditional precision.'
    }
  },
  {
    id: 6,
    image: 'images/artifacts/6.jpg',
    category: 'ceramic',
    name: {
      vi: 'Lọ gốm hoa nâu Bát Tràng',
      en: 'Bát Tràng Brown Glaze Vase'
    },
    price: 520000,
    heritage: { vi: 'Nghề thủ công truyền thống', en: 'Traditional Craft' },
    desc: {
      vi: 'Lọ gốm men nâu đặc trưng của làng Bát Tràng, Hà Nội — biểu tượng gốm Việt qua nhiều thế kỷ.',
      en: 'A vase in the characteristic brown glaze of Bát Tràng village, Hanoi — the icon of Vietnamese ceramics for centuries.'
    }
  },
  {
    id: 7,
    image: 'images/artifacts/7.jpg',
    category: 'instrument',
    name: {
      vi: 'Sáo trúc Huế',
      en: 'Huế Bamboo Flute'
    },
    price: 260000,
    heritage: { vi: 'Nhã nhạc cung đình Huế', en: 'Huế Royal Court Music' },
    desc: {
      vi: 'Sáo trúc thủ công, âm sắc ấm — tái hiện tiếng sáo trong dàn nhã nhạc cung đình.',
      en: 'A handcrafted bamboo flute with a warm tone, echoing the flutes of royal court music.'
    }
  },
  {
    id: 8,
    image: 'images/artifacts/8.jpg',
    category: 'textile',
    name: {
      vi: 'Túi thổ cẩm Tây Nguyên',
      en: 'Central Highlands Brocade Bag'
    },
    price: 380000,
    heritage: { vi: 'Không gian văn hóa Cồng Chiêng', en: 'Central Highlands Gong Culture' },
    desc: {
      vi: 'Túi thổ cẩm dệt tay với họa tiết hình học của người Ê Đê — gắn liền với đời sống văn hóa Cồng Chiêng.',
      en: 'A hand-woven brocade bag with Ê Đê geometric motifs, tied to the Gong Culture way of life.'
    }
  },
  {
    id: 9,
    image: 'images/artifacts/9.jpg',
    category: 'book',
    name: {
      vi: 'Sách ảnh "Hồn Việt"',
      en: '"Hồn Việt" Photography Book'
    },
    price: 420000,
    heritage: { vi: 'Tuyển tập di sản', en: 'Heritage Collection' },
    desc: {
      vi: 'Ấn phẩm ảnh song ngữ giới thiệu 16 di sản văn hóa phi vật thể với 200 bức ảnh thực địa.',
      en: 'A bilingual photography book presenting all 16 intangible heritages through 200 field photographs.'
    }
  },
  {
    id: 10,
    image: 'images/artifacts/10.jpg',
    category: 'craft',
    name: {
      vi: 'Chuông gió gốm Chăm',
      en: 'Cham Ceramic Wind Chime'
    },
    price: 340000,
    heritage: { vi: 'Nghệ thuật làm gốm Chăm', en: 'Cham Ceramic Art' },
    desc: {
      vi: 'Chuông gió làm từ gốm thủ công, đánh bóng bằng tay theo truyền thống người Chăm.',
      en: 'A wind chime made of hand-coiled ceramic, hand-polished following the Cham tradition.'
    }
  },
  {
    id: 11,
    image: 'images/artifacts/11.jpg',
    category: 'instrument',
    name: {
      vi: 'Đàn bầu lục bình',
      en: 'Gourd Resonator Đàn Bầu'
    },
    price: 3500000,
    heritage: { vi: 'Âm nhạc truyền thống', en: 'Traditional Music' },
    desc: {
      vi: 'Đàn bầu 2 dây với bầu cộng hưởng bằng gáo dừa — âm thanh da diết đặc trưng của dân tộc Việt.',
      en: 'A monochord zither with a coconut-gourd resonator, producing the haunting tone unique to Vietnamese music.'
    }
  },
  {
    id: 12,
    image: 'images/artifacts/12.jpg',
    category: 'book',
    name: {
      vi: 'Bản đồ tay vẽ di sản',
      en: 'Hand-Drawn Heritage Map'
    },
    price: 290000,
    heritage: { vi: 'Bản đồ di sản', en: 'Heritage Map' },
    desc: {
      vi: 'Áp phích bản đồ di sản vẽ tay, in trên giấy mỹ thuật, định dạng A2 — món quà ý nghĩa cho người yêu quê hương.',
      en: 'A hand-illustrated heritage map poster on art paper, A2 format — a meaningful gift for those who love Vietnam.'
    }
  }
];

// ── Cart (localStorage-backed helpers used by shop.html) ─────────
const SHOP_CART_KEY = 'vnmt_shop_cart';

const SHOP_CART = {
  load() {
    try {
      return JSON.parse(localStorage.getItem(SHOP_CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  },
  save(cart) {
    localStorage.setItem(SHOP_CART_KEY, JSON.stringify(cart));
  },
  add(productId) {
    const cart = this.load();
    const found = cart.find((item) => item.id === productId);
    if (found) {
      found.qty += 1;
    } else {
      cart.push({ id: productId, qty: 1 });
    }
    this.save(cart);
    return cart;
  },
  setQty(productId, qty) {
    const cart = this.load();
    const found = cart.find((item) => item.id === productId);
    if (found) {
      found.qty = Math.max(0, qty);
    }
    this.save(cart);
    return cart;
  },
  remove(productId) {
    this.save(this.load().filter((item) => item.id !== productId));
    return this.load();
  },
  clear() {
    this.save([]);
    return [];
  }
};

// ── Footer CTA ───────────────────────────────────────────────────
const SHOP_FOOTER_CTA = {
  title: {
    vi: 'Mỗi món quà là<br><em>một phần di sản</em>',
    en: 'Every gift is<br><em>a piece of heritage</em>'
  },
  desc: {
    vi: 'Khi bạn chọn sản phẩm của làng nghề, bạn đang trực tiếp hỗ trợ các nghệ nhân và cộng đồng gìn giữ kỹ thuật truyền thống.',
    en: 'When you choose a craft-village product, you are directly supporting the artisans and communities preserving these traditional techniques.'
  },
  buttons: {
    map: {
      vi: 'Khám phá bản đồ',
      en: 'Explore the Map'
    },
    heritage: {
      vi: 'Xem kho di sản',
      en: 'Browse Heritage'
    }
  }
};

// ── Navigation labels (shared with other pages) ──────────────────
const SHOP_NAV_LABELS = {
  vi: {
    home: 'Trang chủ',
    book: 'Đặt tour',
    fest: 'Lễ hội',
    journey: 'Hành trình Bảo vật',
    db: 'Kho lưu trữ',
    about: 'Giới thiệu',
    lunar: 'Lịch Âm',
    shop: 'Cửa hàng',
  },
  en: {
    home: 'Home',
    book: 'Book a Trip',
    fest: 'Festivals',
    journey: 'Treasure Journey',
    db: 'Archive',
    about: 'About',
    lunar: 'Lunar Calendar',
    shop: 'Shop',
  }
};

// ── Export all content as a single object ────────────────────────
const SHOP_CONTENT = {
  meta: SHOP_META,
  categories: SHOP_CATEGORIES,
  products: SHOP_PRODUCTS,
  footerCta: SHOP_FOOTER_CTA,
  nav: SHOP_NAV_LABELS
};

// Make available globally for shop.html
window.SHOP_CONTENT = SHOP_CONTENT;
