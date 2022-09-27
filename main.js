// line chart
var data;
var chart;
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
       
      function drawChart() 
      {
        // var data = google.visualization.arrayToDataTable
        // ([
        //   ['Temprature', 'Moisture', 'Humidity'],
        // ]);
        var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1wSJlqRwgLjBUSNFUYhzEUhmq1vtE33c9bF0ReNIP10s/edit?usp=sharing');
        query.send(handleQueryResponse);

        var options = {
          title: 'Soil analysis',
          curveType: 'line',
          legend: { position: 'bottom' },
          'width':1500,
          'height':650,
          backgroundColor: 'transparent'
        };

        // var chart = new google.visualization.LineChart(document.getElementById('analysisdiv1inner'));

        // chart.draw(data, options);
        function handleQueryResponse(response) 
        {
          data = response.getDataTable();
          chart = new google.visualization.LineChart(document.getElementById('analysisdiv1inner'));
          // var chart2 = new google.visualization.BarChart(document.getElementById('analysisdiv2inner'));
          chart.draw(data, options);
          // chart2.draw(data,options);
          
        }
        

        
        
      } 
      // line chart end 



// document.getElementById("para1").innerHTML = 5 + 6;
      




























      // pie chart 
      // function drawChart() {

      //   var data = google.visualization.arrayToDataTable([
      //     ['Task', 'Hours per Day'],
      //     ['Work',     11],
      //     ['Eat',      2],
      //     ['Commute',  2],
      //     ['Watch TV', 2],
      //     ['Sleep',    7]
      //   ]);

      //   var options = {
      //     title: 'My Daily Activities'
      //   };

      //   var chart = new google.visualization.PieChart(document.getElementById('piechart'));

      //   chart.draw(data, options);
      // }
      // pie chart end 





































// document.getElementById("nalysisdiv1")

// function getData() {
//   return Math.random();
// }  

// Plotly.plot('chart',[{
//   y:[getData()],
//   type:'line'
// }]);

// var cnt = 0;

// setInterval(function(){

//   Plotly.extendTraces('chart',{ y:[[getData()]]}, [0]);
//   cnt++;
//   if(cnt > 500) {
//       Plotly.relayout('chart',{
//           xaxis: {
//               range: [cnt-500,cnt]
//           }
//       });
//   }
// },15);