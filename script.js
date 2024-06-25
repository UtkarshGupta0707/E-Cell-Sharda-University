$(document).ready(function () {
    // Smooth scroll for links with .smoothscroll class
    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    // Show/hide back-to-top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#go-top').fadeIn();
        } else {
            $('#go-top').fadeOut();
        }
    });

    // Animation on scroll
    $('.section-bg').waypoint(function () {
        $(this.element).addClass('animate__animated animate__fadeIn');
    }, { offset: '75%' });

    // Animation on hover for footer links
    $('.footer-social ul li a').hover(function () {
        $(this).addClass('animate__animated animate__pulse');
    }, function () {
        $(this).removeClass('animate__animated animate__pulse');
    });
});
