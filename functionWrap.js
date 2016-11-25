'use strict';

if (timeSearch === 365) {
  if(dataType === "snowPack") {
    snowDepthCalc();
    numArr = dailySnowArr29;
    chartType = 'column';
    chartTitle = '360 Day Snow Pack';
    series1Name = 'Snow Pack Depth';
    var seriesArr = [{
      name: series1Name,
      data: numArr
    }];
  }
}


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
      }
    };


    //////////////  new snow  /////////////////////////

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
      }
    }

    else if (dataType === "newSnow") {
        newSnowCalc();
        numArr = dailySnowArr29;
        chartType = 'column';
        chartTitle = '360 Day New Snow';
        series1Name = 'New Snow 24 Hours';
        var seriesArr = [{
          name: series1Name,
          data: numArr
        }];
    }

    ////////// snow water equiv //////////
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
   }
 };


else if (dataType === "snowWaterEquiv"){
  snowWaterEquivCalc();
  numArr = dailySnowArr29;
  chartType = 'column';
  chartTitle = '360 Day Snow Water Equivalent';
  series1Name = 'Snow Water Equiv.';
  var seriesArr = [{
    name: series1Name,
    data: numArr
  }];
}



///////// page load graphing of eldora 7 day snow /////////

var $xhr = $.getJSON('https://g-powderlines.herokuapp.com/station/' + 564 + ':CO:SNTL?days=' + 7);
$xhr.done(function(data) {
    if ($xhr.status === 200 || $xhr.status === undefined) {
      newSnowCalc();
      numArr = dailySnowArr29;
      chartType = 'column';
      chartTitle = '360 Day New Snow';
      series1Name = 'New Snow 24 Hours';
      var seriesArr = [{
        name: series1Name,
        data: numArr
      }];
    } else {
      return;
    }
  });
