import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from "@angular/forms";
import { RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl:'./app.component.html'
})
export class AppComponent  {
    //====delete
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
        private formBuilder: FormBuilder
    ) {

        this.requestItemForm = formBuilder.group({
            //'name':  new FormControl('d'),
            'name':['', Validators.required]
        })

        //alert(this.requestItemForm.controls.name.hasError('required'));
        

    }
    save() {
        alert(this.requestItemForm.value);
        //alert(this.name + ' ' + this.password)
        //  this.router.navigate(['Layout']);
    }
   //====delete

}
