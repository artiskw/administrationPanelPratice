jQuery(function ($) {
    jQuery(document).ready(function () {
        // Mobile menu
        $(".hamburger").click(function () { //clik funkcija
            $(this).toggleClass("is-active");
            $(".page-container").toggleClass("move-right"); //scss kodā raksru, page conatainer iedotu papildus klasi -->page-background<--- un footer
        });
    });
})

