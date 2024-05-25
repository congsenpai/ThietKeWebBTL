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
