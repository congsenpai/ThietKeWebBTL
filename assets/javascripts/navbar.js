// navbar.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/ThietKeWebBTL/components/navbar.html')
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


function adjustSidebarContentWidth() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var sidebarContent = document.querySelector(".sidebar__content");

  // Kiểm tra kích thước màn hình
  if (screenWidth < 768) {
    sidebarContent.style.width = "100%"; // Áp dụng width mới là 100%
  } else {
    sidebarContent.style.width = "50%"; // Áp dụng width mới là 50% nếu không
  }
}

// Gọi hàm khi trang được tải và khi kích thước cửa sổ thay đổi
window.addEventListener("DOMContentLoaded", adjustSidebarContentWidth);
window.addEventListener("resize", adjustSidebarContentWidth);
