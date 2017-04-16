import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {injectables} from './web-socket.service';
import {EnvironmentStatusComponent} from './environment-status/environment-status.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialDependenciesModule} from './material-dependencies/material-dependencies.module';

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentStatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialDependenciesModule
  ],
  providers: [injectables],
  bootstrap: [AppComponent]
})
export class AppModule {
}
