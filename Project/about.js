/* ═══════════════════════════════════════
   ABOUT PAGE CONTENT DATA
   Structured for easy maintenance and bilingual support
   Updated to reflect the actual current codebase (2026)
═══════════════════════════════════════ */

// ── Page-level meta ──────────────────────────────────────────────
const ABOUT_META = {
  title: {
    vi: 'Giới thiệu — LimitlessX · VietHeritage',
    en: 'About — LimitlessX · VietHeritage'
  },
  pageEyebrow: {
    vi: 'Về dự án',
    en: 'About the Project'
  },
  pageTitleMain: {
    vi: 'LimitlessX · VietHeritage',
    en: 'LimitlessX · VietHeritage'
  },
  pageTitleSub: {
    vi: 'Kết nối di sản — Khởi dậy tương lai',
    en: 'Connecting Heritage — Inspiring the Future'
  },
  pageDesc: {
    vi: 'Một bảo tàng số tích hợp trí tuệ nhân tạo lưu trữ 16 di sản văn hóa phi vật thể và 39 bảo vật quốc gia Việt Nam — nơi di sản gặp gỡ công nghệ.',
    en: 'An AI-powered digital museum archiving 16 intangible cultural heritages and 39 national treasures of Vietnam — where heritage meets technology.'
  }
};

// ── Intro section ────────────────────────────────────────────────
const INTRO_CONTENT = {
  heading: {
    vi: 'LimitlessX · VietHeritage không chỉ là một trang web - đây là <strong class="highlight">bảo tàng số tích hợp AI</strong> lưu trữ và phục dựng các di sản văn hóa phi vật thể được UNESCO ghi danh cùng bảo vật quốc gia của Việt Nam, trải dài khắp các vùng miền từ Bắc vào Nam.',
    en: 'LimitlessX · VietHeritage is not just a website - it is an <strong class="highlight">AI-powered digital museum</strong> archiving and reviving UNESCO-inscribed intangible cultural heritages and national treasures across Vietnam.'
  },
  paragraph: {
    vi: 'Từ những làn điệu <strong>Quan họ Bắc Ninh đối đáp</strong> đến tiếng <strong>Hò Nghệ Tĩnh</strong> mộc mạc hay nhịp <strong>Cồng chiêng Tây Nguyên</strong> vang vọng, hành trình này kết nối cộng đồng thông qua 5 thể loại cốt lõi (Nhạc cụ, Hát dân ca, Tín ngưỡng, Lễ hội và Nghề thủ công). Dự án được phát triển với ba sứ mệnh:',
    en: 'From the responsive harmonies of <strong>Bắc Ninh Quan họ singing</strong> to the rustic cadence of <strong>Nghệ Tĩnh Hò work songs</strong> and the resonance of <strong>Central Highlands Gongs</strong>, this journey connects communities across 5 core genres (Instrumental, Singing, Belief, Festival, and Craft). The project is built around three missions:'
  },
  missions: [
    {
      icon: 'archive',
      title: {
        vi: 'Hệ thống hóa dữ liệu',
        en: 'Systematic Archiving'
      },
      desc: {
        vi: 'Tập trung dữ liệu di sản, bảo vật và lễ hội lên một giao diện bản đồ tương tác trực quan, dễ dàng lọc theo thể loại, trạng thái UNESCO hay vùng miền.',
        en: 'Centralize heritage, treasure and festival data into an intuitive interactive map interface with filtering by genre, UNESCO status or region.'
      }
    },
    {
      icon: 'bot',
      title: {
        vi: 'Trợ lý AI du lịch di sản',
        en: 'Heritage Travel AI Assistant'
      },
      desc: {
        vi: 'Tour AI gợi ý lộ trình di sản theo ngân sách, thời gian, vùng miền và sở thích; chatbot cục bộ gợi ý điểm đến và lễ hội phù hợp theo ngày đi.',
        en: 'Tour AI suggests heritage itineraries by budget, duration, region and interests; a local chatbot recommends matching sites and festivals by travel date.'
      }
    },
    {
      icon: 'map',
      title: {
        vi: 'Kết nối & Khám phá',
        en: 'Connect & Explore'
      },
      desc: {
        vi: 'Từ bản đồ tương tác, kho lưu trữ, lịch lễ hội đến đặt tour — mọi công cụ đều hướng đến việc đưa di sản đến gần hơn với người dùng.',
        en: 'From the interactive map, archive, festival calendar to tour booking — every tool brings heritage closer to the user.'
      }
    }
  ]
};

// ── Values section ───────────────────────────────────────────────
const VALUES = [
  {
    icon: 'heart-handshake',
    title: {
      vi: 'Tôn trọng nghệ nhân & Cộng đồng',
      en: 'Respecting Artisans & Community'
    },
    desc: {
      vi: 'Dữ liệu và thông tin di sản được tham chiếu từ cộng đồng nghệ nhân, trưởng lão và các nhà nghiên cứu nhằm bảo vệ bản quyền di sản.',
      en: 'Heritage data and information are referenced from local artisans, elders and researchers to preserve heritage ownership.'
    }
  },
  {
    icon: 'shield-check',
    title: {
      vi: 'Chính xác & Tránh bịa đặt',
      en: 'Accuracy & Non-Hallucination'
    },
    desc: {
      vi: 'AI gợi ý lộ trình dựa trên dữ liệu di sản và lễ hội có sẵn, ưu tiên các mục đã được UNESCO ghi danh, hạn chế thông tin bịa đặt.',
      en: 'The AI suggests itineraries grounded in existing heritage and festival data, prioritizing UNESCO-inscribed entries to avoid hallucination.'
    }
  },
  {
    icon: 'globe',
    title: {
      vi: 'Mã nguồn mở & Bền vững',
      en: 'Open Source & Sustainable'
    },
    desc: {
      vi: 'Phát triển dựa trên cấu trúc mã nguồn mở, dữ liệu địa lý GeoJSON mở (vn_geo.json) phục vụ cộng đồng nghiên cứu và giảng dạy lâu dài.',
      en: 'Built on an open-source architecture with open GeoJSON geographical data (vn_geo.json) for long-term research and education.'
    }
  }
];

// ── Features section ─────────────────────────────────────────────
const FEATURES = [
  {
    icon: 'map',
    title: {
      vi: 'Bản đồ di sản tương tác',
      en: 'Interactive Heritage Map'
    },
    desc: {
      vi: 'Bản đồ Leaflet với MarkerCluster, lọc điểm theo thể loại, trạng thái UNESCO, vùng miền; biểu đồ thống kê theo tỉnh và nền bản đồ chuyển đổi (CartoDB/OSM).',
      en: 'Leaflet map with MarkerCluster, filtered by genre, UNESCO status and region; provincial statistics charts and switchable tiles (CartoDB/OSM).'
    }
  },
  {
    icon: 'download',
    title: {
      vi: 'Kho lưu trữ di sản & bảo vật',
      en: 'Heritage & Treasure Archive'
    },
    desc: {
      vi: 'Kho lưu trữ song ngữ gồm 16 di sản phi vật thể và 39 bảo vật quốc gia, kèm chi tiết, hình ảnh, âm thanh và mô hình 3D.',
      en: 'A bilingual archive of 16 intangible heritages and 39 national treasures with details, images, audio and 3D models.'
    }
  },
  {
    icon: 'music',
    title: {
      vi: 'Âm thanh & Thu âm giọng hát',
      en: 'Audio & Vocal Recording'
    },
    desc: {
      vi: 'Trình phát âm thanh tích hợp, thu âm giọng hát của người dùng và phân tích so sánh với mẫu tham chiếu bằng Web Audio API.',
      en: 'Built-in audio players, on-page voice recording, and comparison analysis against reference samples using the Web Audio API.'
    }
  },
  {
    icon: 'box',
    title: {
      vi: 'Xem 3D Bảo vật',
      en: '3D Artifact Viewer'
    },
    desc: {
      vi: 'Xem trực quan mô hình 3D các hiện vật như Chùa Một Cột bằng trình xem native (Three.js / Collada) ngay trên trang.',
      en: 'View 3D artifact models on-page, such as the One Pillar Pagoda, using a native viewer (Three.js / Collada).'
    }
  },
  {
    icon: 'sparkles',
    title: {
      vi: 'Tour AI & Lên kế hoạch lộ trình',
      en: 'Tour AI & Route Planning'
    },
    desc: {
      vi: 'Tour AI trò chuyện để lên lịch trình di sản theo ngân sách và thời gian, tạo plan kèm bản đồ lộ trình, đặt tour và chia sẻ chuyến đi.',
      en: 'Tour AI chats to plan heritage itineraries by budget and duration, generating a plan with map route, booking and trip sharing.'
    }
  },
  {
    icon: 'bot',
    title: {
      vi: 'Trợ lý du lịch di sản',
      en: 'Heritage Travel Assistant'
    },
    desc: {
      vi: 'Chatbot cục bộ gợi ý điểm đến và lễ hội theo vùng miền, tháng và sở thích; có fallback gọi API backend khi trực tuyến.',
      en: 'A local chatbot suggesting sites and festivals by region, month and interests, with a backend API fallback when online.'
    }
  }
];

// ── Team / Credits ───────────────────────────────────────────────
const TEAM = [
  {
    initials: 'P1',
    name: {
      vi: 'Kiến trúc & Backend',
      en: 'Architecture & Backend'
    },
    role: {
      vi: 'FastAPI, SQLAlchemy 2.0 (async), SQLite/aiosqlite, Docker',
      en: 'FastAPI, SQLAlchemy 2.0 (async), SQLite/aiosqlite, Docker'
    },
    desc: {
      vi: 'Xây dựng API, quản lý cơ sở dữ liệu, thiết lập hệ thống chat AI và trip planner, đồng thời điều phối quá trình Docker triển khai lên Render.',
      en: 'Built APIs, managed the database, set up the AI chat and trip planner systems, and handled Docker deployment to Render.'
    }
  },
  {
    initials: 'P2',
    name: {
      vi: 'Frontend & Bản đồ di sản',
      en: 'Frontend & Interactive Map'
    },
    role: {
      vi: 'Vanilla JS, HTML/CSS, Leaflet, MarkerCluster, CartoDB/OSM',
      en: 'Vanilla JS, HTML/CSS, Leaflet, MarkerCluster, CartoDB/OSM'
    },
    desc: {
      vi: 'Phát triển bản đồ tương tác, bộ lọc di sản, trình phát âm thanh và các trình xem 3D responsive trên di động.',
      en: 'Developed the interactive map, heritage filters, audio players, and responsive 3D viewers for mobile devices.'
    }
  },
  {
    initials: 'P3',
    name: {
      vi: 'Giao diện AI & Tiếp cận',
      en: 'AI UI & Accessibility'
    },
    role: {
      vi: 'Chat UI, i18n song ngữ, Demo mode',
      en: 'Chat UI, bilingual i18n, Demo mode'
    },
    desc: {
      vi: 'Xây dựng giao diện trò chuyện Tour AI đa ngôn ngữ, chế độ demo khi backend không khả dụng, và tối ưu hóa khả năng tiếp cận web cơ bản.',
      en: 'Created the multilingual Tour AI chat interface, a demo mode when the backend is unreachable, and optimized baseline web accessibility.'
    }
  },
  {
    initials: 'P4',
    name: {
      vi: 'Dữ liệu & Hệ thống gợi ý',
      en: 'Data & Suggestion System'
    },
    role: {
      vi: 'Dữ liệu di sản, Trip planner, Festival calendar',
      en: 'Heritage data, Trip planner, Festival calendar'
    },
    desc: {
      vi: 'Chuẩn bị dữ liệu 16 di sản, 39 bảo vật và lễ hội; xây dựng thuật toán gợi ý lộ trình dựa trên vùng miền, tháng và sở thích.',
      en: 'Prepared data for 16 heritages, 39 treasures and festivals; built the itinerary suggestion algorithm based on region, month and interests.'
    }
  },
  {
    initials: 'P5',
    name: {
      vi: 'Hạ tầng AI & Triển khai',
      en: 'AI Infrastructure & Deployment'
    },
    role: {
      vi: 'Gemini proxy, Render, Docker',
      en: 'Gemini proxy, Render, Docker'
    },
    desc: {
      vi: 'Tích hợp Google Gemini phía backend (giữ API key an toàn server-side), cấu hình triển khai Render và Docker để phục vụ cả API lẫn frontend tĩnh.',
      en: 'Integrated Google Gemini server-side (keeping the API key safe on the server), and configured Render and Docker deployment to serve both API and static frontend.'
    }
  }
];

// ── Data Sources ─────────────────────────────────────────────────
const DATA_SOURCES = [
  {
    icon: 'unesco',
    title: {
      vi: 'Hồ sơ đại diện UNESCO',
      en: 'UNESCO Representative Archives'
    },
    desc: {
      vi: 'Các văn bản, mô tả và năm ghi danh chính thức của 16 di sản văn hóa phi vật thể của Việt Nam thuộc danh mục của UNESCO.',
      en: 'Official documents, descriptors, and inscription years of Vietnam\'s 16 intangible cultural heritages registered by UNESCO.'
    }
  },
  {
    icon: 'government',
    title: {
      vi: 'Quyết định công nhận của Thủ tướng Chính phủ',
      en: 'Prime Ministerial Decisions'
    },
    desc: {
      vi: 'Danh mục 39 bảo vật quốc gia được công nhận theo quyết định của Thủ tướng Chính phủ Việt Nam.',
      en: 'The catalog of 39 national treasures formally designated by the Prime Minister of Vietnam.'
    }
  },
  {
    icon: 'university',
    title: {
      vi: 'Tài liệu từ các Viện Nghiên cứu & Bảo tàng',
      en: 'Institute & Museum Documentation'
    },
    desc: {
      vi: 'Bản ghi âm, hình ảnh tư liệu về bảo vật và di sản từ các viện nghiên cứu, bảo tàng và cộng đồng nghệ nhân.',
      en: 'Audio recordings and visual documents on treasures and heritage from research institutes, museums and artisan communities.'
    }
  },
  {
    icon: 'map',
    title: {
      vi: 'OpenStreetMap & CartoDB',
      en: 'OpenStreetMap & CartoDB'
    },
    desc: {
      vi: 'Dữ liệu địa lý phục vụ việc định vị tọa độ chính xác và ranh giới tỉnh thành (vn_geo.json) trên bản đồ nền.',
      en: 'Geographical data providing accurate coordinates and province boundaries (vn_geo.json) on the base map.'
    }
  }
];

// ── Footer CTA ───────────────────────────────────────────────────
const FOOTER_CTA = {
  title: {
    vi: 'Bắt đầu hành trình khám phá di sản<br><em>Khám phá bản đồ tương tác ngay.</em>',
    en: 'Begin Your Heritage Journey<br><em>Explore the interactive map now.</em>'
  },
  desc: {
    vi: 'Dù bạn là một nhà nghiên cứu, một học sinh hay một người yêu mến di sản và âm nhạc truyền thống, LimitlessX · VietHeritage cung cấp không gian mở để kết nối và học hỏi.',
    en: 'Whether you are a researcher, a student, or an enthusiast of heritage and traditional music, LimitlessX · VietHeritage offers an open space to connect and learn.'
  },
  buttons: {
    map: {
      vi: 'Khám phá bản đồ',
      en: 'Explore Map'
    },
    database: {
      vi: 'Xem kho lưu trữ',
      en: 'Browse Archive'
    }
  }
};

// ── Navigation labels (shared with other pages) ──────────────────
 const NAV_LABELS = {
   vi: {
     home: 'Trang chủ',
     book: 'Đặt tour',
     fest: 'Lễ hội',
     journey: 'Hành trình Bảo vật',
     map: 'Bản đồ di sản',
     db: 'Kho lưu trữ',
     about: 'Giới thiệu',
     lunar: 'Lịch Âm',
     shop: 'Cửa hàng',
     aiBtn: 'Tour AI',
   },
   en: {
     home: 'Home',
     book: 'Book a Trip',
     fest: 'Festivals',
     journey: 'Treasure Journey',
     map: 'Heritage Map',
     db: 'Archive',
     about: 'About',
     lunar: 'Lunar Calendar',
     shop: 'Shop',
     aiBtn: 'Tour AI',
   }
 };

// ── Export all content as a single object ────────────────────────
const ABOUT_CONTENT = {
  meta: ABOUT_META,
  intro: INTRO_CONTENT,
  values: VALUES,
  features: FEATURES,
  team: TEAM,
  sources: DATA_SOURCES,
  footerCta: FOOTER_CTA,
  nav: NAV_LABELS
};

// Make available globally for about.html
window.ABOUT_CONTENT = ABOUT_CONTENT;