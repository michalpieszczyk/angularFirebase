import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizytowkaComponent } from './wizytowka.component';

describe('WizytowkaComponent', () => {
  let component: WizytowkaComponent;
  let fixture: ComponentFixture<WizytowkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizytowkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizytowkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
