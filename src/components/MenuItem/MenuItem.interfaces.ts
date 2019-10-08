import { MenuItem } from "../../models/MenuItem";

export interface Props extends MenuItem {
  isFavorite?: boolean;
}
