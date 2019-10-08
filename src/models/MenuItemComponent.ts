import { MenuItem } from "./MenuItem";

export enum MenuItemComponentType {
  FOOD_ITEM = "FOOD_ITEM",
  NAME = "NAME",
  LUNCH_TIME = "LUNCH_TIME",
  INFORMATION = "INFORMATION",
  PRICE_INFORMATION = "PRICE_INFORMATION"
}

export interface MenuItemComponent {
  id?: number;
  type?: MenuItemComponentType;
  value?: string;
  weight?: number;
  createdAt?: Date;
  updatedAt?: Date;
  menuItem?: MenuItem;
}
