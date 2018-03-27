 // Load the Visualization API and the corechart package.

 // RECEBENDO DADOS DE JSON
 var receitas = 0;
 var despesas = 0;

 $.get( "http://localhost:8080/listagemDeFinancas", function(data) {
  for (var i = 0; i < data.length; i++) {

    if(data[i].tipo == "Receita") {
      receitas++;
    } else {
      despesas++;
    }

  }
});

// CONFIGURANDO GRÁFICO
 google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Receitas', receitas],
          ['Despesas', despesas],
          ]);

        // Set chart options
        var options = {'title':'Relatório de Receitas e Despesas',
        'width':500,
        'height':400,
        is3D: true
      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }