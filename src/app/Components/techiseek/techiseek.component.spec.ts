import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechiseekComponent } from './techiseek.component';

describe('TechiseekComponent', () => {
  let component: TechiseekComponent;
  let fixture: ComponentFixture<TechiseekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechiseekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechiseekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
