import { Component, OnInit } from '@angular/core';
import { DataService } from '../zzz-other/services/data.service';

@Component({
    selector: 'accommodation',
    templateUrl: './accommodation.component.html',
    styleUrls: ['./accommodation.component.css']
})
export class AccommodationComponent implements OnInit {

    constructor(public dataService: DataService) { }

    ngOnInit() {
    }

}
