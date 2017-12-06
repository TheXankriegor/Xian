import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ClickersComponent} from '../clickers/clickers.component';
import {MainComponent} from '../main/main.component';
import {UpgradesComponent} from '../upgrades/upgrades.component';
import {DebugComponent} from '../debug/debug.component';
import {AgeComponent} from '../age/age.component';
import {AgedetailComponent} from '../agedetail/agedetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent, data: {name: 'main'}},
  { path: 'clickers', component: ClickersComponent},
  { path: 'upgrades', component: UpgradesComponent },
  { path: 'age', component: AgedetailComponent },
  { path: 'debug', component: DebugComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
