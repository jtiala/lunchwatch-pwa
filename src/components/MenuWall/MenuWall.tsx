import React from "react";
import format from "date-fns/format";
import { useTranslation } from "react-i18next";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import Masonry from "react-masonry-css";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Info from "@material-ui/icons/Info";

import theme from "../../theme";
import { useAppState } from "../../state/appState";
import {
  SearchMenusQueryData,
  SearchMenusQueryVariables,
  SearchMenusQueryDataEdge
} from "../../graphql/searchMenus/searchMenus.interfaces";
import useStyles from "./MenuWall.styles";
import Menu from "../Menu/Menu";
import Spinner from "../Spinner/Spinner";

const searchMenus = loader("../../graphql/searchMenus/searchMenus.query.gql");

const MenuWall: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { date, language, location } = useAppState();
  const { loading, error, data } = useQuery<
    SearchMenusQueryData,
    SearchMenusQueryVariables
  >(searchMenus, {
    variables: {
      date: format(date, "yyyy-MM-dd"),
      language: language,
      lat: location && location.lat,
      lng: location && location.lng
    }
  });

  if (
    error ||
    (!loading && (data && data.menus && data.menus.totalCount < 1))
  ) {
    return (
      <div className={classes.center}>
        <Card className={classes.card}>
          <CardHeader
            avatar={<Info />}
            title={t("Sorry!")}
            subheader={t("No menus available for the selected date")}
          />
        </Card>
      </div>
    );
  }

  if (loading || (data && data.menus && data.menus.totalCount < 1)) {
    return (
      <div className={classes.center}>
        <Spinner />
      </div>
    );
  }

  const breakpointColumns = {
    default: 7,
    [theme.breakpoints.values.xl]: 5,
    [theme.breakpoints.values.lg]: 4,
    [theme.breakpoints.values.md]: 3,
    [theme.breakpoints.values.sm]: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className={classes.masonry}
      columnClassName={classes.masonryColumn}
    >
      {data &&
        data.menus &&
        data.menus.edges.map(
          (edge: SearchMenusQueryDataEdge) =>
            edge.node && <Menu key={`menu-${edge.node.id}`} {...edge.node} />
        )}
    </Masonry>
  );
};

export default MenuWall;
