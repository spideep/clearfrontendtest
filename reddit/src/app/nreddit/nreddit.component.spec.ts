import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NredditComponent } from './nreddit.component';

describe('NredditComponent', () => {
  let component: NredditComponent;
  let fixture: ComponentFixture<NredditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NredditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
