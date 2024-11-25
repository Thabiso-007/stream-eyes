import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgortPasswordComponent } from './forgort-password.component';

describe('ForgortPasswordComponent', () => {
  let component: ForgortPasswordComponent;
  let fixture: ComponentFixture<ForgortPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgortPasswordComponent]
    });
    fixture = TestBed.createComponent(ForgortPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
