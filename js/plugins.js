$(document).ready(function() {

    //loading page
    $(window).on('load', function() {
        $('.loading').fadeOut(1000, function() {
            $('body').css('overflow', 'auto')
        })
    })

    //header height
    $(function() {
        $('.header').height($(window).height());

        $(window).resize(function() {
            $('.header').height($(window).height());
        })
    })

    //venobox
    $('.venobox').venobox();

    //nav color

    $(window).scroll(function() {

        if ($(window).scrollTop() >= 100) {
            $('nav').css({
                'background-color': '#0E1B40',
                'padding': '7px 0'
            })
        } else {
            $('nav').css({
                'background-color': 'transparent',
                'padding': '15px 0'
            })
        }
    })
    if ($(window).scrollTop() >= 100) {
        $('nav').css({
            'background-color': '#0E1B40',
            'padding': '7px 0'
        })
    } else {
        $('nav').css({
            'background-color': 'transparent',
            'padding': '15px 0'
        })
    }

    //Testimonials
    $('.testimonials .buttons .btn').on('click', function(e) {

        $(this).addClass('active').siblings().removeClass('active')

        e.preventDefault()

        $('#' + $(this).data('click')).siblings().fadeOut(200, function() {
            $('#' + $(this).data('click')).siblings().removeClass('active')
        })
        $('#' + $(this).data('click')).delay(200).fadeIn(200, function() {
            $('#' + $(this).data('click')).addClass('active')
        })

    })

    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        center: true,
        autoplay: true,
        responsive: {
            0: {
                items: 0
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    //f.a.q
    $('.faq .content .info i').on('click', function() {

        $(this).parent().find('p').slideToggle(300);

        if ($(this).hasClass('fas fa-plus-circle')) {

            $(this).attr('class', 'fas fa-minus-circle');
            $(this).css('color', '#0078FE');
            $(this).parent().find('h4').css('color', '#0078FE');
        } else {
            $(this).attr('class', 'fas fa-plus-circle')
            $(this).css('color', '#0E1B40');
            $(this).parent().find('h4').css('color', '#0E1B40');
        }

    })

    //smooth scroll 
    $('nav li a').on('click', function() {

        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 100
        }, 1000);

        //active nav with click
        $('nav li a').removeClass('active-nav');
        $(this).addClass('active-nav');


    })

    //active nav with scroll or scrollspy
    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll <= 409) {
            $('nav li a').removeClass('active-nav');
            $('#home-nav ').addClass('active-nav');
        } else if (currentScroll <= 860 && currentScroll >= 409) {
            $('nav li a').removeClass('active-nav');
            $('#about-nav ').addClass('active-nav');
        } else if (currentScroll <= 1526 && currentScroll >= 860) {
            $('nav li a').removeClass('active-nav');
            $('#clients-nav ').addClass('active-nav');
        } else if (currentScroll <= 2340 && currentScroll >= 1526) {
            $('nav li a').removeClass('active-nav');
            $('#testimonials-nav ').addClass('active-nav');
        } else if (currentScroll <= 3528 && currentScroll >= 2340) {
            $('nav li a').removeClass('active-nav');
            $('#products-nav ').addClass('active-nav');
        } else if (currentScroll <= 4165 && currentScroll >= 3528) {
            $('nav li a').removeClass('active-nav');
            $('#blog-nav ').addClass('active-nav');
        } else if (currentScroll <= 6100 && currentScroll >= 4165) {
            $('nav li a').removeClass('active-nav');
            $('#gallary-nav ').addClass('active-nav');
        } else if (currentScroll <= 6832 && currentScroll >= 6100) {
            $('nav li a').removeClass('active-nav');
            $('#pricing-nav ').addClass('active-nav');
        } else if (currentScroll >= 6832) {
            $('nav li a').removeClass('active-nav');
            $('#contact-nav ').addClass('active-nav');
        }
    })


    //scroll up
    $(window).scroll(function() {

        if ($(window).scrollTop() >= 1000) {
            $('.up').fadeIn(600);
        } else {
            $('.up').fadeOut(1000);
        }

    })

    $('.up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })

    //Initialize AOS
    $(function() {
        AOS.init();
        window.addEventListener('load', AOS.refresh)
    })
})