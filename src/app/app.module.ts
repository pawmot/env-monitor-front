import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {injectables} from './web-socket.service';
import {EnvironmentStatusComponent} from './environment-status/environment-status.component';

@NgModule({
  declarations: [
    AppComponent,
    EnvironmentStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [injectables],
  bootstrap: [AppComponent]
})
export class AppModule {
}
