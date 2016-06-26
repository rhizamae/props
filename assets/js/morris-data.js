$(function() {

    if ($("#morris-bar-chart").length > 0 ) {
      Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Installs',
            a: 450
        }, {
            y: 'Removes',
            a: 0
        }, {
            y: 'Visitors',
            a: 900
        }, {
            y: 'From Invitations',
            a: 50
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['No. of people'],
        hideHover: 'auto',
        resize: true
      });
    }
   
    if ($("#morris-bar-browser").length > 0 ) {
      Morris.Bar({
          element: 'morris-bar-browser',
          data: [{
              y: 'Others',
              a: 50
          }, {
              y: 'Chrome',
              a: 150
          }, {
              y: 'Firefox',
              a: 200
          }],
          xkey: 'y',
          ykeys: ['a'],
          labels: ['No. of people'],
          hideHover: 'auto',
          resize: true
      });
    }

    if ($("#morris-bar-os").length > 0 ) {
      Morris.Bar({
        element: 'morris-bar-os',
        data: [{
            y: 'iOS',
            a: 50
        }, {
            y: 'Android',
            a: 80
        }, {
            y: 'Windows',
            a: 300
        }],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['No. of people'],
        hideHover: 'auto',
        resize: true
      });
    }

});
