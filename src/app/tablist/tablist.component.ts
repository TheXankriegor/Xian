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
  @ViewChild('cultivation') elementCultivation: ElementRef;

  @ViewChild('upgrades') upgrades: ElementRef;

  cultivationUnlocked: boolean = false;

  upgradesUnlocked: any = false;
  debugMode = true;


  constructor(private com: CommunicatorService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.com.unlockedCultivationE.subscribe(value => this.setCultivationVisibility(value));

    this.com.upgradesUnlockedE.subscribe(val => this.setUpgradeVisibility(val));
  }

  setCultivationVisibility(val: any) {
    val = <boolean>val;
    if (this.elementCultivation.nativeElement.classList.contains('hidden')) {
      this.elementCultivation.nativeElement.classList.remove('hidden');
    } else {
      this.elementCultivation.nativeElement.classList.add('hidden');
    }
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
