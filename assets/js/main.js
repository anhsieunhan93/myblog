;(function($){
    "use strict"

    function showSearchBox() {
        $('.block-search a').on('click', function(e) {            
            e.preventDefault();
            $('.block-default-search').addClass('active');
        });

        $('.block-default-search .close').on('click', function() {
            $('.block-default-search').removeClass('active');
        });
    }

    function showCartBox() {
        $('.block-shopping-cart .cart-title .close').on('click', function() {
            $('.block-shopping-cart').removeClass('active');
        });

        $('.block-cart a').on('click', function(e) {
            e.preventDefault();
            $('.block-shopping-cart').addClass('active');
        })
    }

    function backTop() {
        
        $(window).scroll(function() {
            if($(this).scrollTop() > 300) {
                $('#back-top').addClass('active');
            } else {                
                $('#back-top').removeClass('active');
            }
        });

        $('#back-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 1000 );
            return false;
        });
    }

    function menuMoble() {
        var $menu = $(".nav-list"),
          $btnMenu = $(".btn-menu"),
          $menuType = "desktop";
    
        $(window).on("load resize", function () {
          var $mode = "desktop";
    
          if (window.matchMedia("(max-width: 991px)").matches) $mode = "mobile";
    
          if ($mode != $menuType) {
            $menuType = $mode;
    
            if ($mode == "mobile") {
              $menu.attr("class", "main-nav-mobile").hide();
            } else {
              $(".main-nav-mobile").attr("class", "nav-list").removeAttr("style");
            }
          }
        });
    
        $btnMenu.on("click", function () {
          $menu.toggle();
          $(this).toggleClass('active');
        });
      }

    function popupForm() {
        // show form
        $('.block-user-box a').on('click', function(e) {
            e.preventDefault();
            $('.block-form-popup').addClass('active');
        });

        // close form
        $('.form-close').on('click', function() {
            $('.block-form-popup').removeClass('active');
        });
    }

    // DOM Read
    $(function() {
        showSearchBox();
        showCartBox();
        backTop();
        menuMoble();
        popupForm();
    });

})(jQuery);