module( 'Getting familiar with QUnit' );

test('Namespace should be qof', function() {
  expect(1);
  ok( window.qof, 'Namespace is qof and public' );
});

test('init method is woking', function() {
  expect(1);
  ok( window.qof.init, 'init method is revving up for refactoring' );
});

module( 'Input values', {
  setup: function() {
    $('#quote-text').val('quote');
    $('#author').val('author');
    $('#source').val('url');
  },
  teardown: function() {
    $('#quote-text').val('');
    $('#author').val('');
    $('#source').val('');
  }
} );

test('User input values are good to go', function() {
  expect(3);
  qof.init();
  equal( qof.getData().quote, 'quote', 'quote is in #quote-text' );
  equal( qof.getData().author, 'author', 'author is in #author' );
  equal( qof.getData().url, 'url', 'url is in #source' );
});

module( 'Templating', {
  setup: function() {
    $('#quote-text').val('quote');
    $('#author').val('author');
    $('#source').val('url');
  },
  teardown: function() {
    $('#quote-text').val('');
    $('#author').val('');
    $('#source').val('');
  }
} );

test('Generate HTML from input data', function() {
  expect(1);
  var html = qof.template();
  var dummy = '<li>' +
        '<div class="quote">' +
        '<p class="text">' +
        'quote'+
        '</p>' +
        '<p class="meta">' +
        '<span class="author">' +
        '—' + 'author' +
        '</span>' + ' / ' + '<span class="source"><a href="url">参照元</a></span>' +
        '</p>' +
        '</div>' +
        '</li>';
  equal( html, dummy, 'Templating is working' );
});
