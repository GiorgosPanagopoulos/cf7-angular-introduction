import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDirectiveExampleComponent } from './for-directive-example.component';

describe('ForDirectiveExampleComponent', () => {
  let component: ForDirectiveExampleComponent;
  let fixture: ComponentFixture<ForDirectiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForDirectiveExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
