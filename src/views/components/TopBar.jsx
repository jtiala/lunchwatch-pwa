import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import moment from 'moment';
import windowSize from 'react-window-size';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import SettingsIcon from 'material-ui-icons/Settings';
import Grid from 'material-ui/Grid';
import LocationSelector from './LocationSelector';
import DateSelector from './DateSelector';
import LanguageSelector from './LanguageSelector';

const styles = theme => ({
  root: {
    display: 'flex',
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.appBar,
    padding: theme.spacing.unit * 2,
    background: theme.palette.primary.main,
    boxShadow: theme.shadows[2],
    color: theme.palette.common.white,
    '@media (max-width: 599px)': {
      padding: theme.spacing.unit,
    },
  },
  grid: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    transition: theme.transitions.create('all'),
    '&.large': {
      '@media (min-width: 600px)': {
        fontSize: '2rem',
        marginLeft: '1rem',
      },
      '@media (min-width: 960px)': {
        fontSize: '3rem',
        marginLeft: '2rem',
      },
    },
    '& sup': {
      fontSize: '0.5rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.75)',
    },
  },
  settingsGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'relative',
    overflow: 'hidden',
    height: 32,
    transition: theme.transitions.create('all'),
    borderRight: '1px solid transparent',
    paddingRight: theme.spacing.unit,
    '&.expanded': {
      overflow: 'visible',
      height: 116,
      borderColor: theme.palette.primary.dark,
    },
    '@media (max-width: 599px)': {
      top: -28,
      marginBottom: -28,
    },
  },
  settingsRow: {
    padding: theme.spacing.unit / 2,
    transition: theme.transitions.create('all'),
    width: 142,
    '&.expanded': {
      width: '100%',
    },
    '@media (max-width: 599px)': {
      '&.date': {
        width: 142,
      },
    },
  },
  expandButtonContainer: {
    alignSelf: 'center',
    marginLeft: theme.spacing.unit,
  },
  expandButton: {
    display: 'inline-block',
    height: 24,
    width: 24,
    color: theme.palette.common.white,
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
});

const TopBar = (props) => {
  const logoContainer = (
    <div className={props.classes.logoContainer}>
      <Typography
        variant="headline"
        color="inherit"
        className={classNames(
          props.classes.logo,
          props.isTopBarExpanded ? 'large' : null,
        )}
      >
        Lunch<strong>Watch</strong><sup>Beta</sup>
      </Typography>
    </div>
  );

  const settingsGridClasses = classNames(
    props.classes.settingsGrid,
    props.isTopBarExpanded ? 'expanded' : 'collapsed',
  );

  const settingsRowClasses = (additionalClass = null) => classNames(
    props.classes.settingsRow,
    additionalClass,
    props.isTopBarExpanded ? 'expanded' : 'collapsed',
  );

  const settingsGrid = (
    <div className={settingsGridClasses}>
      <div className={settingsRowClasses('date')}>
        <DateSelector
          date={props.date}
          changeDate={props.changeDate}
        />
      </div>
      <div className={settingsRowClasses()}>
        <LanguageSelector
          language={props.language}
          changeLanguage={props.changeLanguage}
        />
      </div>
      <div className={settingsRowClasses()}>
        <LocationSelector
          address={props.address}
          changeLocation={props.changeLocation}
        />
      </div>
    </div>
  );

  const expandButtonContainer = (
    <div className={props.classes.expandButtonContainer}>
      <IconButton className={props.classes.expandButton} onClick={props.toggleTopBar}>
        {
          props.isTopBarExpanded
            ? <CloseIcon />
            : <SettingsIcon />
        }
      </IconButton>
    </div>
  );

  return (
    <div className={props.classes.root}>
      <Grid container spacing={0} className={props.classes.grid}>
        <Grid item xs={12} sm={6} md={8}>
          {logoContainer}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {settingsGrid}
        </Grid>
      </Grid>
      {expandButtonContainer}
    </div>
  );
};

TopBar.propTypes = {
  address: PropTypes.string.isRequired,
  changeDate: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  changeLocation: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  date: PropTypes.instanceOf(moment).isRequired,
  isTopBarExpanded: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  toggleTopBar: PropTypes.func.isRequired,
};

export default compose(
  windowSize,
  withStyles(styles),
)(TopBar);
