(function() {
  var number = $('#number');
  var button = $('#button');
  var spinner = $('.mdl-spinner');
  var response = $('#response');

  /**
   * Show or hide fields
   */
  var setLoading = function(show) {
    if (show) {
      spinner.show();
      button.hide();
    }
    else {
      spinner.hide();
      button.show();
    }
  }

  /**
   * get data function
   */
  var getData = function() {
    var re = /^[0-9]{8}$/g;

    if (number.val().match(re) !== null) {
      // show loading
      setLoading(true);
      // set url
      var url = 'http://tuc.apinic.org/v1/' + number.val();

      // make http request
      $.get(url, function(data) {
        setLoading(false);
        response.text(data.balance);
      });
    }
  }

  /**
   * Set click event
   */
  button.on('click', function() {
    getData();
  });

})();
