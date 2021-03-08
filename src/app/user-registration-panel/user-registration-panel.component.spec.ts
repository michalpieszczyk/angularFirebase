import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationPanelComponent } from './user-registration-panel.component';

describe('UserRegistrationPanelComponent', () => {
  let component: UserRegistrationPanelComponent;
  let fixture: ComponentFixture<UserRegistrationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
