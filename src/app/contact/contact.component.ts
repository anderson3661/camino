import { DataService } from '../zzz-other/services/data.service';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}


@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    //     const isSubmitted = form && form.submitted;
    //     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    // }

    public yourName: FormControl;
    public yourEmail: FormControl;
    public yourComments: string;
    public matcher: any;

    constructor(public dataService: DataService) { }

    ngOnInit() {
        this.yourName = new FormControl('', [
            Validators.required,
        ]);

        this.yourEmail = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);

        this.matcher = new MyErrorStateMatcher();
    }

    submit(event) {
        // alert('hi');
        debugger;
        event.preventDefault();
    }

}
