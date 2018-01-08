import { Component, OnInit } from '@angular/core';
import { DataService } from '../zzz-other/services/data.service';

@Component({
    selector: 'day-by-day',
    templateUrl: './day-by-day.component.html',
    styleUrls: ['./day-by-day.component.css']
})
export class DayByDayComponent implements OnInit {

    public dayByDayStats: any[];

    constructor(public dataService: DataService) { }

    ngOnInit() {
        this.dayByDayStats = [];
        
        for (let i = 0; i < this.dataService.caminoStats.length; i++) {
            this.dayByDayStats.push(this.dataService.caminoStats[i].daySummary)
        }
    }

    private getDate(dayNumber: number): any {
        let startDate: Date;
        let daysOfWeek: string[];
        let months: string[];

        daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        startDate = new Date(this.dataService.startDate);
        startDate.setDate(startDate.getDate() + dayNumber);

        return {dayOfWeek: daysOfWeek[startDate.getDay()], day: startDate.getDate(), month: months[startDate.getMonth()]}
    }

}
