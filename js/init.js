"use strict";
(function($){
  $(function(){
    //JSON graph
//     var ctx = $("#myChart");
//   //   Chart.defaults.global = {
//   //     scaleOverride: true,
//   //     scaleSteps: 5,
//   //     scaleStepWidth: 12,
//   //    scaleStartValue: 30,
//   //  };
//     var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [
//       {
//         label: "My First dataset",
//         fillColor: "rgba(220,220,220,0.2)",
//         strokeColor: "rgba(220,220,220,1)",
//         pointColor: "rgba(220,220,220,1)",
//         pointStrokeColor: "#fff",
//         pointHighlightFill: "#fff",
//         pointHighlightStroke: "rgba(220,220,220,1)",
//         data: [65, 59, 80, 81, 56, 55, 40]
//       }],
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
// myChart.defaults.global = {
//   scaleOverride: true,
//   scaleSteps: 5,
//   scaleStepWidth: 12,
//   scaleStartValue: 30,
// };
   //Collapsable collection script
    $(document).ready(function(){
    $('.collapsible').collapsible();
    });

    //materialize scripts
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    // $('#modal1').openModal();
    $('.modal-trigger').leanModal();

    // avalanche red danger icon
    $('.fixed-action-btn').openFAB();

    // Date entry script
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

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
