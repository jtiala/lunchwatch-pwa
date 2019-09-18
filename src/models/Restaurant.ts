import { Menu } from "./Menu";

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
