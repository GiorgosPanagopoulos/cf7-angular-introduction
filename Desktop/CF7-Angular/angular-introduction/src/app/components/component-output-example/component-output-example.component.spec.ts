import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOutputExampleComponent } from './component-output-example.component';

describe('ComponentOutputExampleComponent', () => {
  let component: ComponentOutputExampleComponent;
  let fixture: ComponentFixture<ComponentOutputExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentOutputExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentOutputExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
