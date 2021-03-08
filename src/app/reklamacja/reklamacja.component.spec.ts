import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReklamacjaComponent } from './reklamacja.component';

describe('ReklamacjaComponent', () => {
  let component: ReklamacjaComponent;
  let fixture: ComponentFixture<ReklamacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReklamacjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReklamacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
