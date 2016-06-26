//Flot Pie Chart
$(function() {

  if ($(".viral").length > 0) {
    console.log("Viral");
    var data = [{
      label: "Series 0",
      data: 1
    }, {
      label: "Series 1",
      data: 3
    }, {
      label: "Series 2",
      data: 9
    }, {
      label: "Series 3",
      data: 20
    }];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
      series: {
        pie: {
          show: true
        }
      },
      grid: {
        hoverable: true
      },
      tooltip: true,
      tooltipOpts: {
        content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
        shifts: {
          x: 20,
          y: 0
        },
        defaultTheme: false
      }
    });
  }
  

});

//Flot Bar Chart

$(function() {

  if ($(".analytics").length > 0) {
    console.log("Analytics");
    
    var d1_1 = [
        [1325376000000, 120],
    ];
     
    var d1_2 = [
        [1328054400000, 60]
    ];
     
    var d1_3 = [
        [1330560000000, 30]
    ];
     
    var d1_4 = [
        [1333238400000, 20]
    ];
 
    var data1 = [
        {
            label: "Install", 
            data: d1_1,
            bars: {
                show: true,
                barWidth: 12*24*60*60*300,
                fill: true,
                lineWidth: 1,
                order: 1,
                fillColor:  "#AA4643"
            },
            color: "#AA4643"
        },
        {
            label: "Remove", 
            data: d1_2,
            bars: {
                show: true,
                barWidth: 12*24*60*60*300,
                fill: true,
                lineWidth: 1,
                order: 2,
                fillColor:  "#89A54E"
            },
            color: "#89A54E"
        },
        {
            label: "Visitors", 
            data: d1_3,
            bars: {
                show: true,
                barWidth: 12*24*60*60*300,
                fill: true,
                lineWidth: 1,
                order: 3,
                fillColor:  "#4572A7"
            },
            color: "#4572A7"
        },
        {
            label: "From Invitations", 
            data: d1_4,
            bars: {
                    show: true,
                barWidth: 12*24*60*60*300,
                fill: true,
                lineWidth: 1,
                order: 4,
                fillColor:  "#80699B"
            },
            color: "#80699B"
        }
    ];
     
    // $.plot($("#flot-bar-chart"), data1, {
    //     xaxis: {
    //         min: (new Date(2011, 11, 15)).getTime(),
    //         max: (new Date(2012, 03, 18)).getTime(),
    //         mode: "time",
    //         timeformat: "%b",
    //         tickSize: [1, "month"],
    //         monthNames: ["Installs","Removes", "Visitors", "From Invitations"],
    //         tickLength: 0, // hide gridlines
    //         axisLabel: 'Month',
    //         axisLabelUseCanvas: true,
    //         axisLabelFontSizePixels: 12,
    //         axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
    //         axisLabelPadding: 5
    //     },
    //     yaxis: {
    //         axisLabel: 'Value',
    //         axisLabelUseCanvas: true,
    //         axisLabelFontSizePixels: 12,
    //         axisLabelFontFamily: 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
    //         axisLabelPadding: 5
    //     },
    //     grid: {
    //         hoverable: true,
    //         clickable: false,
    //         borderWidth: 1
    //     },
    //     // legend: {
    //     //     labelBoxBorderColor: "none",
    //     //     position: "right"
    //     // },
    //     series: {
    //         shadowSize: 1
    //     }
    // });

  }

});

