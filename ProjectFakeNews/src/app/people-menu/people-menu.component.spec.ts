import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleMenuComponent } from './people-menu.component';

describe('PeopleMenuComponent', () => {
  let component: PeopleMenuComponent;
  let fixture: ComponentFixture<PeopleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
