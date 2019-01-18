if (typeof document !== 'undefined') {
  require('style-loader!css-loader!./styles.css');
}

if (typeof IntersectionObserver === 'undefined') {
  require('intersection-observer');
}
