import { DataService } from '../zzz-other/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'trip-index',
    templateUrl: './trip-index.component.html',
    styleUrls: ['./trip-index.component.css']
})
export class TripIndexComponent implements OnInit {

    constructor(public dataService: DataService) { }

    ngOnInit() {
    }

}
