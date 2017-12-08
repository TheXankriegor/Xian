import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommunicatorService} from '../services_routing/communicator.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {
  @ViewChild('unlockCheck') unlockCheck: ElementRef;

  com: CommunicatorService;

  heroExists: boolean;

  unlocks = false;

  constructor(com: CommunicatorService) {
    this.com = com;
  }

  ngOnInit() {
    this.com.heroExistsE.subscribe(value => this.heroExists = value);

    if (this.com.upgradesUnlockedE.getValue() === false) {
      this.unlockCheck.nativeElement.checked = '';
      this.unlocks = false;
    } else {
      this.unlockCheck.nativeElement.checked = 'checked';
      this.unlocks = true;
    }
  //   this.unlockCheck.nativeElement.checked = !this.com.upgradesUnlockedE.getValue();
  }

  onToggleUnlock() {
    this.unlocks = !this.unlocks;
    this.com.toggleUpgrades(this.unlocks);
  }

  onToggleDelete() {
    this.com.currentHeroE.next(null);
  }
}
