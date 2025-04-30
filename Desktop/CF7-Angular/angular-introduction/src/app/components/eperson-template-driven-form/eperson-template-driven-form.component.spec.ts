import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpersonTemplateDrivenFormComponent } from './eperson-template-driven-form.component';

describe('EpersonTemplateDrivenFormComponent', () => {
  let component: EpersonTemplateDrivenFormComponent;
  let fixture: ComponentFixture<EpersonTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpersonTemplateDrivenFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpersonTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});