// Multi-Page Router System
const pages = {
    home: document.getElementById('page-home'),
    content: document.getElementById('page-content'),
    gallery: document.getElementById('page-gallery'),
    about: document.getElementById('page-about'),
    references: document.getElementById('page-references')
};

function navigateTo(pageKey) {
    Object.keys(pages).forEach(key => {
        if (pages[key]) pages[key].classList.remove('active-page');
    });

    if (pages[pageKey]) {
        pages[pageKey].classList.add('active-page');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeNav();
}

// Global Nav Handlers
document.getElementById('home-logo-btn').addEventListener('click', () => navigateTo('home'));
document.getElementById('btn-explore').addEventListener('click', () => navigateTo('content'));

document.getElementById('nav-home').addEventListener('click', (e) => { e.preventDefault(); navigateTo('home'); });
document.getElementById('nav-content').addEventListener('click', (e) => { e.preventDefault(); navigateTo('content'); });
document.getElementById('nav-gallery').addEventListener('click', (e) => { e.preventDefault(); navigateTo('gallery'); });
document.getElementById('nav-about').addEventListener('click', (e) => { e.preventDefault(); navigateTo('about'); });
document.getElementById('nav-references').addEventListener('click', (e) => { e.preventDefault(); navigateTo('references'); });

// Side Drawer Controls
const menuTrigger = document.getElementById('menu-trigger');
const sideNav = document.getElementById('side-nav');
const navOverlay = document.getElementById('nav-overlay');

function openNav() {
    sideNav.classList.add('active');
    navOverlay.classList.add('active');
}

function closeNav() {
    sideNav.classList.remove('active');
    navOverlay.classList.remove('active');
}

menuTrigger.addEventListener('click', () => {
    if (sideNav.classList.contains('active')) {
        closeNav();
    } else {
        openNav();
    }
});

navOverlay.addEventListener('click', closeNav);

// Create the audio object
const backgroundMusic = new Audio('Kahimanawari.mp3');
const musicToggleBtn = document.getElementById('music-toggle');

// Enable continuous looping
backgroundMusic.loop = true;

// Set default volume (0.0 to 1.0)
backgroundMusic.volume = 0.5;

// Function to start or pause audio after user interaction
function startAudio() {
    if (backgroundMusic.paused) {
        backgroundMusic.play().then(() => {
            document.removeEventListener('click', startAudio);
            document.removeEventListener('keydown', startAudio);
        }).catch(error => {
            console.log('Autoplay prevented:', error);
        });
    } else {
        backgroundMusic.pause();
    }
}

if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        startAudio();
    });
}

// Listen for the first user click or key press
document.addEventListener('click', startAudio);
document.addEventListener('keydown', startAudio);

// Interactive Search Engine
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const searchableTopics = [
    { title: 'Paniniwalang Anitismo (Pangunahing Tampok)', page: 'content' },
    { title: 'Ang Senakulo', page: 'gallery', cardTitle: 'Ang Senakulo' },
    { title: 'Pagmamano', page: 'gallery', cardTitle: 'Pagmamano' },
    { title: 'Simbang Gabi at Misa de Gallo', page: 'gallery', cardTitle: 'Simbang Gabi' },
    { title: 'Pista ng Poong Nazareno', page: 'gallery', cardTitle: 'Poong Nazareno' },
    { title: 'Philippine Folk Catholicism', page: 'gallery', cardTitle: 'Folk Catholicism' },
    { title: 'Pahiyas Festival', page: 'gallery', cardTitle: 'Pahiyas Festival' },
    { title: 'Pista ng Santo Niño', page: 'gallery', cardTitle: 'Pista ng Santo Niño' },
    { title: 'Pabasa ng Pasyon', page: 'gallery', cardTitle: 'Pabasa ng Pasyon' },
    { title: 'Visita Iglesia', page: 'gallery', cardTitle: 'Visita Iglesia' },
    { title: 'Eid al-Fitr at Eid al-Adha', page: 'gallery', cardTitle: 'Eid al-Fitr & Eid al-Adha' },
    { title: 'Tungkol sa Exhibit', page: 'about' },
    { title: 'Sanggunian at Koponan', page: 'references' }
];

function normalizeCardTitle(title) {
    return (title || '').replace(/\s+/g, ' ').trim().toLowerCase();
}

function getGalleryCardByTitle(targetTitle) {
    const normalizedTarget = normalizeCardTitle(targetTitle);

    return Array.from(document.querySelectorAll('.gallery-card')).find((card) => {
        const heading = card.querySelector('.card-caption h3');
        const cardTitle = heading ? heading.textContent : card.getAttribute('data-card-title') || '';
        return normalizeCardTitle(cardTitle) === normalizedTarget;
    }) || null;
}

function openGalleryCard(title) {
    navigateTo('gallery');

    setTimeout(() => {
        const card = getGalleryCardByTitle(title);
        if (!card) return;

        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        card.click();
    }, 180);
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (query.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    const matches = searchableTopics.filter(item => 
        item.title.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
        matches.forEach(match => {
            const div = document.createElement('div');
            div.textContent = match.title;
            div.addEventListener('click', () => {
                searchResults.style.display = 'none';
                searchInput.value = '';

                if (match.page === 'gallery' && match.cardTitle) {
                    openGalleryCard(match.cardTitle);
                    return;
                }

                navigateTo(match.page);
            });
            searchResults.appendChild(div);
        });
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
});

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
    }
});

// Infinite Loop & Drag Carousel with Mobile Tap Fix
const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselTrack = document.getElementById('carousel-track');
let autoScrollTimer = null;
let isMouseDown = false;
let isDragging = false;
let startX = 0;
let scrollLeftPos = 0;
const isHoverCapable = window.matchMedia('(hover: hover)').matches;

// Clone track cards for infinite looping
const originalCards = Array.from(carouselTrack.children);
originalCards.forEach(card => {
    const clone = card.cloneNode(true);
    carouselTrack.appendChild(clone);
});

function getOriginalWidth() {
    return carouselTrack.scrollWidth / 2;
}

function startAutoScroll() {
    if (autoScrollTimer) return;
    autoScrollTimer = setInterval(() => {
        const halfWidth = getOriginalWidth();
        if (carouselWrapper.scrollLeft >= halfWidth) {
            carouselWrapper.scrollBehavior = 'auto';
            carouselWrapper.scrollLeft -= halfWidth;
        } else {
            carouselWrapper.scrollBehavior = 'auto';
            carouselWrapper.scrollLeft += 1;
        }
    }, 20);
}

function stopAutoScroll() {
    clearInterval(autoScrollTimer);
    autoScrollTimer = null;
}

// Pause rotation on hover for desktop
if (isHoverCapable) {
    carouselWrapper.addEventListener('mouseenter', stopAutoScroll);
    carouselWrapper.addEventListener('mouseleave', () => {
        if (!isMouseDown) startAutoScroll();
    });
}

// Mouse Drag Events
carouselWrapper.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    isDragging = false;
    carouselWrapper.classList.add('grabbing');
    startX = e.pageX - carouselWrapper.offsetLeft;
    scrollLeftPos = carouselWrapper.scrollLeft;
    stopAutoScroll();
});

carouselWrapper.addEventListener('mouseleave', () => {
    isMouseDown = false;
    carouselWrapper.classList.remove('grabbing');
    if (!isHoverCapable) startAutoScroll();
});

carouselWrapper.addEventListener('mouseup', () => {
    isMouseDown = false;
    carouselWrapper.classList.remove('grabbing');
    if (!isHoverCapable) startAutoScroll();
});

carouselWrapper.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - carouselWrapper.offsetLeft;
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 5) {
        isDragging = true;
    }
    carouselWrapper.scrollLeft = scrollLeftPos - walk;

    const halfWidth = getOriginalWidth();
    if (carouselWrapper.scrollLeft >= halfWidth) {
        carouselWrapper.scrollLeft -= halfWidth;
        startX = e.pageX - carouselWrapper.offsetLeft;
        scrollLeftPos = carouselWrapper.scrollLeft;
    } else if (carouselWrapper.scrollLeft <= 0) {
        carouselWrapper.scrollLeft += halfWidth;
        startX = e.pageX - carouselWrapper.offsetLeft;
        scrollLeftPos = carouselWrapper.scrollLeft;
    }
});

// Mobile Touch Events
carouselWrapper.addEventListener('touchstart', () => {
    stopAutoScroll();
}, { passive: true });

carouselWrapper.addEventListener('touchend', () => {
    startAutoScroll();
}, { passive: true });

// Attach direct tap listeners to cards to prevent drag interference
document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
            isDragging = false;
            return;
        }
    });
});

startAutoScroll();

// Modal Logic
function openModal(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerHTML = description;
    document.getElementById('details-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('details-modal').style.display = 'none';
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('details-modal');
    if (e.target === modal) closeModal();
});
