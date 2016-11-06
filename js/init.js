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


        //Manipulate DOM on index page

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
                        $avFR.append(data.data[4]["Change In Snow Depth (in)"]  + '"');
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
        });



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

            var $newSnow = $('#newSnow');
            if ($newSnow[0]) {
                for (var b = 0; b < dailySnowNumArr.length; b++) {
                    if (dailySnowNumArr[b] >= 1) {
                        $newSnow[0].style.display = "block";
                        break;
                    }
                }
            }


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
                    name: 'New Snow 24 Hours',
                    data: dailySnowNumArr
                }]
            };
            Highcharts.chart('container2', chartData2);

        });



        //plot monthly snowpack depth to array for graph graphing
        var $stationSearch = $(".statSearch");
        var $select = $('#select');
        var searchVal = 322;

        var yearRadio = $("#year")
        // var yearSelected = false;

        $stationSearch.on("click", function() {
            event.preventDefault();
            searchVal = $select.val();

            //collect snow pack observations from the end of the month
            var monthlySnow = [];
            var monthlyTemp = [];
            var dates = [];

            //Add a toggle to toggle year, month, week graph



            var $xhr = $.getJSON('https://g-powderlines.herokuapp.com/station/' + searchVal + ':CO:SNTL?days=395');
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
                    dates.push(data.data[334].Date);
                    monthlySnow.push(data.data[365]["Snow Depth (in)"] + '"');

                    //Get snow fall data for month

                    //convert monthly snow fall strings to number format
                    var newSnow = [];
                    var numArr = [];
                    for (var i = 0; i < monthlySnow.length; i++) {
                        newSnow.push(monthlySnow[i].replace('"', '.'));
                        if (!isNaN(parseInt(newSnow[i], 10))) {
                            numArr.push(parseInt(newSnow[i], 10));
                        }
                    }


                    //or grab all the years data and put them in seperate arrays every 30 days
                    var yearsTemp = [];
                    var yearsTempNum = [];

                    for (var j = 0; j < 395; j++) {
                        yearsTemp.push(data.data[j]["Air Temperature Observed (degF)"]);
                        yearsTempNum.push(parseInt(yearsTemp[j], 10));
                    }


                    //  use isNAN() to parse and correct the arrays that have NAN
                    var nov15 = [];
                    nov15.push(yearsTempNum.splice(30, 30));
                    var dec15 = [];
                    dec15.push(yearsTempNum.splice(0, 31));
                    var jan16 = [];
                    jan16.push(yearsTempNum.splice(0, 31));
                    var feb16 = [];
                    feb16.push(yearsTempNum.splice(0, 29));
                    var mar16 = [];
                    mar16.push(yearsTempNum.splice(0, 31));
                    var apr16 = [];
                    apr16.push(yearsTempNum.splice(0, 29));
                    var may16 = [];
                    may16.push(yearsTempNum.splice(0, 31));
                    var jun16 = [];
                    jun16.push(yearsTempNum.splice(0, 30));
                    var jul16 = [];
                    jul16.push(yearsTempNum.splice(0, 31));
                    var aug16 = [];
                    aug16.push(yearsTempNum.splice(0, 31));
                    var sept16 = [];
                    sept16.push(yearsTempNum.splice(0, 30));
                    var oct16 = [];
                    oct16.push(yearsTempNum.splice(0, 31));
                    var nov16 = [];
                    nov16.push(yearsTempNum.splice(0, 5));

                    //need to remove all NaN from array
                    var removeNaN = function(monthTempArr) {
                        for (var t = 0; t < monthTempArr.length; t++) {
                            if (isNaN(monthTempArr[t])) {
                                monthTempArr.splice(t, 1);
                            }
                        }
                        return monthTempArr;
                    };

                    removeNaN(nov15[0]);
                    removeNaN(dec15[0]);
                    removeNaN(jan16[0]);
                    removeNaN(feb16[0]);
                    removeNaN(mar16[0]);
                    removeNaN(apr16[0]);
                    removeNaN(may16[0]);
                    removeNaN(jun16[0]);
                    removeNaN(jul16[0]);
                    removeNaN(aug16[0]);
                    removeNaN(sept16[0]);
                    removeNaN(oct16[0]);
                    removeNaN(nov16[0]);


                    //add and average the arrays:
                    var nov15Sum = 0;
                    var dec15Sum = 0;
                    var jan16Sum = 0;
                    var feb16Sum = 0;
                    var mar16Sum = 0;
                    var apr16Sum = 0;
                    var may16Sum = 0;
                    var jun16Sum = 0;
                    var jul16Sum = 0;
                    var aug16Sum = 0;
                    var sept16Sum = 0;
                    var oct16Sum = 0;
                    var nov16Sum = 0;

                    for (var y = 0; y < 28; y++) {
                        nov15Sum += nov15[0][y];
                        dec15Sum += dec15[0][y];
                        jan16Sum += jan16[0][y];
                        feb16Sum += feb16[0][y];
                        mar16Sum += mar16[0][y];
                        apr16Sum += apr16[0][y];
                        may16Sum += may16[0][y];
                        jun16Sum += jun16[0][y];
                        jul16Sum += jul16[0][y];
                        aug16Sum += aug16[0][y];
                        sept16Sum += sept16[0][y];
                        oct16Sum += oct16[0][y];
                        //  nov16Sum += nov16[0][y];
                    }
                    for (var r = 0; r < nov16[0].length; r++) {
                        nov16Sum += nov16[0][r];
                    }


                    var nov15SumAvrg = nov15Sum / nov15[0].length;
                    var dec15SumAvrg = dec15Sum / dec15[0].length;
                    var jan16SumAvrg = jan16Sum / jan16[0].length;
                    var feb16SumAvrg = feb16Sum / feb16[0].length;
                    var mar16SumAvrg = mar16Sum / mar16[0].length;
                    var apr16SumAvrg = apr16Sum / apr16[0].length;
                    var may16SumAvrg = may16Sum / may16[0].length;
                    var jun16SumAvrg = jun16Sum / jun16[0].length;
                    var jul16SumAvrg = jul16Sum / jul16[0].length;
                    var aug16SumAvrg = aug16Sum / aug16[0].length;
                    var sept16SumAvrg = sept16Sum / sept16[0].length;
                    var oct16SumAvrg = oct16Sum / oct16[0].length;
                    var nov16SumAvrg = nov16Sum / nov16[0].length;

                    var averageTempArr = [];
                    // averageTempArr.push(Math.round(nov15SumAvrg));
                    averageTempArr.push(Math.round(dec15SumAvrg));
                    averageTempArr.push(Math.round(jan16SumAvrg));
                    averageTempArr.push(Math.round(feb16SumAvrg));
                    averageTempArr.push(Math.round(mar16SumAvrg));
                    averageTempArr.push(Math.round(apr16SumAvrg));
                    averageTempArr.push(Math.round(may16SumAvrg));
                    averageTempArr.push(Math.round(jun16SumAvrg));
                    averageTempArr.push(Math.round(jul16SumAvrg));
                    averageTempArr.push(Math.round(aug16SumAvrg));
                    averageTempArr.push(Math.round(sept16SumAvrg));
                    averageTempArr.push(Math.round(oct16SumAvrg));
                    averageTempArr.push(Math.round(nov16SumAvrg));


                    //annual snowfall chart
                    var chartData = {
                        chart: {
                            type: 'line'
                        },
                        title: {
                            text: 'Annual Snow Pack'
                        },
                        subtitle: {
                            text: 'Powderline API'
                        },
                        xAxis: {
                            categories: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov']
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
                            data: averageTempArr
                        }]
                    };
                    Highcharts.chart('container', chartData);

                } else {
                    return;
                }
            });
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
