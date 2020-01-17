
export interface ISideBarOptionItemView {
  id: string;
  label: string;
  country: string;
  route: string;
}

export interface ISideBarOptionItem {
  id: string;
  label: string;
  views: ISideBarOptionItemView[];
}

export interface ISideBarOption {
  id: string;
  label: string;
  items: ISideBarOptionItem[];
}

export interface ISideBarMetadata {
  options: ISideBarOption[];
  locale: string;
}
