$(function () {
    $('.banner-slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        dots: true,
        
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    // ======== *****banner slider js ends***** ======== //


    $('.venobox').venobox({
        spinner: 'rotating-plane',
        closeColor: 'white',
        titlePosition: 'bottom',
        infinigall: 'true',
    });
    // ======== *****about venobox js ends***** ======== //


    $('.testimonials-slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        dots: true,
        
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    // ======== *****testimonials slider js ends***** ======== // 


    $('.stat-number').each(function () {
        var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            step: function (func) {
                $(this).text(parseFloat(func).toFixed(size));
            }
        });
    });
    // ======== *****counter js ends***** ======== // 


    $(function () {
        $('.routine-bg .routine-nav ul li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    });
    // ======== *****routine filttering js ends***** ======== //


    $('.brand-slider').slick({
        autoplay: true,
        autoplaySpeed: 500,
        slidesToShow: 5,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left prevarrow"></i>',
        nextArrow: '<i class="fa fa-chevron-right nextarrow"></i>',
        centerMode: true,
        centerPadding: '0px',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });
    // ======== *****branding slider js & responsive ends***** ======== //

});
