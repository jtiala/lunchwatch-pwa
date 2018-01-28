import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
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
import LocationSearch from './LocationSearch';

const styles = {
  root: {
    width: '100%',
  },
  bar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  toolbar: {
    color: Theme.palette.types.dark.text.primary,
  },
  logo: {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginRight: 16,
  },
  location: {
    flex: 1,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    marginLeft: '2rem',
    marginRight: '2rem',
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

    return (
      <div className={this.props.classes.root}>
        <AppBar position="static" className={this.props.classes.bar}>
          <Toolbar className={this.props.classes.toolbar}>
            <div className={this.props.classes.logo}>
              <Typography type="title" color="inherit">
                <span role="img" aria-label="watch">🕑</span> LunchWatch
              </Typography>
            </div>
            <div className={this.props.classes.location}>
              <LocationSearch />
            </div>
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
              <Button
                className={this.props.classes.button}
                aria-owns={open ? 'language-menu' : null}
                aria-haspopup="true"
                onClick={this.handleOpenMenu}
                color="inherit"
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
