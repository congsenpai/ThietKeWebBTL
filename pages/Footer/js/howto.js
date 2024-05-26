$(document).ready(function() {
    // Tạo hiệu ứng cho danh sách các mục dịch vụ
    $('.service-item').on('click', function() {
        $('.service-item').removeClass('active');
        $(this).addClass('active');
        
        var contentKey = $(this).data('content');
        var contentData = getContent(contentKey);
        
        $('#service-content').html('<h2>' + contentData.title + '</h2><p>' + contentData.body + '</p>');

        // Xử lý form liên hệ
        if (contentKey === 'contact') {
            handleContactForm();
        }
    });

    // Hiển thị nội dung cho các mục dịch vụ
    function getContent(key) {
        var contents = {
            contact: {
                title: "Liên hệ với Dịch vụ Khách hàng",
                body: "Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, vui lòng liên hệ với nhóm dịch vụ khách hàng của chúng tôi."
            }
        };
        return contents[key] || { title: "Nội dung không khả dụng", body: "Nội dung bạn đang tìm kiếm không khả dụng." };
    }
});
