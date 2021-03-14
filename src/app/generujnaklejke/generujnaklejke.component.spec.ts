import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerujnaklejkeComponent } from './generujnaklejke.component';

describe('GenerujnaklejkeComponent', () => {
  let component: GenerujnaklejkeComponent;
  let fixture: ComponentFixture<GenerujnaklejkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerujnaklejkeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerujnaklejkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
