import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalBuscadorComponent } from './portal-buscador.component';

describe('PortalBuscadorComponent', () => {
  let component: PortalBuscadorComponent;
  let fixture: ComponentFixture<PortalBuscadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalBuscadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalBuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
