$(document).ready(function() {
  $('#form-send-mock').on('click', function(e){
    e.preventDefault();
    // mock
    var data = {
      'quote': $('#quote-text').val(),
      'author': $('#author').val(),
      'url': $('#source').val()
    };
    $('#quotes').append(
      '<li>' +
      '<div class="quote">' +
      '<p class="text">' +
      data.quote +
      '</p>' +
      '<p class="meta">' +
      '<span class="author">' +
      '—' + data.author +
      '</span>' + '/' + '<span class="source"><a href="' + data.url + '">参照元</a></span>' +
      '</p>' +
      '</div>' +
      '</li>'
    );
  });
});

// Toggle form
$(document).on('click', '#toggle-form', function(e){
  e.preventDefault();
  var $this = $(this);
  var $icon = $this.find('.icon');
  var $sendQuote = $('#send-quote');
  if ($sendQuote.hasClass('is-close')) {
    $($icon).removeClass('icon-chevron-right').addClass('icon-chevron-up');
    $($sendQuote).removeClass('is-close').addClass('is-open');
  } else {
    $($icon).removeClass('icon-chevron-up').addClass('icon-chevron-right');
    $($sendQuote).removeClass('is-open').addClass('is-close');
  }
});
