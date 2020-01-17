import { Component, Input } from '@angular/core';
import { ISideBarOption, ISideBarMetadata } from '../interfaces';

@Component({
  selector: 'csm-main-menu',
  templateUrl: './csm-main-menu.component.html',
  styleUrls: ['./csm-main-menu.component.scss']
})
export class CsmMainMenuComponent {
  @Input()
  public metadata: ISideBarMetadata;

  public option: ISideBarOption = null;

  public onOptionChange(option: ISideBarOption): void {
    this.option = option
  }

}
