import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import { DatePicker } from 'material-ui-pickers';
import KeyboardArrowRightIcon from 'material-ui-icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from 'material-ui-icons/KeyboardArrowLeft';
import IconButton from 'material-ui/IconButton';
import TodayIcon from 'material-ui-icons/Today';

const styles = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  },
  icon: {
    display: 'inline-block',
    marginRight: theme.spacing.unit,
  },
  button: {
    color: theme.palette.common.white,
    cursor: 'pointer',
    textAlign: 'center',
    height: 'auto',
    width: 'auto',
    margin: '0 1px',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  input: {
    borderRadius: 2,
    padding: '2px 0 3px',
    fontWeight: 500,
  },
});

class DateSelector extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handlePreviousDate = this.handlePreviousDate.bind(this);
    this.handleNextDate = this.handleNextDate.bind(this);
  }

  handlePreviousDate() {
    this.props.changeDate(moment(this.props.date).subtract(1, 'd'));
  }

  handleNextDate() {
    this.props.changeDate(moment(this.props.date).add(1, 'd'));
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <TodayIcon className={this.props.classes.icon} />
        <IconButton
          className={this.props.classes.button}
          onClick={this.handlePreviousDate}
          color="inherit"
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
        <DatePicker
          value={this.props.date}
          onChange={this.props.changeDate}
          format="D.M."
          autoOk
          leftArrowIcon={<KeyboardArrowLeftIcon />}
          rightArrowIcon={<KeyboardArrowRightIcon />}
          InputProps={{
            disableUnderline: true,
            disabled: true,
            classes: {
              input: classNames(this.props.classes.button, this.props.classes.input),
            },
            inputProps: {
              size: this.props.date.format('D.M.').length,
            },
          }}
        />
        <IconButton
          className={this.props.classes.button}
          onClick={this.handleNextDate}
          color="inherit"
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
    );
  }
}

DateSelector.propTypes = {
  changeDate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateSelector);
