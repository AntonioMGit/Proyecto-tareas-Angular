import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleoFormularioComponent } from './empleo-formulario.component';

describe('EmpleoFormularioComponent', () => {
  let component: EmpleoFormularioComponent;
  let fixture: ComponentFixture<EmpleoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleoFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
