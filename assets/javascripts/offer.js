// script.js
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
    }
});
