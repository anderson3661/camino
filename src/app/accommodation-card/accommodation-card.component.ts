import { DataService } from '../zzz-other/services/data.service';
import { CaminoStatModel } from '../zzz-other/interfaces';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'accommodation-card',
    templateUrl: './accommodation-card.component.html',
    styleUrls: ['./accommodation-card.component.css']
})
export class AccommodationCardComponent implements OnInit {

    public urlParam: string;
    public arrayIndex: number;
    public statsPrevious: CaminoStatModel;
    public stats: CaminoStatModel;

    constructor(public dataService: DataService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        debugger;
        this.urlParam = this.route.snapshot.paramMap.get('i');
        this.urlParam = (this.urlParam === undefined) ? "0" : this.urlParam;
        this.arrayIndex = parseInt(this.urlParam);

        this.statsPrevious = this.dataService.caminoStats[(this.arrayIndex === 1) ? 0 : this.arrayIndex - 2];
        this.stats = this.dataService.caminoStats[this.arrayIndex - 1];
    }

}
