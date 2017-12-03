import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { HeroComponent} from './hero/hero.component';
import {CommunicatorService} from './communicator.service';
import { MainComponent } from './main/main.component';
import { AgeComponent } from './age/age.component';
import { UpgradesComponent } from './upgrades/upgrades.component';
import { DebugComponent } from './debug/debug.component';
import { Names} from './content/names';
import {VariableContainer} from './variable-container';
import {CookieModule} from 'ngx-cookie';


@NgModule({
  imports: [
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
    DebugComponent
  ],
  providers: [CommunicatorService, Names],
  bootstrap: [AppComponent]
})
export class AppModule { }
