import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import MenuItem from './MenuItem';

const styles = theme => ({
  root: {
  },
  paper: {
    padding: 16,
    color: theme.palette.text.primary,
  },
});

const Menu = ({ classes, menu }) => (
  <Grid className={classes.root} item xs={12} sm={6} md={4} lg={3} xl={2}>
    <Paper className={classes.paper}>
      <Typography>
        {menu.restaurant.name}
      </Typography>
      <div>
        {menu.menuItems.map(menuItem => (
          <MenuItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </div>
    </Paper>
  </Grid>
);

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
