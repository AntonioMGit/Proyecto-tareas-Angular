import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmpleadosComponent } from './app-empleados.component';

describe('AppEmpleadosComponent', () => {
  let component: AppEmpleadosComponent;
  let fixture: ComponentFixture<AppEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
