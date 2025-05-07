import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientExampleComponent } from './http-client-example.component';

describe('HttpClientExampleComponent', () => {
  let component: HttpClientExampleComponent;
  let fixture: ComponentFixture<HttpClientExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpClientExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
