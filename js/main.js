$(document).ready(function () {
    $('.owl-carousel').owlCarousel();
});

if ($.fn.owlCarousel) {
    $(".hero-slides").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        margin: 0,
        /*  autoWidth: true, */
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
    });
}

if ($.fn.owlCarousel) {
    $(".mosh-service-slides").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        margin: 30,
        /* autoWidth: true, */
        center: true,
        dots: false,
        nav: true,
        startPosition: 1,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
}

if ($.fn.owlCarousel) {
    $(".mosh-workflow-slides").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        margin: 30,
        /* autoWidth: true, */
        center: true,
        dots: true,
        startPosition: 1,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
}

if ($.fn.owlCarousel) {
    $(".mosh-team-slides").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        smartSpeed: 800,
        margin: 50,
        /* autoWidth: true, */
        center: true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
}

if ($.fn.owlCarousel) {
    $(".testimonials-slides").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        margin: 0,
        /* autoWidth: true, */
        center: true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
}

$("#search-btn").on('click', function () {
    $("body").toggleClass("search-form-open");
    $(".search-form-area").toggleClass("fadeIn");
});

if ($.fn.barfiller) {
    $('#bar1').barfiller({
        tooltip: true,
        duration: 1000,
        barColor: '#4a7aec',
        animateOnResize: true
    });
    $('#bar2').barfiller({
        tooltip: true,
        duration: 1000,
        barColor: '#4a7aec',
        animateOnResize: true
    });
    $('#bar3').barfiller({
        tooltip: true,
        duration: 1000,
        barColor: '#4a7aec',
        animateOnResize: true
    });
    $('#bar4').barfiller({
        tooltip: true,
        duration: 1000,
        barColor: '#4a7aec',
        animateOnResize: true
    });
}

if ($.fn.imagesLoaded) {
    $('.mosh-portfolio').imagesLoaded(function () {
        // filter items on button click
        $('.portfolio-menu').on('click', 'p', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.mosh-portfolio').isotope({
            itemSelector: '.single_gallery_item',
            percentPosition: true,
            masonry: {
                columnWidth: '.single_gallery_item'
            }
        });
    });
}

$('.portfolio-menu button.btn').on('click', function () {
    $('.portfolio-menu button.btn').removeClass('active');
    $(this).addClass('active');
})

if ($.fn.scrollUp) {
    $.scrollUp({
        scrollSpeed: 1500,
        scrollText: '<i class="fa fa-angle-up"></i>'
    });
}

if ($.fn.counterUp) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
}

var $window = $(window);

$window.on('scroll', function () {
    if ($window.scrollTop() > 0) {
        $('.header_area').addClass('sticky');
    } else {
        $('.header_area').removeClass('sticky');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('#top-nav').fadeIn();
    } else {
        $('#top-nav').fadeOut();
    }
});

$('#top-nav').hide().click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
    return false;
});
AOS.init();