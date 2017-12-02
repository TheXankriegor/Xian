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


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    MainComponent,
    AgeComponent,
    UpgradesComponent,
    DebugComponent
  ],
  providers: [CommunicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
