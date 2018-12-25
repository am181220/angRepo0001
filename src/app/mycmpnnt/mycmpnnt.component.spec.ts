import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycmpnntComponent } from './mycmpnnt.component';

describe('MycmpnntComponent', () => {
  let component: MycmpnntComponent;
  let fixture: ComponentFixture<MycmpnntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycmpnntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycmpnntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
