// === Theme Toggle ===
const toggle = document.getElementById('themeToggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}

// === Gallery Images ===
// (update if you add or rename files in your images/ folder)
const images = [
  'dark.png',
  'decaf.png',
  'espresso.png',
  'founder.png',
  'light.png',
  'logo.png',
  'medium.png',
  'mug.png',
  'ringtons_biscuit_box.png',
  'tyne_bridge.png',
  'yorkshire_decaf.png',
  'yorkshire_tea.png',
  'zuma_dark_hot_chocolate.png',
  'zuma_hot_chocolate.png',
  'zuma_white_hot_chocolate.png'
];

// Build gallery
const galleryGrid = document.getElementById('galleryGrid');
if (galleryGrid) {
  const fragment = document.createDocumentFragment();
  images.forEach((name) => {
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
  if (lightbox && lightbox.style.display === 'flex') {
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
