jQuery(function ($) {
    jQuery(document).ready(function () {
        // Mobile menu
        $(".hamburger").click(function () {
            $(this).toggleClass("is-active");
            $(".page-container").toggleClass("move-right");
        });
    });
})

