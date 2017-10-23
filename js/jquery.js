$(document).ready(function () {
    var link = $(".burger_mobile");
    var menu = $(".nav_mobile");
    var enough = $(".nav_mobile a");
    link.click(function () {
        $(this).toggleClass("burger_mobile_active");
        menu.toggleClass("nav_mobile_active")
    });
    enough.click(function () {
        link.toggleClass("burger_mobile_active");
        menu.toggleClass("nav_mobile_active");
    });

});