import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';
import { DatePicker } from 'material-ui-pickers';
import IconButton from 'material-ui/IconButton';
import { searchParamsOperations } from '../../state/ducks/searchParams';

const styles = () => ({
  button: {
    color: 'rgba(255,255,255,1)',
    cursor: 'pointer',
    textAlign: 'center',
    '&:hover': {
      background: 'transparent',
      color: 'rgba(255,255,255,0.75)',
    },
    '& .label': {
      marginLeft: 5,
    },
  },
  datePicker: {
    width: '50px',
  },
});

class DateSelector extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handlePreviousDate = this.handlePreviousDate.bind(this);
    this.handleNextDate = this.handleNextDate.bind(this);
  }

  handlePreviousDate() {
    this.props.dispatch(this.props.changeDate(moment(this.props.date).subtract(1, 'd')));
  }

  handleNextDate() {
    this.props.dispatch(this.props.changeDate(moment(this.props.date).add(1, 'd')));
  }

  render() {
    return (
      <div>
        <IconButton
          className={this.props.classes.button}
          onClick={this.handlePreviousDate}
          color="inherit"
        >
          <Icon>keyboard_arrow_left</Icon>
        </IconButton>
        <DatePicker
          className={`${this.props.classes.button} ${this.props.classes.datePicker}`}
          value={this.props.date}
          onChange={this.props.changeDate}
          format="D.M."
          autoOk
          InputProps={{
            disableUnderline: true,
            classes: {
              input: this.props.classes.button,
            },
          }}
        />
        <IconButton
          className={this.props.classes.button}
          onClick={this.handleNextDate}
          color="inherit"
        >
          <Icon>keyboard_arrow_right</Icon>
        </IconButton>
      </div>
    );
  }
}

DateSelector.propTypes = {
  changeDate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  date: state.getIn(['searchParams', 'date']),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  changeDate: date => dispatch(searchParamsOperations.changeDate(date)),
});

const connectedDateSelector = connect(mapStateToProps, mapDispatchToProps)(DateSelector);
export default withStyles(styles)(connectedDateSelector);
