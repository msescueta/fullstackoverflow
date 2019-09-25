/*!
 * FED BOILERPLATE
 * 2019 | KEL
 */

FED = {

    init: function() {
        FED.globalFunction();
        FED.carousel();
        FED.salAnimate();
    },

    globalFunction: function() {

        //Sidebar open
        $(document).on('click', '.burgernav', function(e) {
            e.preventDefault();
            $(".wrapper, footer.main").toggleClass("open");
            $('.burgernav').toggleClass('open');
        });

        //Collapsible
        var allCollapsible = $('.has-submenu .submenu a');
        $(document).on('click', 'li.has-submenu a', function(e) {
            $(this).parent().find("ul.submenu").slideToggle();
            $(this).parent().toggleClass("opened");
        });

        //Modal target
        $(document).on('click', '[data-toggle="lightbox"], [data-toggle="modal"]', function(e) {
            e.preventDefault();
            var target = $(this).data("target");
            $(target).fadeIn('fast');
            $('body').addClass('lightbox-open'); //used to disable scroll outside
        });

        //Modal Close [Custom]
        $(document).on('click', '[data-toggle="close"]', function(e) {
            e.preventDefault();
            $(this).closest('.lightbox').fadeOut();
            $('body').removeClass('lightbox-open');
        });

        //Header Search Icon
        $(document).on('click', '.nav-right .btn-search', function(e) {
            e.preventDefault();
            var target = $(this).data("target");
            $(target).fadeIn('fast');
            $('body').addClass('lightbox-open'); //used to disable scroll outside
            $(".lightbox-search .form-control").focus();
        });

        $(window).scroll(function() { 

            if ($('.banner-block').length > 0) {

                var article_block = $('.banner-block');
                var position = article_block.position().top - $(window).scrollTop();

                if (position <= 10) {
                    article_block.addClass('bg-fixed');
                } else {
                    article_block.removeClass('bg-fixed');
                }

            }

        });

        //scrollTo
        $(document).on('click', '#btnScrollTo', function(e) {
            e.preventDefault();
            var header_bar = $(".header-bar").height();
            $('html, body').animate({
                scrollTop: $("section.home").offset().top - header_bar
            }, 1000, function() {
                $(".header-fixed").addClass('header-fixed-unpinned-mobile');
            });
        });

        $(window).on('resize orientationchange', function() {
            if ($(".carousel-awards").length > 0) {
                $('.carousel-awards').slick('resize');
            }if ($(".carousel-bayanihan").length > 0) {
                $('.carousel-bayanihan').slick('resize');
            }
        });

        var player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('video-placeholder', {
                width: 600,
                height: 400,
                videoId: 'Xa0Q0J5tOP0',
                playerVars: {
                    color: 'white',
                    playlist: 'taJ60kskkns,FG0fTKAqZ5g'
                },
                events: {
                    onReady: initialize
                }
            });
        }

        $('.play-icon-wrapper').on('click', function() {
            $(".video-player").fadeIn();
            console.log(1);
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
                responsive: [{
                        breakpoint: 568,
                        settings: "unslick"
                    }
                ]
            });
        }

        if ($(".carousel-bayanihan").length > 0) {
            $('.carousel-bayanihan').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1.65,
                slidesToScroll: 1,
                arrows: false,
                centerMode: true,
                mobileFirst: true,
                focusOnSelect: true,
                infinite: true,
                responsive: [{
                        breakpoint: 568,
                        settings: "unslick"
                    }
                ]
            });
        }

        if ($(".carousel-default").length > 0) {
            $('.carousel-default').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
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

        if ($(".carousel-primary").length > 0) {
            $('.carousel-primary').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
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

        if ($(".carousel-dots").length > 0) {
            $('.carousel-dots').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
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
    },

    salAnimate: function() {
        sal({
            rootMargin: '0% 50%',
            threshold: 0.5, // 50%
            animateClassName: 'sal-animate',
            disabledClassName: 'sal-disabled',
            selector: '[data-sal]',
            once: true, // run only once
            disabled: false,
        });
    }

};

$(document).ready(function() {
    FED.init();
});