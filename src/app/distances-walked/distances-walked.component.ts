import { DataService } from '../zzz-other/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'distances-walked',
    templateUrl: './distances-walked.component.html',
    styleUrls: ['./distances-walked.component.css']
})
export class DistancesWalkedComponent implements OnInit {

    public totalWalked: number = 0;
    public totalWalkedMiles: number = 0;

    constructor(public dataService: DataService) { }

    ngOnInit() {
        let i: number;

        for (i = 0; i < this.dataService.caminoStats.length; i++) {
            this.totalWalked += this.dataService.caminoStats[i].distance;            
        }

        this.totalWalkedMiles = this.totalWalked * 0.621371192;
    }

}
