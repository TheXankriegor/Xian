import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {CommunicatorService} from './services_routing/communicator.service';
import { MainComponent } from './main/main.component';
import { AgeComponent } from './age/age.component';
import { UpgradesComponent } from './upgrades/upgrades.component';
import { DebugComponent } from './debug/debug.component';
import { Names} from './content/names';
import {VariableContainer} from './logic/variable-container';
import {CookieModule} from 'ngx-cookie';

import {NgbModule, NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import { TablistComponent } from './tablist/tablist.component';
import * as $ from 'jquery';
import {AppRoutingModule} from './services_routing/app-routing.module';
import {HeroComponent} from './hero/hero.component';


@NgModule({
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    MainComponent,
    AgeComponent,
    UpgradesComponent,
    DebugComponent,
    TablistComponent
  ],
  providers: [CommunicatorService, Names],
  bootstrap: [AppComponent]
})
export class AppModule {}

//<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
