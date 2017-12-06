import {Component, EventEmitter} from '@angular/core';
import { ClickersComponent} from './clickers/clickers.component';
import {forEach} from '@angular/router/src/utils/collection';
import { CommunicatorService} from './services_routing/communicator.service';
import {VariableContainer} from './logic/variable-container';
import {CookieService} from 'ngx-cookie';
import {Names} from './content/names';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xian';
  varContainer: VariableContainer;

  updateIntveral = 50;

  constructor(private com: CommunicatorService, private _cookieService: CookieService, private nam: Names ) {
    const updateTimer = setInterval(() => this.appUpdate(), this.updateIntveral);

    this.varContainer = new VariableContainer(com, this._cookieService, this.nam);
  }

  appUpdate() {
    this.com.updateTick();
  }



}
