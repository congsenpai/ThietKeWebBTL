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
// navbar.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar__big').innerHTML = data;

            // Thực hiện thao tác với các phần tử sau khi đã chèn xong
            const navbarItems = document.getElementsByClassName("navbar__item");
            Array.from(navbarItems).forEach(item => {
                item.addEventListener('mouseover', () => {
                    modalOn();
                });
                item.addEventListener('mouseout', () => {
                    modalOff();
                });
            });
        });
});