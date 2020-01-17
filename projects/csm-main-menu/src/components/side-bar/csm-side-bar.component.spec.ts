import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CsmSideBarComponent } from './csm-side-bar.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CsmFilterPipe } from '../../pipes/csm-filter.pipe';
import { CsmMenuRenderComponent } from '../menu-render/csm-menu-render.component';
import { CsmMainMenuComponent } from '../../lib/csm-main-menu.component';

const metadataMock = require('../../../mocks/metadata.json');

describe('CsmSideBarComponent', () => {
  let component: CsmSideBarComponent;
  let fixture: ComponentFixture<CsmSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsmMainMenuComponent, CsmSideBarComponent, CsmMenuRenderComponent, CsmFilterPipe ],
      imports: [ BrowserModule, FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsmSideBarComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.metadata = metadataMock;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
