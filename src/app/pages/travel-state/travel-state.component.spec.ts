import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelStateComponent } from './travel-state.component';

describe('TravelStateComponent', () => {
  let component: TravelStateComponent;
  let fixture: ComponentFixture<TravelStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
