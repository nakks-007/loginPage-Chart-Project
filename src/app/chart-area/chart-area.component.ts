import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart-area',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.css']
})

export class ChartAreaComponent implements OnInit {

  title = 'chartDemo';

  ngOnInit() : void
  {
    var myChart;

    // (myChart!=null){
    //   myChart.destroy();
    // }
    
    myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: 'Data1',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor:"red",
              borderColor: "blue",
              borderWidth: 1
          },]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });


  }
}




