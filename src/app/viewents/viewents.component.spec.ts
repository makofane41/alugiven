import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewentsComponent } from './viewents.component';

describe('ViewentsComponent', () => {
  let component: ViewentsComponent;
  let fixture: ComponentFixture<ViewentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
