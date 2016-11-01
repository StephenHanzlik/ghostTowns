"use strict";
(function($) {
    $(function() {

        // $(function () {
        //       Highcharts.chart('container', {
        //           chart: {
        //               type: 'line'
        //           },
        //           title: {
        //               text: 'Anual Snow Pack'
        //           },
        //           subtitle: {
        //               text: 'Powderline API'
        //           },
        //           xAxis: {
        //               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        //           },
        //           yAxis: {
        //               title: {
        //                   text: 'Inches'
        //               }
        //           },
        //           plotOptions: {
        //               line: {
        //                   dataLabels: {
        //                       enabled: true
        //                   },
        //                   enableMouseTracking: true
        //               }
        //           },
        //           series: [{
        //               name: 'Tokyo',
        //               data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        //           }, {
        //               name: 'London',
        //               data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        //           }]
        //       });
        //   });
        //JSON graph
        // $(document).ready(function () {
        //   var snotelData = {
        //     labels: ["Jan", "Feb", "March", "April", "May"],
        //     datasets: [
        //       {
        //         fillColor: "rgba(172,194,132,0.4)",
        //         strokeColor : "#ACC26D",
        //         pointColor : "#fff",
        //         pointStrokeColor : "#9DB86D",
        //         data : [2003,1005,99000,2005,3000,2004]
        //       }
        //     ]
        //   };
        //   var chart = document.getElementById('myChart').getContext('2d');
        //   new Chart(chart).Line(snotelData);
        //
        // })


        //
        //   var ctx = $("#myChart");
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
        // Chart.defaults.global = {
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
        // $('.datepicker').pickadate({
        //     selectMonths: true, // Creates a dropdown to control month
        //     selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    // Hamburger in nav
    $(".button-collapse").sideNav();

    //AJAX to powderline API appended Landing Page

    var $snow1 = $('.snow1');
    var $snowDepth1 = $('.snowDepth1');
    var $temp1 = $('.temp1');
    var $snow2 = $('.snow2');
    var $snowDepth2 = $('.snowDepth2');
    var $temp2 = $('.temp2');
    var $snow3 = $('.snow3');
    var $snowDepth3 = $('.snowDepth3');
    var $temp3 = $('.temp3');
    var $snow4 = $('.snow4');
    var $snowDepth4 = $('.snowDepth4');
    var $temp4 = $('.temp4');

    $(document).ready(function() {
        // var stationArr = ["564:CO:SNTL", "335:CO:SNTL", "1042:CO:SNTL", "322:CO:SNTL", "415:CO:SNTL"];
        // for (var i = 0; i < stationArr.length; i++) {
        //     var stationID = stationArr[i];
        var $xhr = $.getJSON('https://g-powderlines.herokuapp.com/station/564:CO:SNTL');
        $xhr.done(function(data) {
            if ($xhr.status === 200 || $xhr.status === undefined) {
                $snow1.empty();
                $snow1.append(data.station_information.name);
                $temp1.empty();
                $temp1.append(data.data[5]["Air Temperature Observed (degF)"] + "°F");
                $snowDepth1.empty();
                $snowDepth1.append(data.data[5]["Change In Snow Depth (in)"] + '"');
            } else {
                return;
            }
        });
        var $xhr = $.getJSON('https://g-powderlines.herokuapp.com/station/335:CO:SNTL');
        $xhr.done(function(data) {
            if ($xhr.status === 200 || $xhr.status === undefined) {
                $snow2.empty();
                $snow2.append(data.station_information.name);
                $temp2.empty();
                $temp2.append(data.data[5]["Air Temperature Observed (degF)"] + "°F");
                $snowDepth2.empty();
                $snowDepth2.append(data.data[5]["Change In Snow Depth (in)"] + '"');
            } else {
                return;
            }
        });
        var $xhr = $.getJSON('https://g-powderlines.herokuapp.com/station/1042:CO:SNTL');
        $xhr.done(function(data) {
            if ($xhr.status === 200 || $xhr.status === undefined) {
                $snow3.empty();
                $snow3.append(data.station_information.name);
                $temp3.empty();
                $temp3.append(data.data[5]["Air Temperature Observed (degF)"] + "°F");
                $snowDepth3.empty();
                $snowDepth3.append(data.data[5]["Change In Snow Depth (in)"] + '"');
            } else {
                return;
            }
        });
        var $xhr = $.getJSON('https://g-powderlines.herokuapp.com/station/322:CO:SNTL');
        $xhr.done(function(data) {
            if ($xhr.status === 200 || $xhr.status === undefined) {
                $snow4.empty();
                $snow4.append(data.station_information.name);
                $temp4.empty();
                $temp4.append(data.data[5]["Air Temperature Observed (degF)"] + "°F");
                $snowDepth4.empty();
                $snowDepth4.append(data.data[5]["Change In Snow Depth (in)"] + '"');
            } else {
                return;
            }
        });


        //plot monthly snowpack depth to array for graph graphing
        var monthlySnow = [];
        var dates = [];
        var $xhr = $.getJSON('https://g-powderlines.herokuapp.com/station/322:CO:SNTL?days=365');
        $xhr.done(function(data) {
            if ($xhr.status === 200 || $xhr.status === undefined) {
                console.log(data);
                monthlySnow.push(data.data[29]["Snow Depth (in)"] + '"');
                dates.push(data.data[29].Date);
                monthlySnow.push(data.data[60]["Snow Depth (in)"] + '"');
                dates.push(data.data[60].Date);
                monthlySnow.push(data.data[91]["Snow Depth (in)"] + '"');
                dates.push(data.data[91].Date);
                monthlySnow.push(data.data[120]["Snow Depth (in)"] + '"');
                dates.push(data.data[120].Date);
                monthlySnow.push(data.data[151]["Snow Depth (in)"] + '"');
                dates.push(data.data[151].Date);
                monthlySnow.push(data.data[181]["Snow Depth (in)"] + '"');
                dates.push(data.data[181].Date);
                monthlySnow.push(data.data[212]["Snow Depth (in)"] + '"');
                dates.push(data.data[212].Date);
                monthlySnow.push(data.data[242]["Snow Depth (in)"] + '"');
                dates.push(data.data[242].Date);
                monthlySnow.push(data.data[273]["Snow Depth (in)"] + '"');
                dates.push(data.data[273].Date);
                monthlySnow.push(data.data[304]["Snow Depth (in)"] + '"');
                dates.push(data.data[304].Date);
                monthlySnow.push(data.data[334]["Snow Depth (in)"] + '"');
                dates.push(data.data[334].Date);
                monthlySnow.push(data.data[365]["Snow Depth (in)"] + '"');
                dates.push(data.data[365].Date);

                var newSnow = [];
                var numArr = [];
                for (var i = 0; i < monthlySnow.length; i++) {
                    newSnow.push(monthlySnow[i].replace('"', '.'));
                    if (!isNaN(parseInt(newSnow[i], 10))) {
                        numArr.push(parseInt(newSnow[i], 10));
                    } else {
                        newSnow.push(0);
                        numArr.push(0);
                    }
                }

                var chartData = {
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: 'Anual Snow Pack'
                    },
                    subtitle: {
                        text: 'Powderline API'
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    yAxis: {
                        title: {
                            text: 'Inches'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true
                            },
                            enableMouseTracking: true
                        }
                    },
                    series: [{
                        name: 'Snow Pack Depth',
                        data: numArr,
                    }, {
                        name: 'London',
                        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
                    }]
                };
                Highcharts.chart('container', chartData);


            } else {
                return;
            }
        });
        //
        // $(function () {
        //       Highcharts.chart('container', {
        //           chart: {
        //               type: 'line'
        //           },
        //           title: {
        //               text: 'Anual Snow Pack'
        //           },
        //           subtitle: {
        //               text: 'Powderline API'
        //           },
        //           xAxis: {
        //               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        //           },
        //           yAxis: {
        //               title: {
        //                   text: 'Inches'
        //               }
        //           },
        //           plotOptions: {
        //               line: {
        //                   dataLabels: {
        //                       enabled: true
        //                   },
        //                   enableMouseTracking: true
        //               }
        //           },
        //           series: [{
        //               name: 'Tokyo',
        //               data: monthlySnow,
        //           }, {
        //               name: 'London',
        //               data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        //           }]
        //       });
        //     console.log(chart);
        //   });


        // $indexStats.append(data.station_information.name);


        //This is for Dark Sky's API to get forecast data on main page:
        //     var $xhr = $.getJSON('https://api.darksky.net/forecast/1208083a5de6f5223add7d7ea23141da/39.938172,-105.586681');
        //     $xhr.done(function(data) {
        //         if ($xhr.status === 200 || $xhr.status === undefined) {
        //           console.log(data);
        //         } else {
        //             return;
        //         }
        //     });
        // });

        //AJAX to powderline API to append CAIC Zone averages
        // $(document).ready(function() {
        //     var $xhr = $.getJSON('https://g-powderlines.herokuapp.com/station/335:CO:SNTL');
        //     $xhr.done(function(data) {
        //         if ($xhr.status === 200 || $xhr.status === undefined) {
        //           console.log(data);
        //         } else {
        //             return;
        //         }
        //     });
        //   });







        //  data.data[0]["Air Temperature Observed (degF)"]);
        //  data.station_information.name
        //


    }); // end of document ready
})(jQuery); // end of jQuery name space
