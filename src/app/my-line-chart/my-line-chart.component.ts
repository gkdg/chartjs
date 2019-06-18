import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.scss']
})
export class MyLineChartComponent implements OnInit {

  public lineChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
  public lineChartType = 'line';

  public lineChartData = [65, 59, 80, 81, 56, 55, 40];

  constructor() { }

  ngOnInit() {
  }

}
