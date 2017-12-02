import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../communicator.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.css']
})
export class DebugComponent implements OnInit {
  com: CommunicatorService;

  unlocks = false;

  constructor(com: CommunicatorService) {
    this.com = com;
  }

  ngOnInit() {
  }

  onToggleUnlock() {
    this.unlocks = !this.unlocks;
    this.com.toggleUpgrades(this.unlocks);
  }
}
