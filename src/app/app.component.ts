import {Component, EventEmitter} from '@angular/core';
import { HeroComponent} from './hero/hero.component';
import {forEach} from '@angular/router/src/utils/collection';
import { CommunicatorService} from './communicator.service';
import {VariableContainer} from './variable-container';
import {CookieService} from 'ngx-cookie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xian';
  debugcounter = 0;

  varContainer: VariableContainer;



  updateIntveral = 100;

  constructor(private com: CommunicatorService, private _cookieService: CookieService ) {
    const updateTimer = setInterval(() => this.appUpdate(), this.updateIntveral);

    this.varContainer = new VariableContainer(com, this._cookieService);
  }

  appUpdate() {
    this.debugcounter += 1;
    this.com.updateTick();
  }



}
