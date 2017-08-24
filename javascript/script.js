jQuery(document).ready(function () {
	jQuery.noConflict();

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

		jQuery(".nav_link").click(function(){
			jQuery(".nav_link").removeClass("nav_link_selected");
			jQuery(this).addClass("nav_link_selected");
		});
	
	jQuery(".logo_link").click(function(){
		jQuery(".nav_link").removeClass("nav_link_selected");
	})
	
});
