import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CsmMenuRenderComponent } from './csm-menu-render.component';
import { CsmFilterPipe } from '../../pipes/csm-filter.pipe';
import { CsmSideBarComponent } from '../side-bar/csm-side-bar.component';
import { CsmMainMenuComponent } from '../../lib/csm-main-menu.component';

const optionMock = require('../../../mocks/option.json');

describe('CsmMenuRenderComponent', () => {
  let component: CsmMenuRenderComponent;
  let fixture: ComponentFixture<CsmMenuRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsmMainMenuComponent, CsmSideBarComponent, CsmMenuRenderComponent, CsmFilterPipe ],
      imports: [ BrowserModule, FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsmMenuRenderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.option = optionMock;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
