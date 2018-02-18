import { animateScroll } from 'react-scroll';
import { startScrolling, stopScrolling, toggleTopBar } from './actions';

const scrollToTop = (duration = 3000, easing = 'easeInOutQuint') => (dispatch) => {
  dispatch(startScrolling());
  animateScroll.scrollToTop({
    duration,
    smooth: easing,
  });
};

export {
  scrollToTop,
  startScrolling,
  stopScrolling,
  toggleTopBar,
};
