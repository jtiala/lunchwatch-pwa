import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';
import moment from 'moment';
import { searchParamsSelectors } from '../../state/ducks/searchParams';
import { menusSelectors, menusOperations } from '../../state/ducks/menus';
import MenuWall from '../components/MenuWall';

class MenuWallContainer extends React.Component {
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
      <MenuWall
        menus={this.props.menus}
        menusLoading={this.props.menusLoading}
      />
    );
  }
}

MenuWallContainer.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
  fetchMenus: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  menus: PropTypes.instanceOf(List).isRequired,
  menusLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  date: searchParamsSelectors.getDate(state),
  language: searchParamsSelectors.getLanguage(state),
  lat: searchParamsSelectors.getLat(state),
  lng: searchParamsSelectors.getLng(state),
  menus: menusSelectors.getAll(state),
  menusLoading: menusSelectors.isLoading(state),
});

const mapDispatchToProps = {
  fetchMenus: menusOperations.fetchList,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuWallContainer);
