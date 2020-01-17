import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CsmMainMenuComponent } from './csm-main-menu.component';
import { CsmSideBarComponent } from '../components/side-bar/csm-side-bar.component';
import { CsmMenuRenderComponent } from '../components/menu-render/csm-menu-render.component';
import { CsmFilterPipe } from '../pipes/csm-filter.pipe';

@NgModule({
  declarations: [
    CsmMainMenuComponent,
    CsmSideBarComponent,
    CsmMenuRenderComponent,
    CsmFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [
    CsmMainMenuComponent,
    CsmFilterPipe,
  ]
})
export class CsmMainMenuModule { }
