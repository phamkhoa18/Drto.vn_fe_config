import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnewsComponent } from './listnews.component';

describe('ListnewsComponent', () => {
  let component: ListnewsComponent;
  let fixture: ComponentFixture<ListnewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListnewsComponent]
    });
    fixture = TestBed.createComponent(ListnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
