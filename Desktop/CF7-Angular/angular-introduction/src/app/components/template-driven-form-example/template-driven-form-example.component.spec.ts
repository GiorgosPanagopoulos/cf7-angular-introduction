import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormExampleComponent } from './template-driven-form-example.component';

describe('TemplateDrivenFormExampleComponent', () => {
  let component: TemplateDrivenFormExampleComponent;
  let fixture: ComponentFixture<TemplateDrivenFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
