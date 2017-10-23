var slideIndex = 1;
showSlides(slideIndex);

function plusSlider(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", " ");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


function initMap() {
    var uluru = {lat: 50.4546600, lng: 30.5238000};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

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