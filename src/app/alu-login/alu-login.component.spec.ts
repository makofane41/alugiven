import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluLoginComponent } from './alu-login.component';

describe('AluLoginComponent', () => {
  let component: AluLoginComponent;
  let fixture: ComponentFixture<AluLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AluLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
