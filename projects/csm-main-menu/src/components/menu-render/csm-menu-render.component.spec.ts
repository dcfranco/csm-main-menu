import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsmMenuRenderComponent } from './csm-menu-render.component';

describe('CsmMenuRenderComponent', () => {
  let component: CsmMenuRenderComponent;
  let fixture: ComponentFixture<CsmMenuRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsmMenuRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsmMenuRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
