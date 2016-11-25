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

        //
        // Manipulate DOM on index page
        // commented out to reduc AJAX will testing
        var $xhr0 = $.getJSON('https://g-powderlines.herokuapp.com/station/663:CO:SNTL');
        $xhr0.done(function(data) {
            if ($xhr0.status === 200 || $xhr0.status === undefined) {
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
        var $xhr2 = $.getJSON('https://g-powderlines.herokuapp.com/station/415:CO:SNTL');
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

        //grab information for avy dashboard page
        var $avFR = $('.avFR');
        var $avSB = $('.avSB');
        var $avVail = $('.avVail');
        var $avMon = $('.avMon');
        var $avAsp = $('.avAsp');
        var $avCB = $('.avCB');
        var $avSDC = $('.avSDC');
        var $avTel = $('.avTel');

        var $xhrFR = $.getJSON('https://g-powderlines.herokuapp.com/station/335:CO:SNTL');
        $xhrFR.done(function(data) {
            if ($xhrFR.status === 200 || $xhrFR.status === undefined) {
                $avFR.empty();
                if (data.data[5] === undefined) {
                    if (data.data[4]["Change In Snow Depth (in)"] === null) {
                        $avFR.append('0"');
                    } else {
                        $avFR.append(data.data[4]["Change In Snow Depth (in)"] + '"');
                    }
                } else {
                    $avFR.append(data.data[5]["Change In Snow Depth (in)"] + '"');
                }
            } else {
                return;
            }
        });
        var $xhrSB = $.getJSON('https://g-powderlines.herokuapp.com/station/709:CO:SNTL');
        $xhrSB.done(function(data) {
            if ($xhrSB.status === 200 || $xhrSB.status === undefined) {
                $avSB.empty();
                if (data.data[5] === undefined) {
                    if (data.data[4]["Change In Snow Depth (in)"] === null) {
                        $avSB.append('0"');
                    } else {
                        $avSB.append(data.data[4]["Change In Snow Depth (in)"] + '"');
                    }
                } else {
                    $avSB.append(data.data[5]["Change In Snow Depth (in)"] + '"');
                }
            } else {
                return;
            }
        });
        var $xhrVail = $.getJSON('https://g-powderlines.herokuapp.com/station/842:CO:SNTL');
        $xhrVail.done(function(data) {
            if ($xhrVail.status === 200 || $xhrVail.status === undefined) {
                $avVail.empty();
                if (data.data[5] === undefined) {
                    if (data.data[4]["Change In Snow Depth (in)"] === null) {
                        $avVail.append('0"');
                    } else {
                        $avVail.append(data.data[4]["Change In Snow Depth (in)"] + '"');
                    }
                } else {
                    $avVail.append(data.data[5]["Change In Snow Depth (in)"] + '"');
                }
            } else {
                return;
            }
        });
        var $xhrMon = $.getJSON('https://g-powderlines.herokuapp.com/station/701:CO:SNTL');
        $xhrMon.done(function(data) {
            if ($xhrMon.status === 200 || $xhrMon.status === undefined) {
                $avMon.empty();
                if (data.data[5] === undefined) {
                    if (data.data[4]["Change In Snow Depth (in)"] === null) {
                        $avMon.append('0"');
                    } else {
                        $avMon.append(data.data[4]["Change In Snow Depth (in)"] + '"');
                    }
                } else {
                    $avMon.append(data.data[5]["Change In Snow Depth (in)"] + '"');
                }
            } else {
                return;
            }
        });
        var $xhrAsp = $.getJSON('https://g-powderlines.herokuapp.com/station/542:CO:SNTL');
        $xhrAsp.done(function(data) {
            if ($xhrAsp.status === 200 || $xhrAsp.status === undefined) {
                $avAsp.empty();
                if (data.data[5] === undefined) {
                    if (data.data[4]["Change In Snow Depth (in)"] === null) {
                        $avAsp.append('0"');
                    } else {
                        $avAsp.append(data.data[4]["Change In Snow Depth (in)"] + '"');
                    }
                } else {
                    $avAsp.append(data.data[5]["Change In Snow Depth (in)"] + '"');
                }
            } else {
                return;
            }
        });
        var $xhrCB = $.getJSON('https://g-powderlines.herokuapp.com/station/380:CO:SNTL');
        $xhrCB.done(function(data) {
            if ($xhrCB.status === 200 || $xhrCB.status === undefined) {
                $avCB.empty();
                if (data.data[5] === undefined) {
                    if (data.data[4]["Change In Snow Depth (in)"] === null) {
                        $avCB.append('0"');
                    } else {
                        $avCB.append(data.data[4]["Change In Snow Depth (in)"] + '"');
                    }
                } else {
                    $avCB.append(data.data[5]["Change In Snow Depth (in)"] + '"');
                }
            } else {
                return;
            }
        });
        var $xhrSDC = $.getJSON('https://g-powderlines.herokuapp.com/station/773:CO:SNTL');
        $xhrSDC.done(function(data) {
            if ($xhrSDC.status === 200 || $xhrSDC.status === undefined) {
                $avSDC.empty();
                if (data.data[5] === undefined) {
                    if (data.data[4]["Change In Snow Depth (in)"] === null) {
                        $avSDC.append('0"');
                    } else {
                        $avSDC.append(data.data[4]["Change In Snow Depth (in)"] + '"');
                    }
                } else {
                    $avSDC.append(data.data[5]["Change In Snow Depth (in)"] + '"');
                }
            } else {
                return;
            }
        });
        var $xhrTel = $.getJSON('https://g-powderlines.herokuapp.com/station/586:CO:SNTL');
        $xhrTel.done(function(data) {
            if ($xhrTel.status === 200 || $xhrTel.status === undefined) {
                $avTel.empty();
                if (data.data[5] === undefined) {
                    if (data.data[4]["Change In Snow Depth (in)"] === null) {
                        $avTel.append('0"');
                    } else {
                        $avTel.append(data.data[4]["Change In Snow Depth (in)"] + '"');
                    }
                } else {
                    $avTel.append(data.data[5]["Change In Snow Depth (in)"] + '"');
                }
            } else {
                return;
            }
        }); //end commented out AJAX for testing

        //plot 24 hour snow to bar graph

        var allRequests = [];

        // This is the logic to control the warning button


        allRequests.push($.getJSON('https://g-powderlines.herokuapp.com/station/663:CO:SNTL'));


        allRequests.push($.getJSON('https://g-powderlines.herokuapp.com/station/335:CO:SNTL'));


        allRequests.push($.getJSON('https://g-powderlines.herokuapp.com/station/415:CO:SNTL'));

        allRequests.push($.getJSON('https://g-powderlines.herokuapp.com/station/322:CO:SNTL'));


        Promise.all(allRequests).then(function(results) {
            var dailySnowObj = {};
            for (var i = 0; i < results.length; i++) {
                dailySnowObj[results[i].station_information.name] = results[i].data;
            }

            var dailySnowArr = [];
            dailySnowArr[0] = dailySnowObj.NIWOT[5]["Change In Snow Depth (in)"];
            dailySnowArr[1] = dailySnowObj["COPPER MOUNTAIN"][5]["Change In Snow Depth (in)"];
            dailySnowArr[2] = dailySnowObj["BERTHOUD SUMMIT"][5]["Change In Snow Depth (in)"];
            dailySnowArr[3] = dailySnowObj["BEAR LAKE"][5]["Change In Snow Depth (in)"];

            var dailySnowNumArr = [];
            for (var c = 0; c < dailySnowArr.length; c++) {
                if (!isNaN(parseInt(dailySnowArr[c], 10))) {
                    dailySnowNumArr.push(parseInt(dailySnowArr[c], 10));
                }
            }

            // check daily snow for red button on index page
            //
            // var $newSnow = $('#newSnow');
            // if ($newSnow[0]) {
            //     for (var b = 0; b < dailySnowNumArr.length; b++) {
            //         if (dailySnowNumArr[b] >= 3) {
            //             $newSnow[0].style.display = "block";
            //             break;
            //         }
            //     }
            // }
            // var $stationSearch = $(".statSearch");
            // var $select = $('#select');
            // var searchVal = 322;
            //
            // var yearRadio = $("#year");
            // var radioVal = "none selected";
            // var radioVal2 = "none selected";
            //
            // var dailySnowArr29 = [];
            // var xAxisCat = [];
            // var chartType = "line";
            // var chartTitle = "";
            // var series1Name = "";
            // var sliceYear = [];
            // var sliceMonth = [];
            // var dateStr = "";
            // var numArr = [];
            //
            // var newSnowCalc = function (){
            //   for (var q = 0; q < timeSearch + 1; q++) {
            //     if(parseInt(data.data[q]["Change In Snow Depth (in)"]) > 0){
            //       dailySnowArr29.push(parseInt(data.data[q]["Change In Snow Depth (in)"]));
            //     }
            //     else {
            //       dailySnowArr29.push('0');
            //     }
            //     var str = data.data[q].Date;
            //     sliceYear = str.substring(10, 8);
            //     if (str.charAt(5) === "0") {
            //       sliceMonth = str.substring(7, 6);
            //     } else {
            //       sliceMonth = str.substring(7, 5);
            //     }
            //
            //     dateStr = sliceMonth + "/" + sliceYear;
            //     xAxisCat.push(dateStr);
            //   }
            // };
            //
            // var $xhr = $.getJSON('https://g-powderlines.herokuapp.com/station/' + 564 + ':CO:SNTL?days=' + 7);
            // $xhr.done(function(data) {
            //     if ($xhr.status === 200 || $xhr.status === undefined) {
            //       newSnowCalc();
            //       var numArr = dailySnowArr29;
            //       var chartType = 'column';
            //       var chartTitle = '360 Day New Snow';
            //       var series1Name = 'New Snow 24 Hours';
            //       var seriesArr = [{
            //         name: series1Name,
            //         data: numArr
            //       }];
            //       var chartData2 = {
            //         chart: {
            //           type: chartType
            //         },
            //         title: {
            //           text: chartTitle
            //         },
            //         subtitle: {
            //           text: 'Powderline API'
            //         },
            //         xAxis: {
            //           categories: xAxisCat
            //         },
            //         yAxis: {
            //           title: {
            //             text: 'Inches'
            //           }
            //         },
            //         plotOptions: {
            //           line: {
            //             dataLabels: {
            //               enabled: true
            //             },
            //             enableMouseTracking: true
            //           }
            //         },
            //         series: seriesArr
            //         // series: [{
            //         //     name: series1Name,
            //         //     data: numArr
            //         // }, {
            //         //     name: 'Average Temperature',
            //         //     data: averageTempArr
            //         // }]
            //       };
            //     } else {
            //       return;
            //     }
            //   });
            Highcharts.chart('container', chartData2);

        });


        //plot monthly snowpack depth to array for graph graphing
        var $stationSearch = $(".statSearch");
        var $select = $('#select');
        var searchVal = 322;

        var yearRadio = $("#year");
        var radioVal = "none selected";
        var radioVal2 = "none selected";
        // var yearSelected = false;


        //need to remove all NaN from array
        var removeNaN = function(monthTempArr) {
          for (var t = 0; t < monthTempArr.length; t++) {
            if (isNaN(monthTempArr[t])) {
              monthTempArr.splice(t, 1);
            }
          }
          return monthTempArr;
        };



        $stationSearch.on("click", function() {
            event.preventDefault();

            searchVal = $select.val();

            //add radio button functionality for year
            radioVal = $('input[name=time]:checked').val();
            var timeSearch = 0;
            if (radioVal === "YR") {
                timeSearch = 365;
            } else if (radioVal === "threeYR"){
                timeSearch = 1301;
            } else if (radioVal === "MN") {
                timeSearch = 30;
            } else if (radioVal === "WK") {
                timeSearch = 7;
            }

            radioVal2 = $('input[name=dataType]:checked').val();
            var dataType = 0;
            if (radioVal2 === "SP"){
              dataType = "snowPack";
            } else if (radioVal2 ==="NS"){
              dataType = "newSnow";
            } else if (radioVal2 === "SWE"){
              dataType = "snowWaterEquiv";
            } else if (radioVal2 === "TP"){
              dataType = "temp";
            }

            //Add a toggle to toggle year, month, week grap
            var $xhr = $.getJSON('https://g-powderlines.herokuapp.com/station/' + searchVal + ':CO:SNTL?days=' + timeSearch);
            $xhr.done(function(data) {
                if ($xhr.status === 200 || $xhr.status === undefined) {
                    //push snow pack depth at 30 day intervals over the year
                    var dailySnowArr29 = [];
                    var xAxisCat = [];
                    var yAxisTitle = [];
                    var chartType = "line";
                    var chartTitle = "";
                    var series1Name = "";
                    var sliceYear = [];
                    var sliceMonth = [];
                    var dateStr = "";
                    var numArr = [];

                    //Functions for manipulating data to graph
                    var snowDepthCalc = function () {
                      for (var q = 0; q < timeSearch + 1; q++) {
                        dailySnowArr29.push(parseInt(data.data[q]["Snow Depth (in)"]));
                        var str = data.data[q].Date;
                        sliceYear = str.substring(10, 8);
                        if (str.charAt(5) === "0") {
                          sliceMonth = str.substring(7, 6);
                        } else {
                          sliceMonth = str.substring(7, 5);
                        }

                        dateStr = sliceMonth + "/" + sliceYear;
                        xAxisCat.push(dateStr);
                        yAxisTitle = "Inches";
                        series1Name = 'Snow Pack Depth';
                        var seriesArr = [{
                          name: series1Name,
                          data: numArr
                        }];
                      }
                    };
                    var newSnowCalc = function (){
                      for (var q = 0; q < timeSearch + 1; q++) {
                        if(parseInt(data.data[q]["Change In Snow Depth (in)"]) > 0){
                          dailySnowArr29.push(parseInt(data.data[q]["Change In Snow Depth (in)"]));
                        }
                        else {
                          dailySnowArr29.push('0');
                        }
                        var str = data.data[q].Date;
                        sliceYear = str.substring(10, 8);
                        if (str.charAt(5) === "0") {
                          sliceMonth = str.substring(7, 6);
                        } else {
                          sliceMonth = str.substring(7, 5);
                        }

                        dateStr = sliceMonth + "/" + sliceYear;
                        xAxisCat.push(dateStr);
                        yAxisTitle = "Inches";
                        series1Name = 'New Snow 24 Hours';
                        var seriesArr = [{
                          name: series1Name,
                          data: numArr
                        }];
                      }
                    };
                    var snowWaterEquivCalc = function(){
                      for (var q = 0; q < timeSearch + 1; q++) {
                        dailySnowArr29.push(parseInt(data.data[q]['Snow Water Equivalent (in)']));
                        var str = data.data[q].Date;
                        sliceYear = str.substring(10, 8);
                        if (str.charAt(5) === "0") {
                          sliceMonth = str.substring(7, 6);
                        } else {
                          sliceMonth = str.substring(7, 5);
                        }

                        dateStr = sliceMonth + "/" + sliceYear;
                        xAxisCat.push(dateStr);
                        yAxisTitle = "Inches";
                        series1Name = 'Snow Water Equivalent';
                        var seriesArr = [{
                          name: series1Name,
                          data: numArr
                        }];
                      }
                    };
                    var tempCalc = function(){
                      for (var q = 0; q < timeSearch + 1; q++) {
                        dailySnowArr29.push(parseInt(data.data[q]['Air Temperature Observed (degF)']));
                        var str = data.data[q].Date;
                        sliceYear = str.substring(10, 8);
                        if (str.charAt(5) === "0") {
                          sliceMonth = str.substring(7, 6);
                        } else {
                          sliceMonth = str.substring(7, 5);
                        }

                        dateStr = sliceMonth + "/" + sliceYear;
                        xAxisCat.push(dateStr);
                        yAxisTitle = 'Degress Fahrenheit';
                        series1Name = 'Temperature (°F)';
                        var seriesArr = [{
                          name: series1Name,
                          data: numArr
                        }];
                      }
                    };

                    if (timeSearch === 1301) {
                      if(dataType === "snowPack") {
                          console.log(data.data);;
                          snowDepthCalc();
                          numArr = dailySnowArr29;
                          chartType = 'column';
                          chartTitle = '3 Year Snow Pack';
                          series1Name = 'Snow Pack Depth (°in)';
                          var seriesArr = [{
                            name: series1Name,
                            data: numArr
                          }];
                      }
                      else if (dataType === "newSnow") {
                          newSnowCalc();
                          numArr = dailySnowArr29;
                          chartType = 'column';
                          chartTitle = '3 Year New Snow';
                          series1Name = 'New Snow 24 Hours (°in)';
                          var seriesArr = [{
                            name: series1Name,
                            data: numArr
                          }];
                      }
                      else if (dataType === "snowWaterEquiv"){
                        snowWaterEquivCalc();
                        numArr = dailySnowArr29;
                        chartType = 'column';
                        chartTitle = '3 Year Snow Water Equivalent';
                        series1Name = 'Snow Water Equivalent (°in)';
                        var seriesArr = [{
                          name: series1Name,
                          data: numArr
                        }];
                      }
                      else if (dataType === "temp") {
                          tempCalc();
                          numArr = dailySnowArr29;
                          chartType = 'column';
                          chartTitle = '3 Year Temperature';
                          series1Name = 'Temperature (°F)';
                          var seriesArr = [{
                            name: series1Name,
                            data: numArr
                          }];
                      }
                    }
                    if (timeSearch === 365) {
                      if(dataType === "snowPack") {
                          snowDepthCalc();
                          numArr = dailySnowArr29;
                          chartType = 'column';
                          chartTitle = '365 Day Snow Pack';
                          series1Name = 'Snow Pack Depth (°in)';
                          var seriesArr = [{
                            name: series1Name,
                            data: numArr
                          }];
                      }
                      else if (dataType === "newSnow") {
                          newSnowCalc();
                          numArr = dailySnowArr29;
                          chartType = 'column';
                          chartTitle = '365 Day New Snow';
                          series1Name = 'New Snow 24 Hours (°in)';
                          var seriesArr = [{
                            name: series1Name,
                            data: numArr
                          }];
                      }
                      else if (dataType === "snowWaterEquiv"){
                        snowWaterEquivCalc();
                        numArr = dailySnowArr29;
                        chartType = 'column';
                        chartTitle = '365 Day Snow Water Equivalent';
                        series1Name = 'Snow Water Equivalent (°in)';
                        var seriesArr = [{
                          name: series1Name,
                          data: numArr
                        }];
                      }
                      else if (dataType === "temp") {
                          tempCalc();
                          numArr = dailySnowArr29;
                          chartType = 'column';
                          chartTitle = '365 Day Temperature';
                          series1Name = 'Temperature (°F)';
                          var seriesArr = [{
                            name: series1Name,
                            data: numArr
                          }];
                      }
                    }
                    else if (timeSearch === 30) {
                      if(dataType === "snowPack") {
                        snowDepthCalc();
                        numArr = dailySnowArr29;
                        chartType = 'column';
                        chartTitle = '30 Day Snow Pack';
                        series1Name = 'Snow Pack Depth (°in)';
                        var seriesArr = [{
                          name: series1Name,
                          data: numArr
                        }];
                      }
                      else if (dataType === "newSnow") {
                          newSnowCalc();
                          numArr = dailySnowArr29;
                          chartType = 'column';
                          chartTitle = '30 Day New Snow';
                          series1Name = 'New Snow 24 Hours (°in)';
                          var seriesArr = [{
                            name: series1Name,
                            data: numArr
                          }];

                      }
                      else if (dataType === "snowWaterEquiv"){
                        snowWaterEquivCalc();
                        numArr = dailySnowArr29;
                        chartType = 'column';
                        chartTitle = '30 Day Snow Water Equivalent';
                        series1Name = 'Snow Water Equivuivalent (°in)';
                        var seriesArr = [{
                          name: series1Name,
                          data: numArr
                        }];

                      }
                      else if (dataType === "temp") {
                          tempCalc();
                          numArr = dailySnowArr29;
                          chartType = 'column';
                          chartTitle = '30 Day Temperature';
                          series1Name = 'Temperature (°F)';
                          var seriesArr = [{
                            name: series1Name,
                            data: numArr
                          }];
                      }
                    }
                    else if (timeSearch === 7) {
                      if(dataType === "newSnow") {
                        newSnowCalc();
                        numArr = dailySnowArr29;
                        chartType = 'column';
                        chartTitle = '7 Day New Snow';
                        series1Name = 'New Snow 24 Hours (°in)';
                        var seriesArr = [{
                          name: series1Name,
                          data: numArr
                        }];
                      }
                        else if(dataType === "snowPack") {
                          snowDepthCalc();
                          numArr = dailySnowArr29;
                          chartType = 'column';
                          chartTitle = '7 Day Snow Pack';
                          series1Name = 'Snow Pack Depth (°in)';
                          var seriesArr = [{
                            name: series1Name,
                            data: numArr
                          }];
                        }
                        else if (dataType === "snowWaterEquiv"){
                          snowWaterEquivCalc();
                          numArr = dailySnowArr29;
                          chartType = 'column';
                          chartTitle = '7 Day Snow Water Equivalent';
                          series1Name = 'Snow Water Equivalent (°in)';
                          var seriesArr = [{
                            name: series1Name,
                            data: numArr
                          }];
                        }
                        else if (dataType === "temp") {
                            tempCalc();
                            numArr = dailySnowArr29;
                            chartType = 'column';
                            chartTitle = '7 Day Temperature';
                            series1Name = 'Temperature (°F)';
                            var seriesArr = [{
                              name: series1Name,
                              data: numArr
                            }];
                        }
                    }
                    //interactive search chart
                    var chartData = {
                        chart: {
                            type: chartType
                        },
                        title: {
                            text: chartTitle
                        },
                        subtitle: {
                            text: 'Powderline API'
                        },
                        xAxis: {
                            categories: xAxisCat
                        },
                        yAxis: {
                            title: {
                                text: yAxisTitle
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
                        series: seriesArr
                        // series: [{
                        //     name: series1Name,
                        //     data: numArr
                        // }, {
                        //     name: 'Average Temperature',
                        //     data: averageTempArr
                        // }]
                    };
                    Highcharts.chart('container', chartData);

                } else {
                    return;
                }

            });
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
