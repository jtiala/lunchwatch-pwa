import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import { XMasonry, XBlock } from 'react-xmasonry/dist/index';
import Typography from 'material-ui/Typography';
import { menusOperations } from '../../state/ducks/menus';
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
  componentDidMount() {
    this.props.fetchMenus(this.props.date, this.props.language, this.props.lat, this.props.lng);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.date !== nextProps.date
      || this.props.language !== nextProps.language
      || this.props.lat !== nextProps.lat
      || this.props.lng !== nextProps.lng) {
      this.props.fetchMenus(nextProps.date, nextProps.language, nextProps.lat, nextProps.lng);
    }
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        {this.props.menusLoading ?
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
  fetchMenus: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  menus: PropTypes.instanceOf(List).isRequired,
  menusLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  date: state.getIn(['searchParams', 'date']),
  language: state.getIn(['searchParams', 'language']),
  lat: state.getIn(['searchParams', 'lat']),
  lng: state.getIn(['searchParams', 'lng']),
  menus: state.getIn(['menus', 'menus']),
  menusLoading: state.getIn(['menus', 'loading']),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  fetchMenus: (date, language, lat, lng) =>
    dispatch(menusOperations.fetchList(date, language, lat, lng)),
});

const connectedMenuWall = connect(mapStateToProps, mapDispatchToProps)(MenuWall);
export default withStyles(styles)(connectedMenuWall);
