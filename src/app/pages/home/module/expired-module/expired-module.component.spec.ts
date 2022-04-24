import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredModuleComponent } from './expired-module.component';

describe('ExpiredModuleComponent', () => {
  let component: ExpiredModuleComponent;
  let fixture: ComponentFixture<ExpiredModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
