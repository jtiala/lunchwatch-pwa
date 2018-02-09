import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { withStyles } from 'material-ui/styles';
import { XMasonry, XBlock } from 'react-xmasonry/dist/index';
import Menu from './Menu';
import LoadMenusButton from './LoadMenusButton';
import Spinner from './Spinner';

const styles = () => ({
  root: {
    margin: '10px 10px 80px 10px',
  },
  block: {
    margin: 20,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const MenuWall = props => (
  <div className={props.classes.root}>
    {props.loading && props.menus.size < 1 ?
      <div className={props.classes.center}>
        <Spinner />
      </div> :
      <div>
        <XMasonry targetBlockWidth={300}>
          {props.menus.map(menu => (
            <XBlock key={menu.get('id')} className={props.classes.block}>
              <Menu menu={menu} />
            </XBlock>
          ))}
        </XMasonry>
        <div className={props.classes.center}>
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
};

export default withStyles(styles)(MenuWall);
