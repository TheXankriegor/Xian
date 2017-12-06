import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgedetailComponent } from './agedetail.component';

describe('AgedetailComponent', () => {
  let component: AgedetailComponent;
  let fixture: ComponentFixture<AgedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
