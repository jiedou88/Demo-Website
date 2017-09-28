
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddComponent } from './add.component';
import { ListComponent } from './list.component';
import { ListenComponent } from './listen.component';
import { MapComponent } from './map.component';
import { PagerService } from './pager.service'; 
import { DataService } from './data.service'; 
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import { HttpModule } from '@angular/http';
@NgModule({
    imports: [
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDy75x8Db3JLkANsE_DwrF7b8QirRZjXtM',
            libraries: ["places"]
        }),
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        AddComponent,
        ListComponent,
        ListenComponent,
        MapComponent
    ],
    providers: [
        PagerService,
        DataService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
