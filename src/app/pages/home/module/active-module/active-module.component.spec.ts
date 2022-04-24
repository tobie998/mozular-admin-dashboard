import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveModuleComponent } from './active-module.component';

describe('ActiveModuleComponent', () => {
  let component: ActiveModuleComponent;
  let fixture: ComponentFixture<ActiveModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
