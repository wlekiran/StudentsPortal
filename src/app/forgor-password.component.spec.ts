import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgorPasswordComponent } from './forgor-password.component';

describe('ForgorPasswordComponent', () => {
  let component: ForgorPasswordComponent;
  let fixture: ComponentFixture<ForgorPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgorPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgorPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
