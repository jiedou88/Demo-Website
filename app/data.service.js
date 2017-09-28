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
//import { Observable } from 'rxjs/Observable';
var http_1 = require("@angular/http");
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/toPromise';
//import { Observable } from 'rxjs/Rx';
var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getCurrentUserInfo = function () {
        return this._currentUserInfo;
    };
    DataService.prototype.setCurrentUserInfo = function (currentUserInfo) {
        this._currentUserInfo = currentUserInfo;
    };
    DataService.prototype.getAsObservable = function (url) {
        //alert(url);
        //let headers = new Headers();
        //headers.append("Cache-Control", "no-cache, no-store, must-revalidate");
        //headers.append("Pragma", "no-cache");
        //headers.append("Expires", "0");
        //let options = new RequestOptions({ headers: headers, withCredentials: false });
        //let d = this.http.get(url, options)
        //    .map((response: Response) => response.json())
        //    .do(data =>
        //        console.log('All: success in get'))
        //    .catch((err: Response) => {
        //            let details = err.json();
        //            return Observable.throw(details);
        //        });
        //return d;
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map