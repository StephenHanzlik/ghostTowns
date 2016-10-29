"use strict";
(function($){
  $(function(){

    //materialize scripts
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    // $('#modal1').openModal();
    $('.modal-trigger').leanModal();

    // avalanche red danger icon
    $('.fixed-action-btn').openFAB();


    //AJAX to powderline API
    var search = $('#searchButton');

    search.on('click', function () {
      console.log('hello');
      event.preventDefault();
      var $xhr = $.getJSON('http://api.powderlin.es/stations');
      $xhr.done(function(data) {
      if($xhr.status !== 200) {
        return;
      }
      console.log('hello');
      console.log(data);

    });
  });


  }); // end of document ready
})(jQuery); // end of jQuery name space
