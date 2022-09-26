import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbarAnimacionesComponent } from './probar-animaciones.component';

describe('ProbarAnimacionesComponent', () => {
  let component: ProbarAnimacionesComponent;
  let fixture: ComponentFixture<ProbarAnimacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbarAnimacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbarAnimacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
