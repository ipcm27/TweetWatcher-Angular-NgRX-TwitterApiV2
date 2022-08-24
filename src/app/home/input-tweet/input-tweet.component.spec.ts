import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTweetComponent } from './input-tweet.component';

describe('InputTweetComponent', () => {
  let component: InputTweetComponent;
  let fixture: ComponentFixture<InputTweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
