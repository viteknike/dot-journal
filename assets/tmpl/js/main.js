    $('.owl-carousel.nav-home').owlCarousel({
        loop:false,
        margin:10,
        navText : ['<img src="images/left.png" alt="">','<img src="images/right.png" alt="">'],
        dots:false,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true
            },
            600:{
                items:1,
                dots:false,
                nav:true
            }
        }
    });
    $('.owl-carousel.journal').owlCarousel({
        loop:true,
        nav:true,
        navText : ['<img src="images/left.png" alt="">','<img src="images/right.png" alt="">'],
        dots:false,
        responsive:{
            0:{
                margin:15,
                items:1,
                dots:true,
                nav:false,
                stagePadding: 50,
                loop: false
            },
            600:{
                items:4,
                dots:false
            }
        }
    });
    $('.owl-carousel.heading').owlCarousel({
        loop:true,
        margin:34,
        nav:true,
        navText : ['<img src="images/left.png" alt="">','<img src="images/right.png" alt="">'],
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true
            },
            600:{
                items:3,
                dots:false
            }
        }
    })
    $('.owl-carousel.news').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        navText : ['<img src="images/left.png" alt="">','<img src="images/right.png" alt="">'],
        dots:true,
        items:1
    });
    $('.owl-carousel.anounce').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        navText : ['<img src="images/left.png" alt="">','<img src="images/right.png" alt="">'],
        dots:true,
        items:1
    });
    bgImg = $('.close-menu');
    bgImg = true
    $('.navbar-toggler').on('click', function() {
        $('#navbarTogglerDemo01').toggle()
        $('.burger-img').toggle();
        $('.close-navbar').toggle();
    })
