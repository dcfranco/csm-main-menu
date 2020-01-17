import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsmSideBarComponent } from './csm-side-bar.component';

describe('CsmSideBarComponent', () => {
  let component: CsmSideBarComponent;
  let fixture: ComponentFixture<CsmSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsmSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsmSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
