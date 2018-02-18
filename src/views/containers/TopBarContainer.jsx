import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { searchParamsSelectors, searchParamsOperations } from '../../state/ducks/searchParams';
import { uiSelectors, uiOperations } from '../../state/ducks/ui';
import TopBar from '../components/TopBar';

const ControlBarContainer = props => (
  <TopBar
    address={props.address}
    changeDate={props.changeDate}
    changeLanguage={props.changeLanguage}
    changeLocation={props.changeLocation}
    date={props.date}
    isTopBarExpanded={props.isTopBarExpanded}
    language={props.language}
    toggleTopBar={props.toggleTopBar}
  />
);

ControlBarContainer.propTypes = {
  address: PropTypes.string.isRequired,
  changeDate: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(moment).isRequired,
  isTopBarExpanded: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  toggleTopBar: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  address: searchParamsSelectors.getAddress(state),
  date: searchParamsSelectors.getDate(state),
  isTopBarExpanded: uiSelectors.isTopBarExpanded(state),
  language: searchParamsSelectors.getLanguage(state),
});

const mapDispatchToProps = {
  changeDate: searchParamsOperations.changeDate,
  changeLanguage: searchParamsOperations.changeLanguage,
  changeLocation: searchParamsOperations.changeLocation,
  toggleTopBar: uiOperations.toggleTopBar,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlBarContainer);
