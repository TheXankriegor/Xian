import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../communicator.service';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  age = 0;

  constructor(com: CommunicatorService) {
    com.updateEvent.subscribe(val => this.updateTick());
  }

  ngOnInit() {
  }

  updateTick() {
    this.age += 1;
  }
}
