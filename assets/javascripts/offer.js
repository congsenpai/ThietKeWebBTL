document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.offer__container button');
    const items = document.querySelectorAll('#productList .img-box-offer');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const tag = this.getAttribute('data-tag');
            filterItems(tag);
        });
    });

    function filterItems(tag) {
        items.forEach(item => {
            if (tag === 'all') {
                item.style.display = 'flex';
            } else {
                const itemTags = item.getAttribute('data-tags').split(' ');
                if (itemTags.includes(tag)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            }
        });
        // Sau khi lọc sản phẩm xong, gửi lại chiều cao của iframe
        sendHeight();
    }

    // Hàm gửi chiều cao của document.body tới iframe cha
    function sendHeight() {
        var height = document.body.scrollHeight;
        parent.postMessage({ iframe: 'offerFrame', height: height }, '*');
    }

    // Gửi chiều cao khi trang đã tải hoàn toàn và khi cửa sổ được thay đổi kích thước
    window.onload = sendHeight;
    window.onresize = sendHeight;
});
