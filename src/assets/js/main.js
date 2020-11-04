// document.onreadystatechange = function() {
//     if (document.readyState === "interactive") {

//     }
// }
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
    $(".filter__container").on("input submit", (e) => {
        e.preventDefault()
        ajaxRequest("filter__container", "test.php")
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
    pageYOffset
        ? $(".header").addClass("header--scroll")
        : $(".header").removeClass("header--scroll")
    $(window).on("scroll", () => {
        pageYOffset
            ? $(".header").addClass("header--scroll")
            : $(".header").removeClass("header--scroll")
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
    })
    // /Page load
})
