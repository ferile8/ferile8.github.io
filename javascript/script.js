jQuery(document).ready(function () {

  function Utils() {}

  Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
      var pageTop = jQuery(window).scrollTop();
      var pageBottom = pageTop + jQuery(window).height() * 0.7;
      var elementTop = jQuery(element).offset().top;
      var elementBottom = elementTop + jQuery(element).height();

      if (fullyInView === true) {
        return ((pageTop < elementTop) && (pageBottom > elementBottom));
      } else {
        return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
      }
    }
  };

  var Utils = new Utils();

  function filter_images() {
    var selection = jQuery(".filter_selected").attr("category");

    if (selection == "sweets") {
      jQuery(".salt").css("display", "none");
      jQuery(".work_presentation").not(".salt").css("display", "flex");
    }
    if (selection == "salts") {
      jQuery(".salt").css("display", "flex");
      jQuery(".work_presentation").not(".salt").css("display", "none");
    }
    var bLazy = new Blazy({
      offset: 50000,
      success: function (element) {}
    });
  };

  filter_images();

  jQuery(".button_filter").click(function () {
    jQuery(".button_filter").toggleClass("filter_selected");
    filter_images();
  });

  var bLazy = new Blazy({
    offset: 50000,
    success: function (element) {}
  });



  jQuery(function () {
    jQuery(".work_presentation_wrapper").mousewheel(function (event, delta) {
      this.scrollLeft -= (delta * 1);
      event.preventDefault();
      var bLazy = new Blazy({
        offset: 50000,
        success: function (element) {}
      });

    });

  });

  jQuery(".work_presentation").hover(
    function () {
      jQuery(this).find(".description").removeClass("display-none");
    },
    function () {
      jQuery(this).find(".description").addClass("display-none");
    });



  function change_selector() {
    var aboutView = Utils.isElementInView(jQuery('#about'), false);
    var galleryView = Utils.isElementInView(jQuery('#gallery'), false);
    var contactsView = Utils.isElementInView(jQuery('#contacts'), false);
    var introView = Utils.isElementInView(jQuery('#intro'), false);

    if (aboutView) {
      jQuery(".nav_link").removeClass("nav_link_selected");
      jQuery(".link_about").addClass("nav_link_selected");
    }
    if (galleryView) {
      jQuery(".nav_link").removeClass("nav_link_selected");
      jQuery(".link_gallery").addClass("nav_link_selected");
    }
    if (contactsView) {
      jQuery(".nav_link").removeClass("nav_link_selected");
      jQuery(".link_contacts").addClass("nav_link_selected");
    }
    if (introView) {
      jQuery(".nav_link").removeClass("nav_link_selected");
    }

  }

  jQuery(window).scroll(function () {
    change_selector();
  });

  jQuery(".nav_link").click(function () {
    jQuery(".nav_link").removeClass("nav_link_selected");
    jQuery(this).addClass("nav_link_selected");
  });

  jQuery(".logo_link").click(function () {
    jQuery(".nav_link").removeClass("nav_link_selected");
  })


 jQuery('.a.grouped_elements').fancybox({
  beforeShow : function(){
   this.title =  $(this.element).data("caption");
  }
 });


  
});
