if (shouldSelectOffer && isWindowDefined()) {
  const scrollToTop = () =>
    scrollTo({
      scrollToTop: true,
    });

  if (isRequestIdleCallbackSupported()) {
    requestIdleCallback(scrollToTop);
  } else {
    setTimeout(scrollToTop, 300);
  }
}
