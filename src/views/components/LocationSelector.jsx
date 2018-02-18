import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import LocationOnIcon from 'material-ui-icons/LocationOn';

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
  inputRoot: {
    width: '100%',
    position: 'relative',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.unit,
    fontSize: '1rem',
    outline: 'none',
    border: 'none',
    borderRadius: 2,
    boxShadow: 'inset 0 2px 2px 0 rgba(0,0,0,0.16)',
  },
  autocompleteContainer: {
    position: 'absolute',
    width: '100%',
    marginTop: -2,
    zIndex: theme.zIndex.appBar * 2,
    backgroundColor: theme.palette.common.white,
    borderRadius: '0 0 2px 2px',
    boxShadow: '0px 2px 2px -1px rgba(0, 0, 0, 0.2), 0px 4px 4px 0px rgba(0, 0, 0, 0.14)',
  },
  autocompleteItem: {
    cursor: 'pointer',
    overflow: 'hidden',
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    backgroundColor: 'transparent',
    '& li': {
      padding: theme.spacing.unit / 2,
    },
    '& li h3': {
      color: theme.palette.grey[900],
    },
    '& li p': {
      color: theme.palette.grey[600],
    },
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  autocompleteItemActive: {
    backgroundColor: theme.palette.grey[200],
  },
  footer: {
    borderRadius: '0 0 2px 2px',
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.grey[100],
  },
  footerImage: {
    display: 'inline-block',
    width: 100,
  },
});

class LocationSelector extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      address: this.props.address,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleSelect(address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        this.setState({
          address,
        });
        this.props.changeLocation(lat, lng, address);
      });
  }

  handleChange(address) {
    this.setState({
      address,
    });
  }

  handleFocus() {
    this.setState({
      address: '',
    });
  }

  render() {
    const AutocompleteItem = ({ formattedSuggestion }) => (
      <ListItem dense>
        <ListItemText
          primary={formattedSuggestion.mainText}
          secondary={formattedSuggestion.secondaryText}
        />
      </ListItem>
    );

    const Footer = () => (
      <ListItem dense className={this.props.classes.footer}>
        <img
          className={this.props.classes.footerImage}
          src="/static/images/powered-by-google.png"
          alt="Powered by Google"
        />
      </ListItem>
    );

    const inputProps = {
      value: this.state.address,
      onChange: this.handleChange,
      onFocus: this.handleFocus,
      placeholder: this.props.t('searchPlaces'),
    };

    const shouldFetchSuggestions = ({ value }) => value.length > 2;

    const onError = (status, clearSuggestions) => {
      clearSuggestions();
    };

    return (
      <div className={this.props.classes.root}>
        <LocationOnIcon className={this.props.classes.icon} />
        <PlacesAutocomplete
          onSelect={this.handleSelect}
          onError={onError}
          renderSuggestion={AutocompleteItem}
          renderFooter={Footer}
          onEnterKeyDown={this.handleSelect}
          classNames={{
            root: this.props.classes.inputRoot,
            input: this.props.classes.input,
            autocompleteContainer: this.props.classes.autocompleteContainer,
            autocompleteItem: this.props.classes.autocompleteItem,
            autocompleteItemActive: this.props.classes.autocompleteItemActive,
          }}
          inputProps={inputProps}
          shouldFetchSuggestions={shouldFetchSuggestions}
          highlightFirstSuggestion
        />
      </div>
    );
  }
}

LocationSelector.propTypes = {
  address: PropTypes.string.isRequired,
  changeLocation: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  translate('locationSelector'),
  withStyles(styles),
)(LocationSelector);
