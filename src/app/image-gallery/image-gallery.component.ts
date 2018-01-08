import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'image-gallery',
    templateUrl: './image-gallery.component.html',
    styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit, AfterViewInit {

    public images: any[];

    constructor() { }

    ngOnInit() {
        // let element;
        this.images = [];

        this.images.push( { src: '0287', alt: '', rotate: '', isThumbnail: true, isLargerImage: false } );
        this.images.push( { src: '0288', alt: '', rotate: '', isThumbnail: true, isLargerImage: false } );
        // this.images.push({src: '0265', alt: '', rotate: 'rotateimg180'});
        // this.images.push({src: '0282', alt: '', rotate: 'rotateimg90'});
        // this.images.push({src: '0313', alt: '', rotate: 'rotateimg90'});
        // element = document.getElementById("image1");
        // element.transform = "translate(-85px, -30px) rotate(-10deg);";
    }

    ngAfterViewInit() {
        let element;
        let blockStyle;

        debugger;

        element = document.getElementById("image1");
        // element.style.webkitTransform = "translate(-85px, -30px) rotate(-10deg);";

        // blockStyle = element.att.attr('style');
        blockStyle = element.style;
        // if (blockStyle.indexOf('-webkit-transform') === -1) {
            blockStyle += " -webkit-transform: translate(-85px, -30px) rotate(-10deg)";
        // }
        // element.attr('style', blockStyle);
        element.style = blockStyle;
    }

    imageClick(i: number) {
        let element;

        debugger;
        this.images[i - 1].isThumbnail = false;
        this.images[i - 1].isLargerImage = true;
        element = document.getElementById("image" + i);
        if (i === 1) element.src = "../assets/IMG_0287.JPG";
        if (i === 2) element.src = "../assets/IMG_0288.JPG";
        // element.width = "300";
        // element.height = "400";
        // naturalHeight;
        // naturalWidth;
    }

}
