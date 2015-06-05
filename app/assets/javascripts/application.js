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


$(document).ready(function(){
	$(".logo-fade").hide().delay(1500).fadeIn(1000);
  $(".bubble-x-sm").hide().delay(500).fadeIn(1000);
  $(".bubble-sm").hide().fadeIn(2500);
  $(".bubble-md").hide().delay(1000).fadeIn(1500);
  $(".bubble-md2").hide().delay(1000).fadeIn(1000);
  $(".bubble-lg").hide().fadeIn(1500);

  $(".button-login").hide().delay(3000).fadeIn(400);
  $(".button-signup").hide().delay(3000).fadeIn(800);
  $(".button-browse").hide().delay(3000).fadeIn(1200);
  $(".social-bar").hide().delay(3000).fadeIn(100);


/////////////////// SLIDER ///////////////////////



  var options = { $AutoPlay: true };
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
	    $AutoPlay: true,
	    $SlideshowOptions: {
	            $Class: $JssorSlideshowRunner$,
	            $Transitions: _SlideshowTransitions,
	            $TransitionsOrder: 1,
	            $ShowLink: true
	        }
	};
	var jssor_slider1 = new $JssorSlider$('slider1_container', options);
 
 var jssor_slider1 = new $JssorSlider$("slider1_container", options);

var jssor_slider1 = new $JssorSlider$("slider1_container", options);




});








  
/////////////////// SEARCH BAR /////////////////

// var Filter = (function() {
//   function Filter(element) {
//     this._element = $(element);
//     this._optionsContainer = this._element.find(this.constructor.optionsContainerSelector);
//   }

//   Filter.selector = '.filter';
//   Filter.optionsContainerSelector = '> div';
//   Filter.hideOptionsClass = 'hide-options';

//   Filter.enhance = function() {
//     var klass = this;

//     return $(klass.selector).each(function() {
//       return new klass(this).enhance();
//     });
//   };

//   Filter.prototype.enhance = function() {
//     this._buildUI();
//     this._bindEvents();
//   };

//   Filter.prototype._buildUI = function() {
//     this._summaryElement = $('<label></label>').
//       addClass('summary').
//       attr('data-role', 'summary').
//       prependTo(this._optionsContainer);

//     this._clearSelectionButton = $('<button></button>').
//       text('Clear').
//       attr('type', 'button').
//       insertAfter(this._summaryElement);

//     this._optionsContainer.addClass(this.constructor.hideOptionsClass);
//     this._updateSummary();
//   };

//   Filter.prototype._bindEvents = function() {
//     var self = this;

//     this._summaryElement.click(function() {
//       self._toggleOptions();
//     });

//     this._clearSelectionButton.click(function() {
//       self._clearSelection();
//     });

//     this._checkboxes().change(function() {
//       self._updateSummary();
//     });

//     $('body').click(function(e) {
//       var inFilter = $(e.target).closest(self.constructor.selector).length > 0;

//       if (!inFilter) {
//         self._allOptionsContainers().addClass(self.constructor.hideOptionsClass);
//       }
//     });
//   };

//   Filter.prototype._toggleOptions = function() {
//     this._allOptionsContainers().
//       not(this._optionsContainer).
//       addClass(this.constructor.hideOptionsClass);

//     this._optionsContainer.toggleClass(this.constructor.hideOptionsClass);
//   };

//   Filter.prototype._updateSummary = function() {
//     var summary = 'All';
//     var checked = this._checkboxes().filter(':checked');

//     if (checked.length > 0 && checked.length < this._checkboxes().length) {
//       summary = this._labelsFor(checked).join(', ');
//     }

//     this._summaryElement.text(summary);
//   };

//   Filter.prototype._clearSelection = function() {
//     this._checkboxes().each(function() {
//       $(this).prop('checked', false);
//     });

//     this._updateSummary();
//   };

//   Filter.prototype._checkboxes = function() {
//     return this._element.find(':checkbox');
//   };

//   Filter.prototype._labelsFor = function(inputs) {
//     return inputs.map(function() {
//       var id = $(this).attr('id');
//       return $("label[for='" + id + "']").text();
//     }).get();
//   };

//   Filter.prototype._allOptionsContainers = function() {
//     return $(this.constructor.selector + " " + this.constructor.optionsContainerSelector);
//   };

//   return Filter;
// })();

// $(function() {
//   Filter.enhance();
// });
