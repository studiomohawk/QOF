var qof = {
  init: function() {
    $('#form-send-mock').on('click', function(e) {
      qof.render();
    });
  },
  getData: function() {
    return {
      'quote': $('#quote-text').val(),
      'author': $('#author').val(),
      'url': $('#source').val()
    };
  },
  clearInput: function() {
    $('#quote-text').val('');
    $('#author').val('');
    $('#source').val('');
  },
  template: function() {
    var data = qof.getData();
    var html = '<li>' +
      '<div class="quote">' +
      '<p class="text">' +
      data.quote +
      '</p>' +
      '<p class="meta">' +
      '<span class="author">' +
      '—' + data.author +
      '</span>' + ' / ' + '<span class="source"><a href="' + data.url + '">参照元</a></span>' +
      '</p>' +
      '</div>' +
      '</li>';
    return html;
  },
  render: function() {
    var html = qof.template();
    $('#quotes').append(html);
  }
};

(function() {
  qof.init();
})();

// Toggle form
$(document).on('click', '#toggle-form', function(e){
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
