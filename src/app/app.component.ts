import {Component, EventEmitter} from '@angular/core';
import { HeroComponent} from './hero/hero.component';
import {forEach} from '@angular/router/src/utils/collection';
import { CommunicatorService} from './communicator.service';
import {VariableContainer} from './variable-container';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Xian';
  debugcounter = 0;

  varContainer: VariableContainer;

  upgradesUnlocked: any = false;
  debugMode = true;

  com: CommunicatorService;
  updateIntveral = 100;

  constructor(com: CommunicatorService) {
    const updateTimer = setInterval(() => this.appUpdate(), this.updateIntveral);
    this.com = com;
    com.toggleEvent.subscribe(val => this.upgradesUnlocked = val);
    this.varContainer = new VariableContainer(com);
  }

  appUpdate() {
    this.debugcounter += 1;
    this.com.updateTick();
  }



}
