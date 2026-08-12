/* ═══════════════════════════════════════
   ABOUT PAGE CONTENT DATA
   Structured for easy maintenance and bilingual support
═══════════════════════════════════════ */

// ── Page-level meta ──────────────────────────────────────────────
const ABOUT_META = {
  title: {
    vi: 'Giới thiệu — AegisAI · VietHeritage',
    en: 'About — AegisAI · VietHeritage'
  },
  pageEyebrow: {
    vi: 'Về dự án',
    en: 'About the Project'
  },
  pageTitleMain: {
    vi: 'AegisAI · VietHeritage',
    en: 'AegisAI · VietHeritage'
  },
  pageTitleSub: {
    vi: 'Kết nối di sản — Khởi dậy tương lai',
    en: 'Connecting Heritage — Inspiring the Future'
  },
  pageDesc: {
    vi: 'Một bảo tàng số tích hợp trí tuệ nhân tạo lưu trữ 17 di sản văn hóa phi vật thể và 357 bảo vật quốc gia Việt Nam — nơi di sản gặp gỡ công nghệ.',
    en: 'An AI-powered digital museum archiving 17 intangible cultural heritages and 357 national treasures of Vietnam — where heritage meets technology.'
  }
};

// ── Intro section ────────────────────────────────────────────────
const INTRO_CONTENT = {
  heading: {
    vi: 'AegisAI · VietHeritage không chỉ là một trang web - đây là <strong class="highlight">bảo tàng số tích hợp AI</strong> lưu trữ và phục dựng 16 di sản văn hóa phi vật thể được UNESCO ghi danh trải dài trên 27 tỉnh thành của Việt Nam.',
    en: 'AegisAI · VietHeritage is not just a website - it is an <strong class="highlight">AI-powered digital museum</strong> archiving and reviving 16 intangible cultural heritages inscribed by UNESCO spanning 27 provinces across Vietnam.'
  },
  paragraph: {
    vi: 'Từ những làn điệu <strong>Quan họ Bắc Ninh đối đáp</strong> đến tiếng <strong>Hò Nghệ Tĩnh</strong> mộc mạc hay nhịp <strong>Cồng chiêng Tây Nguyên</strong> vang vọng, hành trình này kết nối cộng đồng thông qua 5 thể loại cốt lõi (Âm nhạc, Hát dân ca, Tín ngưỡng, Lễ hội và Nghề thủ công). Dự án được phát triển với ba sứ mệnh:',
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
        vi: 'Tập trung các nguồn tư liệu thực địa, âm thanh gốc và thông tin học thuật của 16 di sản phi vật thể lên một giao diện tương tác trực quan.',
        en: 'Centralize field data, original audio recordings, and academic research of 16 intangible heritages into an intuitive interactive interface.'
      }
    },
    {
      icon: 'mic',
      title: {
        vi: 'Trải nghiệm tương tác AI',
        en: 'AI-Powered Interaction'
      },
      desc: {
        vi: 'Ứng dụng mô hình nhận diện giọng nói và thuật toán so sánh cao độ (pitch-contour) để hỗ trợ người dùng luyện giọng và chấm điểm hát dân ca trực tiếp.',
        en: 'Utilize speech transcription models and pitch-contour algorithms to help users practice traditional singing and receive instant performance feedback.'
      }
    },
    {
      icon: 'bot',
      title: {
        vi: 'Bảo tồn thực tế & Minh bạch',
        en: 'Factuality & Preservation'
      },
      desc: {
        vi: 'Sử dụng công nghệ RAG-lite định hướng dữ liệu thực tế nhằm mang lại câu trả lời chính xác, trích dẫn rõ nguồn gốc và nói "Tôi không biết" thay vì tự tạo thông tin.',
        en: 'Implement factual RAG-lite architecture to provide accurate, cited answers, ensuring the AI declines to answer rather than creating hallucinations.'
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
      vi: 'Dữ liệu âm thanh, tư liệu thực địa được tham chiếu từ cộng đồng nghệ nhân, trưởng lão và các nhà nghiên cứu địa phương nhằm bảo vệ bản quyền di sản.',
      en: 'Audio recordings and field materials are sourced with credit to local artisans, elders, and researchers to protect heritage ownership.'
    }
  },
  {
    icon: 'shield-check',
    title: {
      vi: 'Chính xác & Tránh bịa đặt',
      en: 'Accuracy & Non-Hallucination'
    },
    desc: {
      vi: 'Hệ thống AI chỉ truy xuất thông tin từ tài liệu chuẩn hóa. Phân biệt rõ ràng giữa tư liệu lịch sử, báo cáo học thuật và truyền thuyết dân gian.',
      en: 'The AI queries only validated reference data. It maintains a clear distinction between historical facts, academic reports, and folklore.'
    }
  },
  {
    icon: 'globe',
    title: {
      vi: 'Mã nguồn mở & Bền vững',
      en: 'Open Source & Sustainable'
    },
    desc: {
      vi: 'Phát triển dựa trên cấu trúc mã nguồn mở, hỗ trợ xuất dữ liệu mở (CSV/GeoJSON) cho cộng đồng nghiên cứu và giảng dạy lâu dài.',
      en: 'Developed on an open-source framework, allowing CSV/GeoJSON data export for academic research and educational use.'
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
      vi: 'Tìm kiếm và lọc điểm di sản theo thể loại hoặc trạng thái UNESCO, đi kèm biểu đồ thống kê theo tỉnh thành.',
      en: 'Search and filter by genre or UNESCO status, complete with provincial distribution charts.'
    }
  },
  {
    icon: 'bot',
    title: {
      vi: 'Trợ lý AI Bảo tàng & Nhân vật',
      en: 'Museum AI & Personas'
    },
    desc: {
      vi: 'Chatbot hỗ trợ giọng nói trả lời có nguồn trích dẫn dựa trên dữ liệu RAG-lite. Người dùng có thể trò chuyện trực tiếp với các nghệ nhân ảo theo từng di sản.',
      en: 'Voice-enabled chatbot delivering cited answers via RAG-lite. Users can also converse directly with specialized virtual artisan personas.'
    }
  },
  {
    icon: 'music',
    title: {
      vi: 'Luyện tập & Chấm điểm giọng ca',
      en: 'Vocal Practice & Grading'
    },
    desc: {
      vi: 'Người dùng thu âm giọng hát để AI đối sánh đường nét cao độ (pitch-contour pyin) với mẫu gốc, trả về điểm số tương đồng cùng nhận xét kỹ thuật.',
      en: 'Users record their voice for the AI to analyze pitch-contour similarity against master reference clips, returning feedback and scores.'
    }
  },
  {
    icon: 'music',
    title: {
      vi: 'Phân tích âm thanh di sản',
      en: 'Heritage Sound Analyzer'
    },
    desc: {
      vi: 'Hỗ trợ tải tệp âm thanh lên để trích xuất đặc trưng MFCC, phát hiện hoạt động giọng hát (VAD) và phân tích đối chiếu với kho âm thanh mẫu.',
      en: 'Supports audio file uploads to extract MFCC features, detect vocal activity (VAD), and run comparisons with the reference sound database.'
    }
  },
  
  {
    icon: 'download',
    title: {
      vi: 'Xuất dữ liệu mở (Open Data)',
      en: 'Open Data Export'
    },
    desc: {
      vi: 'Tải về tệp CSV hoặc GeoJSON chứa thông tin tọa độ, thể loại, mô tả song ngữ của toàn bộ danh mục di sản để nghiên cứu phi thương mại.',
      en: 'Download CSV or GeoJSON files containing coordinates, genres, and bilingual metadata of the heritage catalog for non-commercial research.'
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
      vi: 'FastAPI, Postgres (pgvector), SQLite-vec, Docker',
      en: 'FastAPI, Postgres (pgvector), SQLite-vec, Docker'
    },
    desc: {
      vi: 'Xây dựng API, quản lý cơ sở dữ liệu vector lưu trữ embeddings, cấu hình hệ thống RAG-lite và điều phối quá trình Docker triển khai lên Render.',
      en: 'Built backend APIs, managed vector databases for embeddings, configured the RAG-lite pipeline, and handled Docker deployment to Render.'
    }
  },
  {
    initials: 'P2',
    name: {
      vi: 'Frontend & Bản đồ di sản',
      en: 'Frontend & Interactive Map'
    },
    role: {
      vi: 'React, TypeScript, Leaflet, Audio Waveform',
      en: 'React, TypeScript, Leaflet, Audio Waveform'
    },
    desc: {
      vi: 'Phát triển giao diện bản đồ, bộ lọc di sản, trình phát âm thanh dạng sóng (waveform) và tích hợp các cấu trúc xem 3D responsive trên di động.',
      en: 'Developed map UI, heritage filters, waveform audio players, and integrated responsive 3D viewers for mobile devices.'
    }
  },
  {
    initials: 'P3',
    name: {
      vi: 'Giao diện AI & Tiếp cận',
      en: 'AI UI & Accessibility'
    },
    role: {
      vi: 'Chat UI, Voice Transcription Input, i18n',
      en: 'Chat UI, Voice Transcription Input, i18n'
    },
    desc: {
      vi: 'Xây dựng giao diện trò chuyện đa ngôn ngữ, tích hợp Whisper thu âm giọng nói và tối ưu hóa khả năng tiếp cận chuẩn web cơ bản.',
      en: 'Created the multilingual chat interfaces, integrated Whisper voice input, and optimized baseline web accessibility.'
    }
  },
  {
    initials: 'P4',
    name: {
      vi: 'Xử lý tín hiệu & Giải thuật DSP',
      en: 'Signal Processing & DSP algorithms'
    },
    role: {
      vi: 'Librosa pyin, MFCC, Pitch Contour, Grading API',
      en: 'Librosa pyin, MFCC, Pitch Contour, Grading API'
    },
    desc: {
      vi: 'Xây dựng thuật toán so sánh tín hiệu âm thanh thu âm với mẫu chuẩn bằng việc phân tích cao độ và tính toán khoảng cách MFCC.',
      en: 'Designed algorithms to evaluate and compare recorded vocal clips against master references using pitch tracking and MFCC vectors.'
    }
  },
  {
    initials: 'P5',
    name: {
      vi: 'Dữ liệu di sản & Thiết kế gợi ý',
      en: 'Heritage Data & Prompt Engineering'
    },
    role: {
      vi: 'Seed data ingestion, Knowledge chunking, Prompt tuning',
      en: 'Seed data ingestion, Knowledge chunking, Prompt tuning'
    },
    desc: {
      vi: 'Chuẩn bị dữ liệu 16 di sản, phân vùng văn bản (chunking) từ các tài liệu chuẩn, thiết kế hệ thống prompt hạn chế hallucination cho chatbot.',
      en: 'Prepared data for the 16 heritages, segmented texts into standard knowledge chunks, and optimized system prompts to avoid AI hallucinations.'
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
      vi: 'Danh mục di sản văn hóa phi vật thể được Bộ Văn hóa, Thể thao và Du lịch ghi danh cấp quốc gia.',
      en: 'The catalog of intangible heritages formally designated at the national level by the MOCST.'
    }
  },
  {
    icon: 'university',
    title: {
      vi: 'Tài liệu từ các Viện Nghiên cứu & Bảo tàng',
      en: 'Institute & Museum Documentation'
    },
    desc: {
      vi: 'Bản ghi âm, hình ảnh tư liệu từ Viện Âm nhạc Việt Nam, Viện Văn hóa Nghệ thuật Quốc gia (VICAS) và các bảo tàng khảo cổ học.',
      en: 'Audio recordings and visual documents from the Vietnam Institute of Musicology, VICAS, and archaeological museums.'
    }
  },
  {
    icon: 'map',
    title: {
      vi: 'OpenStreetMap & CartoDB',
      en: 'OpenStreetMap & CartoDB'
    },
    desc: {
      vi: 'Dữ liệu địa lý phục vụ việc định vị tọa độ địa lý chính xác vùng di sản liên quan trên bản đồ nền.',
      en: 'Geographical data providing accurate coordinates for the heritage zones on the base map.'
    }
  }
];

// ── Footer CTA ───────────────────────────────────────────────────
const FOOTER_CTA = {
  title: {
    vi: 'Bắt đầu hành trình khám phá di sản<br><em>Tìm hiểu 16 di sản phi vật thể.</em>',
    en: 'Begin Your Heritage Journey<br><em>Explore 16 intangible heritages.</em>'
  },
  desc: {
    vi: 'Dù bạn là một nhà nghiên cứu, một học sinh hay một người yêu mến âm nhạc truyền thống, AegisAI · VietHeritage cung cấp không gian mở để kết nối và học hỏi.',
    en: 'Whether you are a researcher, a student, or an enthusiast of traditional music, AegisAI · VietHeritage offers an open space to connect and learn.'
  },
  buttons: {
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
    map: 'Bản đồ di sản',
    db: 'Kho lưu trữ',
    about: 'Giới thiệu',
  },
  en: {
    home: 'Home',
    map: 'Heritage Map',
    db: 'Archive',
    about: 'About',
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