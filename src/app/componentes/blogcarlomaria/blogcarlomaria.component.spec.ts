import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcarlomariaComponent } from './blogcarlomaria.component';

describe('BlogcarlomariaComponent', () => {
  let component: BlogcarlomariaComponent;
  let fixture: ComponentFixture<BlogcarlomariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogcarlomariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcarlomariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
