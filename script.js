document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
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
        slides[currentSlideIndex].classList.add('active-slide');
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
            // Toggle button visibility
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'inline-block';
        }
    }

    // Function to pause the automatic slideshow
    function pauseSlideshow() {
        if (isPlaying) {
            clearInterval(slideInterval);
            isPlaying = false;
            // Toggle button visibility
            pauseBtn.style.display = 'none';
            playBtn.style.display = 'inline-block';
        }
    }

    // Event Listeners for controls
    playBtn.addEventListener('click', startSlideshow);
    pauseBtn.addEventListener('click', pauseSlideshow);

    // Initialize: Start the slideshow automatically on load
    // We set isPlaying to false initially so startSlideshow logic runs correctly
    isPlaying = false;
    startSlideshow();
});