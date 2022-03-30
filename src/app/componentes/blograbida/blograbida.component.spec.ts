import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlograbidaComponent } from './blograbida.component';

describe('BlograbidaComponent', () => {
  let component: BlograbidaComponent;
  let fixture: ComponentFixture<BlograbidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlograbidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlograbidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
