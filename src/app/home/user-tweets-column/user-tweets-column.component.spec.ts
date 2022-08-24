import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTweetsColumnComponent } from './user-tweets-column.component';

describe('UserTweetsColumnComponent', () => {
  let component: UserTweetsColumnComponent;
  let fixture: ComponentFixture<UserTweetsColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTweetsColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTweetsColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
