import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISideBarOption, ISideBarOptionItemView } from '../../interfaces';

@Component({
  selector: 'csm-menu-render',
  templateUrl: './csm-menu-render.component.html',
  styleUrls: ['./csm-menu-render.component.scss']
})
export class CsmMenuRenderComponent {
  @Output()
  public changeOption: EventEmitter<ISideBarOption> = new EventEmitter<ISideBarOption>();

  @Input()
  public option: ISideBarOption;
  public originalOption: ISideBarOption;
  public search: string;

  constructor() {}

  onViewClick() {
    this.changeOption.emit(null);
  }
}
