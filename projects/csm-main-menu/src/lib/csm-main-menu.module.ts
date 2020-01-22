import { NgModule, ApplicationModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CsmMainMenuComponent } from './csm-main-menu.component';
import { CsmSideBarComponent } from '../components/side-bar/csm-side-bar.component';
import { CsmMenuRenderComponent } from '../components/menu-render/csm-menu-render.component';
import { CsmFilterPipe } from '../pipes/csm-filter.pipe';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CsmMainMenuComponent,
    CsmSideBarComponent,
    CsmMenuRenderComponent,
    CsmFilterPipe,
  ],
  imports: [
    ApplicationModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CsmMainMenuComponent,
    CsmFilterPipe,
  ]
})
export class CsmMainMenuModule { }
