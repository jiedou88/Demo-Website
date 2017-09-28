
import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { DataService } from './data.service';

@Component({
    selector: 'map',
    styles: [`
    agm-map {
       height: 400px;
     }
  `],
    templateUrl: './map.component.html' 
})
export class MapComponent implements OnInit {

    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;
    public GTimezoneRequests: any;
    private date: Date;
    public timestamp: number;
    public errormsg: string;
    @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
        private dataService: DataService
    ) { }

    ngOnInit() {
        //current UTC timestamp
        this.date = new Date();
        setInterval(() => {
            this.date = new Date();
        }, 1000);
        this.timestamp = Math.floor(this.date.getTime() / 1000);
        
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 43.6532;
        this.longitude = -79.3832;

        //create search FormControl
        this.searchControl = new FormControl();

        //set current position
        this.setCurrentPosition();

        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    //set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12; console.log("la" + this.latitude + "+lo" + this.longitude + "+zoom" + this.zoom);
                    this.getLocalTime(this.latitude, this.longitude, this.timestamp);
                    
                });
            });
        });

        
        
    }

    private setCurrentPosition() {
        
        if ("geolocation" in navigator) {
            
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 12;
            });
        } else {
            this.errormsg = "Geolocation is not supported by your browser.";
        }
    }
    // pass in position
    private getLocalTime(latitude: number, longitude: number, timestamp:number) {
        //CORS forbidden by Google
        let url = "https://maps.googleapis.com/maps/api/timezone/json?location=" + latitude + "," + longitude + "&timestamp=" + timestamp+"&key=AIzaSyDy75x8Db3JLkANsE_DwrF7b8QirRZjXtM";
        console.log("url==="+url);
        //this.dataService.getAsObservable(url).subscribe(
        //    requests => this.GTimezoneRequests = requests,
        //    error => { },
        //    () => {
        //    }
        //);
        var data;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                data = JSON.parse(this.responseText);
                var ltimestamp = Math.floor(new Date().getTime() / 1000) + (data.rawOffset) + (data.dstOffset);
                var localTime = new Date(ltimestamp * 1000).toUTCString();
                document.getElementById("localtime").innerHTML =
                    localTime;
                if (typeof (Storage) !== "undefined") {
                    localStorage.setItem("localTimezone", data);
                }
            }
        };
        
        xhttp.open("GET", url, true);
        xhttp.send();       
        
    }
}
