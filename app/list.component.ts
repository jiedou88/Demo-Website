import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl } from "@angular/forms";
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { PagerService } from './pager.service';
import { DataService } from './data.service';


declare var $: any;
@Component({
    selector: 'list-info',
    templateUrl: './list.component.html'
})

export class ListComponent {
    Users: any;
    private allItems: any[] = [];
    // pager object
    public pager: any = {};
    // paged items
    public pagedItems: any[] = [];
    constructor(public PagerService: PagerService,
        private DataService:DataService) {
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
        setTimeout(() => {
            this.getUsers()
        }, 2000);
    }

    getUsers() {
        if (typeof (Storage) !== "undefined") {
            if (!(localStorage.getItem('users') === null)) {
                //fisrt time load without local storg
                this.Users = <any>JSON.parse(localStorage.getItem("users"));
                this.allItems = this.Users;
                if (this.DataService.getCurrentUserInfo()) {
                    this.allItems.push(this.DataService.getCurrentUserInfo());
                }
                this.setPage(1);
            }
        }
        
    }
    public setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.PagerService.getPager(this.allItems.length, page, 5);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}