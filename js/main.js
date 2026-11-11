$(function () {

    $(".toggle_btn").on("click", function () {
        $(this).toggleClass("open");
        $(".header_nav").toggleClass("open");
    });

    $(".header_nav a").on("click", function () {

        $(".toggle_btn").removeClass("open");

        $(".header_nav").removeClass("open");

    });
});

// $(function () {

//     $('a[href^="#"]').click(function () {
//         let href = $(this).attr("href");
//         let target = $(href == "#" || href == "" ? "html" : href);
//         let position = target.offset().top;

//         $("html, body").animate({ scrollTop: position }, 400, "swing");
//         return false;
//     });
// });

$(function () {

    $('a[href*="#"]').click(function () {
        let href = $(this).attr("href");
        let url = new URL(href, window.location.href);

        // 別ページへのリンクは除外
        if (url.pathname !== window.location.pathname ||
            url.origin !== window.location.origin) {
            return true;
        }

        let target = $(url.hash);

        if (!target.length) {
            return true;
        }

        let position = target.offset().top - 60;

        $("html, body").animate({ scrollTop: position }, 400, "swing");
        return false;
    });
});

$(window).scroll(function () {
    $(".about_content").each(function () {

        let scroll = $(window).scrollTop();

        let target = $(this).offset().top;

        let windowHeight = $(window).height();

        if (scroll > target - windowHeight + 100) {
            $(this).css("opacity", "1");
            $(this).css("transform", "translateY(0)");
        }
    });
});

$(window).scroll(function () {
    $(".price_list").each(function () {

        let scroll = $(window).scrollTop();

        let target = $(this).offset().top;

        let windowHeight = $(window).height();

        if (scroll > target - windowHeight + 100) {
            $(this).css("opacity", "1");
            $(this).css("transform", "translateY(0)");
        }
    });
});

$(window).scroll(function () {
    $(".report_list").each(function () {

        let scroll = $(window).scrollTop();

        let target = $(this).offset().top;

        let windowHeight = $(window).height();

        if (scroll > target - windowHeight + 100) {
            $(this).css("opacity", "1");
            $(this).css("transform", "translateY(0)");
        }
    });
});

$(function () {

    setTimeout(function () {

        $(".main_title").addClass("fadein");
        $(".main_visual_btn").addClass("fadein");

    }, 500);

});

jQuery(function ($) {

    // 最新釣果スライダー
    if ($('.js-report-slider').length) {

        $('.js-report-slider').slick({

            slidesToShow: 3,
            slidesToScroll: 1,

            centerMode: true,

            centerPadding: '60px',

            autoplay: true,
            autoplaySpeed: 5000,

            arrows: false,
            dots: true,

            infinite: true,
            speed: 600,

            responsive: [
                {
                    breakpoint: 870,
                    settings: {
                        slidesToShow: 2,
                        centerPadding: '40px'
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false
                    }
                }
            ]

        });

    }

});