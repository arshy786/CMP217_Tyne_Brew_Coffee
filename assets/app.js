// === Theme Toggle ===
const toggle = document.getElementById('themeToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}

// === Smooth Scroll ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behaviour: 'smooth' });
      }
    }
  });
});

// === Page Fade-In Animation ===
window.addEventListener('load', () => {
  document.body.style.opacity = 1;
});

// === Scroll to Top Button ===
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop?.classList.add('visible');
  } else {
    backToTop?.classList.remove('visible');
  }
});
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behaviour: 'smooth' }));

// === Dynamic Product Gallery (if used) ===
const images = [
  'dark.png', 'decaf.png', 'espresso.png', 'founder.png',
  'light.png', 'logo.png', 'medium.png', 'mug.png',
  'ringtons_biscuit_box.png', 'tyne_bridge.png', 'yorkshire_decaf.png',
  'yorkshire_tea.png', 'zuma_dark_hot_chocolate.png',
  'zuma_hot_chocolate.png', 'zuma_white_hot_chocolate.png'
];

const galleryGrid = document.getElementById('galleryGrid');
if (galleryGrid) {
  const fragment = document.createDocumentFragment();
  images.forEach(name => {
    const img = new Image();
    img.src = `images/${name}`;
    img.alt = 'Tyne Brew Coffee photo';
    img.loading = 'lazy';
    img.addEventListener('click', () => openLightboxByName(name));
    fragment.appendChild(img);
  });
  galleryGrid.appendChild(fragment);
}

// === Lightbox ===
let currentIndex = 0;
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const btnClose = document.querySelector('.lb-btn.close');
const btnPrev = document.querySelector('.lb-btn.prev');
const btnNext = document.querySelector('.lb-btn.next');

function openLightboxByName(name) {
  currentIndex = images.indexOf(name);
  lbImg.src = `images/${name}`;
  lightbox.style.display = 'flex';
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.style.display = 'none';
  lightbox.setAttribute('aria-hidden', 'true');
}

function show(delta) {
  if (!images.length) return;
  currentIndex = (currentIndex + delta + images.length) % images.length;
  lbImg.src = `images/${images[currentIndex]}`;
}

if (btnClose) btnClose.onclick = closeLightbox;
if (btnPrev) btnPrev.onclick = () => show(-1);
if (btnNext) btnNext.onclick = () => show(1);

document.addEventListener('keydown', (e) => {
  if (lightbox?.style.display === 'flex') {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') show(-1);
    if (e.key === 'ArrowRight') show(1);
  }
});

// === Testimonials Slider ===
const quotes = document.querySelectorAll('#quoteSlider blockquote');
let i = 0;
if (quotes.length) {
  quotes[0].classList.add('active');
  setInterval(() => {
    quotes[i].classList.remove('active');
    i = (i + 1) % quotes.length;
    quotes[i].classList.add('active');
  }, 3500);
}

// === Live Product Search ===
const searchInput = document.getElementById('productSearch');
const productCards = document.querySelectorAll('.product-card');

if (searchInput && productCards.length) {
  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    productCards.forEach(card => {
      const title = card.querySelector('h3')?.innerText.toLowerCase();
      const desc = card.querySelector('p')?.innerText.toLowerCase();
      const matches = title?.includes(term) || desc?.includes(term);
      card.style.display = matches ? 'block' : 'none';
    });
  });
}
