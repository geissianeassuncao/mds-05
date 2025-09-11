import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsFildComponent } from './forms-fild.component';

describe('FormsFildComponent', () => {
  let component: FormsFildComponent;
  let fixture: ComponentFixture<FormsFildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsFildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsFildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
