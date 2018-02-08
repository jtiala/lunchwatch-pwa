import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import { List } from 'immutable';
import { withStyles } from 'material-ui/styles';
import { XMasonry, XBlock } from 'react-xmasonry/dist/index';
import Typography from 'material-ui/Typography';
import Menu from '../components/Menu';

const styles = () => ({
  root: {
    margin: '10px 10px 80px 10px',
  },
  block: {
    margin: 20,
  },
});

const MenuWall = props => (
  <div className={props.classes.root}>
    {props.menusLoading ?
      <Typography>{props.t('loading')}...</Typography> :
      <XMasonry targetBlockWidth={300}>
        {props.menus.map(menu => (
          <XBlock key={menu.get('id')} className={props.classes.block}>
            <Menu menu={menu} />
          </XBlock>
        ))}
      </XMasonry>
    }
  </div>
);

MenuWall.propTypes = {
  classes: PropTypes.object.isRequired,
  menus: PropTypes.instanceOf(List).isRequired,
  menusLoading: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  translate(),
  withStyles(styles),
)(MenuWall);
