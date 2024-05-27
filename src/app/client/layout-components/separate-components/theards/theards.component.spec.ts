import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheardsComponent } from './theards.component';

describe('TheardsComponent', () => {
  let component: TheardsComponent;
  let fixture: ComponentFixture<TheardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheardsComponent]
    });
    fixture = TestBed.createComponent(TheardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
