jQuery(document).ready(function() {
    jQuery('.more .btn').click(function(){
        var txt = jQuery(this).closest( ".service" ).find(".service__body").is(':visible') ? 'CONOCER MÁS' : 'VER MENOS';
        jQuery(this).find(".text").text(txt);
        jQuery(this).closest( ".service" ).find(".service__body").slideToggle();
    });
    /*console.log("click");*/
    //addClass, removeClass, each-->jQuery
});