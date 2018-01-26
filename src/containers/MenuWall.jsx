import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import * as Actions from '../actions/Actions';
import Menu from '../components/Menu';

const styles = () => ({
  root: {
    margin: 30,
  },
});

class MenuWall extends React.Component {
  componentWillMount() {
    this.props.loadMenus();
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <Grid container>
          {this.props.menus.data.map(menu => (
            <Menu key={menu.id} menu={menu} />
          ))}
        </Grid>
      </div>
    );
  }
}

MenuWall.propTypes = {
  classes: PropTypes.object.isRequired,
  loadMenus: PropTypes.func.isRequired,
  menus: PropTypes.object,
};

MenuWall.defaultProps = {
  menus: {
    data: [],
    pagination: [],
  },
};

const mapStateToProps = state => ({
  menus: state.menus,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  loadMenus: () => dispatch(Actions.loadMenus()),
});

const connectedMenuWall = connect(mapStateToProps, mapDispatchToProps)(MenuWall);
export default withStyles(styles)(connectedMenuWall);
