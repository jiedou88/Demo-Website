"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var add_component_1 = require("./add.component");
var list_component_1 = require("./list.component");
var listen_component_1 = require("./listen.component");
var map_component_1 = require("./map.component");
var pager_service_1 = require("./pager.service");
var data_service_1 = require("./data.service");
var core_2 = require("@agm/core");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyDy75x8Db3JLkANsE_DwrF7b8QirRZjXtM',
                libraries: ["places"]
            }),
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.ReactiveFormsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            add_component_1.AddComponent,
            list_component_1.ListComponent,
            listen_component_1.ListenComponent,
            map_component_1.MapComponent
        ],
        providers: [
            pager_service_1.PagerService,
            data_service_1.DataService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map