google.charts.load("current", {packages:["line","corechart"]});

function drawChart(valuesForChart) {

    var values = valuesForChart;
    var datVar;
    var nestedObj;
    for(var propertie in values) {
        nestedObj = values[propertie];
        for(var variable in nestedObj) {
            datVar = nestedObj[variable]
    
            console.log(propertie,variable,datVar);
        }
    }


    var data = new google.visualization.DataTable();
      data.addColumn('number', 'Tiempo');
      data.addColumn('number', 'Altura');
      data.addColumn('number', 'velocidad');

      data.addRows([
        [0, 0, values.value1.velocidadIni], 
        [values.value1.tiempo,  values.value1.altura, values.value1.velocidad],
        [values.value2.tiempo,  values.value2.altura, values.value2.velocidad],
        [values.value3.tiempo,  values.value3.altura, values.value3.velocidad],
        [values.value4.tiempo,  values.value4.altura, values.value4.velocidad]
      ]);

      var options = {
        curveType: 'function',
        width: 900,
        height: 500,
        series: {
          // Gives each series an axis name that matches the Y-axis below.
          0: {axis: 'Altura'},
          1: {axis: 'Velocidad'}
        },
        axes: {
          // Adds labels to each axis; they don't have to match the axis names.
          y: {
            Altura: {label: 'Altura (metros)'},
            Velocidad: {label: 'Velocidad (metros/segundo)'}
          }
        },
        backgroundColor: '#f1f8e9'
      };

      var chart = new google.charts.Line(document.getElementById('chart_div'));
      chart.draw(data, options);
  }