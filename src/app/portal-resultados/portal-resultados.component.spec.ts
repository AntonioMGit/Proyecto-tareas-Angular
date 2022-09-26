import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalResultadosComponent } from './portal-resultados.component';

describe('PortalResultadosComponent', () => {
  let component: PortalResultadosComponent;
  let fixture: ComponentFixture<PortalResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalResultadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortalResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
