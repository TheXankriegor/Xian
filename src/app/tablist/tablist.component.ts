import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {CommunicatorService} from '../services_routing/communicator.service';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../services_routing/app-routing.module';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.css']
})
export class TablistComponent implements OnInit {
  @ViewChild('upgrades') upgrades: ElementRef;

  dynasty: string;
  age = 0;

  upgradesUnlocked: any = false;
  debugMode = true;


  constructor(private com: CommunicatorService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.com.upgradesUnlockedE.subscribe(val => this.setUpgradeVisibility(val));
  }

  setUpgradeVisibility(val: any) {
    val = <boolean>val;
    if (this.upgrades.nativeElement.classList.contains('hidden')) {
      this.upgrades.nativeElement.classList.remove('hidden');
    } else {
      this.upgrades.nativeElement.classList.add('hidden');
    }

  }
}
