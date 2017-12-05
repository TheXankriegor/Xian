import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../services_routing/communicator.service';
import {Names} from '../content/names';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  dynasty: string;

  age = 0;

  constructor(com: CommunicatorService) {
    com.ageE.subscribe(val => this.age = val);
    com.dynastyE.subscribe(val => this.dynasty = val);
  }

  ngOnInit() {
  }

}
