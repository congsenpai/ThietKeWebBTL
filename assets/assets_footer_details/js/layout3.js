// When the document is ready
$(document).ready(function() {
    // Variables for the slider
    let currentIndex = 0;
    const reviewCount = $('.review').length;
    const reviewWidth = $('.review').width();
    const sliderSpeed = 3000; // Time in milliseconds (3 seconds)

    // Function to slide to the next review
    function slideNext() {
        currentIndex++;
        if (currentIndex >= reviewCount) {
            currentIndex = 0;
        }
        $('.reviews').css('transform', 'translateX(' + (-currentIndex * reviewWidth) + 'px)');
    }

    // Automatically slide to the next review every few seconds
    const autoSlide = setInterval(slideNext, sliderSpeed);

    // Event handlers for navigation buttons
    $('.prev').on('click', function() {
        clearInterval(autoSlide); // Stop auto-sliding
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = reviewCount - 1;
        }
        $('.reviews').css('transform', 'translateX(' + (-currentIndex * reviewWidth) + 'px)');
        setInterval(autoSlide, sliderSpeed); // Restart auto-sliding
    });

    $('.next').on('click', function() {
        clearInterval(autoSlide); // Stop auto-sliding
        slideNext();
        setInterval(autoSlide, sliderSpeed); // Restart auto-sliding
    });
});
