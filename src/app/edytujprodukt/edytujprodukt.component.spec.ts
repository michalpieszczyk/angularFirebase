import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytujproduktComponent } from './edytujprodukt.component';

describe('EdytujproduktComponent', () => {
  let component: EdytujproduktComponent;
  let fixture: ComponentFixture<EdytujproduktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdytujproduktComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdytujproduktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
