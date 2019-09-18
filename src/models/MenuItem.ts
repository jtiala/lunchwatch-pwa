import { Menu } from "./Menu";
import { MenuItemComponent } from "./MenuItemComponent";

export enum MenuItemType {
  NORMAL_MEAL = "NORMAL_MEAL",
  VEGETARIAN_MEAL = "VEGETARIAN_MEAL",
  LIGHT_MEAL = "LIGHT_MEAL",
  SPECIAL_MEAL = "SPECIAL_MEAL",
  DESSERT = "DESSERT",
  BREAKFAST = "BREAKFAST",
  LUNCH_TIME = "LUNCH_TIME",
  INFORMATION = "INFORMATION",
  PRICE_INFORMATION = "PRICE_INFORMATION"
}

export interface MenuItem {
  id?: number;
  type?: MenuItemType;
  weight?: number;
  createdAt?: Date;
  updatedAt?: Date;
  menu?: Menu;
  menuItemComponents?: MenuItemComponent[];
}
