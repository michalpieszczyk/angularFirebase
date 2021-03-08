import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytujreklamacjeComponent } from './edytujreklamacje.component';

describe('EdytujreklamacjeComponent', () => {
  let component: EdytujreklamacjeComponent;
  let fixture: ComponentFixture<EdytujreklamacjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdytujreklamacjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdytujreklamacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
