var qof = {
  init: function() {
    this.cacheElements();
    this.bindEvents();
  },
  cacheElements: function() {
    this.$button = $('#form-send-mock');
    this.$toggle = $('#toggle-form');
    this.$text   = $('#quote-text');
    this.$author = $('#author');
    this.$source = $('#source');
  },
  bindEvents: function() {
    this.$button.on( 'click', this.template );
    this.$toggle.on( 'click', this.toggle );
  },
  getData: function() {
    return {
      'quote' : this.$text.val(),
      'author': this.$author.val(),
      'url'   : this.$source.val()
    };
  },
  clearInput: function() {
    this.$text.val('');
    this.$author.val('');
    this.$source.val('');
  },
  template: function() {
    var data = qof.getData();
    html = '<li>' +
      '<div class="quote">' +
      '<p class="text">' +
      data.quote +
      '</p>' +
      '<p class="meta">' +
      '<span class="author">' +
      '— ' + data.author +
      '</span>' + ' / ' + '<span class="source"><a href="' + data.url + '">参照元</a></span>' +
      '</p>' +
      '</div>' +
      '</li>';
    qof.render(html);
  },
  render: function(html) {
    $('#quotes').append(html);
    this.clearInput();
  },
  toggle: function(e) {
    var $this      = $(this);
    var $icon      = $this.find('.icon');
    var $sendQuote = $('#send-quote');
    if ($sendQuote.hasClass('is-close')) {
      $($icon).removeClass('icon-chevron-right').addClass('icon-chevron-up');
      $($sendQuote).removeClass('is-close').addClass('is-open');
    } else {
      $($icon).removeClass('icon-chevron-up').addClass('icon-chevron-right');
      $($sendQuote).removeClass('is-open').addClass('is-close');
    }
  }
};

(function() {
  qof.init();
})();
