// When the document is ready
$(document).ready(function() {
    // Handle click event for each support card
    $('.support-card').click(function() {
        // Find the related toggle content
        var toggleContent = $(this).find('.toggle-content');
        
        // Show or hide the toggle content with slide animation
        toggleContent.slideToggle();
        
        // Toggle the 'active' class for styling
        $(this).toggleClass('active');
    });
});
