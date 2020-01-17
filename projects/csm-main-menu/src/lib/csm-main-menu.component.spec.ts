import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsmMainMenuComponent } from './csm-main-menu.component';

describe('CsmMainMenuComponent', () => {
  let component: CsmMainMenuComponent;
  let fixture: ComponentFixture<CsmMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsmMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsmMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
