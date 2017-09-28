
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from "@angular/forms";
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { DataService } from './data.service';
@Component({
    selector: 'add-info',
    templateUrl: './add.component.html'
})
export class AddComponent {
    
    requestItemForm: FormGroup;
    formControls: any;
    provinces = [
        "Ontario",
        "Québec",
        "Nova Scotia",
        "New Brunswick",
        "Manitoba",
        "British Columbia",
        "Prince Edward Island",
        "Saskatchewan",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Yukon",
        "Nunavut"
    ];
    public name: string;
    public province: string;
    public telephone: number;

    public postal_code: number;
    public salary: string;
    //http://plnkr.co/edit/whZd2BzwHhVocyxSkPia?p=preview
    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private dataService: DataService
    ) {

        this.requestItemForm = formBuilder.group({
            
            'name': ['', [Validators.required,Validators.minLength(2)]],
            'telephone': ['', [Validators.required,
                Validators.pattern(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/)]
            ], 
            'province': ['', [Validators.required]],
            'postal_code': ['', [Validators.required,
                Validators.pattern(/^[A-Za-z]\d[A-Za-z][ ]?\d[A-Za-z]\d$/)]],
            'salary': ['', [Validators.required,
                Validators.pattern(/^(\d{1,3},?(\d{3},?)*\d{3}(\.\d{1,3})?|\d{1,3}(\.\d{2})?)$/)]],
        })

        //alert(this.requestItemForm.controls.telephone.hasError('pattern'));


    }
    
    save() {
        //alert(this.requestItemForm.value);
        //alert(this.name + ' ' + this.password)
        this.dataService.setCurrentUserInfo(this.requestItemForm.value)
        this.router.navigate(['listen']);
    }
}