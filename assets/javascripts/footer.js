function fetchFooter() {
    // Sử dụng fetch để lấy nội dung của footer.html
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Fetch error:', error));
}
document.addEventListener('DOMContentLoaded', function() {
    fetchFooter();
});