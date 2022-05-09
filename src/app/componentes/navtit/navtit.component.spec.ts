import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtitComponent } from './navtit.component';

describe('NavtitComponent', () => {
  let component: NavtitComponent;
  let fixture: ComponentFixture<NavtitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavtitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavtitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
