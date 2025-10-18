// WOW动画
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
    new WOW().init();
};

//导航
var off=true;
$(".navTrigger").click(function () {
  if(off==true){
    $(this).addClass("navTrigger-on");
    $('.wapNav').addClass("nav_on");
    off=false;
  }else{
    $(this).removeClass("navTrigger-on");
    $(".wapNav").removeClass("nav_on");
    off=true;
  }
});

$('.wapNav .m').click(function(){
$(this).children('.navSub').slideToggle().end().siblings('.m').children('.navSub').slideUp();
$(this).addClass('on').siblings('li').removeClass('on');
});
$('.menuIcon').click(function() {
    $('.sidebar').stop(true, false).slideToggle();
});
$('.sidebarMenu>li').click(function() {
    $(this).children('ul').slideToggle().end().siblings('.m').children('.ul').slideUp();
    $(this).addClass('cur').siblings('li').removeClass('cur');
});
$('.header .lang').click(function() {
    $('.langMain').stop(true, false).slideToggle();
});


/* 客服 */
$(document).ready(function(){
  $(".mk-kefu .kf1").click(function(){
    $('.mk-kefu .qq').find(".sidebox").stop().animate({"right":"0"},160);
    $(this).find(".sidebox").stop().animate({"right":"-48px"},160);
   });
    $(".mk-kefu .qq .close").click(function(){
      $('.mk-kefu .qq').find(".sidebox").stop().animate({"right":"-150px"},160);
      $('.mk-kefu .kf1').find(".sidebox").stop().animate({"right":"0"},160);
     });
    $(".mk-kefu .kf3").hover(function(){
        $(this).find(".sidebox").stop().animate({"width":"130px"},160);
        $(this).find(".sidebox3").stop().animate({"width":"200px"},160);
    },function(){
        $(this).find(".sidebox").stop().animate({"width":"48px"},160);
    });
    $('.mk-kefu .kf2').hover(function() {
        $(this).find('.kf_wx').fadeIn();
    }, function() {
        $(this).find('.kf_wx').fadeOut();
    });
});
//回到顶部
function goTop(){
  $('html,body').animate({'scrollTop':0},600);
}

// $(".search-btn").on("click",function(){
//     $(".search-bar").toggleClass("show");
// })
// if ($('.header').length > 0) {
//     var pTop=$('.header').position().top;
//     $(document).scroll(function(e){
//         if($(document).scrollTop()>pTop){
//             $('.header').addClass('fixed')
//         }else{
//             $('.header').removeClass('fixed')
//         };
//     });
// }

var Swiper1 = new Swiper('#banner-swiper', {
    pagination: {
        el: '#banner-swiper .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '#banner-swiper .banner-next',
        prevEl: '#banner-swiper .banner-prev',
    },
    autoplay: true,
    autoplay: {
        delay: 6000
    },
    loop: true,
    speed: 800,
});


$(".sfq-list li").hover(function() {
    $(this).addClass("on").siblings().removeClass("on");
})

var Swiper2 = new Swiper('.product-slide', {
    autoplay: true,
    loop: true,
    autoplay: {
        delay: 6000
    },
    speed: 800,
    pagination: {
        el: '.product-slide .swp-pg',
        clickable: true,
    },
    navigation: {
        nextEl: '.product-slide-wrap .swp-next',
        prevEl: '.product-slide-wrap .swp-prev',
    }
})

var Swiper3 = new Swiper('.honor-list', {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
        delay: 6000,
    },
    loop: true,
    pagination: {
        el: '.honor-pg',
        clickable: true,
    },
    breakpoints: {
        1250: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 3,
        },
        767: {
            spaceBetween: 10,
            slidesPerView: 2,
        },
    }
})

$(window).load(function (){
    var galleryThumbs = new Swiper('.txt-swiper', {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.factory-list', {
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.factory-title .swiper-button-next',
            prevEl: '.factory-title .swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });

});


var productSwiper = new Swiper('.side-content', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: false,
    loop: false,
    speed: 500,
    on: {
        slideChangeTransitionStart: function() {
            $(".index-product-cate .on").removeClass('on');
            $(".index-product-cate li").eq(this.activeIndex).addClass('on');
        }
    }
})
$(".index-product-cate li").on('click', function(e) {
    e.preventDefault()
    $(".index-product-cate li.on").removeClass('on')
    $(this).addClass('on')
    productSwiper.slideTo($(this).index())
})

var caseSwiper = new Swiper('.index-case-content', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: false,
    loop: false,
    speed: 500,
    on: {
        slideChangeTransitionStart: function() {
            $(".swp-cate .on").removeClass('on');
            $(".swp-cate li").eq(this.activeIndex).addClass('on');
        }
    }
})
$(".swp-cate li").on('click', function(e) {
    e.preventDefault()
    $(".swp-cate li.on").removeClass('on')
    $(this).addClass('on')
    caseSwiper.slideTo($(this).index())
})


var newsSwiper = new Swiper('#index-news-tab', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: false,
    loop: false,
    speed: 500,
    on: {
        slideChangeTransitionStart: function() {
            $(".index-news-cate ul .on").removeClass('on');
            $(".index-news-cate ul li").eq(this.activeIndex).addClass('on');
        }
    }
})
$(".index-news-cate ul li").on('click', function(e) {
    e.preventDefault()
    $(".index-news-cate ul li.on").removeClass('on')
    $(this).addClass('on')
    newsSwiper.slideTo($(this).index())
})


var cultureSwiper = new Swiper('.culture-content', {
    slidesPerView: 1,
    autoplay: false,
    loop: false,
    speed: 500,
    on: {
        slideChangeTransitionStart: function() {
            $(".culture-list .on").removeClass('on');
            $(".culture-list li").eq(this.activeIndex).addClass('on');
        }
    }
})
$(".culture-list li").on('click', function(e) {
    e.preventDefault()
    $(".culture-list .on").removeClass('on')
    $(this).addClass('on')
    cultureSwiper.slideTo($(this).index())
})