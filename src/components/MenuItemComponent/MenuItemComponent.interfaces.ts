import { MenuItemComponent } from "../../queries/interfaces";

export interface Props extends MenuItemComponent {
  isFavorite?: boolean;
  parentType?: string;
}
