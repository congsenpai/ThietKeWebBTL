// Hàm xử lý khi click vào icon
function Showinput() {
const searchInput = document.getElementById('searchInput');
const searchIcon= document.getElementById('searchIcon');
  // Hiển thị input và thêm class 'active' để mở rộng
  searchInput.classList.remove('d-none');
  searchIcon.classList.add('d-none');
  
  searchInput.classList.add('active');
  
  // Đặt focus vào input khi hiển thị
  searchInput.focus();
  
  // Xử lý sự kiện mất focus để ẩn input khi không còn focus nữa
  searchInput.addEventListener('blur', function() {
    searchInput.classList.remove('active');
    searchInput.classList.add('d-none');
    searchIcon.classList.remove('d-none');
  });
}
// Hàm xử lý sự kiện khi nhấn nút enter
function handleEnter(event) {
  if (event.keyCode === 13) {
    searchProducts()
  }
}
// Hàm tìm kiếm sản phẩm từ ô input
function searchProducts() {
  // Lấy giá trị từ ô input
  var input = document.getElementById('searchInput').value.toUpperCase();
  
  // Lấy danh sách các sản phẩm
  var products = document.getElementById('productList').getElementsByClassName('col-md-4');
  
  // Duyệt qua từng sản phẩm và ẩn/hiển thị sản phẩm tương ứng
  for (var i = 0; i < products.length; i++) {
      var title = products[i].getElementsByClassName('img-box--Title')[0];
      if (title.innerText.toUpperCase().indexOf(input) > -1) {
          products[i].style.display = '';
      } else {
          products[i].style.display = 'none';
      }
  }
}

