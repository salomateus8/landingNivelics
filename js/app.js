jQuery(document).ready(function() {
    jQuery('.button__menu').click(function(){
        jQuery(this).toggleClass('menu-open');
        jQuery('header .cont-menu').toggleClass('open');
        console.log("click");
    });
    //addClass, removeClass, each-->jQuery
});