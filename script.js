document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. MOBILE MENU LOGIC
    // ==========================================

    // Get menu DOM elements
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu state on hamburger click
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu automatically when a user clicks a link (UX improvement)
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle && navLinks) {
                menuToggle.classList.remove('is-active');
                navLinks.classList.remove('active');
            }
        });
    });

    // ==========================================
    // 2. CAROUSEL / SLIDESHOW LOGIC
    // ==========================================

    // Get carousel DOM elements
    const slides = document.querySelectorAll('.slide');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    // Configuration
    let currentSlideIndex = 0;
    const slideIntervalTime = 4000; // 4 seconds between slides
    let slideInterval; // Variable to hold the setInterval ID
    let isPlaying = true;

    // Function to show a specific slide
    function showSlide(index) {
        // Hide all slides first
        slides.forEach(slide => {
            slide.classList.remove('active-slide');
        });

        // Ensure index stays within bounds (looping)
        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = index;
        }

        // Show the targeted slide
        // Check if slides exist to avoid errors if array is empty
        if (slides.length > 0) {
            slides[currentSlideIndex].classList.add('active-slide');
        }
    }

    // Function to move to the next slide
    function nextSlide() {
        showSlide(currentSlideIndex + 1);
    }

    // Function to start the automatic slideshow
    function startSlideshow() {
        if (!isPlaying) {
            slideInterval = setInterval(nextSlide, slideIntervalTime);
            isPlaying = true;

            // Toggle button visibility safely
            if (playBtn) playBtn.style.display = 'none';
            if (pauseBtn) pauseBtn.style.display = 'inline-block';
        }
    }

    // Function to pause the automatic slideshow
    function pauseSlideshow() {
        if (isPlaying) {
            clearInterval(slideInterval);
            isPlaying = false;

            // Toggle button visibility safely
            if (pauseBtn) pauseBtn.style.display = 'none';
            if (playBtn) playBtn.style.display = 'inline-block';
        }
    }

    // Event Listeners for controls (check if buttons exist first)
    if (playBtn) playBtn.addEventListener('click', startSlideshow);
    if (pauseBtn) pauseBtn.addEventListener('click', pauseSlideshow);

    // Initialize: Start the slideshow automatically on load
    // We set isPlaying to false initially so startSlideshow logic runs correctly
    isPlaying = false;

    // Only start slideshow if there are slides present
    if (slides.length > 0) {
        startSlideshow();
    }
});