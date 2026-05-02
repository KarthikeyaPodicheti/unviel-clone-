export interface Project {
  title: string;
  slug: string;
  year: string;
  tags: string[];
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
}

export interface StudioContent {
  description: string;
  clients: string[];
  image: string;
}

export interface ContactInfo {
  email: string;
  instagram: string;
  instagramUrl: string;
  address: string;
  addressUrl: string;
}

export const contactInfo: ContactInfo = {
  email: "contact@unveil.fr",
  instagram: "Instagram",
  instagramUrl: "https://instagram.com/byunveil/",
  address: "25 Rue Henry Monnier, 75009 Paris",
  addressUrl: "https://maps.app.goo.gl/yvLUoqpnDYZmS8x56",
};

export const studioContent: StudioContent = {
  description:
    "UNVEIL\u00AE is a creative studio using artificial intelligence to expand human creativity. The eye represents our most essential tool in a world overwhelmed with visual stimuli. We collaborate across diverse industries and cultural landscapes reflecting our belief that variety drives our creative process. Each project at UNVEIL\u00AE is backed by thorough research, ensuring that our creative decisions are deliberate and meaningful. No project is too small for us, we see each one as an opportunity to express ourselves. We love what we do.",
  clients: [
    "BALENCIAGA",
    "BOILER ROOM",
    "BYREDO",
    "COTY",
    "DRIES VAN NOTEN",
    "HELIOT EMIL",
    "ISABEL MARANT",
    "LVMH GA\u00CFA",
    "MO\u00CBT & CHANDON",
    "NODALETO",
    "PUMA",
    "RED STAR FC",
    "SALOMON",
    "SILENCIO",
    "WARP RECORDS",
  ],
  image: "https://unveil.fr/UNVEIL_STUDIO_3072x3072.png",
};

// All 35 projects with real DatoCMS thumbnail URLs from unveil.fr/__data.json
export const projects: Project[] = [
  {
    title: "UNVEIL\u00AE MEETING TABLE",
    slug: "unveil-meeting-table",
    year: "2026",
    tags: ["AI", "FURNITURE DESIGN", "CAMPAIGN"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1776879940-unveil_meeting_table_1.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 2160,
    thumbnailHeight: 2700,
  },
  {
    title: "BALENCIAGA S26",
    slug: "balenciaga-s26",
    year: "2026",
    tags: ["AI", "SOCIAL CONTENT"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1776256169-unveil_balenciaga_s26_0.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1920,
  },
  {
    title: "NODALETO ::: PRE-SPRING 26",
    slug: "nodaleto-pre-spring-26",
    year: "2026",
    tags: ["AI", "STILLS", "CAMPAIGN"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1776704797-unveil_nodaleto_1.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 2160,
    thumbnailHeight: 2700,
  },
  {
    title: "SALOMON",
    slug: "salomon-shaping-new-futures",
    year: "2026",
    tags: ["AI", "CAMPAIGN", "FILM"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1770049660-17.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1920,
    thumbnailHeight: 1080,
  },
  {
    title: "COHL",
    slug: "cohl",
    year: "2026",
    tags: ["GRAPHIC IDENTITY"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1772304391-unveil_cohl_1.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "UNFIXED",
    slug: "unfixed",
    year: "2026",
    tags: ["AI", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1768845806-unveil_unfixed_16.jpg?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1856,
    thumbnailHeight: 2464,
  },
  {
    title: "DRIFT X SCHOTT NYC",
    slug: "drift-x-schott-nyc",
    year: "2026",
    tags: ["AI", "CAMPAIGN", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1769701173-unveil_driftxschott_1.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "444 X UNVEIL\u00AE",
    slug: "444-x-unveil",
    year: "2025",
    tags: ["AI", "BOOK DESIGN", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1766496500-unveil_444_img_1.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1848,
    thumbnailHeight: 2464,
  },
  {
    title: "DRIES VAN NOTEN BEAUTY",
    slug: "dries-van-noten-beauty",
    year: "2025",
    tags: ["AI", "ADVERTISING", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1763563584-unveil_dvn_img_4.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "ONEOHTRIX POINT NEVER",
    slug: "oneohtrix-point-never",
    year: "2025",
    tags: ["AI", "MUSIC VIDEO"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1763571360-unveil_opn_still_2.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1920,
    thumbnailHeight: 1080,
  },
  {
    title: "BYREDO",
    slug: "byredo",
    year: "2025",
    tags: ["AI", "STILLS", "ADVERTISING"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1764338011-unveil_byredo_single_2.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "HELIOT EMIL ::: AW25",
    slug: "heliot-emil-eigengrau",
    year: "2025",
    tags: ["AI", "CAMPAIGN", "SOCIAL CONTENT", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1758552274-he_eigengrau_02.webp?dpr=1&fit=max&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "NOT THE DAY, NOR THE HOUR",
    slug: "not-the-day-nor-the-hour",
    year: "2025",
    tags: ["AI", "SHORT FILM"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1749647181-still2.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1920,
    thumbnailHeight: 1080,
  },
  {
    title: "DRIFT ::: IMAGES",
    slug: "drift-images",
    year: "2025",
    tags: ["AI", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1753438581-unveil_drift_img_5.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "DRIFT ::: AT THE PARTY",
    slug: "drift-at-the-party",
    year: "2025",
    tags: ["AI", "MUSIC VIDEO"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1749648344-drift2.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1920,
    thumbnailHeight: 1080,
  },
  {
    title: "ANTHONY CALYDON",
    slug: "anthony-calydon",
    year: "2025",
    tags: ["AI", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1742420323-unveil_ac_7.jpg?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "PUMA X HELIOT EMIL",
    slug: "puma-x-heliot-emil",
    year: "2025",
    tags: ["AI", "CAMPAIGN", "FILM", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1757082212-he_puma_campaign_1x.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "NEO",
    slug: "neo",
    year: "2025",
    tags: ["AI", "STILLS", "SOCIAL CONTENT"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1763662479-unveil_neo_5.jpeg?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "ELIAS R\u00D8NNENFELT",
    slug: "elias-ronnenfelt-mona-lisa",
    year: "2025",
    tags: ["AI", "MUSIC VIDEO"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1763565270-unveil_monalisa_1_t.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1920,
    thumbnailHeight: 1080,
  },
  {
    title: "LCD",
    slug: "lcd",
    year: "2025",
    tags: ["AI", "CAMPAIGN", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1749648070-lcd_01.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "WINDSWEPT",
    slug: "windswept",
    year: "2025",
    tags: ["AI", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1763744592-unveil_windswept_9.jpg?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "COMPOSITES",
    slug: "composites",
    year: "2025",
    tags: ["AI", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1742434094-unveil_composites_4.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "CURSED",
    slug: "cursed",
    year: "2025",
    tags: ["AI", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1753893561-unveil_cursed_11.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "NTO ::: CIRRUS",
    slug: "nto-cirrus",
    year: "2025",
    tags: ["AI", "MUSIC VIDEO"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1742429964-unveil_nto_2.jpg?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1920,
    thumbnailHeight: 1080,
  },
  {
    title: "NTO ::: STRATUS",
    slug: "nto-stratus",
    year: "2025",
    tags: ["AI", "MUSIC VIDEO"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1742430493-unveil_nto_9.jpg?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1920,
    thumbnailHeight: 1080,
  },
  {
    title: "SPELLS",
    slug: "spells",
    year: "2025",
    tags: ["AI", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1760709828-spells_1.webp?dpr=1&fit=max&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "MEMORIES",
    slug: "memories",
    year: "2024",
    tags: ["AI", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1714828861-unveil_memories_09.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "SO MUCH FOR A PIECE OF BLUE SKY",
    slug: "so-much-for-a-piece-of-blue-sky",
    year: "2024",
    tags: ["AI", "SHORT FILM"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1742436127-unveil_somuch_4.jpg?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1920,
    thumbnailHeight: 1080,
  },
  {
    title: "NOVA CARBON",
    slug: "nova-carbon",
    year: "2024",
    tags: ["GRAPHIC IDENTITY", "AI", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1741706588-unveil_nc_20.png?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "ARTXCODE",
    slug: "artxcode",
    year: "2024",
    tags: ["GRAPHIC IDENTITY", "DIGITAL DESIGN"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1714736034-unveil_artxcode_02.jpg?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "ELLIE",
    slug: "ellie",
    year: "2024",
    tags: ["AI", "SHORT FILM"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1713710673-unveil_ellie_06.jpeg?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1920,
    thumbnailHeight: 1080,
  },
  {
    title: "MINIMAXXX",
    slug: "minimaxxx",
    year: "2024",
    tags: ["GRAPHIC IDENTITY", "DIGITAL DESIGN"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1758546152-01-thumbnail.webp?dpr=1&fit=max&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "MINIMAXXX ::: POSTERS",
    slug: "minimaxxx-posters",
    year: "2024",
    tags: ["GRAPHIC IDENTITY"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1758547601-16.webp?dpr=1&fit=max&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "ORENJI",
    slug: "orenji",
    year: "2023",
    tags: ["AI", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1713711288-unveil_orenji_02.jpg?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
  {
    title: "AXIS MUNDI",
    slug: "axis-mundi",
    year: "2023",
    tags: ["AI", "STILLS"],
    thumbnail:
      "https://www.datocms-assets.com/127841/1714826093-unveil_axm_05.jpg?dpr=1&fit=max&fm=webp&h=1024&q=90&w=1024",
    thumbnailWidth: 1080,
    thumbnailHeight: 1350,
  },
];
