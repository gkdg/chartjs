import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-my-polar-area-chart',
  templateUrl: './my-polar-area-chart.component.html',
  styleUrls: ['./my-polar-area-chart.component.scss']
})
export class MyPolarAreaChartComponent implements OnInit {

  public polarAreaChartLabels = ['On-site Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartType = 'polarArea';
  public polarAreaChartData =  [300, 500, 100, 80, 120];
  public polarAreaLegend = true;


  constructor() { }

  ngOnInit() {
  }

}
