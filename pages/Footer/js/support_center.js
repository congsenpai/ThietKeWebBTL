$(document).ready(function() {
    // Tạo hiệu ứng cho danh sách các danh mục trợ giúp
    $('.list-group-item').on('click', function() {
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
        
        var contentKey = $(this).data('content');
        var contentData = getContent(contentKey);
        
        $('#help-content').html('<h2>' + contentData.title + '</h2><p>' + contentData.body + '</p>');

        // Thay đổi nội dung của carousel dựa trên danh mục trợ giúp được chọn
        changeSliderContent(contentKey);
    });

    // Hiển thị nội dung cho các danh mục trợ giúp
    function getContent(key) {
        var contents = {
            general: {
                title: "General Information",
                body: "Welcome to the Help Center. Here you can find information about various topics related to our services."
            },
            shopping: {
                title: "Shopping Guide",
                body: "This is the shopping guide section where you can learn how to shop effectively."
            },
            payment: {
                title: "Payment Methods",
                body: "Information about payment methods available on our platform."
            },
            shipping: {
                title: "Shipping Information",
                body: "Details about our shipping policies and procedures."
            },
            returns: {
                title: "Returns and Refunds",
                body: "Guidelines on how to return items and get refunds."
            },
            account: {
                title: "Account Management",
                body: "Manage your account settings and personal information here."
            }
        };
        return contents[key] || { title: "Content not available", body: "The content you are looking for is not available." };
    }

    // Thay đổi nội dung của carousel dựa trên danh mục trợ giúp được chọn
    function changeSliderContent(contentKey) {
        var slides = [];
        switch(contentKey) {
            case 'general':
                slides = [
                    "Slide 1 for General Information",
                    "Slide 2 for General Information",
                    "Slide 3 for General Information"
                ];
                break;
            case 'shopping':
                slides = [
                    "Slide 1 for Shopping Guide",
                    "Slide 2 for Shopping Guide",
                    "Slide 3 for Shopping Guide"
                ];
                break;
            // Thêm các trường hợp cho các danh mục khác ở đây
        }

        var carouselInner = $('.carousel-inner');
        carouselInner.empty();

        slides.forEach((slide, index) => {
            var slideItem = $('<div class="carousel-item"><p>' + slide + '</p></div>');
            if (index === 0) {
                slideItem.addClass('active');
            }
            carouselInner.append(slideItem);
        });

        // Initialize carousel after changing content
        $('#carouselExampleIndicators').carousel();
    }


    //Function searching
    $('#searchButton').click(function(){
        var searchTerm = $('#searchInput').val();
        $.ajax({
            url: search.php, //Redirect script searching
            type: 'GET',
            data:{term: searchTerm},
            success: function(response){
                $('#searchResults').html(response);
            },
            errỏ: function(xhr, status, error){
                console.log(error);
            }
        });
    });
});
