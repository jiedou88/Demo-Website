import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './add.component';
import { ListComponent } from './list.component';
import { ListenComponent } from './listen.component';
import { MapComponent } from './map.component';

const routes: Routes = [
    { path: '', redirectTo: '/add', pathMatch: 'full' },
    { path: 'add', component: AddComponent },   
    { path: 'list', component: ListComponent },
    { path: 'listen', component: ListenComponent },
    { path: 'map', component: MapComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }