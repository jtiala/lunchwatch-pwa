import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import * as Actions from '../actions/Actions';

class MenuWall extends React.Component {
  componentWillMount() {
    this.props.loadMenus();
  }

  render() {
    return (
      <section>
        {this.props.menus.data.map(menu => (
          <Paper key={menu.id}>
            {menu.date}
          </Paper>
        ))}
      </section>
    );
  }
}

MenuWall.propTypes = {
  menus: PropTypes.object,
  loadMenus: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuWall);
