import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComHijoComponent } from './com-hijo.component';

describe('ComHijoComponent', () => {
  let component: ComHijoComponent;
  let fixture: ComponentFixture<ComHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
