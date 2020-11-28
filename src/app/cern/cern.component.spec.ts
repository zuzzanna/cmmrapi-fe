import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CernComponent } from './cern.component';

describe('CernComponent', () => {
  let component: CernComponent;
  let fixture: ComponentFixture<CernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
