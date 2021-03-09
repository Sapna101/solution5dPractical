import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentlistComponent } from './momentlist.component';

describe('MomentlistComponent', () => {
  let component: MomentlistComponent;
  let fixture: ComponentFixture<MomentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
