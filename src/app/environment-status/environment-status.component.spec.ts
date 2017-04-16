import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentStatusComponent } from './environment-status.component';

describe('EnvironmentStatusComponent', () => {
  let component: EnvironmentStatusComponent;
  let fixture: ComponentFixture<EnvironmentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvironmentStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
