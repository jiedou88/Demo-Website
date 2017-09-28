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
var pager_service_1 = require("./pager.service");
var data_service_1 = require("./data.service");
var ListComponent = (function () {
    function ListComponent(PagerService, DataService) {
        var _this = this;
        this.PagerService = PagerService;
        this.DataService = DataService;
        this.allItems = [];
        // pager object
        this.pager = {};
        // paged items
        this.pagedItems = [];
        var data;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                data = this.responseText;
                if (typeof (Storage) !== "undefined") {
                    localStorage.setItem("users", data);
                }
            }
        };
        //https://developers.google.com/web/updates/2015/03/introduction-to-fetch
        //xhttp.open("GET", "https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331161200&key=AIzaSyDy75x8Db3JLkANsE_DwrF7b8QirRZjXtM", true);
        xhttp.open("GET", "http://jmir.azurewebsites.net/listjson.php", true);
        xhttp.send();
        setTimeout(function () {
            _this.getUsers();
        }, 2000);
    }
    ListComponent.prototype.getUsers = function () {
        if (typeof (Storage) !== "undefined") {
            if (!(localStorage.getItem('users') === null)) {
                //fisrt time load without local storg
                this.Users = JSON.parse(localStorage.getItem("users"));
                this.allItems = this.Users;
                if (this.DataService.getCurrentUserInfo()) {
                    this.allItems.push(this.DataService.getCurrentUserInfo());
                }
                this.setPage(1);
            }
        }
    };
    ListComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.PagerService.getPager(this.allItems.length, page, 5);
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: 'list-info',
        templateUrl: './list.component.html'
    }),
    __metadata("design:paramtypes", [pager_service_1.PagerService,
        data_service_1.DataService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map