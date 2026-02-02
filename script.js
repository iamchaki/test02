document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. NEW: Hamburger Menu Logic ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle the .active class on the menu and the button
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // --- 2. EXISTING: Slideshow Logic ---
    const slides = document.querySelectorAll('.slide');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    let currentSlideIndex = 0;
    const slideIntervalTime = 4000; 
    let slideInterval; 
    let isPlaying = true;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active-slide'));

        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = index;
        }

        slides[currentSlideIndex].classList.add('active-slide');
    }

    function nextSlide() {
        showSlide(currentSlideIndex + 1);
    }

    function startSlideshow() {
        if (!isPlaying) {
            slideInterval = setInterval(nextSlide, slideIntervalTime);
            isPlaying = true;
            if(playBtn) playBtn.style.display = 'none';
            if(pauseBtn) pauseBtn.style.display = 'inline-block';
        }
    }

    function pauseSlideshow() {
        if (isPlaying) {
            clearInterval(slideInterval);
            isPlaying = false;
            if(pauseBtn) pauseBtn.style.display = 'none';
            if(playBtn) playBtn.style.display = 'inline-block';
        }
    }

    if(playBtn) playBtn.addEventListener('click', startSlideshow);
    if(pauseBtn) pauseBtn.addEventListener('click', pauseSlideshow);

    // Start immediately
    isPlaying = false;
    startSlideshow();
});
// Expertise Data
const expertiseData = [
    { icon: 'fa-home', title: 'Residential Construction', desc: '...' },
    { icon: 'fa-building', title: 'Commercial Development', desc: '...' },
    { icon: 'fa-archway', title: 'Infrastructure & Civil', desc: '...' } // Changed fa-bridge to fa-archway
];S