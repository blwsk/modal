// Ghastly.js - a lightweight jQuery modal
// Created by Kevin Bielawski

(function( $ ){
    
    $.fn.modal = function() {
        var bg = $("<div id='modal-bg'></div>");
        $("body").append(bg);
        $("#modal-bg").css({
            "position" : "fixed",
            "z-index" : 100,
            "top" : 0,
            "left" : 0,
            "height" : 100 + "%",
            "width" : 100 + "%",
            "background" : "rgba(0,0,0,0.5)"
        });
        
        var modalId = $(this).attr("href");
        $(modalId).css({
            'display' : 'block',
        	'position' : 'fixed',
            'top' : 0,
            'left' : 0,
       		'opacity' : 0,
 			'z-index': 200,
            'margin-left' : ($(window).width() - $(modalId).outerWidth()) / 2,
            'margin-top' : ($(window).height() - $(modalId).outerHeight()) / 2,
        });
        $(modalId).fadeTo(200,1);
        
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