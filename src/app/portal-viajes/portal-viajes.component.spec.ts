import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalViajesComponent } from './portal-viajes.component';

describe('PortalViajesComponent', () => {
  let component: PortalViajesComponent;
  let fixture: ComponentFixture<PortalViajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalViajesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
