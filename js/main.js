$(window).scroll(function () {
    // Get number of pixels of scroll.
    var pixel = $(window).scrollTop();
    // console.log(pixel);
    // When the scroll exceeds 300px, give the [fixed-menu] class.
    if (pixel >= 150) {
        $('.navbar').addClass('fixed-menu');
    } else {
        $('.navbar').removeClass('fixed-menu');
    }
});

$(document).ready(function () {
    $(".navbar__icon").click(function () {
        $(".navbar").toggleClass("tranform0");
    });
    $(".close").click(function () {
        $(".menu__admin").toggleClass("tranform0");
        $(".menu__left").toggleClass("w-16");
        $(".content__right").toggleClass("w-83");
    });
    $(".click__item--navbar").click(function () {
        $(".show_megamenu").toggleClass("h100");
        $(".show_megamenu1").removeClass("h100");
        $(".show_megamenu2").removeClass("h100");
        $(".show_megamenu3").removeClass("h100");
    });
    $(".click__item--navbar1").click(function () {
        $(".show_megamenu1").toggleClass("h100");
        $(".show_megamenu").removeClass("h100");
        $(".show_megamenu2").removeClass("h100");
        $(".show_megamenu3").removeClass("h100");
    });
    $(".click__item--navbar2").click(function () {
        $(".show_megamenu2").toggleClass("h100");
        $(".show_megamenu").removeClass("h100");
        $(".show_megamenu1").removeClass("h100");
        $(".show_megamenu3").removeClass("h100");
    });
    $(".click__item--navbar3").click(function () {
        $(".show_megamenu3").toggleClass("h100");
        $(".show_megamenu").removeClass("h100");
        $(".show_megamenu1").removeClass("h100");
        $(".show_megamenu2").removeClass("h100");
    });
    $(".click__item--navbar4").click(function () {
        $(".show_megamenu4, .show_megamenu1").toggleClass("h100");
    });
    $(".job__type--click2").click(function () {
        $(".job__type2").toggleClass("h100");
    });
    $(".job__type--click").click(function () {
        $(".job__type").toggleClass("h100");
    });
    $("#wage").click(function () {
        $(".scroll").toggleClass("h100");
    });

    $("#slider").slider({
        min: 15000,
        max: 75000,
        step: 1000,
        values: [15000, 75000],
        slide: function (event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });

    $("input.sliderValue").change(function () {
        var $this = $(this);
        $("#slider").slider("values", $this.data("index"), $this.val());
    });

    // chosen
    $(".chosen-select").chosen({ allow_single_deselect: true, width: "100%" });

    // // summernote
    // $('#content').summernote({
    //     placeholder: 'Content',
    //     tabsize: 2,
    //     height: 100
    // });

    // $('#content').summernote();
});

var typed2 = new Typed('.typed', {
    strings: ["First sentence.", "Second sentence."],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: true,
    loop: true
});

$('.single-item').slick();

$('.center').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 300,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
});





