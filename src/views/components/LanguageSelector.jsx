import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import { withStyles } from 'material-ui/styles';
import Select from 'material-ui/Select';
import MenuItem from 'material-ui/Menu/MenuItem';
import LanguageIcon from 'material-ui-icons/Language';

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
  selectRoot: {
    boxShadow: 'inset 0 2px 2px 0 rgba(0,0,0,0.16)',
    background: theme.palette.common.white,
    border: 'none',
    display: 'block',
    width: '100%',
    padding: `1px ${theme.spacing.unit}px`,
    fontSize: '1rem',
    borderRadius: 2,
    outline: 'none',
  },
  select: {
    width: '100%',
    '&:focus': {
      background: 'transparent',
    },
  },
});

class LanguageSelector extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  handleChangeLanguage(event) {
    this.props.changeLanguage(event.target.value);
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <LanguageIcon className={this.props.classes.icon} />
        <Select
          disableUnderline
          className={this.props.classes.selectRoot}
          classes={{
            select: this.props.classes.select,
          }}
          value={this.props.language}
          onChange={this.handleChangeLanguage}
        >
          <MenuItem key="fi" value="fi">{this.props.t('inFinnish')}</MenuItem>
          <MenuItem key="en" value="en">{this.props.t('inEnglish')}</MenuItem>
        </Select>
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
