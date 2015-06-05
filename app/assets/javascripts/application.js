// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .



/////////////// WELCOME PAGE FADES //////////////


$(document).ready(function(){
	$(".logo-fade").hide().delay(1500).fadeIn(1000);
  $(".bubble-x-sm").hide().delay(1500).fadeIn(1000);
  $(".bubble-sm").hide().fadeIn(2500);
  $(".bubble-md").hide().delay(1000).fadeIn(1500);
  $(".bubble-md2").hide().delay(1000).fadeIn(2500);
  $(".bubble-lg").hide().fadeIn(1500);

  $(".button-login").hide().delay(3000).fadeIn(400);
  $(".button-signup").hide().delay(3000).fadeIn(800);
  $(".button-browse").hide().delay(3000).fadeIn(1200);
  $(".social-bar").hide().delay(3000).fadeIn(100);




/////////////////// SLIDER ///////////////////////


  var options = { $AutoPlay: true};
  var jssor_slider1 = new $JssorSlider$('slider1_container', options);

  var options = {
      $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$,
          $ChanceToShow: 2
      }
  };

  var jssor_slider1 = new $JssorSlider$('slider1_container', options);


	//Define an array of slideshow transition code
	var _SlideshowTransitions = [
	{ code1 },
	{ code2 },
	{ code3 }
	];
	var options = {
	 
	    $SlideshowOptions: {
	            $Class: $JssorSlideshowRunner$,
	            $Transitions: _SlideshowTransitions,
	            $TransitionsOrder: 1,
	            $ShowLink: true,    
	        }  
	};

	var jssor_slider1 = new $JssorSlider$('slider1_container', options);
 
 var jssor_slider1 = new $JssorSlider$("slider1_container", options);

var jssor_slider1 = new $JssorSlider$("slider1_container", options);


});



