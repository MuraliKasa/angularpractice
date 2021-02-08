import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForloopExampleComponent } from './forloop-example.component';

describe('ForloopExampleComponent', () => {
  let component: ForloopExampleComponent;
  let fixture: ComponentFixture<ForloopExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForloopExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForloopExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
