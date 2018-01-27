import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import 'moment/locale/fi';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/Menu/MenuItem';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { DatePicker } from 'material-ui-pickers';
import * as Actions from '../actions/Actions';
import Theme from '../themes/Theme';

const styles = {
  root: {
    width: '100%',
  },
  toolbar: {
    color: Theme.palette.types.dark.text.primary,
  },
  logo: {
    flex: 1,
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
  dateAndLanguage: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
  button: {
    color: Theme.palette.types.dark.text.primary,
    cursor: 'pointer',
    textAlign: 'center',
    '&:hover': {
      background: 'transparent',
      color: Theme.palette.types.dark.text.secondary,
    },
    '& .label': {
      marginLeft: 5,
    },
  },
  datePicker: {
    width: '50px',
  },
};

class TopBar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      languageMenuAnchorElement: null,
    };

    this.handlePreviousDate = this.handlePreviousDate.bind(this);
    this.handleNextDate = this.handleNextDate.bind(this);
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
  }


  handlePreviousDate() {
    this.props.dispatch(this.props.changeDate(moment(this.props.date).subtract(1, 'd')));
  }

  handleNextDate() {
    this.props.dispatch(this.props.changeDate(moment(this.props.date).add(1, 'd')));
  }

  handleChangeLanguage(language) {
    this.props.changeLanguage(language);
    this.handleCloseMenu();
  }

  handleOpenMenu(event) {
    this.setState({ languageMenuAnchorElement: event.currentTarget });
  }

  handleCloseMenu() {
    this.setState({ languageMenuAnchorElement: null });
  }

  render() {
    const open = Boolean(this.state.languageMenuAnchorElement);

    moment.locale(this.props.language);

    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar className={this.props.classes.toolbar}>
            <Typography type="title" color="inherit" className={this.props.classes.logo}>
              <span role="img" aria-label="watch">🕑</span> LunchWatch
            </Typography>
            <div className={this.props.classes.dateAndLanguage}>
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
                format="dd D.M."
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
              <Button
                className={this.props.classes.button}
                aria-owns={open ? 'language-menu' : null}
                aria-haspopup="true"
                onClick={this.handleOpenMenu}
                color="inherit"
                dense
              >
                <Icon>language</Icon>
                <span className="label">{this.props.language}</span>
              </Button>
              <Menu
                id="language-menu"
                anchorEl={this.state.languageMenuAnchorElement}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleCloseMenu}
              >
                <MenuItem onClick={() => this.handleChangeLanguage('fi')}>Suomeksi</MenuItem>
                <MenuItem onClick={() => this.handleChangeLanguage('en')}>In English</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  changeDate: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  date: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
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
