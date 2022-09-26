import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMatriculaComponent } from './alta-matricula.component';

describe('AltaMatriculaComponent', () => {
  let component: AltaMatriculaComponent;
  let fixture: ComponentFixture<AltaMatriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaMatriculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaMatriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
