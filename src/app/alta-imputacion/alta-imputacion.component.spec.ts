import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaImputacionComponent } from './alta-imputacion.component';

describe('AltaImputacionComponent', () => {
  let component: AltaImputacionComponent;
  let fixture: ComponentFixture<AltaImputacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaImputacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaImputacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
