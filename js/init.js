"use strict";
(function($) {
    $(function() {
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
        $(document).ready(function() {
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

        var $indexStats = $('#indexStats');
        var $snow1 = $('.snow1');
        var $snowDepth1 = $('.snowDepth1');
        var $temp1 = $('.temp1');
        var $snow2 = $('.snow2');
        var $snowDepth2 = $('.snowDepth2');
        var $temp2 = $('.temp2');

        $(document).ready(function() {
            var stationArr = ["564:CO:SNTL", "335:CO:SNTL", "1042:CO:SNTL", "322:CO:SNTL", "415:CO:SNTL"];
            for (var i = 0; i < stationArr.length; i++) {
                var stationID = stationArr[i];
                var $xhr = $.getJSON('https://g-powderlines.herokuapp.com/station/' + stationID);
                $xhr.done(function(data) {
                    if ($xhr.status === 200 || $xhr.status === undefined) {
                      $snow1.empty();
                      $snow1.append(data.station_information.name);
                      $temp1.empty();
                      $temp1.append(data.data[5]["Air Temperature Observed (degF)"] + "°F");
                      $snowDepth1.empty();
                      $snowDepth1.append(data.data[5]["Change In Snow Depth (in)"] + '"');
                      console.log(data.data);

                      $snow2.empty();
                      $snow2.append(data.station_information.name);
                      $temp2.empty();
                      $temp2.append(data.data[5]["Air Temperature Observed (degF)"] + "°F");
                      $snowDepth2.empty();
                      $snowDepth2.append(data.data[5]["Change In Snow Depth (in)"] + '"');
                    } else{
                    return;
                    }
                });
                // $indexStats.append(data.station_information.name);

            }
        });
        //  data.data[0]["Air Temperature Observed (degF)"]);
        //  data.station_information.name
        //


    }); // end of document ready
})(jQuery); // end of jQuery name space
