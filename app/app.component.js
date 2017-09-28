"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    //http://plnkr.co/edit/whZd2BzwHhVocyxSkPia?p=preview
    function AppComponent(router, formBuilder) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.provinces = [
            "Ontario",
            "Qu�bec",
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
        this.requestItemForm = formBuilder.group({
            //'name':  new FormControl('d'),
            'name': ['', forms_1.Validators.required]
        });
        //alert(this.requestItemForm.controls.name.hasError('required'));
    }
    AppComponent.prototype.save = function () {
        alert(this.requestItemForm.value);
        //alert(this.name + ' ' + this.password)
        //  this.router.navigate(['Layout']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map