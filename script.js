// script.js
document.addEventListener('DOMContentLoaded', () => {
    
    // --- NAVBAR LOGIC ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if(hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- CAROUSEL LOGIC (Your existing code) ---
    const slides = document.querySelectorAll('.slide');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    // Configuration
    let currentSlideIndex = 0;
    const slideIntervalTime = 4000;
    let slideInterval;
    let isPlaying = true;

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active-slide');
        });

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

    // Initialize
    isPlaying = false;
    startSlideshow();
});