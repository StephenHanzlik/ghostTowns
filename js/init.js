"use strict";
(function($) {
    $(function() {


        //Collapsable collection script
        $('.collapsible').collapsible();

        //Drop down options tabs
        $('select').material_select();


        //materialize scripts
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        // $('#modal1').openModal();
        $('.modal-trigger').leanModal();

        // avalanche red danger icon
        $('.fixed-action-btn').openFAB();

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
        //Manipulate DOM on index page
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
        var $xhr1 = $.getJSON('https://g-powderlines.herokuapp.com/station/335:CO:SNTL');
        $xhr1.done(function(data) {
            if ($xhr1.status === 200 || $xhr1.status === undefined) {
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
        var $xhr2 = $.getJSON('https://g-powderlines.herokuapp.com/station/322:CO:SNTL');
        $xhr2.done(function(data) {
            if ($xhr2.status === 200 || $xhr2.status === undefined) {
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
        var $xhr3 = $.getJSON('https://g-powderlines.herokuapp.com/station/322:CO:SNTL');
        $xhr3.done(function(data) {
            if ($xhr3.status === 200 || $xhr3.status === undefined) {
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

      //Average 5x stations from each zone an render to CAIC page
          //front range stations
        var $avrgFrontRange = $('avrgFrontRange');
        var avrgFrontRangeArr = [];

        var $frontAJAX = $.getJSON('https://g-powderlines.herokuapp.com/station/322:CO:SNTL');
        $frontAJAX.done(function(data) {
            if ($frontAJAX.status === 200 || $frontAJAX.status === undefined) {
                avrgFrontRangeArr.push(data.data[5]["Change In Snow Depth (in)"]);
            } else {
                return;
            }
        });
        var $frontAJAX = $.getJSON('https://g-powderlines.herokuapp.com/station/1042:CO:SNTL');
        $frontAJAX.done(function(data) {
            if ($frontAJAX.status === 200 || $frontAJAX.status === undefined) {
                avrgFrontRangeArr.push(data.data[5]["Change In Snow Depth (in)"]);
            } else {
                return;
            }
        });
        var $frontAJAX = $.getJSON('https://g-powderlines.herokuapp.com/station/415:CO:SNTL');
        $frontAJAX.done(function(data) {
            if ($frontAJAX.status === 200 || $frontAJAX.status === undefined) {
                avrgFrontRangeArr.push(data.data[5]["Change In Snow Depth (in)"]);
            } else {
                return;
            }
        });

        //this converts string array to numbers but is not working :
        console.log(avrgFrontRangeArr);
        var fRangeNumArr = [];
        for (var c = 0; c < avrgFrontRangeArr.length; c++) {
            fRangeNumArr.push(parseInt(avrgFrontRangeArr[c], 10));
            // if (!isNaN(parseInt(avrgFrontRangeArr[c], 10))) {
            //     fRangeNumArr.push(parseInt(avrgFrontRangeArr[c], 10));
            // } else {
            //   fRangeNumArr.push(0);
            // }
        }
        console.log(fRangeNumArr);


        //plot 24 hour snow to bar graph

        var allRequests = [];

        allRequests.push($.getJSON('https://g-powderlines.herokuapp.com/station/564:CO:SNTL'));


        allRequests.push($.getJSON('https://g-powderlines.herokuapp.com/station/335:CO:SNTL'));


        allRequests.push($.getJSON('https://g-powderlines.herokuapp.com/station/415:CO:SNTL'));

        allRequests.push($.getJSON('https://g-powderlines.herokuapp.com/station/1042:CO:SNTL'));


        Promise.all(allRequests).then(function (results) {
          var dailySnowObj = {};
          for (var i = 0; i < results.length; i++) {
            dailySnowObj[results[i].station_information.name] = results[i].data;
          }

          var dailySnowArr = [];
          dailySnowArr[0] = dailySnowObj["LAKE ELDORA"][5]["Change In Snow Depth (in)"];
          dailySnowArr[1] = dailySnowObj["COPPER MOUNTAIN"][5]["Change In Snow Depth (in)"];
          dailySnowArr[2] = dailySnowObj["BERTHOUD SUMMIT"][5]["Change In Snow Depth (in)"];
          dailySnowArr[3] = dailySnowObj["WILD BASIN"][5]["Change In Snow Depth (in)"];

          var dailySnowNumArr = [];
          for (var c = 0; c < dailySnowArr.length; c++) {
              if (!isNaN(parseInt(dailySnowArr[c], 10))) {
                  dailySnowNumArr.push(parseInt(dailySnowArr[c], 10));
              }
          }

          console.log(dailySnowNumArr);

          // var dailySnowArr = Object.keys(dailySnowObj).map(function (key) { return dailySnowObj[key]; });
          // console.log(dailySnowArr);

          var chartData2 = {
            chart: {
              type: 'bar'
            },
            title: {
              text: 'New Snow Report 24 Hours'
            },
            subtitle: {
              text: 'Powderline API'
            },
            xAxis: {
              categories: ['Eldora', 'Copper', 'Berthoud', 'RMNP']
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
              data: dailySnowNumArr
            }]
          };
          Highcharts.chart('container2', chartData2);


        });



        //plot monthly snowpack depth to array for graph graphing
        var $stationSearch = $(".statSearch");
        var $select = $('#select');
        var searchVal = 322;

        $stationSearch.on("click", function() {
            event.preventDefault();
            searchVal = $select.val();


            //collect snow pack observations from the end of the month
            var monthlySnow = [];
            var dates = [];



            var $xhr = $.getJSON('https://g-powderlines.herokuapp.com/station/' + searchVal + ':CO:SNTL?days=365');
            $xhr.done(function(data) {
                if ($xhr.status === 200 || $xhr.status === undefined) {
                    //push snow pack depth at monthly intervals
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
                    // dates.push(data.data[334].Date);
                    // monthlySnow.push(data.data[365]["Snow Depth (in)"] + '"');

                    //convert monthly snow fall strings to number format
                    var newSnow = [];
                    var numArr = [];
                    for (var i = 0; i < monthlySnow.length; i++) {
                        newSnow.push(monthlySnow[i].replace('"', '.'));
                        if (!isNaN(parseInt(newSnow[i], 10))) {
                            numArr.push(parseInt(newSnow[i], 10));
                        }
                    }

                    //push temperature at 3x a month interval
                    // x3Temp.push(data.data[3]["Air Temperature Observed (degF)"]);
                    // x3Temp.push(data.data[16]["Air Temperature Observed (degF)"]);
                    // x3Temp.push(data.data[26]["Air Temperature Observed (degF)"]);
                    // // conver 3x a month observations to numbers for graphing
                    // var newTemp = [];
                    // var tempNumArr = [];
                    // for (var i = 0; i < x3Temp.length; i++) {
                    //     newTemp.push(x3Temp[i]);
                    //     if (!isNaN(parseInt(newTemp[i], 10))) {
                    //         tempNumArr.push(parseInt(newTemp[i], 10));
                    //     }
                    // }

                    //or grab all the years data and put them in seperate arrays every 30 days
                    // var yearsTemp = [];
                    // for (var j = 0; j < 365; j++) {
                    //     yearsTemp.push(data.data[j]["Air Temperature Observed (degF)"]);
                    // }
                    // var nov15 = yearsTemp.splice(0, 28);
                    // var dec15 = yearsTemp.splice(29, 59);
                    // var jan16 = yearsTemp.splice(60, 90);
                    // var feb16 = yearsTemp.splice(91, 119);
                    // var mar16 = yearsTemp.splice(120, 150);
                    // var apr16 = yearsTemp.splice(151, 180);
                    // var may16 = yearsTemp.splice(181, 211);
                    // var jun16 = yearsTemp.splice(212, 241);
                    // var jul16 = yearsTemp.splice(242, 272);
                    // var aug16 = yearsTemp.splice(273, 303);
                    // var sept16 = yearsTemp.splice(304, 333);
                    // var 16 = yearsTemp.splice(334, 364);
                    // // for (var y = 0; y < 360; 30++) {
                    // //   array[y]
                    // // }
                    // console.log("******"+yearsTemp);

                    //push temperature at 5x monthly intervals



                    //annual snowfall chart
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
                            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
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
                            name: 'Average Temperature',
                            data: []
                        }]
                    };
                    Highcharts.chart('container', chartData);


                } else {
                    return;
                }
            });
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
