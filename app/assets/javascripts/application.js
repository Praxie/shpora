// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-wysihtml5
//= require bootstrap-wysihtml5/locales
//= require bootstrap/dropdown
//= require bootstrap/modal
//= require bootstrap/alert
$(document).ready(function(){

	$('.editor').each(function(i, elem) {
	    $(elem).wysihtml5({
			"font-styles": true, 
			"emphasis": true,
			"lists": true, 
			"html": false, 
			"link": true, 
			"image": true, 
			"color": true 
		});
	});

})

$(function() {
  $('.close_nav').click(function() {
    $('.navbar-fixed-top').css('position', 'static');
  });
});
