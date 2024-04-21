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

window.onload = fetchNavbar;
