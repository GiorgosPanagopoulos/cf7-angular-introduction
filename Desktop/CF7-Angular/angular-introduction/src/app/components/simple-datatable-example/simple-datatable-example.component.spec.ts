import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleDatatableExampleComponent } from './simple-datatable-example.component';

describe('SimpleDatatableExampleComponent', () => {
  let component: SimpleDatatableExampleComponent;
  let fixture: ComponentFixture<SimpleDatatableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleDatatableExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleDatatableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
