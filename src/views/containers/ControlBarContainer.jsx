import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { searchParamsSelectors, searchParamsOperations } from '../../state/ducks/searchParams';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';

class ControlBarContainer extends React.Component {
  render() {
    let bar;

    switch (this.props.type) {
      case 'bottomBar':
        bar = (
          <BottomBar
            address={this.props.address}
            changeDate={this.props.changeDate}
            changeLanguage={this.props.changeLanguage}
            changeLocation={this.props.changeLocation}
            date={this.props.date}
            language={this.props.language}
          />
        );
        break;
      default:
        bar = (
          <TopBar
            address={this.props.address}
            changeDate={this.props.changeDate}
            changeLanguage={this.props.changeLanguage}
            changeLocation={this.props.changeLocation}
            date={this.props.date}
            language={this.props.language}
          />
        );
    }

    return bar;
  }
}

ControlBarContainer.propTypes = {
  address: PropTypes.string.isRequired,
  changeDate: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(moment).isRequired,
  language: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  address: searchParamsSelectors.getAddress(state),
  date: searchParamsSelectors.getDate(state),
  language: searchParamsSelectors.getLanguage(state),
});

const mapDispatchToProps = {
  changeDate: searchParamsOperations.changeDate,
  changeLanguage: searchParamsOperations.changeLanguage,
  changeLocation: searchParamsOperations.changeLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlBarContainer);
