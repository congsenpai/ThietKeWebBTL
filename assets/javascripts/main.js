function fetchhotProduct() {
    // Sử dụng fetch để lấy nội dung của footer.html
    fetch('/components/hot__product.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('hotProduct__container').innerHTML = data;
        })
        .catch(error => console.error('Fetch error:', error));
}
document.addEventListener('DOMContentLoaded', function() {
    fetchhotProduct();
});