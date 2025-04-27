import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindExampleComponent } from './event-bind-example.component';

describe('EventBindExampleComponent', () => {
  let component: EventBindExampleComponent;
  let fixture: ComponentFixture<EventBindExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
