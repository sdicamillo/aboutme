//Calcula la altura de la navbar y agrega un padding de esa altura a cada section
(function ($) {

    var lastNavBarHeight = 100;

    checkSize(); // init
    $(window).resize(checkSize);

    // changes size of padding to the nav.navbar when responsive changes are fired
    function checkSize() {
        var navHeight = $("nav.navbar").height() + 5;

        if (navHeight !== lastNavBarHeight) {
            $("section").css("padding-top", navHeight + "px");
            lastNavBarHeight = navHeight;
        }
    }
}(jQuery));

//Inicializa AOS
AOS.init({
    duration: 2000
});