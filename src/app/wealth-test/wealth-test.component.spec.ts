import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthTestComponent } from './wealth-test.component';

describe('WealthTestComponent', () => {
  let component: WealthTestComponent;
  let fixture: ComponentFixture<WealthTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WealthTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
