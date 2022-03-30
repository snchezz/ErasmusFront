import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialImgurComponent } from './tutorial-imgur.component';

describe('TutorialImgurComponent', () => {
  let component: TutorialImgurComponent;
  let fixture: ComponentFixture<TutorialImgurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialImgurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialImgurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
