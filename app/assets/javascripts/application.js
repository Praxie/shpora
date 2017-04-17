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
//= require jquery-ui.min

//= require bootstrap/transition
//= require ckeditor-jquery
//= require ckeditor/config
//= require bootstrap/dropdown

//= require fileupload/jquery.fileupload
//= require fileupload/jquery.fileupload-process
//= require fileupload/jquery.fileupload-validate
//= require fileupload/jquery.iframe-transport
//= require twitter/typeahead.min
//= require bootstrap-tagsinput.min

//= require uploader

//= require turbolinks

$(document).on("turbolinks:load", function(){
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

  $('.bootstrap-tagsinput input').blur(function () {
    $('.tagsinput').tagsinput('add', $(this).val());
    $(this).val('');
  });

  $(function() {
    var tags = new Bloodhound({
      datumTokenizer: function (datum) {
        return Bloodhound.tokenizers.whitespace(datum.value);
      },
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: '/assets/tags.json',
        transform: function(response) {
          // Map the remote source JSON array to a JavaScript object array
          return $.map(response, function(tag) {
            return {
              value: tag
            };
          });
        }
      }
    });

    // initialize the bloodhound suggestion engine
    tags.initialize();

    $('.tagsinput').tagsinput({
      trimValue: true,
      confirmKeys: [13, 44, 32],
      addOnBlur: true,
      typeaheadjs: {
        display: 'value',
        source: tags
      }
    });

    $('.tagsinput').tagsinput('input').blur(function() {
      $('.tagsinput').tagsinput('add', $(this).val());
      $(this).val('');
    });

    $('.tagsinput').on('beforeItemAdd', function (event) {
      var tag = event.item;

      // Do some processing here
      tag = tag.toLowerCase();
      tag = tag.replace(/[|&;$%@"<>()#+,]/g, '');

      event.item = tag;

      return event;
    });
  });
})
