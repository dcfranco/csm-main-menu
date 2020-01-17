import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsmMainMenuComponent } from './csm-main-menu.component';
import { CsmSideBarComponent } from '../components/side-bar/csm-side-bar.component';
import { CsmMenuRenderComponent } from '../components/menu-render/csm-menu-render.component';
import { CsmFilterPipe } from '../pipes/csm-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const metadataMock = require('../../mocks/metadata.json');

describe('CsmMainMenuComponent', () => {
  let component: CsmMainMenuComponent;
  let fixture: ComponentFixture<CsmMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsmMainMenuComponent, CsmSideBarComponent, CsmMenuRenderComponent, CsmFilterPipe ],
      imports: [ BrowserModule, FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsmMainMenuComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.metadata = metadataMock;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
