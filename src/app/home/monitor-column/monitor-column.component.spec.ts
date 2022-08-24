import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorColumnComponent } from './monitor-column.component';

describe('MonitorColumnComponent', () => {
  let component: MonitorColumnComponent;
  let fixture: ComponentFixture<MonitorColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
