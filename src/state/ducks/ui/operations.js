import { animateScroll } from 'react-scroll';
import { startScrolling, stopScrolling } from './actions';

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
};
