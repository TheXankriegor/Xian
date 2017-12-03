import { Component, OnInit } from '@angular/core';
import {CommunicatorService} from '../communicator.service';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../app-routing.module';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css']
})
export class TablistComponent implements OnInit {

  upgradesUnlocked: any = false;
  debugMode = true;

  constructor(private com: CommunicatorService, private router: Router, private route: ActivatedRoute) {
    this.com.toggleEvent.subscribe(val => this.upgradesUnlocked = val);
  }

  ngOnInit() {

  }

  onTabChange($event: NgbTabChangeEvent) {
    switch ($event.nextId) {
      case 'main':
        this.router.navigateByUrl('/main');
        break;
      case 'hero':
        this.router.navigateByUrl('/hero');
        break;
      case 'upgrades':
        this.router.navigateByUrl('/upgrades');
        break;
      case 'debug':
        this.router.navigateByUrl('/debug');
        break;
    }

  }
}
