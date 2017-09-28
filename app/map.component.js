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
var core_2 = require("@agm/core");
var data_service_1 = require("./data.service");
var MapComponent = (function () {
    function MapComponent(mapsAPILoader, ngZone, dataService) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.dataService = dataService;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        //current UTC timestamp
        this.date = new Date();
        setInterval(function () {
            _this.date = new Date();
        }, 1000);
        this.timestamp = Math.floor(this.date.getTime() / 1000);
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 43.6532;
        this.longitude = -79.3832;
        //create search FormControl
        this.searchControl = new forms_1.FormControl();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                    console.log("la" + _this.latitude + "+lo" + _this.longitude + "+zoom" + _this.zoom);
                    _this.getLocalTime(_this.latitude, _this.longitude, _this.timestamp);
                });
            });
        });
    };
    MapComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
        else {
            this.errormsg = "Geolocation is not supported by your browser.";
        }
    };
    // pass in position
    MapComponent.prototype.getLocalTime = function (latitude, longitude, timestamp) {
        //CORS forbidden by Google
        var url = "https://maps.googleapis.com/maps/api/timezone/json?location=" + latitude + "," + longitude + "&timestamp=" + timestamp + "&key=AIzaSyDy75x8Db3JLkANsE_DwrF7b8QirRZjXtM";
        console.log("url===" + url);
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
    };
    return MapComponent;
}());
__decorate([
    core_1.ViewChild("search"),
    __metadata("design:type", core_1.ElementRef)
], MapComponent.prototype, "searchElementRef", void 0);
MapComponent = __decorate([
    core_1.Component({
        selector: 'map',
        styles: ["\n    agm-map {\n       height: 400px;\n     }\n  "],
        templateUrl: './map.component.html'
    }),
    __metadata("design:paramtypes", [core_2.MapsAPILoader,
        core_1.NgZone,
        data_service_1.DataService])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map