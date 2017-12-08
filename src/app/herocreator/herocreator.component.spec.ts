import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerocreatorComponent } from './herocreator.component';

describe('HerocreatorComponent', () => {
  let component: HerocreatorComponent;
  let fixture: ComponentFixture<HerocreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerocreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerocreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
