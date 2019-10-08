import React from "react";
import ReactDOM from "react-dom";
import { MockedProvider } from "@apollo/react-testing";
import { loader } from "graphql.macro";

import MenuWall from "./MenuWall";

const searchMenus = loader("../../graphql/searchMenus/searchMenus.query.gql");

const mocks = [
  {
    request: {
      query: searchMenus
    },
    result: {
      data: {
        menus: {
          pageInfo: {
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: "MzIyMl8qXzAuMDA5Mjk4OTE3Nzk4ODg4ODk=",
            endCursor: "MzU2NV8qXzEzLjQyODQzNTE1MjMxMjE="
          },
          totalCount: 27,
          edges: [
            {
              cursor: "MzIyMl8qXzAuMDA5Mjk4OTE3Nzk4ODg4ODk=",
              node: {
                id: 3222,
                restaurant: {
                  id: 26,
                  name: "Restaurant Foodoo",
                  chain: "Juvenes",
                  url: "https://www.juvenes.fi/foodoo",
                  lat: 65.0592409,
                  lng: 25.4663717,
                  distance: 0.00929891779888889
                },
                menuItems: [
                  {
                    id: 18537,
                    type: "LUNCH_TIME",
                    menuItemComponents: [
                      {
                        id: 37786,
                        type: "LUNCH_TIME",
                        value:
                          "Suljettu 27.5.-1.9.\n\nNormaali aukiolo\n\nma-to\n08:30 - 14:30\n\npe\n08:30 - 14:00"
                      }
                    ]
                  },
                  {
                    id: 18538,
                    type: "LIGHT_MEAL",
                    menuItemComponents: [
                      {
                        id: 37790,
                        type: "NAME",
                        value: "Salad and soup"
                      },
                      {
                        id: 37787,
                        type: "FOOD_ITEM",
                        value:
                          "Tomaatti-vuohenjuustokeitto (KELA, G, K, VS, VL)"
                      },
                      {
                        id: 37788,
                        type: "FOOD_ITEM",
                        value: "Päivittäin vaihtuva proteiinikomponentti (KELA)"
                      },
                      {
                        id: 37789,
                        type: "FOOD_ITEM",
                        value:
                          "Runsas päivittäin vaihtuva salaattivalikoima (KELA)"
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      }
    }
  }
];

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MenuWall />
    </MockedProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
