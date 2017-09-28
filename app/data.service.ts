import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/toPromise';
//import { Observable } from 'rxjs/Rx';



@Injectable()
export class DataService {
    public _currentUserInfo: any;
    constructor(protected http: Http) {

    }
    getCurrentUserInfo() {
        return this._currentUserInfo;
    }
    setCurrentUserInfo(currentUserInfo: any) {
        this._currentUserInfo = currentUserInfo;
        
    }
    getAsObservable(url: string) {
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
    }

}