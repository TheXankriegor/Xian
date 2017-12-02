import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../communicator.service';
import {Names} from '../content/names';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {
  nam: Names;
  dynasty: string;

  age = 0;

  constructor(com: CommunicatorService, nam: Names) {
    com.updateEvent.subscribe(val => this.updateTick());
    this.nam = nam;
    this.dynasty = nam.getRandomName();

  }

  ngOnInit() {
  }

  updateTick() {
    this.age += 1;
    if (this.age >= 1000) {
      this.age = 0;
      this.dynasty = this.nam.getRandomName();
    }
  }
}
