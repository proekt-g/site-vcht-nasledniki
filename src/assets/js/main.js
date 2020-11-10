$(document).on("readystatechange", () => {
    document.readyState === "interactive" &&
        $(window).width() <= 500 &&
        $(".header__log-link").text($(".header__log-link").data("mobile-text"))
    document.readyState === "interactive" &&
        $(window).width() <= 700 &&
        ($('.user__about, .user__grid, .user__about-text, .user__button').appendTo($('.board__information')))
})

$(window).on("load", () => {
    // variables
    // /variables
    // ----------------------------------------------
    // universal function
    function ajaxRequest(ajaxForm, url) {
        try {
            history.replaceState(null, null, "#")
        } catch (z) {
            console.log(z)
        }
        $.ajax({
            url: url,
            type: "POST",
            dataType: "html",
            data: $("." + ajaxForm).serialize(), // Сеарилизуем объект
            success: function (response) {
                //Данные отправлены успешно
                let result = $.parseJSON(response)
                console.log(result)
            },
            error: function (response) {
                // Данные не отправлены
                alert("Ошибка. Данные не отправлены.")
            },
        })
    }
    function scrollEmulation() {
        let documentWidth = parseInt(document.documentElement.clientWidth)
        let windowsWidth = parseInt(window.innerWidth)
        let scrollbarWidth = windowsWidth - documentWidth
        $("body").css({ "padding-right": `${scrollbarWidth}px` })
        $("body").toggleClass("block")
    }
    //  /universal function
    // ----------------------------------------------
    // event
    // Фильтр на странице participants.html
    $("#participants-filter").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("filter__container", "test.php")
    })
    // /Фильтр на странице participants.html
    // Фильтр на странице cinema-hall.html
    $("#cinema-hall-filter").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("cinema-hall-filter", "test.php")
    })
    // /Фильтр на странице cinema-hall.html
    // Даты на странице poster.html
    $("#poster-filter").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("filter__container", "test.php")
    })
    // /Даты на странице poster.html
    // Фильтр на странице poster.html в блоке "Кинозал"
    $("#crumbs-one").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("crumbs-one", "test.php")
    })
    // /Фильтр на странице poster.html в блоке "Кинозал"
    // Фильтр на странице poster.html в блоке "Театральный зал"
    $("#crumbs-two").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("crumbs-two", "test.php")
    })
    // /Фильтр на странице poster.html в блоке "Театральный зал"
    // Фильтр на странице poster.html в блоке "Концертный зал"
    $("#crumbs-three").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("crumbs-three", "test.php")
    })
    // /Фильтр на странице poster.html в блоке "Концертный зал"
    // Фильтр на странице poster.html в блоке "Литературная гостиная"
    $("#crumbs-four").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("crumbs-four", "test.php")
    })
    // /Фильтр на странице poster.html в блоке "Литературная гостиная"
    // Фильтр на странице poster.html в блоке "Выставка"
    $("#crumbs-five").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("crumbs-five", "test.php")
    })
    // /Фильтр на странице poster.html в блоке "Выставка"
    // Фильтр на странице cinema-hall.html в блоке "Кино"
    $("#cinema-crumbs-one").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("cinema-crumbs-one", "test.php")
    })
    // /Фильтр на странице cinema-hall.html в блоке "Кино"
    // Фильтр на странице cinema-hall.html в блоке "Анимация"
    $("#cinema-crumbs-two").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("cinema-crumbs-two", "test.php")
    })
    // /Фильтр на странице cinema-hall.html в блоке "Анимация"
    $(".crumbs__crumb").on("click", function () {
        $(this)
            .toggleClass("crumbs__crumb--active")
        $(this).parents(".crumbs").children(".crumbs__crumb--active")
            .length === 0
            ? $(this)
                .parents(".crumbs")
                .children(".crumbs__clear")
                .removeClass("crumbs__clear--active")
            : $(this)
                .parents(".crumbs")
                .children(".crumbs__clear")
                .addClass("crumbs__clear--active")
        $('[data-name]').each((index, element) => {
            console.log($(element)[0])
            console.log($(`[data-name=${$(this).data('tag-name')}]`)[0])
            $(element) !== $(`[data-name=${$(this).data('tag-name')}]`)[0] && $(element)[0].fadeToggle(100)
        })

    })
    $(".crumbs__clear").on("click", function () {
        $(this)
            .parents(".crumbs")
            .children(".crumbs__crumb")
            .removeClass("crumbs__crumb--active")
        $(this).removeClass("crumbs__clear--active")
    })
    $("#menu-element-more").on("click", () => {
        $(".menu__desktop-more-list").slideToggle(400)
        $("#menu-element-more").toggleClass("menu__desktop-element--open")
    })
    $(".filters__switch-text").on("click", function () {
        $(this).parent().toggleClass("filters__switch--active")
        $(this).next().slideToggle(400)
    })
    $(".filters__switch-modal-label").on("click", function (e) {
        if (!$(this).parents('.cinema-hall').length) {
            if (!$(e.target).hasClass("filters__switch-modal-label--custom")) {
                $(this)
                    .parents(".filters__switch")
                    .children(".filters__switch-text")
                    .text($(e.target).text())
                $(this).parents(".filters__switch-modal").toggle(0)
                $(this)
                    .parents(".filters__switch")
                    .toggleClass("filters__switch--active")
            }
        } else {
            $(this).toggleClass('filters__switch-modal-label--active')
            const amount = $('.filters__switch-modal-label--active').length,
                input = $('.filters__switch-text');
            amount
                ? amount === 1
                    ? input.text(input.data('text-one-check').replace('$', amount))
                    : amount <= 4
                        ? input.text(input.data('text-four-check').replace('$', amount))
                        : input.text(input.data('text-nine-check').replace('$', amount))
                : input.text(input.data('text-default'))
        }
    })
    $(".filter__date-element").on("click", function () {
        $(".filter__date-element").removeClass("filter__date-element--active")
        $(this).addClass("filter__date-element--active")
    })
    $(".menu__burger").on("click", () => {
        $(".menu").toggleClass("menu--open")
    })
    pageYOffset
        ? $(".header").addClass("header--scroll")
        : $(".header").removeClass("header--scroll")
    $(window).on("scroll", () => {
        pageYOffset
            ? ($(".header").addClass("header--scroll"),
                $(".menu__desktop").addClass("menu__desktop--scroll"))
            : ($(".header").removeClass("header--scroll"),
                $(".menu__desktop").removeClass("menu__desktop--scroll"))
    })
    $(".poster-slider__stories").on("click", (e) => {
        const stories = $(e.target).parents(".stories")
            ; (stories.length || $(e.target).hasClass("stories")) &&
                toggleModal(stories.index())
    })
    $(".modal__close").on("click", closeModal)
    $(".modal-overlay").on("click", (e) => {
        if ($(e.target).hasClass("modal-overlay--active")) closeModal()
    })
    $('.user__button').on('click', () => {
        if (!$('.user__about-text--active').length) {
            $('.user__about-text').toggleClass('user__about-text--active')
            const el = $('.user__about-text'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({ height: autoHeight }, 200);
            $('.user__button').text($('.user__button').data('switch-text-start'))
        } else {
            $('.user__about-text').toggleClass('user__about-text--active')
            $('.user__about-text').css('height', $('.user__about-text').data('text-height'))
            $('.user__button').text($('.user__button').data('switch-text-end'))
        }
    })
    $('#board-team').on('click', toggleBoardTab.bind($('#board-team'), ['.board__work', '.board__information'], '.board__team'))
    $('#board-work').on('click', toggleBoardTab.bind($('#board-work'), ['.board__team', '.board__information'], '.board__work'))
    $('#board-information').on('click', toggleBoardTab.bind($('#board-information'), ['.board__team', '.board__work'], '.board__information'))
    // /event
    // ----------------------------------------------
    // unique function
    function toggleBoardTab(selectorOldBlocks, selectorNewBlock) {
        $('.board__header-title').removeClass('board__header-title--active')
        $(this).addClass('board__header-title--active')
        $(selectorOldBlocks.join(', ')).fadeOut(400)
        setTimeout(() => {
            $(selectorNewBlock).fadeIn(400)
        }, 400)
    }
    function toggleModal(initNumberSlider = 0) {
        scrollEmulation()
        $(".modal-overlay").toggleClass(`modal-overlay--active`)
        $(".modal").toggleClass("modal--active")
        const swiperGallery = new Swiper(".modal__content", {
            effect: "coverflow",
            grabCursor: true,
            spaceBetween: 30,
            slidesPerView: "auto",
            initialSlide: initNumberSlider,
            navigation: {
                nextEl: ".stories-arrow-right",
                prevEl: ".stories-arrow-left",
            },
            on: {
                slideChange: (swiper) => {
                    playVideoStories(swiper)
                },
                init: (swiper) => {
                    playVideoStories(swiper)
                },
            },
        })
    }
    function playVideoStories({ slides, activeIndex, prevSlides }) {
        const videoStories = $(slides[activeIndex]).children(
            ".modal__slide-video"
        ),
            prevVideoStories = $(slides[activeIndex - 1]).children(
                ".modal__slide-video"
            ),
            nextVideoStories = $(slides[activeIndex + 1]).children(
                ".modal__slide-video"
            )
        prevVideoStories.length &&
            prevVideoStories.attr(
                "src",
                prevVideoStories.attr("src").replace(/\?autoplay=1/gi, "")
            )
        nextVideoStories.length &&
            nextVideoStories.attr(
                "src",
                nextVideoStories.attr("src").replace(/\?autoplay=1/gi, "")
            )
        videoStories.length &&
            videoStories.attr(
                "src",
                videoStories.attr("src").replace(/\?autoplay=1/gi, "") +
                "?autoplay=1"
            )
    }
    function closeModal() {
        scrollEmulation()
        $(".modal__slide-video").attr(
            "src",
            $(".modal__slide-video")
                .attr("src")
                .replace(/\?autoplay=1/gi, "")
        )
        $(".modal-overlay").removeClass("modal-overlay--active")
        $(".modal").removeClass("modal--active")
    }
    // /unique function
    // ----------------------------------------------
    // Page load
    const swiper = new Swiper(".poster-slider__slider", {
        spaceBetween: 20,
        slidesPerView: "auto",
        grabCursor: true,
        navigation: {
            nextEl: "#first-slider-arrow-right",
            prevEl: "#first-slider-arrow-left",
        },
        on: {
            slideChange: ({ slides, activeIndex }) => {
                slides.each((slide, index) => {
                    index < activeIndex
                        ? $(slide).addClass("swiper-slide-prev-prev")
                        : $(slide).removeClass("swiper-slide-prev-prev")
                })
            },
            reachEnd: ({ $el }) => {
                $el.children(".poster-slider__shadow").addClass(
                    "poster-slider__shadow--hidden"
                )
                $el.children(".poster-slider__dark").addClass(
                    "poster-slider__dark--hidden"
                )
            },
            fromEdge: ({ $el }) => {
                $el.children(".poster-slider__shadow").removeClass(
                    "poster-slider__shadow--hidden"
                )
                $el.children(".poster-slider__dark").removeClass(
                    "poster-slider__dark--hidden"
                )
            },
        },
    })
    const swiperStories = new Swiper(".poster-slider__stories", {
        spaceBetween: 10,
        slidesPerView: "auto",
        grabCursor: true,
        navigation: {
            nextEl: "#first-slider-arrow-right",
            prevEl: "#first-slider-arrow-left",
        },
        breakpoints: {
            901: {
                spaceBetween: 25,
            },
            501: {
                spaceBetween: 20,
            },
        },
        on: {
            slideChange: ({ slides, activeIndex }) => {
                slides.each((slide, index) => {
                    index < activeIndex
                        ? $(slide).addClass("swiper-slide-prev-prev")
                        : $(slide).removeClass("swiper-slide-prev-prev")
                })
            },
            reachEnd: ({ $el }) => {
                $el.children(".poster-slider__shadow").addClass(
                    "poster-slider__shadow--hidden"
                )
                $el.children(".poster-slider__dark").addClass(
                    "poster-slider__dark--hidden"
                )
            },
            fromEdge: ({ $el }) => {
                $el.children(".poster-slider__shadow").removeClass(
                    "poster-slider__shadow--hidden"
                )
                $el.children(".poster-slider__dark").removeClass(
                    "poster-slider__dark--hidden"
                )
            },
        },
    })

    $(window).width() <= 1299 &&
        ($(".menu__desktop-more-list")
            .children(".menu__desktop-element")
            .appendTo($(".menu__desktop")),
            $("#menu-element-more").addClass("delete"))
    baguetteBox.run(".gallery")
    // /Page load
})
