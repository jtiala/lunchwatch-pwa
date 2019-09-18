import { Restaurant } from "./Restaurant";
import { MenuItem } from "./MenuItem";

export interface Menu {
  id?: number;
  date?: Date;
  language?: string;
  createdAt?: Date;
  updatedAt?: Date;
  restaurant?: Restaurant;
  menuItems?: MenuItem[];
}
