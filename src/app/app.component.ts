import { DataService } from './zzz-other/services/data.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private dataService: DataService) { }

    // displayItinerary() {
    //     let itinerary = document.getElementById("itinerary");
    //     let ul = document.createElement("ul");
    //     for (let i = 0; i < this.dataService.caminoStats.length; i++) {
    //         var li = document.createElement("li");
    //         li.innerHTML = "Test";
    //         ul.appendChild(li);
    //     }
    //     itinerary.appendChild(ul);
    // }

    scrollToTop () {
        window.scrollTo(0, 0);
    }
    
}
