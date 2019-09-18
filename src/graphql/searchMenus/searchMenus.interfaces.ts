import { Menu } from "../../models/Menu";

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
