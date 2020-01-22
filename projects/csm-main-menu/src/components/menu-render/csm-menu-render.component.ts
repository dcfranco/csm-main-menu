import { Component, OnInit, Input } from '@angular/core';
import { ISideBarOption, ISideBarOptionItemView } from '../../interfaces';

@Component({
  selector: 'csm-menu-render',
  templateUrl: './csm-menu-render.component.html',
  styleUrls: ['./csm-menu-render.component.scss']
})
export class CsmMenuRenderComponent {
  @Input()
  public option: ISideBarOption;
  public originalOption: ISideBarOption;
  public search: string;

  constructor() {}

  onViewClick() {
    this.option = null;
    this.search = null;
  }
}
