$(document).on("readystatechange", () => {
    document.readyState === "interactive" &&
        $(window).width() <= 500 &&
        $(".header__log-link").text($(".header__log-link").data("mobile-text"))
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
    //  /universal function
    // ----------------------------------------------
    // event
    // Даты на странице poster.html
    $(".filter__container").on("input submit", (e) => {
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
    $(".crumbs__crumb").on("click", (e) => {
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
    })
    $("#menu-element-more").on("click", () => {
        $(".menu__desktop-more-list").slideToggle(400)
        $("#menu-element-more").toggleClass("menu__desktop-element--open")
    })
    $(".filters__switch-text").on("click", () => {
        $(".filters__switch-text")
            .parent()
            .toggleClass("filters__switch--active")
        $(".filters__switch-modal").slideToggle(400)
    })
    $(".filters__switch-modal-label").on("click", (e) => {
        if (!$(e.target).hasClass("filters__switch-modal-label--custom")) {
            $(".filters__switch-text").text($(e.target).text())
            $(".filters__switch-modal").toggle(0)
            $(".filters__switch").toggleClass("filter-switch--active")
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
    // /event
    // ----------------------------------------------
    // unique function
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

    // /Page load
})
