import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpersonReactiveFormComponent } from './eperson-reactive-form.component';

describe('EpersonReactiveFormComponent', () => {
  let component: EpersonReactiveFormComponent;
  let fixture: ComponentFixture<EpersonReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpersonReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpersonReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
