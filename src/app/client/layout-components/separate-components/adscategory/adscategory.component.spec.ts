import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdscategoryComponent } from './adscategory.component';

describe('AdscategoryComponent', () => {
  let component: AdscategoryComponent;
  let fixture: ComponentFixture<AdscategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdscategoryComponent]
    });
    fixture = TestBed.createComponent(AdscategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
