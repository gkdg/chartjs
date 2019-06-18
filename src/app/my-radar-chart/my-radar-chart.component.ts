import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-radar-chart',
  templateUrl: './my-radar-chart.component.html',
  styleUrls: ['./my-radar-chart.component.scss']
})
export class MyRadarChartComponent implements OnInit {

  public radarChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  public radarChartData = [
    {data: [120, 130, 180, 70], label: 'Series A'},
    {data: [90, 40, 200, 170], label: 'Series B'},
    {data: [100, 60, 120, 130], label: 'Series C'}
  ];
  public radarChartType = 'radar';
  public radarChartLegend = true;
  public radarChartOptions = {};

  constructor() { }

  ngOnInit() {
  }

}
