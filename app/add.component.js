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
var data_service_1 = require("./data.service");
var AddComponent = (function () {
    //http://plnkr.co/edit/whZd2BzwHhVocyxSkPia?p=preview
    function AddComponent(router, formBuilder, dataService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.provinces = [
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
        this.requestItemForm = formBuilder.group({
            'name': ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            'telephone': ['', [forms_1.Validators.required,
                    forms_1.Validators.pattern(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/)]
            ],
            'province': ['', [forms_1.Validators.required]],
            'postal_code': ['', [forms_1.Validators.required,
                    forms_1.Validators.pattern(/^[A-Za-z]\d[A-Za-z][ ]?\d[A-Za-z]\d$/)]],
            'salary': ['', [forms_1.Validators.required,
                    forms_1.Validators.pattern(/^(\d{1,3},?(\d{3},?)*\d{3}(\.\d{1,3})?|\d{1,3}(\.\d{2})?)$/)]],
        });
        //alert(this.requestItemForm.controls.telephone.hasError('pattern'));
    }
    AddComponent.prototype.save = function () {
        //alert(this.requestItemForm.value);
        //alert(this.name + ' ' + this.password)
        this.dataService.setCurrentUserInfo(this.requestItemForm.value);
        this.router.navigate(['listen']);
    };
    return AddComponent;
}());
AddComponent = __decorate([
    core_1.Component({
        selector: 'add-info',
        templateUrl: './add.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        forms_1.FormBuilder,
        data_service_1.DataService])
], AddComponent);
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map