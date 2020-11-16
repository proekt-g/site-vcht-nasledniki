$(document).on("readystatechange", () => {
    document.readyState === "interactive" &&
        $(window).width() <= 500 &&
        $(".header__log-link").text($(".header__log-link").data("mobile-text"))
    document.readyState === "interactive" &&
        $(window).width() <= 700 &&
        ($('.user__about, .user__grid, .hidden-text, .hidden-button').appendTo($('.board__information')))
    document.readyState === "interactive" &&
        $(window).width() <= 1279 &&
        ($('.information__title, .user__about-text, .hidden-text, .user__about-button').appendTo($('.mobile__container')))
    document.readyState === "interactive" &&
        $(window).width() <= 900 &&
        ($('.mobile__container').prepend($('.information__box')))
    document.readyState === "interactive" &&
        $(window).width() <= 700 &&
        ($('.information__container').prepend($('.navigation')))
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
    // Фильтр на странице experts.html
    $("#experts-filter").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("experts", "test.php")
    })
    // /Фильтр на странице experts.html
    // Фильтр на странице cinema-hall.html
    $("#cinema-hall-filter").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("cinema-hall-filter", "test.php")
    })
    // /Фильтр на странице cinema-hall.html
    // Фильтр на странице literary-room.html
    $("#literary-room-filter").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("literary-room-filter", "test.php")
    })
    // /Фильтр на странице literary-room.html
    // Фильтр на странице results.html
    $("#results-filter").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("results-filter", "test.php")
    })
    // /Фильтр на странице results.html
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
    // Фильтр на странице literary-room.html в блоке "Литература"
    $("#literary-crumbs-one").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("literary-crumbs-one", "test.php")
    })
    // /Фильтр на странице literary-room.html в блоке "Литература"
    // Фильтр на странице literary-room.html в блоке "Исполнители-чтецы"
    $("#literary-crumbs-two").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("literary-crumbs-two", "test.php")
    })
    // /Фильтр на странице literary-room.html в блоке "Исполнители-чтецы"
    // Фильтр на странице experts.html в блоке "Жюри"
    $("#experts-crumbs-one").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("experts-crumbs-one", "test.php")
    })
    // /Фильтр на странице experts.html в блоке "Жюри"
    // Фильтр на странице experts.html в блоке "Ведущие мастер-классов"
    $("#experts-crumbs-two").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("experts-crumbs-two", "test.php")
    })
    // /Фильтр на странице experts.html в блоке "Ведущие мастер-классов"

    $(".crumbs__crumb").on("click", function (e) {
        $(e.target).parents('.filter-top').length && ($(this).toggleClass('crumbs__crumb--active'), filterContentBlock())
        $(e.target)
            .parents(".crumbs__crumb")
            .toggleClass("crumbs__crumb--active")
        $(e.target).parents(".crumbs").children(".crumbs__crumb--active")
            .length === 0
            ? $(e.target)
                .parents(".crumbs")
                .children(".crumbs__clear")
                .removeClass("crumbs__clear--active")
            : $(e.target)
                .parents(".crumbs")
                .children(".crumbs__clear")
                .addClass("crumbs__clear--active")
    })
    $(".crumbs__clear").on("click", function () {
        $(this)
            .parents(".crumbs")
            .children(".crumbs__crumb")
            .removeClass("crumbs__crumb--active")
        $(this).removeClass("crumbs__clear--active")

        filterContentBlock()
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
                toggleModal(stories.index(), stories.parents('.content').data('name'))
    })
    $(".content__gallery").on("click", (e) => {
        const stories = $(e.target).parents(".content__gallery-item")
            ; (stories.length || $(e.target).hasClass("content__gallery-item")) &&
                toggleModal(stories.index())
    })
    $(".modal__close").on("click", closeModal)
    $(".modal-overlay").on("click", (e) => {
        if ($(e.target).hasClass("modal-overlay--active")) closeModal()
    })
    $('.hidden-button').on('click', () => {
        if (!$('.hidden-text--active').length) {
            $('.hidden-text').toggleClass('hidden-text--active')
            const el = $('.hidden-text'),
                curHeight = el.height(),
                autoHeight = el.css('height', 'auto').height();
            el.height(curHeight).animate({ height: autoHeight }, 200);
            $('.hidden-button').text($('.hidden-button').data('switch-text-start'))
        } else {
            $('.hidden-text').toggleClass('hidden-text--active')
            $('.hidden-text').css('height', $('.hidden-text').data('text-height'))
            $('.hidden-button').text($('.hidden-button').data('switch-text-end'))
        }
    })
    $('#board-team').on('click', toggleBoardTab.bind($('#board-team'), ['.board__work', '.board__information'], '.board__team'))
    $('#board-work').on('click', toggleBoardTab.bind($('#board-work'), ['.board__team', '.board__information'], '.board__work'))
    $('#board-information').on('click', toggleBoardTab.bind($('#board-information'), ['.board__team', '.board__work'], '.board__information'))

    $('.filter-top__toggle-title').on('click', function () {
        $('.filter-top__toggle-title').removeClass('filter-top__toggle-title--active')
        $(this).addClass('filter-top__toggle-title--active')
        $('.content').fadeOut(100)
        $(`[data-name=${$(this).data('tag-name')}]`).fadeIn(100)
    })
    $('.results').on('click', (e) => {
        const target = $(e.target);
        const button = (target.parents('.table__switch-button').length && target.parents('.table__switch-button')) || (target.hasClass('table__switch-button') && target);
        (button) && (
            button.parents('.table__switch').find('.table__switch-button').removeClass('table__switch-button--active'),
            button.addClass('table__switch-button--active'),
            button.parents('.table').find('.table__content').fadeOut(100),
            button.parents('.table').find(`.table__content[data-type-block="${button.data('type')}"]`).fadeIn(100)
        )
    })
    $('.filter-tag__title').on('click', (e) => {
        $(e.target).toggleClass('filter-tag__title--active')
    })
    $('body').on('click', (e) => {
        const target = $(e.target);
        const button = (target.parents('.content__news-footer').length && target.parents('.content__news-footer')) || (target.hasClass('content__news-footer') && target);
        if (button) {
            const el = button.parents('.content__news').find('.content__news-text')
            if (!button.hasClass('content__news-footer--active')) {
                const curHeight = el.height(),
                    autoHeight = el.css('height', 'auto').height();
                el.height(curHeight).animate({ height: autoHeight }, 200);
                button.text(button.data('switch-text-start'))
            } else {
                console.log(button.data('switch-text-end'))
                el.css('height', el.data('text-height'))
                button.text(button.data('switch-text-end'))
            }
            button.toggleClass('content__news-footer--active')
        }

    })
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
    function filterContentBlock() {
        const arrElements = [];
        $('.content').fadeOut(100)
        $('.crumbs__crumb--active').each((index, element) => {
            $('.content').each((i, e) => {
                $(e).data('name') === $(element).data('tag-name') && arrElements.push(e)
            })
        })
        console.log(arrElements)
        $(arrElements).length ? $(arrElements).fadeIn(100) : $('.content').fadeIn(100)
    }
    function toggleModal(initNumberSlider = 0, nameModal = false) {
        const selectorSlider = `.modal-overlay${nameModal ? `[data-name="${nameModal}"]` : ''}`
        $('.modal-overlay').data('pagination-text') && ($('.modal__slide-title').html($('.modal-overlay').data('pagination-text').replace(/\[.*\]$/, '') + ' <span class="modal__slide-title-dark">' + $('.modal-overlay').data('pagination-text').replace(/.*\[/, '').replace(/\].*/, '').replace('$', `<span class="modal__slide-title-active">${initNumberSlider + 1}</span>`).replace('&', $('.modal__slide').length) + '</span>'))
        scrollEmulation()
        $(selectorSlider).toggleClass(`modal-overlay--active`)
        $(selectorSlider + ' .modal').toggleClass("modal--active")
        const swiperGallery = new Swiper(selectorSlider + " .modal__content", {
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
                    $('.modal__slide-title-active').length && $('.modal__slide-title-active').text(swiper.activeIndex + 1)
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
        $(".modal__slide-video").length && $(".modal__slide-video").attr(
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
                slides.each((slide, index) => {
                    index > activeIndex
                        ? $(slide).addClass("swiper-slide-next-next")
                        : $(slide).removeClass("swiper-slide-next-next")
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
                slides.each((slide, index) => {
                    index > activeIndex
                        ? $(slide).addClass("swiper-slide-next-next")
                        : $(slide).removeClass("swiper-slide-next-next")
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

    // console.log(document.querySelector('.content__gallery'))
    const test = Bricks({
        container: '.content__gallery',
        packed: 'data-grid',
        sizes: [
            { columns: 1, gutter: 20 },
            { mq: '500px', columns: 2, gutter: 10 },
            { mq: '700px', columns: 3, gutter: 10 },
            { mq: '900px', columns: 4, gutter: 10 },
            { mq: '1279px', columns: 4, gutter: 20 }
        ]
    })
    $(window).width() > 500 && test.pack()
    // instance.pack()
    // /Page load
});

