import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

const WALKING_SPEED = 250;
const NUMBER_OF_CYCLES = 5;
const ZOMBIE_APPEARS = 3;
const CYCLE_REPEAT_MAN = 7;
const CYCLE_REPEAT_ZOMBIE = 4;
const FRAME_MOVEMENT = 10;
const SPRITE_HEIGHT = 190;
const SPRITE_WIDTH = 250;

@Component({
    selector: 'man-walking',
    templateUrl: './man-walking.component.html',
    styleUrls: ['./man-walking.component.css']
})
export class ManWalkingComponent implements OnInit {

    private element: any;
    private left: number;
    private bgPositionX: number;
    private bgPositionY: number;

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.element = document.getElementById('zombie5');
        this.left = 300;
        this.bgPositionX = 0;
        this.bgPositionY = 0;
        
        Observable.interval(WALKING_SPEED).take(NUMBER_OF_CYCLES * CYCLE_REPEAT_MAN).subscribe((counter: number) => this.getMan(counter + 1));
    }

    private manWalking() {
        debugger;

        this.element = document.getElementById('zombie5');
        this.left = 300;
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
