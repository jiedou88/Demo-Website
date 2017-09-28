import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from "@angular/forms";
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
    selector: 'listen-info',
    templateUrl: './listen.component.html'
})
export class ListenComponent {
    private userInfo: any;
    constructor(private dataService: DataService ) {
        this.userInfo = this.dataService.getCurrentUserInfo();
    }

}