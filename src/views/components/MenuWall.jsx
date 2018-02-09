import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import { List } from 'immutable';
import { withStyles } from 'material-ui/styles';
import { XMasonry, XBlock } from 'react-xmasonry/dist/index';
import Typography from 'material-ui/Typography';
import Menu from './Menu';
import LoadMenusButton from './LoadMenusButton';

const styles = () => ({
  root: {
    margin: '10px 10px 80px 10px',
  },
  block: {
    margin: 20,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const MenuWall = props => (
  <div className={props.classes.root}>
    {props.loading && props.menus.size < 1 ?
      <Typography>{props.t('loading')}...</Typography> :
      <div>
        <XMasonry targetBlockWidth={300}>
          {props.menus.map(menu => (
            <XBlock key={menu.get('id')} className={props.classes.block}>
              <Menu menu={menu} />
            </XBlock>
          ))}
        </XMasonry>
        <div className={props.classes.buttonContainer}>
          <LoadMenusButton
            loading={props.loading}
            moreToLoad={props.moreToLoad}
            loadMore={props.loadMore}
          />
        </div>
      </div>
    }
  </div>
);

MenuWall.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
  menus: PropTypes.instanceOf(List).isRequired,
  moreToLoad: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  translate(),
  withStyles(styles),
)(MenuWall);
