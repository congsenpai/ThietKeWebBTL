$(document).ready(function() {
    // Xử lý khi nhấp vào các mục trong danh sách chính sách
    $('.privacy-policy-item').on('click', function() {
        $('.privacy-policy-item').removeClass('active');
        $(this).addClass('active');
        
        var contentKey = $(this).data('content');
        var contentData = getContent(contentKey);
        
        $('#privacy-policy-content').html('<h2>' + contentData.title + '</h2><p>' + contentData.body + '</p>');
    });

    // Lấy nội dung cho các mục chính sách
    function getContent(key) {
        var contents = {
            general: {
                title: "Tổng quan",
                body: "Chào mừng bạn đến trang Chính sách bảo mật. Ở đây, bạn có thể tìm thông tin về các chủ đề liên quan đến thực hành bảo mật của chúng tôi."
            },
            personalData: {
                title: "Dữ liệu cá nhân",
                body: "Thông tin về việc thu thập, sử dụng và bảo mật dữ liệu cá nhân của người dùng."
            },
            cookies: {
                title: "Cookies",
                body: "Chính sách về việc sử dụng cookies trên trang web của chúng tôi."
            },
            security: {
                title: "Bảo mật",
                body: "Biện pháp bảo mật mà chúng tôi áp dụng để bảo vệ thông tin cá nhân của người dùng."
            },
            thirdParties: {
                title: "Bên thứ ba",
                body: "Thông tin về việc chia sẻ thông tin cá nhân với bên thứ ba và các đối tác của chúng tôi."
            }
        };
        return contents[key] || { title: "Nội dung không có sẵn", body: "Nội dung bạn đang tìm kiếm không có sẵn." };
    }

    // Khởi tạo slide
    $('#carouselExampleIndicators').carousel({
        interval: 5000 // Thời gian chuyển slide (5 giây)
    });

    // Thêm thông tin mẫu cho slide
    function addSampleSlides() {
        var carouselInner = $('.carousel-inner');
        carouselInner.empty();

        var sampleSlides = [
            {
                title: "Slide 1",
                body: "Nội dung cho slide 1"
            },
            {
                title: "Slide 2",
                body: "Nội dung cho slide 2"
            },
            {
                title: "Slide 3",
                body: "Nội dung cho slide 3"
            }
        ];

        sampleSlides.forEach(function(slide, index) {
            var activeClass = index === 0 ? 'active' : '';
            var slideHtml = '<div class="carousel-item ' + activeClass + '">' +
                                '<p>' + slide.body + '</p>' +
                            '</div>';
            carouselInner.append(slideHtml);
        });
    }

    // Thêm thông tin mẫu cho trang Chính sách bảo mật
    function addSamplePrivacyPolicyContent() {
        var contentKey = 'general'; // Chính sách tổng quan được chọn mặc định
        var contentData = getContent(contentKey);
        
        $('#privacy-policy-content').html('<h2>' + contentData.title + '</h2><p>' + contentData.body + '</p>');
    }

    // Thêm thông tin mẫu cho danh sách chính sách bảo mật
    function addSamplePrivacyPolicyList() {
        var policyList = $('.list-group');

        var samplePolicies = [
            { key: 'general', title: 'Tổng quan' },
            { key: 'personalData', title: 'Dữ liệu cá nhân' },
            { key: 'cookies', title: 'Cookies' },
            { key: 'security', title: 'Bảo mật' },
            { key: 'thirdParties', title: 'Bên thứ ba' }
        ];

        samplePolicies.forEach(function(policy) {
            var activeClass = policy.key === 'general' ? 'active' : '';
            var policyHtml = '<a href="#" class="list-group-item privacy-policy-item ' + activeClass + '" data-content="' + policy.key + '">' + policy.title + '</a>';
            policyList.append(policy.html);
        });
    }

    // Khởi tạo thông tin mẫu
    addSampleSlides();
    addSamplePrivacyPolicyContent();
    addSamplePrivacyPolicyList();
});
