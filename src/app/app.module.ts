import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StandaloneComponent} from "./main/standalone/standalone.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {StandaloneWithRouteComponent} from './main/standalone-with-route/standalone-with-route.component';

const routes: Routes = [
  {
    path: 'standalone-with-route',
    loadComponent: () => import('./main/standalone-with-route/standalone-with-route.component').then(m => m.StandaloneWithRouteComponent)
  }, {
    path: '**',
    loadComponent: () => import('./main/standalone/standalone.component').then(m => m.StandaloneComponent)
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StandaloneComponent,
    StandaloneWithRouteComponent,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
