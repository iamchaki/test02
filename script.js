document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MOBILE MENU LOGIC
    // ==========================================

    // Checking for both possible IDs from your snippets
    const menuToggle = document.getElementById('mobile-menu') || document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links') || document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Toggles active state for the hamburger icon and the link container
            menuToggle.classList.toggle('is-active'); // Common for hamburger animations
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu automatically when a user clicks a link (UX improvement)
        // Selects links within the nav container
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('is-active');
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 2. CAROUSEL / SLIDESHOW LOGIC
    // ==========================================

    const slides = document.querySelectorAll('.slide');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    let currentSlideIndex = 0;
    const slideIntervalTime = 4000;
    let slideInterval;
    let isPlaying = false; // Initialize as false to trigger startSlideshow() correctly

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active-slide');
        });

        // Loop boundaries
        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = index;
        }

        // Show the targeted slide
        if (slides.length > 0) {
            slides[currentSlideIndex].classList.add('active-slide');
        }
    }

    function nextSlide() {
        showSlide(currentSlideIndex + 1);
    }

    function startSlideshow() {
        if (!isPlaying) {
            slideInterval = setInterval(nextSlide, slideIntervalTime);
            isPlaying = true;

            if (playBtn) playBtn.style.display = 'none';
            if (pauseBtn) pauseBtn.style.display = 'inline-block';
        }
    }

    function pauseSlideshow() {
        if (isPlaying) {
            clearInterval(slideInterval);
            isPlaying = false;

            if (pauseBtn) pauseBtn.style.display = 'none';
            if (playBtn) playBtn.style.display = 'inline-block';
        }
    }

    // Event Listeners for carousel controls
    if (playBtn) playBtn.addEventListener('click', startSlideshow);
    if (pauseBtn) pauseBtn.addEventListener('click', pauseSlideshow);

    // Initialization
    if (slides.length > 0) {
        showSlide(0); // Ensure the first slide is visible immediately
        startSlideshow();
    }
});