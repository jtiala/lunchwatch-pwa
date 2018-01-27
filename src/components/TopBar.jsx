import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import Typography from 'material-ui/Typography';
import { DatePicker } from 'material-ui-pickers';
import * as Actions from '../actions/Actions';
import Theme from '../themes/Theme';

const styles = {
  root: {
    width: '100%',
  },
  textField: {
    marginLeft: Theme.spacing.unit,
    marginRight: Theme.spacing.unit,
    width: 50,
  },
  menu: {
    width: 50,
  },
};

class TopBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
  }

  onChangeLanguage(event) {
    this.props.changeLanguage(event.target.value);
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              <span role="img" aria-label="watch">🕑</span> LunchWatch
            </Typography>
            <DatePicker
              className={this.props.classes.textField}
              value={this.props.date}
              onChange={this.props.changeDate}
              format="D.M."
              autoOk
            />
            <TextField
              select
              className={this.props.classes.textField}
              value={this.props.language}
              onChange={this.onChangeLanguage}
              SelectProps={{
                MenuProps: {
                  className: this.props.classes.menu,
                },
              }}
              margin="normal"
            >
              <MenuItem key="fi" value="fi">fi</MenuItem>
              <MenuItem key="en" value="en">en</MenuItem>
            </TextField>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  changeDate: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  date: state.date,
  language: state.language,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  changeDate: date => dispatch(Actions.changeDate(date)),
  changeLanguage: language => dispatch(Actions.changeLanguage(language)),
});

const connectedTopBar = connect(mapStateToProps, mapDispatchToProps)(TopBar);
export default withStyles(styles)(connectedTopBar);
