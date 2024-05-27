import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecategoryComponent } from './onecategory.component';

describe('OnecategoryComponent', () => {
  let component: OnecategoryComponent;
  let fixture: ComponentFixture<OnecategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnecategoryComponent]
    });
    fixture = TestBed.createComponent(OnecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
