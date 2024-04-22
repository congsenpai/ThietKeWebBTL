function modalOn() {
    document.getElementById('modal').style.display = 'block';
}
function modalOff() {
    document.getElementById('modal').style.display = 'none';
}
function fetchNavbar() {
    // Sử dụng fetch để lấy nội dung của navbar.html
    fetch('/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar__big').innerHTML = data;
        })
        .catch(error => console.error('Fetch error:', error));
}
function adjustSidebarContentWidth() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var sidebarContent = document.querySelector('.sidebar__content');

    // Kiểm tra kích thước màn hình
    if (screenWidth < 768) {
        sidebarContent.style.width = '100%'; // Áp dụng width mới là 100%
    } else {
        sidebarContent.style.width = '50%'; // Áp dụng width mới là 50% nếu không
    }
}

// Gọi hàm khi trang được tải và khi kích thước cửa sổ thay đổi
window.addEventListener('DOMContentLoaded', adjustSidebarContentWidth);
window.addEventListener('resize', adjustSidebarContentWidth);



window.onload = fetchNavbar;



