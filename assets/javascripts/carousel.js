function fetchCarousel() {
    // Sử dụng fetch để lấy nội dung của carousel
    fetch('/components/carousel.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Carousel').innerHTML = data;
        })
        .catch(error => console.error('Fetch error:', error));
}
document.addEventListener('DOMContentLoaded', function() {
    fetchCarousel();
});