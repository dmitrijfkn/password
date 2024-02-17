import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordInputPersonalComponent } from './password-input-personal.component';

describe('PasswordInputPersonalComponent', () => {
  let component: PasswordInputPersonalComponent;
  let fixture: ComponentFixture<PasswordInputPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordInputPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordInputPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
