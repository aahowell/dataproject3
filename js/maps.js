$(function () {


    // Load the data from a Google Spreadsheet
    // https://docs.google.com/a/highsoft.com/spreadsheet/pub?hl=en_GB&hl=en_GB&key=0AoIaUO7wH1HwdFJHaFI4eUJDYlVna3k5TlpuXzZubHc&output=html
    Highcharts.data({

        googleSpreadsheetKey: '1QoxctTlOr2cQSCBXw-vSfZlbRk_clQGk_nXvAKj6ljs',

        // custom handler when the spreadsheet is parsed
        parsed: function (columns) {

            // Read the columns into the data array
            var data = [];
            $.each(columns[0], function (i, code) {
                data.push({
                    code: code.toUpperCase(),
                    value: parseFloat(columns[2][i]),
                    name: columns[1][i]
                });
            });


            // Initiate the chart
            $('#worldmap1').highcharts('Map', {
                chart : {
                    borderWidth : 0,
                    backgroundColor: '#F1F3F2',
                },

                colors: ['#074442', '#0b675f', '#008b8f',
                    '#61c5be', '#b5d9d5'],

                title : {
                    text : null
                },

                mapNavigation: {
                    enabled: true,
                    enableMouseWheelZoom: false
                },

                legend: {
                    title: {
                        text: 'Metric Tons of Bananas',
                        style: {
                            // color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                        }
                    },
                    align: 'left',
                    verticalAlign: 'bottom',
                    floating: true,
                    layout: 'vertical',
                    valueDecimals: 0,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#F1F3F2',
                    symbolRadius: 0,
                    symbolHeight: 14
                },

                colorAxis: {
                    dataClasses: [{
                        to: 100,
                        color: '#fff',
                    }, {
                        from: 100,
                        to: 100000,
                        color: '#b5d9d5',
                    }, {
                        from: 100000,
                        to: 190000,
                        color: '#61c5be',
                    }, {
                        from: 200000,
                        to: 600000,
                        color: '#008b8f',
                    }, {
                        from: 700000,
                        to: 1900000,
                        color: '#0b675f',
                    }, {
                        from: 2000000,
                        color: '#074442',
                    }]
                },

                series : [{
                    data : data,
                    mapData: Highcharts.maps['custom/world'],
                    joinBy: ['iso-a2', 'code'],
                    animation: true,
                    name: 'Tons of bananas',
                    states: {
                        hover: {
                            color: '#f0d011'
                        }
                    },
                    tooltip: {
                        valueSuffix: 'tons'
                    }

                }]
            });
        },
        error: function () {
            $('#worldmap1').html('<div class="loading">' +
                '<i class="icon-frown icon-large"></i> ' +
                'Error loading data from Google Spreadsheets' +
                '</div>');
        }
    });
});


/*************************************** EXPORT MAP ********************************************/

$(function () {

    Highcharts.data({

        googleSpreadsheetKey: '1TSlI8dUXqdzlUavUV-Y2ZSqsbGH7Z5QUzN2FZHKaXw0',

        // custom handler when the spreadsheet is parsed
        parsed: function (columns) {

            // Read the columns into the data array
            var data = [];
            $.each(columns[0], function (i, code) {
                data.push({
                    code: code.toUpperCase(),
                    value: parseFloat(columns[2][i]),
                    name: columns[1][i]
                });
            });


            // Initiate the chart
            $('#worldmap2').highcharts('Map', {
                chart : {
                    borderWidth : 0,
                    backgroundColor: '#F1F3F2',
                },

                colors: ['#074442', '#0b675f', '#008b8f',
                    '#61c5be', '#b5d9d5'],

                title : {
                    text : null
                },

                mapNavigation: {
                    enabled: true,
                    enableMouseWheelZoom: false
                },

                legend: {
                    title: {
                        text: 'Metric Tons of Bananas',
                        style: {
                            // color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                        }
                    },
                    align: 'left',
                    verticalAlign: 'bottom',
                    floating: true,
                    layout: 'vertical',
                    valueDecimals: 0,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#F1F3F2',
                    symbolRadius: 0,
                    symbolHeight: 14
                },

                colorAxis: {
                    dataClasses: [{
                        to: 100,
                        color: '#fff',
                    }, {
                        from: 100,
                        to: 100000,
                        color: '#b5d9d5',
                    }, {
                        from: 100000,
                        to: 190000,
                        color: '#61c5be',
                    }, {
                        from: 200000,
                        to: 600000,
                        color: '#008b8f',
                    }, {
                        from: 700000,
                        to: 1900000,
                        color: '#0b675f',
                    }, {
                        from: 2000000,
                        color: '#074442',
                    }]
                },

                series : [{
                    data : data,
                    mapData: Highcharts.maps['custom/world'],
                    joinBy: ['iso-a2', 'code'],
                    animation: true,
                    name: 'Tons of bananas',
                    states: {
                        hover: {
                            color: '#f0d011'
                        }
                    },
                    tooltip: {
                        valueSuffix: 'tons'
                    }
                }]
            });
        },
        error: function () {
            $('#worldmap2').html('<div class="loading">' +
                '<i class="icon-frown icon-large"></i> ' +
                'Error loading data from Google Spreadsheets' +
                '</div>');
        }
    });
});

$ (document).ready(function(){

  $('#resetChart').on("click", function(e){
    e.preventDefault();
    while(chart.series.length > 0) chart.series[0].remove(true);
    chart = new Highcharts.Chart(options);
  });

})
