import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbarAngularMaterialComponent } from './probar-angular-material.component';

describe('ProbarAngularMaterialComponent', () => {
  let component: ProbarAngularMaterialComponent;
  let fixture: ComponentFixture<ProbarAngularMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbarAngularMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProbarAngularMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
