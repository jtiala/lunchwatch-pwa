import React from "react";
import { useTranslation } from "react-i18next";
import format from "date-fns/format";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import Masonry from "react-masonry-css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Info from "@material-ui/icons/Info";

import { useAppState } from "../../appState";
import theme from "../../defaultTheme";
import Menu, { Props as MenuProps } from "../Menu/Menu";
import Spinner from "../Spinner/Spinner";

const useStyles = makeStyles(theme => ({
  center: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(4)
  },
  card: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    "& span:last-child": {
      color: "rgba(255, 255, 255, 0.6)"
    }
  },
  masonry: {
    display: "flex",
    width: "auto",
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0.5)
    }
  },
  masonryColumn: {
    backgroundClip: "padding-box",
    "& > *": {
      margin: theme.spacing(1, 1, 2, 1),
      [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(0.5, 0.5, 1, 0.5)
      }
    }
  }
}));

const query = loader("./searchMenusQuery.gql");

interface SearchMenusQueryDataEdge {
  cursor: string;
  node: MenuProps;
}

interface SearchMenusQueryData {
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

interface SearchMenusQueryVariables {
  date?: string;
  language?: string;
  lat?: number;
  lng?: number;
}

const MenuWall: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles(theme);
  const { date, language, location } = useAppState();
  const { loading, error, data } = useQuery<
    SearchMenusQueryData,
    SearchMenusQueryVariables
  >(query, {
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
