import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedContentComponent } from './restricted-content.component';

describe('RestrictedContentComponent', () => {
  let component: RestrictedContentComponent;
  let fixture: ComponentFixture<RestrictedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestrictedContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
