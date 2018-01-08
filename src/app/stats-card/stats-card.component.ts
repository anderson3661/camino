import { DataService } from './../zzz-other/services/data.service';
import { CaminoStatModel } from '../zzz-other/interfaces';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from "rxjs/Subscription";
import { Observable } from 'rxjs';

const WALKING_SPEED = 150;
const NUMBER_OF_CYCLES = 5;
const ZOMBIE_APPEARS = 3;
const CYCLE_REPEAT_MAN = 7;
const CYCLE_REPEAT_ZOMBIE = 4;
const FRAME_MOVEMENT = 10;
const SPRITE_HEIGHT = 190;
const SPRITE_WIDTH = 250;

@Component({
    selector: 'stats-card',
    templateUrl: './stats-card.component.html',
    styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent implements OnInit {

    // @Input() linkNumber: number;

    public urlParam: string;
    public arrayIndex: number;
    public statsPrevious: CaminoStatModel;
    public stats: CaminoStatModel;
    public id: number;
    private paramMapSubscription: Subscription;

    private element: any;
    private left: number;
    private bgPositionX: number;
    private bgPositionY: number;

    constructor(public dataService: DataService,
        private route: ActivatedRoute,
        public sanitizer: DomSanitizer) { }

    ngOnInit() {
        // this.urlParam = this.route.snapshot.paramMap.get('i');

        this.paramMapSubscription = this.route.paramMap.subscribe(
            (paramMap: ParamMap): void => {
                this.urlParam = paramMap.get("i");
                this.urlParam = (this.urlParam === undefined) ? "0" : this.urlParam;
                this.arrayIndex = parseInt(this.urlParam);

                this.statsPrevious = this.dataService.caminoStats[(this.arrayIndex === 1) ? 0 : this.arrayIndex - 2];
                this.stats = this.dataService.caminoStats[this.arrayIndex - 1];
                this.stats.youtubeURL = 'https://www.youtube.com/embed/' + this.stats.youtubeURL;
            }
        )
    }

    ngAfterViewInit() {
        this.element = document.getElementById('zombie5');
        this.left = 75;
        this.bgPositionX = 0;
        this.bgPositionY = 0;
        
        Observable.interval(WALKING_SPEED).take(NUMBER_OF_CYCLES * CYCLE_REPEAT_MAN).subscribe((counter: number) => this.getMan(counter + 1));
    }

    private getMan(counter: number) {
        let zombieCounter: number;

        zombieCounter = ZOMBIE_APPEARS * CYCLE_REPEAT_MAN;

        this.left += FRAME_MOVEMENT;
        
        if ((counter < zombieCounter && counter % CYCLE_REPEAT_MAN === 0) || (counter >= zombieCounter && (counter - zombieCounter) % CYCLE_REPEAT_ZOMBIE === 0)) {
            this.bgPositionX = 0;
        } else {
            this.bgPositionX += (SPRITE_WIDTH * -1);
        }
        
        if (counter === zombieCounter) {
            this.bgPositionY = (SPRITE_HEIGHT * -1);
        }
        
        this.element.style.left = this.left.toString() + 'px';
        this.element.style.backgroundPositionX = this.bgPositionX.toString() + 'px';
        this.element.style.backgroundPositionY = this.bgPositionY.toString() + 'px';

    }

}
