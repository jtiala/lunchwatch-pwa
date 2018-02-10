import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import { withStyles } from 'material-ui/styles';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/Menu/MenuItem';
import Button from 'material-ui/Button';
import LanguageIcon from 'material-ui-icons/Language';

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
});

class LanguageSelector extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      languageMenuAnchorElement: null,
    };

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleCloseMenu = this.handleCloseMenu.bind(this);
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
      <div>
        <Button
          className={this.props.classes.button}
          aria-owns={open ? 'language-menu' : null}
          aria-haspopup="true"
          onClick={this.handleOpenMenu}
          color="inherit"
        >
          <LanguageIcon />
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
          <MenuItem onClick={() => this.handleChangeLanguage('fi')}>{this.props.t('inFinnish')}</MenuItem>
          <MenuItem onClick={() => this.handleChangeLanguage('en')}>{this.props.t('inEnglish')}</MenuItem>
        </Menu>
      </div>
    );
  }
}

LanguageSelector.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  translate('languageSelector'),
  withStyles(styles),
)(LanguageSelector);
