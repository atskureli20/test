 
    $(document).ready(function(){
        $('.carousel-slider').slick({
            centerMode: true,
            dots: true,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            adaptiveHeight: true,
            fade: true,
            arrows: true,
            prevArrow: '<span class="priv-arrow"><i class="fas fa-chevron-left"></i></span>',
            nextArrow: '<span class="next-arrow"><i class="fas fa-chevron-right"></i></span>',
            cssEase: 'linear'
        });
        $('.f-box-wraper').slick({
            lazyLoad: 'ondemand',
            centerMode: true,
            slidesToShow: 2,
            speed: 300,
            autoplaySpeed: 4000,
            arrows: false,
            slidesToScroll: 1,
            variableWidth: true
        });
        
        // new WOW().init();
        // $('[data-toggle="counter-up"]').counterUp({
        //     delay: 10,
        //     time: 1000
        // });
        $("a").on('click', function(event) {
            if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
            }
        });
    });
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 450) {
            $(".arrow-wraper-pos-hide").addClass("arrow-wraper-pos-show");
        } else {
            $('.arrow-wraper-pos-hide').removeClass('arrow-wraper-pos-show');
        }
    });
 
const navSlide = () => {
    const burger    =   document.querySelector('.burger');
    const nav       =   document.querySelector('.navigation');
    const navLinks  =   document.querySelectorAll('.navigation li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active'); 
        $('.search__wraper').toggleClass('search__wraper__bg'); 
        $('.nav-list').toggleClass('nav-list-mob'); 
        $('body').toggleClass("overflow-lock");
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                linl.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards $(index / 7 + 0.5s}s'
            }
        });
        
        burger.classList.toggle('toggle');
    });
};
navSlide();
 