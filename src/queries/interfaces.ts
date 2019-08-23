export interface Restaurant {
  id?: number;
  name?: string;
  chain?: string;
  url?: string;
  lat?: number;
  lng?: number;
  enabled?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  menus?: Menu[];
  distance?: number;
}

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

export interface Menu {
  id?: number;
  date?: Date;
  language?: string;
  createdAt?: Date;
  updatedAt?: Date;
  restaurant?: Restaurant;
  menuItems?: MenuItem[];
}

export interface SearchMenusQueryDataEdge {
  cursor: string;
  node: Menu;
}

export interface SearchMenusQueryData {
  menus: {
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
      endCursor: string;
    };
    totalCount: number;
    edges: SearchMenusQueryDataEdge[];
  };
}

export interface SearchMenusQueryVariables {
  date?: string;
  language?: string;
  lat?: number;
  lng?: number;
}
