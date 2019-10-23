$(function(){

	/* === Slider === */

	let slider = $("#intro__slider");

	slider.slick({
		infinite: true,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	arrows: false,
	  	dots: true,
	  	speed: 500,
	  	cssEase: 'linear'
	});

	/* === Range === */

	$( "#slider-range" ).slider({
		  range: true,
		  min: 0,
		  max: 999999,
		  values: [ 222222, 999999 ],
		  slide: function( event, ui ) {
		    $( "#amount" ).val(ui.values[ 0 ] );
		    $( "#amount2" ).val(ui.values[ 1 ] );
		  }
		});
	$( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ));
	$( "#amount2" ).val( "" + $( "#slider-range" ).slider( "values", 1 ));

	$("select").styler();

	/* === Validation === */


	$(".validates").validate({
	lang: 'ru'
	});

	$.validator.addClassRules({
	name: {
		required: true,
		minlength: 2
	},
	number: {
		required: true,
		digits: true,
		minlength: 11,
		maxlength: 11
	}
	});

	/* === Modal === */

	$("#modal").on("click", ".modal__top-item", function () {
		
		$("#modal").find(".active").removeClass("active");
	
		$(this).addClass("active");
		$(".modal__input1").eq($(this).index()).addClass("active");

	});

	/* === Menu === */

	$(".header__burg").on("click", function () {
		
		$(".mobile__list").slideToggle();

	});

	

});