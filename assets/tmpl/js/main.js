$('.owl-carousel.nav-home').owlCarousel({
    loop: false,
    margin: 10,
    navText: ['<img src="images/left.png" alt="">', '<img src="images/right.png" alt="">'],
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true
        },
        600: {
            items: 1,
            dots: false,
            nav: true
        }
    }
});
$('.owl-carousel.journal').owlCarousel({
    loop: false,
    nav: true,
    navText: ['<img src="images/left.png" alt="">', '<img src="images/right.png" alt="">'],
    dots: false,
    responsive: {
        0: {
            margin: 16,
            items: 1,
            dots: true,
            nav: false,
            stagePadding: 50,
        },
        600: {
            items: 4,
            dots: false
        }
    }
});
$('.owl-carousel.heading').owlCarousel({
    loop: true,
    margin: 34,
    nav: true,
    navText: ['<img src="images/left.png" alt="">', '<img src="images/right.png" alt="">'],
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true
        },
        600: {
            items: 3,
            dots: false
        }
    }
})
$('.owl-carousel.news').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    navText: ['<img src="images/left.png" alt="">', '<img src="images/right.png" alt="">'],
    dots: true,
    items: 1
});
$('.owl-carousel.anounce').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    navText: ['<img src="images/left.png" alt="">', '<img src="images/right.png" alt="">'],
    dots: true,
    items: 1
});
bgImg = $('.close-menu');
bgImg = true
$('.navbar-toggler').on('click', function () {
    $('#navbarTogglerDemo01').toggle()
    $('.burger-img').toggle();
    $('.close-navbar').toggle();
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      $(this).find('.plus').show();
      $(this).find('.minus').hide();
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      $(this).find('.plus').hide();
      $(this).find('.minus').show();
    }
  });
}
$('.share-button, .socnet-share').hover(function() {
    $('.socnet-share').toggle();
})
