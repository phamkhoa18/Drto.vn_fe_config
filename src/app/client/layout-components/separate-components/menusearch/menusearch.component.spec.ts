import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusearchComponent } from './menusearch.component';

describe('MenusearchComponent', () => {
  let component: MenusearchComponent;
  let fixture: ComponentFixture<MenusearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenusearchComponent]
    });
    fixture = TestBed.createComponent(MenusearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
