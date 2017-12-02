import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeroComponent} from './hero/hero.component';
import {MainComponent} from './main/main.component';
import {UpgradesComponent} from './upgrades/upgrades.component';
import {DebugComponent} from './debug/debug.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent},
  { path: 'hero', component: HeroComponent},
  { path: 'upgrades', component: UpgradesComponent },
  { path: 'debug', component: DebugComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
