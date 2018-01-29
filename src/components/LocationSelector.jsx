import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from 'material-ui/Icon';
import * as Actions from '../actions/Actions';
import Theme from '../themes/Theme';

const styles = {
  root: {
    width: '100%',
  },
  input: {
    boxShadow: 'inset 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)',
    border: 'none',
    display: 'block',
    width: '100%',
    padding: 8,
    fontSize: '1rem',
    borderRadius: 2,
    outline: 'none',
  },
  autocompleteContainer: {
    position: 'absolute',
    top: '100%',
    backgroundColor: Theme.palette.primary.main,
    borderRadius: '0 0 2px 2px',
    zIndex: 99,
    boxShadow: '0px 2px 2px -1px rgba(0, 0, 0, 0.2), 0px 4px 4px 0px rgba(0, 0, 0, 0.14)',
  },
  autocompleteContainerUpward: {
    position: 'absolute',
    bottom: '100%',
    backgroundColor: Theme.palette.primary.main,
    borderRadius: '0 0 2px 2px',
    zIndex: 99,
    boxShadow: '0px -2px 2px -1px rgba(0, 0, 0, 0.2), 0px -4px 4px 0px rgba(0, 0, 0, 0.14)',
  },
  autocompleteItem: {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    '& .material-icons': {
      color: Theme.palette.types.dark.text.secondary,
      marginRight: 0,
    },
    '& li h3': {
      color: Theme.palette.types.dark.text.primary,
    },
    '& li p': {
      color: Theme.palette.types.dark.text.secondary,
    },
    '&:hover': {
      backgroundColor: Theme.palette.primary.dark,
      '& .material-icons': {
        color: Theme.palette.types.dark.text.primary,
      },
    },
  },
  autocompleteItemActive: {
    backgroundColor: Theme.palette.primary.dark,
    '& .material-icons': {
      color: Theme.palette.types.dark.text.primary,
    },
  },
  suggestionItem: {
  },
  footer: {
    backgroundColor: Theme.palette.primary.light,
    borderRadius: '0 0 2px 2px',
    justifyContent: 'flex-end',
  },
  footerImage: {
    display: 'inline-block',
    width: 100,
  },
};

class LocationSelector extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      address: this.props.address,
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const AutocompleteItem = ({ formattedSuggestion }) => (
      <ListItem button dense className={this.props.classes.suggestionItem}>
        <ListItemIcon>
          <Icon>location_on</Icon>
        </ListItemIcon>
        <ListItemText
          primary={formattedSuggestion.mainText}
          secondary={formattedSuggestion.secondaryText}
        />
      </ListItem>
    );

    const Footer = () => (
      <ListItem className={this.props.classes.footer}>
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
      onFocus: (event) => {
        event.target.select();
      },
      placeholder: 'Search Places',
    };

    const shouldFetchSuggestions = ({ value }) => value.length > 2;

    const onError = (status, clearSuggestions) => {
      clearSuggestions();
    };

    return (
      <PlacesAutocomplete
        onSelect={this.handleSelect}
        onError={onError}
        renderSuggestion={AutocompleteItem}
        renderFooter={Footer}
        onEnterKeyDown={this.handleSelect}
        classNames={{
          root: this.props.classes.root,
          input: this.props.classes.input,
          autocompleteContainer: this.props.upward
            ? this.props.classes.autocompleteContainerUpward
            : this.props.classes.autocompleteContainer,
          autocompleteItem: this.props.classes.autocompleteItem,
          autocompleteItemActive: this.props.classes.autocompleteItemActive,
        }}
        inputProps={inputProps}
        shouldFetchSuggestions={shouldFetchSuggestions}
        highlightFirstSuggestion
      />
    );
  }
}

LocationSelector.propTypes = {
  address: PropTypes.string.isRequired,
  changeLocation: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  upward: PropTypes.bool,
};

LocationSelector.defaultProps = {
  upward: false,
};

const mapStateToProps = state => ({
  address: state.address,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  changeLocation: (lat, lng, address) => dispatch(Actions.changeLocation(lat, lng, address)),
});

const connectedLocationSelector = connect(mapStateToProps, mapDispatchToProps)(LocationSelector);
export default withStyles(styles)(connectedLocationSelector);
