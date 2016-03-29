$(function () {
    $('#chart1').highcharts({
        chart: {
            type: 'column',
            backgroundColor: '#F1F3F2'
        },
        title: {
            text: 'Banana Exports by Region 2008-2012',
        },
        xAxis: {
            categories: ['2008', '2009', '2010', '2011', '2012']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total exports in million tons'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#F1F3F2',
            borderColor: null,
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || '#F1F3F2',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Africa',
            data: [.6, .6, .6, .6, .6],
            color: '#b5d9d5'
        }, {
            name: 'Asia',
            data: [2.3, 1.9, 1.8, 2.2, 2.8],
            color: '#61c5be'
        }, {
            name: 'Latin America & Caribbean',
            data: [12.0, 12.3, 11.8, 12.5, 13.0],
            color: '#008b8f'
        }]
    });
});

$(function () {
    $('#chart2').highcharts({
        chart: {
            type: 'area',
            backgroundColor: '#F1F3F2'
        },
        title: {
            text: 'Retail prices in Europe, Japan and U.S., 2008-2012'
        },
        subtitle: {
            text: null
        },
        xAxis: {
            categories: ['2007', '2008', '2009', '2010', '2011', '2012', '2013'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'USD'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: 'USD'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'France',
            data: [2.24, 2.48, 2.30, 2.17, 2.36, 2.24, 2.45],
            color: '#b5d9d5'
        }, {
            name: 'Hungary',
            data: [1.78, 1.96, 1.84, 1.67, 1.78, 1.74, 1.88],
            color: '#61c5be'
        }, {
            name: 'U.S.',
            data: [1.13, 1.34, 1.35, 1.28, 1.35, 1.33, 1.32],
            color: '#008b8f'
        }, {
            name: 'China',
            data: [0.45, 0.61, 0.65, 0.71, 0.84, 0.82, 0.82],
            color: '#0b675f'
        }]
    });
});



//begin table
$(document).ready(function() {
  console.log("working yayyyyy")
    $('#table').DataTable( {
        "ajax": 'data/tables.txt'
    } );
} );
//end table
