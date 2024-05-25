$(document).ready(function() {
    // Tạo hiệu ứng cho danh sách các mục Quy định
    $('.policy-item').on('click', function() {
        $('.policy-item').removeClass('active');
        $(this).addClass('active');
        
        var contentKey = $(this).data('content');
        var contentData = getContent(contentKey);
        
        $('#policy-content').html('<h2>' + contentData.title + '</h2><p>' + contentData.body + '</p>');
    });

    // Hiển thị nội dung cho các mục Quy định
    function getContent(key) {
        var contents = {
            warranty: {
                title: "Chính sách bảo hành",
                body: "Chính sách bảo hành áp dụng cho tất cả các sản phẩm được mua tại cửa hàng của chúng tôi. Chúng tôi cam kết cung cấp dịch vụ bảo hành chất lượng và hiệu quả, nhằm đảm bảo sự hài lòng của khách hàng. Vui lòng đọc kỹ và tuân thủ các điều khoản trong chính sách bảo hành của chúng tôi."
            },
            return: {
                title: "Chính sách đổi trả",
                body: "Chính sách đổi trả áp dụng cho các sản phẩm có điều kiện đổi trả được quy định cụ thể trong thời gian nhất định sau khi mua hàng. Vui lòng kiểm tra điều khoản đổi trả trước khi thực hiện."
            },
            repair: {
                title: "Chính sách sửa chữa",
                body: "Chính sách sửa chữa áp dụng cho các sản phẩm mà khách hàng gặp phải sự cố hoặc hỏng hóc sau thời gian sử dụng. Chúng tôi sẽ cung cấp dịch vụ sửa chữa nhanh chóng và chuyên nghiệp."
            }
        };
        return contents[key] || { title: "Nội dung không khả dụng", body: "Nội dung bạn đang tìm kiếm không khả dụng." };
    }
});
