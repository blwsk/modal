// modal.js - a lightweight jQuery modal
// Created by Kevin Bielawski

(function( $ ){
    
    $.fn.modal = function() {
        var t = Math.floor($("body").scrollTop());
        var bg = $("<div id='modal-bg'></div>");
        $("body").append(bg);
        $("#modal-bg").css({
            "position": "fixed",
            "background": "rgba(0,0,0,0.7)",
            "top": 0,
            "left": 0,
            "height": "100%",
            "width": "100%",
            "z-index": 1000,
            "opacity": 0
        });
        $("#modal-bg").fadeTo(200, 1);
        
        var modalId = $(this).attr("href");
        $(modalId).css({
            'display': 'block',
            'position': 'fixed',
            'left': (($(window).width() - $(modalId).outerWidth()) / 2),
            'top': (($(window).height() - $(modalId).outerHeight()) / 2),
            'opacity': 0,
            'z-index': 2000
        });
        $(modalId).fadeTo(200, 1);
        $(window).scrollTop(t - (($(window).height() - $(modalId).outerHeight()) / 2) + 1);
        
        $("#modal-bg").click( function() {
            close(modalId);
        });
    };
    
    $("a[rel=modal]").click( function() {
        $(this).modal();
    });
    
    function close(id){
        $(id).css('display', 'none');
        $("#modal-bg").fadeOut(200);
        setTimeout( function() {$("#modal-bg").remove();}, 200);
    };
    
})( jQuery );
