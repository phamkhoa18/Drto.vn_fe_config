import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipercategoryComponent } from './swipercategory.component';

describe('SwipercategoryComponent', () => {
  let component: SwipercategoryComponent;
  let fixture: ComponentFixture<SwipercategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwipercategoryComponent]
    });
    fixture = TestBed.createComponent(SwipercategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
