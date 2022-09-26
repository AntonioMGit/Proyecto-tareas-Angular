import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbarObservablesComponent } from './probar-observables.component';

describe('ProbarObservablesComponent', () => {
  let component: ProbarObservablesComponent;
  let fixture: ComponentFixture<ProbarObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbarObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbarObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
