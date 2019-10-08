import { MenuItemComponent } from "../../models/MenuItemComponent";

export interface Props extends MenuItemComponent {
  isFavorite?: boolean;
  parentType?: string;
}
