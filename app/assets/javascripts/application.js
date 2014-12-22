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
//= require bootstrap/transition
//= require bootstrap/dropdown
//= require bootstrap/tooltip
//= require bootstrap/popover

/*
$(function() {
  $(".unfavorite").click(function() {
    $button = $(this)
    $.ajax({
      type: "POST",
      url: '/' + $button.attr('data-user-username') + '/favorites/' + $button.attr('data-page-id'),
      success: function() {
        $button.removeClass('unfavorite').addClass('favorite'); 
      }
    })
  });
});
*/

$(function() {
  $('#make-favorite').click(function() {
    $button = $(this)
    if ( $( "#make-favorite" ).hasClass( "unfavorite" ) ) {
      $.ajax({
        type: "POST",
        url: '/' + $button.attr('data-user-username') + '/favorites/' + $button.attr('data-page-id'),
        success: function() {
          $button.removeClass('unfavorite').addClass('favorite').html("<span> Добавлено в избранное</span>"); ; 
        }
      })
    } else {
      $.ajax({
        type: "DELETE",
        url: '/' + $button.attr('data-user-username') + '/favorites/' + $button.attr('data-page-id'),
        success: function() {
          $button.removeClass('favorite').addClass('unfavorite').html("<span> В избранное!</span>"); 
        }
      })
    }
  });
});


$(function() {
  $('.close-nav').click(function() {
    if ( $( "#lock-unlock" ).hasClass( "fa-lock" ) ) {
        $('.fixed-nav').css('position', 'static');
        $('.main').css('margin-top', '46px');
        $("#lock-unlock").toggleClass('fa-lock fa-unlock');
    } else {
        $('.fixed-nav').css('position', 'fixed');
        $("#lock-unlock").toggleClass('fa-unlock fa-lock');
        $('.main').css('margin-top', '81px');
    }
  });
});

setTimeout(function() {
  $(function() {
    if($('.adsbygoogle').height() !== 0) {
      $('#kittywrapper').html('<img src="/thankfulkitty.png" alt="Спасибо за то, что не блокируете рекламу!">');
      $('#kittywrapper').popover({
        content: function() {
          return 'Спасибо, что не блокируете рекламу!';
        },
        placement: 'top'
      });
    } else {
      $('#kittywrapper').html('<img src="/sadkitty.png" alt="Пожалуйста, отключите adblock..." data-toggle="popover" title="Popover title" data-content="Пожалуйста, отключите adblock...">');
      $('#kittywrapper').popover({
        content: function() {
          return 'Пожалуйста, отключите adblock...';
        },
        placement: 'top'
      });
    }
  });
}, 1000);


/*
$(function() {
    $( '.nav-slider' ).click(function () {
      if ( $( ".navigation" ).is( ":hidden" ) ) {
        $( ".navigation" ).slideDown( "fast" );
        $('.fixed-nav').css('height', '65px');
      } else {
        $( ".navigation" ).hide();
        $('.fixed-nav').css('height', '35px');
      }
    });
});
*/

