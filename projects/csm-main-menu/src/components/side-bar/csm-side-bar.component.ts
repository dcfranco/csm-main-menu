import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ISideBarMetadata, ISideBarOption, ISideBarOptionItemView } from '../../interfaces'

@Component({
  selector: 'csm-side-bar',
  templateUrl: './csm-side-bar.component.html',
  styleUrls: ['./csm-side-bar.component.scss']
})
export class CsmSideBarComponent {
  @Output()
  public onChange: EventEmitter<ISideBarOption> = new EventEmitter<ISideBarOption>();

  @Input()
  public metadata: ISideBarMetadata

  public activeOption?: ISideBarOption;

  constructor() {
    debugger
  }

  onMenuClick(option: ISideBarOption) {
    if (this.activeOption && this.activeOption.id === option.id) {
      this.activeOption = null;
    } else {
      this.activeOption = option;
    }

    this.onChange.emit(this.activeOption)
  }
}
