// Theme Toggle Switch (Default: Light Theme)
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

themeToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});

// Gallery Topic Data Array
const galleryTopics = [
    {
        title: "Ang Senakulo",
        image: "https://brahmineyes.wordpress.com/wp-content/uploads/2014/04/dsc_0064-2.jpg",
        description: "Ang Senakulo ay isang tradisyunal na dulaang panrelihiyon na ginaganap sa kalsada tuwing Semana Santa na naglalarawan sa paghihirap at kamatayan ni Hesukristo. Nagmula ang pangalan nito sa salitang Cenaculo na tumutukoy sa Upper Room kung saan ginanap ang Huling Hapunan. Nagsimula ang pagtatanghal nito noong hulihan ng ika-17 siglo o unang bahagi ng ika-18 siglo mula sa mga aklat ng Pasyon. Karaniwan itong isinasagawa sa mga kalsada, bayan, at plaza. <br><br><strong>Sources:</strong> <a href='https://www.nationalmuseum.gov.ph/2022/04/15/senakulo/' target='_blank'>National Museum of the Philippines: Senakulo</a>.",
        fact: "Ang ilang pagtatanghal ng Senakulo sa Pampanga at Bulacan ay tumatagal ng hanggang pitong sunod-sunod na gabi bago ang Biyernes Santo!"
    },
    {
        title: "Pagmamano",
        image: "https://substackcdn.com/image/fetch/$s_!t3JL!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F91fc8068-f607-4704-9b92-36bc0b89203d_1990x1252.jpeg",
        description: "Kaugaliang nagpapakita ng paggalang sa nakatatanda sa pamamagitan ng paghawak sa noo ng nakababata gamit ang likod ng kamay ng nakatatanda. Nagmula ang salitang mano sa wikang Espanyol na nangangahulugang kamay. Nagsimula ito noong panahon ng Espanyol mula sa paghalik sa kamay ng mga prayle at naging tradisyon ng pamilya. Ang paghingi ng basbas na ito sa pamamagitan ng pagsabi ng mano po ay pinaniniwalaang nagdudulot ng kasaganaan at kaligtasan. <br><br><strong>Sources:</strong> <a href='http://www.ethnicgroupsphilippines.com/pagmamano-a-uniquely-filipino-gesture-of-respect/' target='_blank'>Pagmamano: Gesture of Respect</a>.",
        fact: "Bukod sa Pilipinas, matatagpuan din ang katulad na kaugalian ng paggalang sa Indonesia at Malaysia na tinatawag nilang 'Sungkeman'."
    },
    {
        title: "Simbang Gabi at Misa de Gallo",
        image: "https://1cms-img.imgix.net/Simbang-Gabi-Marikina-2023.JPG",
        description: "Ang Simbang Gabi o Misa de Gallo (Misa ng Tandang) ay isang siyam na araw na nobena na nagpaparangal sa Mahal na Birheng Maria. Nagsisimula ito sa Disyembre 16 (o Disyembre 15 kung gabi) at nagtatapos sa Disyembre 24. Inaprubahan ng Santa Sede ang mga Misa sa madaling araw noong 1600s upang mapaunlakan ang mga magsasaka at mangingisda bago simulan ang trabaho. <br><br><strong>Sources:</strong> <a href='https://dioceseofbrooklyn.org/ethnic-apostolates/filipino/simbang-gabi/' target='_blank'>Diocese of Brooklyn: Simbang Gabi Tradition</a>.",
        fact: "Ayon sa katutubong paniniwala, ang sinumang makakakompleto ng siyam na araw ng Simbang Gabi ay matutupad ang isang nakatagong kahilingan."
    },
    {
        title: "Pista ng Poong Nazareno",
        image: "https://www.occatholic.com/wp-content/uploads/2024/03/4x3Nazareno3.png",
        description: "Ang imahen ng Poong Nazareno ay inukit ng isang iskultor na Mehikano at dinala sa Maynila noong 1606 ng mga paring Augustinian Recollect via galleon. Inilipat ito sa Simbahan ng Quiapo noong 1787, na siyang pinagmulan ng prusisyon ng Traslacion. Sa pamamagitan ng paglalakad nang nakayapak at paghila sa andas, ipinapakita ng mga deboto ang panata, sakripisyo, at utang na loob sa Diyos na nakikiramay sa dusa ng tao. <br><br><strong>Sources:</strong> Minor Basilica of the Black Nazarene Records & Research Documentation.",
        fact: "Ang maitim na kulay ng estatwa ay hindi dahil sa sunog sa barko tulad ng karaniwang paniniwala, kundi gawa ito sa mesquite wood na likas na madilim ang kulay."
    },
    {
        title: "Philippine Folk Catholicism",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Agimat.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        description: "Ang Philippine folk Catholicism ay ang syncretic blend ng Spanish-colonial Catholicism at pre-Hispanic indigenous animism. Isinama ng mga Pilipino ang mga ritwal na animista sa mga Kristiyanong balangkas upang mapanatili ang kanilang kultura. Makikita ito sa paggamit ng anting-anting, oraciones ng mga albularyo, at pagtrato sa mga santo na katulad ng mga anito. Ang mga kapistahan tulad ng Sayaw ng Pagkamayabong sa Obando ay direktang umunlad mula sa mga ritwal na ito. <br><br><strong>Sources:</strong> <a href='https://thenonviolenceproject.wisc.edu/2023/05/22/deconstructing-folk-catholicism/' target='_blank'>Deconstructing Folk Catholicism (UW-Madison)</a>.",
        fact: "Maraming anting-anting ang may nakatagong Latin-sounding inscriptions na halo ng Espanyol, Latin, at katutubong wika para sa proteksyon."
    },
    {
        title: "Pahiyas Festival",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlcHTMEcdNjwPAqC04b5wMfZJHqZaStoUaWkBRLYS2dGu7iCvGRGG5Ug&s=10",
        description: "Ginaganap ang Pahiyas Festival tuwing Mayo 15 sa Lucban, Quezon bilang pagpaparangal kay San Isidro Labrador para sa masaganang ani. Pinalamutian ng mga residente ang kanilang mga bahay gamit ang mga lokal na ani at kiping o makukulay na wafer ng bigas. Nagsimula ito nang ipakita ng mga magsasaka ang ani sa harapan ng bahay upang mabasbasan ng pari. Tampok din dito ang Prusisyon ni San Isidro, mga lucbanin o higanteng puppet, at lokal na lutuin tulad ng Pancit Habhab at Lucban Longganisa. <br><br><strong>Sources:</strong> <a href='https://www.agoda.com/travel-guides/philippines/pahiyas-festival-discover-the-colorful-celebration-in-lucban/' target='_blank'>Pahiyas Festival Guide in Lucban</a>.",
        fact: "Ang kiping na ginagamit sa dekorasyon ay gawa sa galapong ng bigas at pwede ring ihawin o iprito para kainin pagkatapos ng festival!"
    },
    {
        title: "Pista ng Santo Niño",
        image: "https://i0.wp.com/rmn.ph/wp-content/uploads/2023/01/STO-NINO-1.jpg?fit=1280%2C720&ssl=1",
        description: "Ipinagdiriwang tuwing ikatlong linggo ng Enero ang Kapistahan ng Santo Niño bilang pagpaparangal sa Banal na Sanggol na si Hesukristo. Dinala ni Ferdinand Magellan ang imahe sa Cebu noong 1521 at ibinigay kina Rajah Humabon at Reyna Juana. Ang debosyong ito ay nagbunga ng malalaking pagdiriwang tulad ng Sinulog Festival, Ati-Atihan sa Aklan, Dinagyang sa Iloilo, at Binanog Festival. <br><br><strong>Sources:</strong> <a href='https://www.sanluispampanga.gov.ph/happy-fiesta-sto-nino/' target='_blank'>LGU San Luis Pampanga: Sto. Niño Documentation</a>.",
        fact: "Ang Sto. Niño de Cebu ang pinakamatandang Kristiyanong relikya at imahen sa buong kapuluan ng Pilipinas."
    },
    {
        title: "Pabasa ng Pasyon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEQOxG129RntytZhr5tDrpXeplPhlQfZTaucUJIhC4wFKDh5ubc67GCwY&s=10",
        description: "Ang Pabasa ng Pasyon ay ang patuloy na pag-awit o pagbigkas sa buhay, pagdurusa, kamatayan, at muling pagkabuhay ni Hesus tuwing Mahal na Araw. Nagsimula ito noong ika-17 siglo gamit ang mga aklat tulad ng Pasyon Henesis (1814). Isinasagawa ito sa mga simbahan, kapilya, o tirahan sa loob ng 12 hanggang 24 na oras bilang sagradong panata. <br><br><strong>Sources:</strong> <a href='https://www.catholicsandcultures.org/philippines-centuries-old-tradition-chanting-passion-continues' target='_blank'>Catholics & Cultures: Chanting Passion</a>.",
        fact: "Ang melody ng pag-awit sa Pasyon ay nag-iiba ayon sa rehiyon; ang iba ay gumagamit pa ng mga modernong pop o kundiman tunes para rito."
    },
    {
        title: "Visita Iglesia",
        image: "https://media.interaksyon.com/wp-content/uploads/2020/01/Churchgoers-in-Manila-640x427.jpg",
        description: "Ang Visita Iglesia ay ang pagbisita sa pitong simbahan tuwing Huwebes Santo upang samahan si Hesus sa kanyang huling pitong paglalakbay mula sa pag-aresto hanggang sa pagpapako sa krus. Isa itong pagninilay-nilay sa Banal na Sakramento na nagpapakita ng ugnayan ng pananampalataya, arkitektura, at paglalakbay ng komunidad. <br><br><strong>Sources:</strong> <a href='https://www.aimsmuseomaritimo.com/post/pathways-of-faith-the-story-of-the-philippine-visita-iglesia' target='_blank'>AIMS Museo Maritimo: Visita Iglesia</a>.",
        fact: "Nagmula ang tradisyong ito sa Roma kung saan binibisita ng mga peregrino ang pitong pangunahing basilika ng lungsod bilang penitensya."
    },
    {
        title: "Eid al-Fitr at Eid al-Adha",
        image: "https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/eid-al-fitr-gettyimages-1148084709?_a=BAVMn6E80",
        description: "Ang Eid al-Fitr (pagtatapos ng Ramadan) at Eid al-Adha (Pista ng Sakripisyo) ay mahahalagang selebrasyon na nagpapakita ng espiritual na damdamin, pagkakaisa, at kabaitan ng mga Muslim na Pilipino. Tampok dito ang maagang pananalangin sa mga moske, pagkakasalo sa pagkain, at pagbibigay ng zakat sa mga nangangailangan. Ipinapakita rin nito ang pamana ng 13 etnolinguistikong grupo ng Muslim sa bansa. <br><br><strong>Sources:</strong> <a href='https://www.twinkl.com.au/blog/what-is-the-difference-between-eid-al-fitr-and-eid-al-adha-ramadan-early-years' target='_blank'>Twinkl: Eid Celebrations Guide</a>.",
        fact: "Ang Islam ay dumating sa Pilipinas noong ika-14 na siglo sa pamamagitan ng Arabong mangangalakal na si Makhdum Karim sa Simunul, Tawi-Tawi."
    }
];

let currentCardIndex = 0;

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

// Audio Player
const backgroundMusic = new Audio('Kahimanawari.mp3');
const musicToggleBtn = document.getElementById('music-toggle');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;

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

document.addEventListener('click', startAudio);
document.addEventListener('keydown', startAudio);

// Interactive Search Engine
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const searchableTopics = [
    { title: 'Paniniwalang Anitismo (Pangunahing Tampok)', page: 'content' },
    { title: 'Ang Senakulo', page: 'gallery', cardIndex: 0 },
    { title: 'Pagmamano', page: 'gallery', cardIndex: 1 },
    { title: 'Simbang Gabi at Misa de Gallo', page: 'gallery', cardIndex: 2 },
    { title: 'Pista ng Poong Nazareno', page: 'gallery', cardIndex: 3 },
    { title: 'Philippine Folk Catholicism', page: 'gallery', cardIndex: 4 },
    { title: 'Pahiyas Festival', page: 'gallery', cardIndex: 5 },
    { title: 'Pista ng Santo Niño', page: 'gallery', cardIndex: 6 },
    { title: 'Pabasa ng Pasyon', page: 'gallery', cardIndex: 7 },
    { title: 'Visita Iglesia', page: 'gallery', cardIndex: 8 },
    { title: 'Eid al-Fitr at Eid al-Adha', page: 'gallery', cardIndex: 9 },
    { title: 'Tungkol sa Exhibit', page: 'about' },
    { title: 'Sanggunian at Koponan', page: 'references' }
];

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

                if (match.page === 'gallery' && match.cardIndex !== undefined) {
                    navigateTo('gallery');
                    setTimeout(() => openModal(match.cardIndex), 180);
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

// Carousel Smooth Auto-Scroll
const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselTrack = document.getElementById('carousel-track');
let autoScrollTimer = null;
let isMouseDown = false;
let isDragging = false;
let startX = 0;
let scrollLeftPos = 0;
const isHoverCapable = window.matchMedia('(hover: hover)').matches;

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
            carouselWrapper.scrollLeft -= halfWidth;
        }
        carouselWrapper.scrollLeft += 1;
    }, 20);
}

function stopAutoScroll() {
    clearInterval(autoScrollTimer);
    autoScrollTimer = null;
}

if (isHoverCapable) {
    carouselWrapper.addEventListener('mouseenter', stopAutoScroll);
    carouselWrapper.addEventListener('mouseleave', () => {
        if (!isMouseDown) startAutoScroll();
    });
}

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

carouselWrapper.addEventListener('touchstart', () => {
    stopAutoScroll();
}, { passive: true });

carouselWrapper.addEventListener('touchend', () => {
    startAutoScroll();
}, { passive: true });

function handleCardClick(event, index) {
    if (isDragging) return;
    openModal(index);
}

startAutoScroll();

// Modal Logic & In-Card Topic Navigation
function openModal(index) {
    currentCardIndex = index;
    const item = galleryTopics[currentCardIndex];

    document.getElementById('modal-image').src = item.image;
    document.getElementById('modal-image').alt = item.title;
    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('modal-description').innerHTML = item.description;
    document.getElementById('modal-fact-text').innerText = item.fact;

    const detailsElement = document.getElementById('modal-fun-fact');
    detailsElement.removeAttribute('open');

    document.getElementById('details-modal').style.display = 'flex';
}

function navigateCardTopic(direction) {
    currentCardIndex += direction;
    if (currentCardIndex < 0) {
        currentCardIndex = galleryTopics.length - 1;
    } else if (currentCardIndex >= galleryTopics.length) {
        currentCardIndex = 0;
    }
    openModal(currentCardIndex);
}

function closeModal() {
    document.getElementById('details-modal').style.display = 'none';
}

window.addEventListener('click', (e) => {
    const modal = document.getElementById('details-modal');
    if (e.target === modal) closeModal();
});
