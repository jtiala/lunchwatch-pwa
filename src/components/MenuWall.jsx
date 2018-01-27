import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import { XMasonry, XBlock } from 'react-xmasonry/dist/index';
import Typography from 'material-ui/Typography';
import * as Actions from '../actions/Actions';
import Menu from './Menu';

const styles = () => ({
  root: {
    margin: 10,
  },
  block: {
    margin: 20,
  },
});

class MenuWall extends React.Component {
  componentDidMount() {
    this.props.loadMenus(this.props.date, this.props.language);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.date !== nextProps.date
      || this.props.language !== nextProps.language) {
      this.props.loadMenus(nextProps.date, nextProps.language);
    }
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        {this.props.loadingMenus ?
          <Typography>Loading...</Typography> :
          <XMasonry targetBlockWidth={300}>
            {this.props.menus.map(menu => (
              <XBlock key={menu.get('id')} className={this.props.classes.block}>
                <Menu menu={menu} />
              </XBlock>
            ))}
          </XMasonry>
        }
      </div>
    );
  }
}

MenuWall.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(moment).isRequired,
  language: PropTypes.string.isRequired,
  loadingMenus: PropTypes.bool.isRequired,
  loadMenus: PropTypes.func.isRequired,
  menus: PropTypes.instanceOf(List).isRequired,
};

const mapStateToProps = state => ({
  date: state.get('date'),
  language: state.get('language'),
  loadingMenus: state.get('loadingMenus'),
  menus: state.get('menus'),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  loadMenus: (date, language) => dispatch(Actions.loadMenus(date, language)),
});

const connectedMenuWall = connect(mapStateToProps, mapDispatchToProps)(MenuWall);
export default withStyles(styles)(connectedMenuWall);
