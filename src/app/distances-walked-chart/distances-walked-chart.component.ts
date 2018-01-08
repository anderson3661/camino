import { DataService } from '../zzz-other/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'distances-walked-chart',
    templateUrl: './distances-walked-chart.component.html',
    styleUrls: ['./distances-walked-chart.component.css']
})
export class DistancesWalkedChartComponent implements OnInit {

    public barChartOptions: any;
    public barChartLabels: string[];
    public barChartType: string;
    public barChartLegend: boolean;
    public barChartData: any[];
    public barChartColors: Array<any>;

    constructor(public dataService: DataService) { }

    ngOnInit() {
        let i: number;
        let data: number[];

        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };

        this.barChartLabels = [];
        data = [];
        for (i = 1; i <= this.dataService.caminoStats.length; i++) {
            this.barChartLabels.push("Day " + i.toString());
            data.push(this.dataService.caminoStats[i - 1].distance);
        }

        // this.barChartLabels = ['1', '2', '3', '2009', '2010', '2011', '2012'];
        this.barChartType = 'horizontalBar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: data, label: 'Distance Walked (km)' }
        ];
        this.barChartColors = [
            { backgroundColor: 'rgba(26, 110, 245, 0.932)' }
        ];
    }

    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}
