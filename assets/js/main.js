
(function ($) {
    "use strict";
    jQuery(document).ready(function($){


        $(".prodact-list").masonry();

        $(".homepage-slider").owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            dots:false,
            nav:true,
            

        })  
        $(".prodact-promotion-area").owlCarousel({
            items:1,
            loop:true,
            autoplay:true,
            dots:true,
            nav:false,
            

        }) 

        $(".menu-trigger").on("click", function(){
            $(".off-canvar-menu, .off-canvar-overlay").addClass("active");
            return false;
        });
        $(".menu-close, .off-canvar-overlay").on("click", function(){
            $(".off-canvar-menu, .off-canvar-overlay").removeClass("active");
            return false;
        }); 
         
        

      
    }); 

    jQuery (window).lode(function(){

    });

}(jQuery));





























      