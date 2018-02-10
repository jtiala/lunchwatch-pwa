import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';
import moment from 'moment';
import { searchParamsSelectors } from '../../state/ducks/searchParams';
import { menusSelectors, menusOperations } from '../../state/ducks/menus';
import { uiSelectors, uiOperations } from '../../state/ducks/ui';
import MenuWall from '../components/MenuWall';

class MenuWallContainer extends React.Component {
  constructor(props) {
    super(props);

    this.fetchNextPage = this.fetchNextPage.bind(this);
  }

  componentDidMount() {
    if (!this.props.menus.size) {
      this.props.menusFetch(
        this.props.date,
        this.props.language,
        this.props.lat,
        this.props.lng,
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.date !== nextProps.date
      || this.props.language !== nextProps.language
      || this.props.lat !== nextProps.lat
      || this.props.lng !== nextProps.lng) {
      const duration = 1000;

      this.props.uiScrollToTop(duration);

      setTimeout(() => {
        this.props.menusFetch(
          nextProps.date,
          nextProps.language,
          nextProps.lat,
          nextProps.lng,
        );
      }, duration / 2);
    }
  }

  fetchNextPage() {
    this.props.menusFetch(
      this.props.date,
      this.props.language,
      this.props.lat,
      this.props.lng,
      this.props.menusNextPageNumber,
      true,
    );
  }

  render() {
    return (
      <MenuWall
        menus={this.props.menus}
        loading={this.props.menusLoading}
        moreToLoad={this.props.menusMoreToLoad}
        loadMore={this.fetchNextPage}
        scrolling={this.props.uiIsScrolling}
      />
    );
  }
}

MenuWallContainer.propTypes = {
  date: PropTypes.instanceOf(moment).isRequired,
  language: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  menus: PropTypes.instanceOf(List).isRequired,
  menusFetch: PropTypes.func.isRequired,
  menusLoading: PropTypes.bool.isRequired,
  menusMoreToLoad: PropTypes.bool.isRequired,
  menusNextPageNumber: PropTypes.number.isRequired,
  uiIsScrolling: PropTypes.bool.isRequired,
  uiScrollToTop: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  date: searchParamsSelectors.getDate(state),
  language: searchParamsSelectors.getLanguage(state),
  lat: searchParamsSelectors.getLat(state),
  lng: searchParamsSelectors.getLng(state),
  menus: menusSelectors.getAll(state),
  menusLoading: menusSelectors.isLoading(state),
  menusMoreToLoad: menusSelectors.isMoreToLoad(state),
  menusNextPageNumber: menusSelectors.getNextPageNumber(state),
  uiIsScrolling: uiSelectors.isScrolling(state),
});

const mapDispatchToProps = {
  menusFetch: menusOperations.fetch,
  uiScrollToTop: uiOperations.scrollToTop,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuWallContainer);
