import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperitemsComponent } from './swiperitems.component';

describe('SwiperitemsComponent', () => {
  let component: SwiperitemsComponent;
  let fixture: ComponentFixture<SwiperitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwiperitemsComponent]
    });
    fixture = TestBed.createComponent(SwiperitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
