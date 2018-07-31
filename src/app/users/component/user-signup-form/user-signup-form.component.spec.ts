import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignupFormComponent } from './user-signup-form.component';

describe('UserSignupFormComponent', () => {
  let component: UserSignupFormComponent;
  let fixture: ComponentFixture<UserSignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
