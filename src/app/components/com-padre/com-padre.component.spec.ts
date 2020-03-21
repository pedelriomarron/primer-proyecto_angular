import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComPadreComponent } from './com-padre.component';

describe('ComPadreComponent', () => {
  let component: ComPadreComponent;
  let fixture: ComponentFixture<ComPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
