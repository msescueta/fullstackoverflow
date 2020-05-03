/*!
 * Fullstack Overflow
 * 2020 | KEL
 */

FED = {

    init: function() {
        FED.globalFunction();
        FED.carousel();
    },

    globalFunction: function() { 

        //Sidebar open
        $(document).on('click', '.burgernav', function(e) {
            e.preventDefault();
            $(".wrapper, footer.main").toggleClass("open");
            $('.burgernav').toggleClass('open');
        });

        //Modal target
        $(document).on('click', '[data-toggle="lightbox"], [data-toggle="modal"]', function(e) {
            e.preventDefault();
            var target = $(this).data("target");
            $(target).fadeIn('fast');
            $('body').addClass('lightbox-open'); //used to disable scroll outside
            if ($(".lightbox-search").length > 0) {
                setTimeout(function(){ $('#search').focus(); }, 300);
            }
        });

        //Modal Close [Custom]
        $(document).on('click', '[data-toggle="close"]', function(e) {
            e.preventDefault();
            $(this).closest('.lightbox').fadeOut();
            $('body').removeClass('lightbox-open');
        });


        $(window).scroll(function() { 

            var scroll = $(window).scrollTop();

            if ($('.banner-block').length > 0) {

                var article_block = $('.banner-block');
                var position = article_block.position().top - $(window).scrollTop();

                if (position <= 10) {
                    article_block.addClass('bg-fixed');
                } else {
                    article_block.removeClass('bg-fixed');
                }

            }

            if (scroll >= 400) {
                $(".header-main").addClass("scrolled");
                $("body").addClass("scrolled");
            } else {
                $(".header-main").removeClass("scrolled");
                $("body").removeClass("scrolled");
            }

        });

        $(window).on('resize orientationchange', function() {
            if ($(".carousel-awards").length > 0) {
                $('.carousel-awards').slick('resize');
            }if ($(".carousel-bayanihan").length > 0) {
                $('.carousel-bayanihan').slick('resize');
            }if ($(".carousel-featured-stories").length > 0) {
                $('.carousel-featured-stories').slick('resize');
            }
        });
    },

    carousel: function() {
        //check if element exist
        if ($(".carousel-about").length > 0) {
            $('.carousel-about').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

        if ($(".carousel-awards").length > 0) {
            $('.carousel-awards').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1.65,
                slidesToScroll: 1,
                arrows: false,
                centerMode: true,
                mobileFirst: true,
                focusOnSelect: true, 
                lazyLoad: 'ondemand',
                responsive: [{
                        breakpoint: 568,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 767,
                        settings: "unslick"
                    }
                ]
            });
        }

    },
 
};

$(document).ready(function() {
  FED.init();
});