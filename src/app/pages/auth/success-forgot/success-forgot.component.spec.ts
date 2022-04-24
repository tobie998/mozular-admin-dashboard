import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessForgotComponent } from './success-forgot.component';

describe('SuccessForgotComponent', () => {
  let component: SuccessForgotComponent;
  let fixture: ComponentFixture<SuccessForgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessForgotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
