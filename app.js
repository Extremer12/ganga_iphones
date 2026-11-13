/* ==========================================================================
   GANGA IPHONE — Optimized E-Commerce Engine, Plan Canje & Smooth Motion
   ========================================================================== */

const STORE_CONFIG = {
  brand: 'Ganga iPhone',
  instagram: 'https://www.instagram.com/gangaiphone',
  whatsapp: '542645320505', // wa.me/542645320505
  usdRate: 1200, // Cotización de referencia editable para el conversor USD <-> ARS
  paymentMethods: [
    'Efectivo (USD / Pesos)',
    'Transferencia (USD / Pesos)',
    'Tarjetas Bancarias',
    'Crédito con Recibo de Sueldo',
    'Plan Canje (Tu celu actual en parte de pago)'
  ]
};

const CHECKOUT_PAYMENT_OPTIONS = [
  'Efectivo (USD / Pesos)',
  'Transferencia (USD / Pesos)',
  'Tarjetas Bancarias',
  'Recibo de Sueldo',
  'Entrego mi Celu Actual + Diferencia'
];

const STORAGE_KEY = 'ganga_iphone_cart_v2';

// ==========================================================================
// PRODUCT CATALOG DATA (USING REAL APPLE STUDIO ASSETS)
// ==========================================================================
const PRODUCTS = [
  {
    id: 'iphone-18-pro',
    name: 'iPhone 18 Pro',
    subtitle: 'Sistema de Cámara Pro • Chip Serie Pro',
    specs: ['Pantalla Super Retina XDR ProMotion 120Hz', 'Triple cámara Pro con teleobjetivo óptico', 'Garantía oficial Apple 1 año'],
    category: 'sellados',
    condition: 'Nuevo Sellado',
    image: 'iphone-card-40-18pro-202609.webp',
    deviceType: 'iphone-pro',
    battery: null,
    colors: [
      { name: 'Borgoña Profundo', hex: '#5D2331', accent: '#3B121D' },
      { name: 'Titanio Negro', hex: '#2C2C2E', accent: '#121214' },
      { name: 'Titanio Natural', hex: '#B9B5AE', accent: '#7D7A74' },
      { name: 'Titanio Blanco', hex: '#F2F1ED', accent: '#C8C7C2' }
    ],
    capacities: [
      { label: '256GB', priceUsd: 1390 },
      { label: '512GB', priceUsd: 1590 },
      { label: '1TB', priceUsd: 1790 }
    ]
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    subtitle: 'Colores vibrantes • Pantalla 120Hz',
    specs: ['Doble cámara avanzada de 48MP', 'Batería para todo el día con carga rápida', 'Sellado de fábrica sin activar'],
    category: 'sellados',
    condition: 'Nuevo Sellado',
    image: 'iphone-card-40-17-202509.webp',
    deviceType: 'iphone-std',
    battery: null,
    colors: [
      { name: 'Lavanda', hex: '#D8C7F2', accent: '#A88EE0' },
      { name: 'Blanco', hex: '#F5F5F7', accent: '#C7C7CC' },
      { name: 'Negro', hex: '#252528', accent: '#101012' },
      { name: 'Azul Niebla', hex: '#8EB5D8', accent: '#5A84AB' }
    ],
    capacities: [
      { label: '128GB', priceUsd: 960 },
      { label: '256GB', priceUsd: 1080 },
      { label: '512GB', priceUsd: 1260 }
    ]
  },
  {
    id: 'iphone-17-air',
    name: 'iPhone 17 Air',
    subtitle: 'Diseño ultradelgado • Titanio liviano',
    specs: ['Perfil ultrafino de nueva generación', 'Pantalla OLED de borde a borde', 'Chip de alto rendimiento y eficiencia'],
    category: 'sellados',
    condition: 'Nuevo Sellado',
    image: 'iphone-card-40-17air-202509.webp',
    deviceType: 'iphone-std',
    battery: null,
    colors: [
      { name: 'Azul Cielo', hex: '#D4E6F4', accent: '#9CC0DF' },
      { name: 'Plata Claro', hex: '#E8E8ED', accent: '#B8B8BF' },
      { name: 'Negro Espacial', hex: '#232326', accent: '#0E0E10' }
    ],
    capacities: [
      { label: '256GB', priceUsd: 1120 },
      { label: '512GB', priceUsd: 1310 }
    ]
  },
  {
    id: 'iphone-17e',
    name: 'iPhone 17e',
    subtitle: 'Esencial, rápido y accesible',
    specs: ['Cámara Fusion de 48MP', 'Face ID + Carga USB-C', 'Ideal para dar el salto a la nueva generación'],
    category: 'sellados',
    condition: 'Nuevo Sellado',
    image: 'iphone-card-40-17e-202603.webp',
    deviceType: 'iphone-std',
    battery: null,
    colors: [
      { name: 'Rosa Suave', hex: '#FADAD8', accent: '#E5A8A4' },
      { name: 'Blanco', hex: '#F5F5F7', accent: '#D1D1D6' },
      { name: 'Negro', hex: '#222225', accent: '#0D0D0F' }
    ],
    capacities: [
      { label: '128GB', priceUsd: 740 },
      { label: '256GB', priceUsd: 840 }
    ]
  },
  {
    id: 'iphone-16-plus',
    name: 'iPhone 16 & Plus',
    subtitle: 'Chip A18 • Control de Cámara',
    specs: ['Botón Control de Cámara dedicado', 'Pantalla Super Retina XDR', 'Apple Intelligence ready'],
    category: 'sellados',
    condition: 'Nuevo Sellado',
    image: 'iphone-card-40-16plus-202509.webp',
    deviceType: 'iphone-std',
    battery: null,
    colors: [
      { name: 'Ultramarino', hex: '#5E72EB', accent: '#364AC2' },
      { name: 'Verde Azulado', hex: '#559E9A', accent: '#2E6663' },
      { name: 'Negro', hex: '#252528', accent: '#101012' },
      { name: 'Blanco', hex: '#F2F2F7', accent: '#C7C7CC' }
    ],
    capacities: [
      { label: '128GB', priceUsd: 890 },
      { label: '256GB', priceUsd: 990 },
      { label: '512GB', priceUsd: 1170 }
    ]
  },
  {
    id: 'iphone-15-pro-semi',
    name: 'iPhone 15 Pro',
    subtitle: 'Chip A17 Pro • Titanio Aeroespacial',
    specs: ['Revisado en +30 puntos técnicos', '100% original sin piezas cambiadas', 'Garantía escrita de Ganga iPhone'],
    category: 'seminuevos',
    condition: 'Seminuevo',
    image: null,
    deviceType: 'iphone-pro',
    battery: 'Batería 94% • Estado Impecable',
    colors: [
      { name: 'Titanio Natural', hex: '#B9B5AE', accent: '#7D7A74' },
      { name: 'Titanio Azul', hex: '#39465C', accent: '#1F2838' },
      { name: 'Titanio Negro', hex: '#2C2C2E', accent: '#121214' }
    ],
    capacities: [
      { label: '128GB', priceUsd: 840 },
      { label: '256GB', priceUsd: 930 },
      { label: '512GB', priceUsd: 1060 }
    ]
  },
  {
    id: 'iphone-14-semi',
    name: 'iPhone 14',
    subtitle: 'Pantalla Super Retina XDR 6.1"',
    specs: ['Revisado en +30 puntos técnicos', 'True Tone, Face ID y cámaras al 100%', 'Garantía escrita en San Juan'],
    category: 'seminuevos',
    condition: 'Seminuevo',
    image: null,
    deviceType: 'iphone-std',
    battery: 'Batería 91% • Estado Impecable',
    colors: [
      { name: 'Medianoche', hex: '#232730', accent: '#111318' },
      { name: 'Blanco Estelar', hex: '#F3EFEA', accent: '#CCC6BE' },
      { name: 'Azul', hex: '#6889A8', accent: '#425E78' }
    ],
    capacities: [
      { label: '128GB', priceUsd: 575 },
      { label: '256GB', priceUsd: 640 }
    ]
  },
  {
    id: 'iphone-13-semi',
    name: 'iPhone 13',
    subtitle: 'Chip A15 Bionic • Doble Cámara',
    specs: ['Revisado en +30 puntos técnicos', 'Excelente relación precio-calidad', 'Apto Plan Canje y Recibo de Sueldo'],
    category: 'seminuevos',
    condition: 'Seminuevo',
    image: null,
    deviceType: 'iphone-std',
    battery: 'Batería 89% • Estado Impecable',
    colors: [
      { name: 'Medianoche', hex: '#232730', accent: '#111318' },
      { name: 'Blanco Estelar', hex: '#F3EFEA', accent: '#CCC6BE' },
      { name: 'Verde', hex: '#354A3E', accent: '#1D2B23' }
    ],
    capacities: [
      { label: '128GB', priceUsd: 475 },
      { label: '256GB', priceUsd: 535 }
    ]
  },
  {
    id: 'macbook-pro-m4',
    name: 'MacBook Pro 14" & 16"',
    subtitle: 'Apple Silicon M4 • Pantalla Liquid Retina XDR',
    specs: ['Rendimiento extremo para edición y desarrollo', 'Hasta 24 horas de batería', 'Sellada con garantía oficial Apple'],
    category: 'mac-ipad',
    condition: 'Nuevo Sellado',
    image: 'mbp_14_16_fd25cd37a.jpg',
    deviceType: 'macbook',
    battery: null,
    colors: [
      { name: 'Negro Espacial', hex: '#262629', accent: '#101012' },
      { name: 'Plata', hex: '#E3E4E6', accent: '#B4B5B8' }
    ],
    capacities: [
      { label: '14" • 512GB', priceUsd: 1850 },
      { label: '14" • 1TB', priceUsd: 2150 },
      { label: '16" • 512GB', priceUsd: 2650 }
    ]
  },
  {
    id: 'mac-mini-m4',
    name: 'Mac mini M4',
    subtitle: 'Ultra compacta • Potencia de escritorio',
    specs: ['Nuevo diseño 5x5 pulgadas con puertos frontales USB-C', 'Chip M4 o M4 Pro de última generación', 'Ideal para estudio, oficina o setup pro'],
    category: 'mac-ipad',
    condition: 'Nuevo Sellado',
    image: 'mac_mini_d300dfe42.jpg',
    deviceType: 'macbook',
    battery: null,
    colors: [
      { name: 'Plata Aluminio', hex: '#D9DADE', accent: '#A6A7AC' }
    ],
    capacities: [
      { label: '16GB / 256GB', priceUsd: 780 },
      { label: '16GB / 512GB', priceUsd: 990 }
    ]
  },
  {
    id: 'airpods-max-usbc',
    name: 'AirPods Max (USB-C)',
    subtitle: 'Audio Espacial • Cancelación Activa Pro',
    specs: ['Almohadillas de espuma viscoelástica', 'Audio Lossless vía USB-C', 'Sellados originales Apple'],
    category: 'airpods-watch',
    condition: 'Nuevo Sellado',
    image: 'airpods-max-select-202409-blue.webp',
    deviceType: 'airpods',
    battery: null,
    colors: [
      { name: 'Azul', hex: '#7D93A8', accent: '#53687D' },
      { name: 'Medianoche', hex: '#282C34', accent: '#12151B' },
      { name: 'Luz Estelar', hex: '#EAE5DC', accent: '#BFB8AE' }
    ],
    capacities: [
      { label: 'USB-C Oficial', priceUsd: 620 }
    ]
  },
  {
    id: 'beats-studio-360',
    name: 'Beats Studio Pro',
    subtitle: 'Acústica personalizada • Ecosistema Apple',
    specs: ['Emparejamiento en un toque con iOS y Android', 'Hasta 40 horas de autonomía', 'Audio espacial con seguimiento dinámico'],
    category: 'airpods-watch',
    condition: 'Nuevo Sellado',
    image: 'beats-360-hero-select-202609-black.webp',
    deviceType: 'airpods',
    battery: null,
    colors: [
      { name: 'Negro Mate', hex: '#1F1F22', accent: '#0C0C0E' },
      { name: 'Arenisca', hex: '#D8CFC4', accent: '#A99E92' }
    ],
    capacities: [
      { label: 'Edición Original', priceUsd: 360 }
    ]
  },
  {
    id: 'watch-belkin-combo',
    name: 'Apple Watch + Dock Carga Rápida',
    subtitle: 'Watch Series + PowerBank Belkin BoostCharge',
    specs: ['Carga rápida para Apple Watch e iPhone en movimiento', 'Display digital de porcentaje de batería', 'Ideal para viajes y uso diario'],
    category: 'airpods-watch',
    condition: 'Nuevo Sellado',
    image: 'HSLD2.webp',
    deviceType: 'watch',
    battery: null,
    colors: [
      { name: 'Plata / Arena', hex: '#D8D6D0', accent: '#9E9C96' },
      { name: 'Negro Azabache', hex: '#1C1C1E', accent: '#0A0A0B' }
    ],
    capacities: [
      { label: 'Watch 46mm + Dock', priceUsd: 540 },
      { label: 'Solo Dock Belkin', priceUsd: 115 }
    ]
  },
  {
    id: 'funda-techwoven',
    name: 'Funda TechWoven Pro MagSafe',
    subtitle: 'Protección tejida de precisión • MagSafe',
    specs: ['Textura micro-tejida de alto agarre', 'Anillo MagSafe integrado de alta fijación', 'Protección elevada en módulo de cámaras'],
    category: 'accesorios',
    condition: 'Accesorio Original',
    image: 'iphone18.webp',
    deviceType: 'iphone-pro',
    battery: null,
    colors: [
      { name: 'Borgoña Tejido', hex: '#632934', accent: '#3D151D' },
      { name: 'Negro Carbón', hex: '#232326', accent: '#0F0F11' }
    ],
    capacities: [
      { label: 'iPhone Pro / Pro Max', priceUsd: 65 }
    ]
  },
  {
    id: 'duo-folio-case',
    name: 'Apple Duo Folio Case',
    subtitle: 'Soporte plegable multiposición • MagSafe',
    specs: ['Acabado premium resistente al desgaste', 'Modo atril horizontal para videollamadas y contenido', 'Interior suave en microfibra'],
    category: 'accesorios',
    condition: 'Accesorio Original',
    image: 'iphone_duo_folio.webp',
    deviceType: 'iphone-std',
    battery: null,
    colors: [
      { name: 'Oliva / Topo', hex: '#867A5F', accent: '#5A503C' }
    ],
    capacities: [
      { label: 'Folio Original', priceUsd: 78 }
    ]
  },
  {
    id: 'cargador-magnetico-usbc',
    name: 'Cargador Rápido Magnético USB-C',
    subtitle: 'Cable trenzado de 1m • Carga rápida Apple',
    specs: ['Cable tejido ultra resistente', 'Compatible con todos los modelos Apple Watch', 'Producto 100% original en caja sellada'],
    category: 'accesorios',
    condition: 'Accesorio Original',
    image: 'ML434.webp',
    deviceType: 'watch',
    battery: null,
    colors: [
      { name: 'Blanco Trenzado', hex: '#F2F2F5', accent: '#C8C8CE' }
    ],
    capacities: [
      { label: '1 Metro USB-C', priceUsd: 45 }
    ]
  }
];

// ==========================================================================
// TRADE-IN (PLAN CANJE) REFERENCE VALUES (USD)
// ==========================================================================
const TRADE_IN_MODELS = [
  { name: 'iPhone 16 Pro Max', baseUsd: 980 },
  { name: 'iPhone 16 Pro', baseUsd: 860 },
  { name: 'iPhone 16', baseUsd: 660 },
  { name: 'iPhone 15 Pro Max', baseUsd: 810 },
  { name: 'iPhone 15 Pro', baseUsd: 690 },
  { name: 'iPhone 15 Plus', baseUsd: 570 },
  { name: 'iPhone 15', baseUsd: 520 },
  { name: 'iPhone 14 Pro Max', baseUsd: 600 },
  { name: 'iPhone 14 Pro', baseUsd: 520 },
  { name: 'iPhone 14', baseUsd: 395 },
  { name: 'iPhone 13 Pro Max', baseUsd: 445 },
  { name: 'iPhone 13 Pro', baseUsd: 385 },
  { name: 'iPhone 13', baseUsd: 320 },
  { name: 'iPhone 12 Pro Max', baseUsd: 310 },
  { name: 'iPhone 12', baseUsd: 225 },
  { name: 'iPhone 11', baseUsd: 160 }
];

// ==========================================================================
// APPLICATION STATE + LOCALSTORAGE PERSISTENCE
// ==========================================================================
const state = {
  currency: 'USD',
  activeFilter: 'all',
  searchQuery: '',
  selectedVariants: {},
  cart: [],
  tradeIn: {
    modelIndex: 6, // iPhone 15
    capacity: '128GB',
    battery: 90,
    condition: 'impecable',
    targetProductId: 'iphone-18-pro',
    estimatedUsd: 0
  },
  attachedTradeIn: null,
  selectedPaymentMethod: CHECKOUT_PAYMENT_OPTIONS[0],
  deliveryMethod: 'Retirar en el Nuevo Local'
};

PRODUCTS.forEach((p) => {
  state.selectedVariants[p.id] = { colorIdx: 0, capIdx: 0 };
});

function loadPersistedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved.currency === 'USD' || saved.currency === 'ARS') state.currency = saved.currency;
    if (Array.isArray(saved.cart)) state.cart = saved.cart;
    if (saved.attachedTradeIn) state.attachedTradeIn = saved.attachedTradeIn;
    if (saved.selectedPaymentMethod) state.selectedPaymentMethod = saved.selectedPaymentMethod;
    if (saved.deliveryMethod) state.deliveryMethod = saved.deliveryMethod;
  } catch {
    // Ignore storage parse errors
  }
}

function savePersistedState() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        currency: state.currency,
        cart: state.cart,
        attachedTradeIn: state.attachedTradeIn,
        selectedPaymentMethod: state.selectedPaymentMethod,
        deliveryMethod: state.deliveryMethod
      })
    );
  } catch {
    // Ignore storage quota errors
  }
}

// ==========================================================================
// CURRENCY FORMATTING & TOGGLE
// ==========================================================================
function formatPrice(usdAmount) {
  if (state.currency === 'USD') {
    return `US$ ${Math.round(usdAmount).toLocaleString('es-AR')}`;
  }
  const ars = Math.round(usdAmount * STORE_CONFIG.usdRate);
  return `$${ars.toLocaleString('es-AR')} ARS`;
}

function syncCurrencyButtonsUI() {
  const btnUsd = document.getElementById('btn-currency-usd');
  const btnArs = document.getElementById('btn-currency-ars');
  if (!btnUsd || !btnArs) return;

  if (state.currency === 'USD') {
    btnUsd.className = 'nav-currency-active px-2.5 py-1 rounded-full transition-all duration-200 bg-white text-black shadow-sm';
    btnArs.className = 'px-2.5 py-1 rounded-full transition-all duration-200 text-current opacity-75 hover:opacity-100';
  } else {
    btnArs.className = 'nav-currency-active px-2.5 py-1 rounded-full transition-all duration-200 bg-white text-black shadow-sm';
    btnUsd.className = 'px-2.5 py-1 rounded-full transition-all duration-200 text-current opacity-75 hover:opacity-100';
  }

  const label = document.getElementById('catalog-currency-label');
  if (label) label.textContent = state.currency;
}

function setCurrency(curr) {
  if (state.currency === curr) return;
  state.currency = curr;
  savePersistedState();
  syncCurrencyButtonsUI();
  renderCatalog();
  updateTradeIn();
  renderCart();
}

// ==========================================================================
// LINEUP RUNWAY & QUICK NAVIGATION
// ==========================================================================
function quickFilterAndFocus(category, searchTerm) {
  const searchInput = document.getElementById('catalog-search');
  if (searchInput) searchInput.value = searchTerm;
  state.searchQuery = searchTerm.toLowerCase();
  filterCatalog(category);
}

// ==========================================================================
// PRODUCT VISUAL RENDERER (REAL PHOTO OR COLOR-MORPHING SVG)
// ==========================================================================
function renderProductVisual(product, color) {
  if (product.image) {
    return `
      <img src="${product.image}"
        alt="${product.name} - ${color.name}"
        loading="lazy"
        decoding="async"
        class="w-44 h-44 sm:w-48 sm:h-48 object-contain mx-auto select-none" />
    `;
  }

  // Fallback color-reactive studio vector for Seminuevos
  const cHex = color.hex;
  const cAccent = color.accent;
  const uid = `${product.id}-${color.name.replace(/\s+/g, '')}`;
  const isPro = product.deviceType === 'iphone-pro';

  return `
    <svg class="w-36 h-44 mx-auto drop-shadow-[0_14px_24px_rgba(0,0,0,0.18)]" viewBox="0 0 180 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="body-${uid}" x1="0" y1="0" x2="180" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="${cHex}"/>
          <stop offset="100%" stop-color="${cAccent}"/>
        </linearGradient>
      </defs>
      <rect x="34" y="10" width="112" height="220" rx="24" fill="url(#body-${uid})" stroke="rgba(0,0,0,0.14)" stroke-width="1.5"/>
      <rect x="43" y="20" width="46" height="46" rx="13" fill="rgba(0,0,0,0.2)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>
      ${
        isPro
          ? `
          <circle cx="56" cy="33" r="7.5" fill="#111115" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
          <circle cx="56" cy="53" r="7.5" fill="#111115" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
          <circle cx="76" cy="43" r="7.5" fill="#111115" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
        `
          : `
          <circle cx="57" cy="33" r="7.5" fill="#111115" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
          <circle cx="57" cy="53" r="7.5" fill="#111115" stroke="rgba(255,255,255,0.35)" stroke-width="1.5"/>
          <circle cx="76" cy="33" r="3" fill="rgba(255,255,255,0.7)"/>
        `
      }
      <circle cx="90" cy="120" r="10" fill="rgba(255,255,255,0.2)"/>
    </svg>
  `;
}

// ==========================================================================
// CATALOG RENDERING, SEARCH & FILTERING
// ==========================================================================
function filterCatalog(category) {
  state.activeFilter = category;

  document.querySelectorAll('.filter-pill').forEach((btn) => {
    const isActive = btn.dataset.filter === category;
    if (isActive) {
      btn.className = 'filter-pill active shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all bg-[#1d1d1f] text-white shadow-sm';
    } else {
      btn.className = 'filter-pill shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all bg-white text-[#6e6e73] border border-black/10 hover:text-[#1d1d1f]';
    }
  });

  renderCatalog(true);
}

function handleSearch(value) {
  state.searchQuery = value.trim().toLowerCase();
  renderCatalog(false);
}

function resetCatalogFilters() {
  state.searchQuery = '';
  const searchInput = document.getElementById('catalog-search');
  if (searchInput) searchInput.value = '';
  filterCatalog('all');
}

function selectColor(productId, colorIdx) {
  state.selectedVariants[productId].colorIdx = colorIdx;
  renderCatalog(false);
}

function selectCapacity(productId, capIdx) {
  state.selectedVariants[productId].capIdx = capIdx;
  renderCatalog(false);
}

function renderCatalog(animateCards = false) {
  const grid = document.getElementById('product-grid');
  const countEl = document.getElementById('catalog-count');
  if (!grid) return;

  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory = state.activeFilter === 'all' || p.category === state.activeFilter;
    if (!matchesCategory) return false;
    if (!state.searchQuery) return true;

    const haystack = `${p.name} ${p.subtitle} ${p.condition} ${p.colors.map((c) => c.name).join(' ')}`.toLowerCase();
    return haystack.includes(state.searchQuery);
  });

  if (countEl) {
    countEl.textContent = `Mostrando ${filtered.length} ${filtered.length === 1 ? 'producto' : 'productos'}`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-black/5 p-8">
        <p class="font-display text-xl font-bold text-[#1d1d1f] mb-2">No encontramos ese equipo</p>
        <p class="text-sm text-[#6e6e73] mb-6">Probá con otro término o limpiá los filtros del catálogo.</p>
        <button type="button" onclick="resetCatalogFilters()" class="px-6 py-2.5 rounded-full bg-[#1d1d1f] text-white text-xs font-semibold hover:bg-black transition-colors">
          Ver todo el catálogo
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((product) => {
      const sel = state.selectedVariants[product.id];
      const activeColor = product.colors[sel.colorIdx] || product.colors[0];
      const activeCap = product.capacities[sel.capIdx] || product.capacities[0];

      const badgeHtml = product.battery
        ? `
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ecfccb] text-[#3f6212] text-[11px] font-semibold">
            <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="18" height="10" rx="2"/>
              <path d="M22 10v4"/>
              <path d="M6 10v4M10 10v4M14 10v4"/>
            </svg>
            <span>${product.battery}</span>
          </div>
        `
        : `
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f7] text-[#1d1d1f] text-[11px] font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-gangaEmerald"></span>
            <span>${product.condition}</span>
          </div>
        `;

      const swatchesHtml = product.colors
        .map(
          (c, idx) => `
          <button type="button"
            onclick="selectColor('${product.id}', ${idx})"
            title="${c.name}"
            aria-label="Color ${c.name}"
            class="swatch-btn w-5 h-5 rounded-full border border-black/15 ${idx === sel.colorIdx ? 'active' : ''}"
            style="background-color: ${c.hex};">
          </button>
        `
        )
        .join('');

      const capacitiesHtml = product.capacities
        .map(
          (cap, idx) => `
          <button type="button"
            onclick="selectCapacity('${product.id}', ${idx})"
            class="px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              idx === sel.capIdx
                ? 'bg-[#1d1d1f] text-white border-[#1d1d1f]'
                : 'bg-[#f5f5f7] text-[#6e6e73] border-transparent hover:text-[#1d1d1f]'
            }">
            ${cap.label}
          </button>
        `
        )
        .join('');

      const waConsultMsg = encodeURIComponent(
        `Hola Ganga iPhone! Quiero consultar disponibilidad por ${product.name} (${activeCap.label}, ${activeColor.name}) - ${product.condition}.`
      );

      return `
        <article class="apple-store-card group rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <!-- Top Row: Badge + Quick View -->
            <div class="flex items-center justify-between gap-2 mb-3">
              ${badgeHtml}
              <button type="button" onclick="openQuickView('${product.id}')" class="text-[11px] font-medium text-[#0071e3] hover:underline shrink-0">
                Ver detalles
              </button>
            </div>

            <!-- Seamless Pure White Studio Stage -->
            <div onclick="openQuickView('${product.id}')" class="product-stage cursor-pointer rounded-2xl bg-white py-4 px-3 mb-4 flex items-center justify-center min-h-[200px]">
              ${renderProductVisual(product, activeColor)}
            </div>

            <!-- Title & Subtitle -->
            <h3 onclick="openQuickView('${product.id}')" class="cursor-pointer font-display text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight hover:text-[#0071e3] transition-colors">
              ${product.name}
            </h3>
            <p class="text-xs sm:text-sm text-[#6e6e73] mt-1 mb-5">
              ${product.subtitle}
            </p>

            <!-- Color Selector -->
            <div class="mb-4">
              <div class="flex items-center justify-between text-xs mb-2">
                <span class="text-[#6e6e73]">Acabado:</span>
                <span class="text-[#1d1d1f] font-medium">${activeColor.name}</span>
              </div>
              <div class="flex items-center gap-2.5">
                ${swatchesHtml}
              </div>
            </div>

            <!-- Capacity Selector -->
            <div class="mb-6">
              <span class="block text-xs text-[#6e6e73] mb-2">Capacidad / Versión:</span>
              <div class="flex flex-wrap gap-2">
                ${capacitiesHtml}
              </div>
            </div>
          </div>

          <!-- Price & Actions -->
          <div class="pt-4 border-t border-black/8 flex items-center justify-between gap-2">
            <div>
              <span class="block text-[11px] text-[#6e6e73]">Contado / Lista</span>
              <span class="font-display text-xl sm:text-2xl font-bold text-[#1d1d1f] tracking-tight">
                ${formatPrice(activeCap.priceUsd)}
              </span>
            </div>

            <div class="flex items-center gap-2 shrink-0">
              <a href="https://wa.me/${STORE_CONFIG.whatsapp}?text=${waConsultMsg}" target="_blank" rel="noopener noreferrer" title="Consultar este equipo por WhatsApp" aria-label="Consultar por WhatsApp" class="w-10 h-10 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f] flex items-center justify-center transition-colors">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/>
                </svg>
              </a>
              <button type="button" onclick="addToCart('${product.id}')" class="px-4 py-2.5 rounded-full bg-[#0071e3] text-white text-xs sm:text-sm font-semibold hover:bg-[#0077ed] active:scale-[0.97] transition-all">
                Agregar +
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  if (animateCards) {
    animateCatalogCards(true);
  }
}

// ==========================================================================
// QUICK VIEW MODAL
// ==========================================================================
function openQuickView(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  const backdrop = document.getElementById('quickview-backdrop');
  const content = document.getElementById('quickview-content');
  if (!product || !backdrop || !content) return;

  const sel = state.selectedVariants[product.id];
  const activeColor = product.colors[sel.colorIdx] || product.colors[0];
  const activeCap = product.capacities[sel.capIdx] || product.capacities[0];

  const specsHtml = (product.specs || [])
    .map(
      (s) => `
      <li class="flex items-start gap-2 text-xs sm:text-sm text-[#6e6e73]">
        <svg class="w-4 h-4 text-[#65a30d] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
        <span>${s}</span>
      </li>
    `
    )
    .join('');

  content.innerHTML = `
    <div class="bg-[#f5f5f7] rounded-3xl p-6 flex items-center justify-center min-h-[240px]">
      ${renderProductVisual(product, activeColor)}
    </div>
    <div class="space-y-4">
      <div>
        <span class="inline-block px-3 py-1 rounded-full bg-[#f5f5f7] text-[11px] font-semibold text-[#1d1d1f] mb-2">
          ${product.battery || product.condition}
        </span>
        <h3 class="font-display text-2xl sm:text-3xl font-bold text-[#1d1d1f] tracking-tight">${product.name}</h3>
        <p class="text-sm text-[#6e6e73] mt-1">${activeCap.label} &bull; ${activeColor.name}</p>
      </div>

      <ul class="space-y-2 pt-1">${specsHtml}</ul>

      <div class="pt-3 border-t border-black/10 flex items-baseline justify-between">
        <span class="text-xs text-[#6e6e73]">Precio Contado</span>
        <span class="font-display text-2xl font-bold text-[#1d1d1f]">${formatPrice(activeCap.priceUsd)}</span>
      </div>

      <div class="flex flex-col sm:flex-row gap-2.5 pt-1">
        <button type="button" onclick="addToCart('${product.id}'); closeQuickView();" class="flex-1 py-3 px-5 rounded-full bg-[#0071e3] text-white text-sm font-semibold hover:bg-[#0077ed] transition-colors">
          Agregar a la Bolsa
        </button>
        <a href="#plan-canje" onclick="closeQuickView()" class="py-3 px-5 rounded-full bg-[#f5f5f7] text-[#1d1d1f] text-sm font-medium text-center hover:bg-[#e8e8ed] transition-colors">
          Cotizar Canje
        </a>
      </div>
    </div>
  `;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const backdrop = document.getElementById('quickview-backdrop');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================================================
// PLAN CANJE CALCULATOR
// ==========================================================================
function initTradeInSelectors() {
  const modelSelect = document.getElementById('tradein-model');
  const targetSelect = document.getElementById('tradein-target');

  if (modelSelect) {
    modelSelect.innerHTML = TRADE_IN_MODELS.map(
      (m, idx) => `<option value="${idx}" ${idx === state.tradeIn.modelIndex ? 'selected' : ''}>${m.name}</option>`
    ).join('');
  }

  if (targetSelect) {
    targetSelect.innerHTML = PRODUCTS.filter((p) => p.category !== 'accesorios' && p.category !== 'airpods-watch')
      .map(
        (p) =>
          `<option value="${p.id}" ${p.id === state.tradeIn.targetProductId ? 'selected' : ''}>${p.name} (${p.capacities[0].label}) — ${p.condition}</option>`
      )
      .join('');
  }

  updateTradeIn();
}

function setTradeInCondition(cond) {
  state.tradeIn.condition = cond;
  const btnImp = document.getElementById('cond-impecable');
  const btnDet = document.getElementById('cond-detalles');

  if (cond === 'impecable') {
    btnImp.className = 'py-3 px-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all bg-appleWhite text-black border-appleWhite';
    btnDet.className = 'py-3 px-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all bg-[#1a1a20] text-zinc-400 border-white/10 hover:text-appleWhite';
  } else {
    btnDet.className = 'py-3 px-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all bg-appleWhite text-black border-appleWhite';
    btnImp.className = 'py-3 px-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all bg-[#1a1a20] text-zinc-400 border-white/10 hover:text-appleWhite';
  }
  updateTradeIn();
}

function updateTradeIn() {
  const modelSelect = document.getElementById('tradein-model');
  const capSelect = document.getElementById('tradein-capacity');
  const batterySlider = document.getElementById('tradein-battery');
  const targetSelect = document.getElementById('tradein-target');

  if (!modelSelect || !capSelect || !batterySlider || !targetSelect) return;

  state.tradeIn.modelIndex = parseInt(modelSelect.value, 10) || 0;
  state.tradeIn.capacity = capSelect.value;
  state.tradeIn.battery = parseInt(batterySlider.value, 10) || 90;
  state.tradeIn.targetProductId = targetSelect.value;

  const batteryLabel = document.querySelector('#tradein-battery-value span');
  if (batteryLabel) batteryLabel.textContent = `${state.tradeIn.battery}%`;

  const currentModel = TRADE_IN_MODELS[state.tradeIn.modelIndex];
  const targetProduct = PRODUCTS.find((p) => p.id === state.tradeIn.targetProductId) || PRODUCTS[0];
  const targetPriceUsd = targetProduct.capacities[0].priceUsd;

  let capBonus = 0;
  if (state.tradeIn.capacity === '256GB') capBonus = 30;
  if (state.tradeIn.capacity === '512GB') capBonus = 55;
  if (state.tradeIn.capacity === '64GB') capBonus = -20;

  let batteryFactor = 1.0;
  if (state.tradeIn.battery < 80) batteryFactor = 0.86;
  else if (state.tradeIn.battery < 87) batteryFactor = 0.93;
  else if (state.tradeIn.battery >= 95) batteryFactor = 1.04;

  const condFactor = state.tradeIn.condition === 'impecable' ? 1.0 : 0.88;

  const estimatedUsd = Math.max(80, Math.round((currentModel.baseUsd + capBonus) * batteryFactor * condFactor));
  state.tradeIn.estimatedUsd = estimatedUsd;

  const diffUsd = Math.max(0, targetPriceUsd - estimatedUsd);

  document.getElementById('summary-target-name').textContent = `${targetProduct.name} (${targetProduct.capacities[0].label})`;
  document.getElementById('summary-target-price').textContent = formatPrice(targetPriceUsd);
  document.getElementById('summary-tradein-value').textContent = `- ${formatPrice(estimatedUsd)}`;
  document.getElementById('summary-difference').textContent = formatPrice(diffUsd);

  const condText = state.tradeIn.condition === 'impecable' ? 'Impecable' : 'Con detalles de uso';
  const msg = [
    'Hola Ganga iPhone! Quiero consultar por un Plan Canje:',
    `- Mi equipo actual: ${currentModel.name} (${state.tradeIn.capacity})`,
    `- Salud de batería: ${state.tradeIn.battery}%`,
    `- Estado estético: ${condText}`,
    `- Equipo que busco: ${targetProduct.name} (${targetProduct.capacities[0].label})`,
    `- Toma estimada web: ${formatPrice(estimatedUsd)}`,
    `- Diferencia estimada: ${formatPrice(diffUsd)}`
  ].join('\n');

  const waBtn = document.getElementById('tradein-whatsapp-link');
  if (waBtn) {
    waBtn.href = `https://wa.me/${STORE_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  }
}

function applyTradeInToCart() {
  const currentModel = TRADE_IN_MODELS[state.tradeIn.modelIndex];
  const condText = state.tradeIn.condition === 'impecable' ? 'Impecable' : 'Detalles de uso';

  state.attachedTradeIn = {
    summaryText: `${currentModel.name} • ${state.tradeIn.capacity} • Bat. ${state.tradeIn.battery}% (${condText})`,
    valueUsd: state.tradeIn.estimatedUsd
  };

  if (state.cart.length === 0) {
    addToCart(state.tradeIn.targetProductId, false);
  }

  state.selectedPaymentMethod = 'Entrego mi Celu Actual + Diferencia';
  savePersistedState();
  renderCart();
  toggleCart(true);
  showToast('Plan Canje aplicado a tu bolsa');
}

function removeTradeInFromCart() {
  state.attachedTradeIn = null;
  savePersistedState();
  renderCart();
}

// ==========================================================================
// CART MANAGEMENT & WHATSAPP CHECKOUT
// ==========================================================================
function addToCart(productId, openDrawer = true) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const sel = state.selectedVariants[productId] || { colorIdx: 0, capIdx: 0 };
  const color = product.colors[sel.colorIdx] || product.colors[0];
  const cap = product.capacities[sel.capIdx] || product.capacities[0];

  const uid = `${product.id}__${color.name}__${cap.label}`;
  const existing = state.cart.find((item) => item.uid === uid);

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      uid,
      productId: product.id,
      name: product.name,
      condition: product.condition,
      colorName: color.name,
      capacityLabel: cap.label,
      priceUsd: cap.priceUsd,
      qty: 1
    });
  }

  savePersistedState();
  renderCart();
  if (openDrawer) {
    toggleCart(true);
  } else {
    showToast(`${product.name} agregado a tu bolsa`);
  }
}

function updateCartQty(uid, delta) {
  const idx = state.cart.findIndex((i) => i.uid === uid);
  if (idx === -1) return;

  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }
  savePersistedState();
  renderCart();
}

function setPaymentMethod(method) {
  state.selectedPaymentMethod = method;
  savePersistedState();
  renderCart();
}

function setDeliveryMethod(method) {
  state.deliveryMethod = method;
  savePersistedState();
  syncDeliveryButtonsUI();
}

function syncDeliveryButtonsUI() {
  const btnLocal = document.getElementById('delivery-local');
  const btnEnvio = document.getElementById('delivery-envio');
  if (!btnLocal || !btnEnvio) return;

  if (state.deliveryMethod === 'Retirar en el Nuevo Local') {
    btnLocal.className = 'py-2.5 px-3 rounded-xl border text-xs font-medium transition-all bg-appleWhite text-black border-appleWhite';
    btnEnvio.className = 'py-2.5 px-3 rounded-xl border text-xs font-medium transition-all bg-white/[0.04] text-zinc-400 border-white/10 hover:text-appleWhite';
  } else {
    btnEnvio.className = 'py-2.5 px-3 rounded-xl border text-xs font-medium transition-all bg-appleWhite text-black border-appleWhite';
    btnLocal.className = 'py-2.5 px-3 rounded-xl border text-xs font-medium transition-all bg-white/[0.04] text-zinc-400 border-white/10 hover:text-appleWhite';
  }
}

function renderCart() {
  const itemsContainer = document.getElementById('cart-items');
  const badge = document.getElementById('cart-badge');
  const tradeInBox = document.getElementById('cart-tradein-box');
  const checkoutOptions = document.getElementById('cart-checkout-options');
  const paymentPills = document.getElementById('cart-payment-pills');
  const checkoutBtn = document.getElementById('checkout-whatsapp-btn');

  if (!itemsContainer) return;

  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) {
    badge.textContent = totalCount;
    badge.classList.toggle('hidden', totalCount === 0);
  }

  if (state.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="py-12 text-center space-y-3">
        <div class="w-12 h-12 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center mx-auto text-zinc-400">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 8h12l1 12H5L6 8Z"/>
            <path d="M9 8V6a3 3 0 0 1 6 0v2"/>
          </svg>
        </div>
        <p class="text-sm font-medium text-appleWhite">Tu bolsa está vacía</p>
        <p class="text-xs text-zinc-400 max-w-[220px] mx-auto">Explorá el catálogo o calculá tu Plan Canje para armar tu pedido.</p>
      </div>
    `;
  } else {
    itemsContainer.innerHTML = state.cart
      .map(
        (item) => `
        <div class="rounded-2xl bg-white/[0.05] border border-white/10 p-4 flex items-start justify-between gap-3">
          <div class="space-y-1">
            <span class="text-[10px] uppercase tracking-wider text-gangaLime font-semibold">${item.condition}</span>
            <h4 class="text-sm font-semibold text-appleWhite">${item.name}</h4>
            <p class="text-xs text-zinc-400">${item.capacityLabel} &bull; ${item.colorName}</p>
            <p class="text-sm font-bold text-appleWhite pt-1">${formatPrice(item.priceUsd * item.qty)}</p>
          </div>

          <div class="flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-2 py-1">
            <button type="button" onclick="updateCartQty('${item.uid}', -1)" class="w-5 h-5 rounded-full flex items-center justify-center text-zinc-400 hover:text-appleWhite text-sm">-</button>
            <span class="text-xs font-semibold w-4 text-center">${item.qty}</span>
            <button type="button" onclick="updateCartQty('${item.uid}', 1)" class="w-5 h-5 rounded-full flex items-center justify-center text-zinc-400 hover:text-appleWhite text-sm">+</button>
          </div>
        </div>
      `
      )
      .join('');
  }

  if (state.attachedTradeIn) {
    tradeInBox.classList.remove('hidden');
    document.getElementById('cart-tradein-desc').textContent = state.attachedTradeIn.summaryText;
    document.getElementById('cart-tradein-credit').textContent = `Toma estimada: -${formatPrice(state.attachedTradeIn.valueUsd)}`;
  } else {
    tradeInBox.classList.add('hidden');
  }

  if (paymentPills) {
    paymentPills.innerHTML = CHECKOUT_PAYMENT_OPTIONS.map((method) => {
      const active = state.selectedPaymentMethod === method;
      return `
        <button type="button" onclick="setPaymentMethod('${method}')"
          class="px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
            active
              ? 'bg-appleWhite text-black border-appleWhite'
              : 'bg-white/[0.04] text-zinc-400 border-white/10 hover:text-appleWhite'
          }">
          ${method}
        </button>
      `;
    }).join('');
  }

  syncDeliveryButtonsUI();

  const subtotalUsd = state.cart.reduce((sum, item) => sum + item.priceUsd * item.qty, 0);
  const discountUsd = state.attachedTradeIn ? state.attachedTradeIn.valueUsd : 0;
  const totalUsd = Math.max(0, subtotalUsd - discountUsd);

  document.getElementById('cart-subtotal').textContent = formatPrice(subtotalUsd);
  const discountRow = document.getElementById('cart-discount-row');
  if (state.attachedTradeIn) {
    discountRow.classList.remove('hidden');
    document.getElementById('cart-discount-amount').textContent = `-${formatPrice(discountUsd)}`;
  } else {
    discountRow.classList.add('hidden');
  }
  document.getElementById('cart-total').textContent = formatPrice(totalUsd);

  const hasItems = state.cart.length > 0;
  if (checkoutOptions) checkoutOptions.classList.toggle('hidden', !hasItems);
  if (checkoutBtn) checkoutBtn.disabled = !hasItems;
}

function toggleCart(open) {
  const backdrop = document.getElementById('cart-backdrop');
  const drawer = document.getElementById('cart-drawer');
  if (!backdrop || !drawer) return;

  if (open) {
    backdrop.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    backdrop.classList.remove('open');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function checkoutToWhatsApp() {
  if (state.cart.length === 0) return;

  const subtotalUsd = state.cart.reduce((sum, item) => sum + item.priceUsd * item.qty, 0);
  const discountUsd = state.attachedTradeIn ? state.attachedTradeIn.valueUsd : 0;
  const totalUsd = Math.max(0, subtotalUsd - discountUsd);

  const lines = [
    `Hola ${STORE_CONFIG.brand}! Quiero realizar el siguiente pedido:`,
    '',
    '*PRODUCTOS EN MI BOLSA:*'
  ];

  state.cart.forEach((item, index) => {
    lines.push(
      `${index + 1}. ${item.name} (${item.condition}) — ${item.capacityLabel} — Color: ${item.colorName} x${item.qty} (${formatPrice(item.priceUsd * item.qty)})`
    );
  });

  if (state.attachedTradeIn) {
    lines.push('');
    lines.push('*EQUIPO ENTREGADO EN PLAN CANJE:*');
    lines.push(`- ${state.attachedTradeIn.summaryText}`);
    lines.push(`- Toma estimada: -${formatPrice(discountUsd)}`);
  }

  lines.push('');
  lines.push(`*MEDIO DE PAGO ELEGIDO:* ${state.selectedPaymentMethod}`);
  lines.push(`*MODALIDAD DE ENTREGA:* ${state.deliveryMethod}`);
  lines.push(`*MONEDA DE REFERENCIA:* ${state.currency}`);
  lines.push(`*TOTAL ESTIMADO:* ${formatPrice(totalUsd)}`);

  const url = `https://wa.me/${STORE_CONFIG.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ==========================================================================
// MOBILE MENU, TOAST & ADAPTIVE NAVBAR OBSERVER
// ==========================================================================
function toggleMobileMenu(forceState) {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  if (typeof forceState === 'boolean') {
    menu.classList.toggle('hidden', !forceState);
  } else {
    menu.classList.toggle('hidden');
  }
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-message');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function initAdaptiveNavbar() {
  const nav = document.getElementById('dynamic-nav');
  if (!nav || typeof IntersectionObserver === 'undefined') return;

  const lightSections = document.querySelectorAll('[data-nav-theme="light"], #destacados');
  const activeLight = new Set();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeLight.add(entry.target);
        else activeLight.delete(entry.target);
      });
      nav.classList.toggle('nav-light', activeLight.size > 0);
    },
    { rootMargin: '-12% 0px -82% 0px', threshold: 0 }
  );

  lightSections.forEach((sec) => observer.observe(sec));
}

// ==========================================================================
// LENIS SMOOTH SCROLL + IMMERSIVE APPLE KEYNOTE SCROLL CHOREOGRAPHY
// Strictly GPU-composited (transform / opacity / clip-path) for 120fps fluidity
// ==========================================================================
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animateCatalogCards(immediate = false) {
  if (prefersReducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  const cards = gsap.utils.toArray('#product-grid .apple-store-card');
  if (!cards.length) return;

  if (immediate) {
    gsap.fromTo(
      cards,
      { y: 26, opacity: 0, scale: 0.97 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.52,
        stagger: 0.05,
        ease: 'power3.out',
        clearProps: 'transform,opacity'
      }
    );
    ScrollTrigger.refresh();
    return;
  }

  gsap.set(cards, { opacity: 0, y: 34, scale: 0.97 });
  ScrollTrigger.batch(cards, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform,opacity'
      });
    }
  });
}

function initAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  let lenis = null;
  if (typeof Lenis !== 'undefined' && !prefersReducedMotion) {
    lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  // Smooth anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId.length > 1) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          if (lenis) lenis.scrollTo(el, { offset: -72 });
          else el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  if (prefersReducedMotion) return;

  // 1. Precision Top Scroll Progress Bar
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    gsap.to(progressBar, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.25
      }
    });
  }

  // 2. Hero Keynote Entrance + Multi-Plane Depth Parallax
  gsap.from('.hero-reveal', {
    y: 28,
    opacity: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: 'power3.out',
    clearProps: 'transform,opacity'
  });

  gsap.from('.hero-device', {
    y: 40,
    opacity: 0,
    scale: 0.97,
    duration: 1.05,
    delay: 0.22,
    ease: 'power3.out',
    clearProps: 'transform,opacity'
  });

  const mm = gsap.matchMedia();
  mm.add('(min-width: 768px)', () => {
    gsap.to('.hero-copy-stage', {
      y: -46,
      opacity: 0.2,
      scale: 0.97,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom 35%',
        scrub: true
      }
    });

    gsap.to('.hero-pro-img', {
      y: -16,
      scale: 1.08,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // 3. Masked Editorial Heading Curtain Reveals
  gsap.utils.toArray('.scroll-reveal-heading').forEach((block) => {
    gsap.from(block, {
      y: 30,
      opacity: 0,
      clipPath: 'inset(0 0 20% 0)',
      duration: 0.85,
      ease: 'power3.out',
      clearProps: 'transform,opacity,clipPath',
      scrollTrigger: {
        trigger: block,
        start: 'top 86%',
        once: true
      }
    });
  });

  // 4. Apple.com Lineup Infinite Runway Entrance
  const lineupViewport = document.getElementById('lineup-carousel');
  if (lineupViewport) {
    gsap.from(lineupViewport, {
      y: 34,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: lineupViewport,
        start: 'top 86%',
        once: true
      }
    });
  }

  // 5. Catalog Cards Row-by-Row Batch Cascade
  animateCatalogCards(false);

  // 6. Plan Canje Scroll-Illuminated Headline & Configurator Depth Entrance
  gsap.utils.toArray('.scroll-illuminate').forEach((heading) => {
    gsap.from(heading, {
      opacity: 0.25,
      y: 24,
      ease: 'none',
      scrollTrigger: {
        trigger: heading,
        start: 'top 88%',
        end: 'top 52%',
        scrub: 0.6
      }
    });
  });

  if (document.querySelector('.tradein-module')) {
    gsap.from('.tradein-module', {
      y: 44,
      opacity: 0,
      scale: 0.96,
      duration: 0.9,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: '.tradein-module',
        start: 'top 84%',
        once: true
      }
    });
  }

  // 7. Payment Bento 3D Perspective Cascade + Floating Orb Scroll Parallax
  if (document.querySelector('#payment-bento-grid .payment-card')) {
    gsap.from('#payment-bento-grid .payment-card', {
      y: 44,
      opacity: 0,
      scale: 0.96,
      rotateX: 5,
      transformPerspective: 1000,
      duration: 0.8,
      stagger: 0.09,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: '#payment-bento-grid',
        start: 'top 82%',
        once: true
      }
    });

    gsap.to('#payment-bento-grid .payment-orb', {
      y: -26,
      ease: 'none',
      scrollTrigger: {
        trigger: '#financiacion',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });
  }

  // 8. Showroom Split-Screen Reveal & Map Parallax
  if (document.querySelector('.showroom-info')) {
    gsap.from('.showroom-info', {
      y: 34,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: '#nuevo-local',
        start: 'top 78%',
        once: true
      }
    });
  }

  if (document.querySelector('.showroom-map')) {
    gsap.from('.showroom-map', {
      y: 44,
      opacity: 0,
      scale: 0.96,
      duration: 0.95,
      delay: 0.1,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: '#nuevo-local',
        start: 'top 78%',
        once: true
      }
    });

    mm.add('(min-width: 1024px)', () => {
      gsap.to('.showroom-map', {
        y: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: '#nuevo-local',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    });
  }

  // 9. Footer Grand Reveal
  if (document.querySelector('.footer-reveal')) {
    gsap.from('.footer-reveal', {
      y: 32,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 88%',
        once: true
      }
    });
  }

  ScrollTrigger.refresh();
}

function initPaymentCardEffects() {
  if (!window.matchMedia || !window.matchMedia('(hover: hover)').matches) return;
  document.querySelectorAll('.payment-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
}

// ==========================================================================
// BOOTSTRAP
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadPersistedState();

  const rateLabel = document.getElementById('catalog-rate-label');
  if (rateLabel) {
    rateLabel.textContent = `$${STORE_CONFIG.usdRate.toLocaleString('es-AR')}`;
  }

  syncCurrencyButtonsUI();
  renderCatalog();
  initTradeInSelectors();
  renderCart();
  initAdaptiveNavbar();
  initPaymentCardEffects();
  initAnimations();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggleCart(false);
      closeQuickView();
      toggleMobileMenu(false);
    }
  });
});
