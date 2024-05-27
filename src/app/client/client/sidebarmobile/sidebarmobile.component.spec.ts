import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmobileComponent } from './sidebarmobile.component';

describe('SidebarmobileComponent', () => {
  let component: SidebarmobileComponent;
  let fixture: ComponentFixture<SidebarmobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarmobileComponent]
    });
    fixture = TestBed.createComponent(SidebarmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
