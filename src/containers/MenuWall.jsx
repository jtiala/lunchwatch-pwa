import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { XMasonry, XBlock } from 'react-xmasonry/dist/index';
import * as Actions from '../actions/Actions';
import Menu from '../components/Menu';

const styles = () => ({
  root: {
    margin: 10,
  },
  block: {
    margin: 20,
  },
});

class MenuWall extends React.Component {
  componentWillMount() {
    this.props.loadMenus();
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <XMasonry targetBlockWidth={300}>
          {this.props.menus.data.map(menu => (
            <XBlock key={menu.id} className={this.props.classes.block}>
              <Menu menu={menu} />
            </XBlock>
          ))}
        </XMasonry>
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
