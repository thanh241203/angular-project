import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderListComplexComponent } from './render-list-complex.component';

describe('RenderListComplexComponent', () => {
  let component: RenderListComplexComponent;
  let fixture: ComponentFixture<RenderListComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderListComplexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderListComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
