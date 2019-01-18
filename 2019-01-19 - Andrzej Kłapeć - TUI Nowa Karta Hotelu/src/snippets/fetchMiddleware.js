const fetchMiddleWare = store => next => action => {
  if (!action || !action.fetchConfig) {
    return next(action);
  }

  if (useMock || action.forceMock) {
    const mockResponse = action.mockResponse;
    let mockTimeout;

    if (typeof action.fetchConfig.mockTimeout !== 'undefined') {
      mockTimeout = action.fetchConfig.mockTimeout;
    } else {
      mockTimeout = 500;
    }

    setTimeout(() => {
      action.fetchConfig.success({ data: mockResponse });
    }, mockTimeout);

    next(action);
    return;
  }

  const dispatch = store.dispatch;
  const {
    init,
    url,
    method,
    timeout,
    success,
    error,
    isLocalApiCall,
    customHeaders,
    ...rest
  } = action.fetchConfig;

  if (init) {
    dispatch(init);
  }

  axios({
    url: normalizeUrl(url, isLocalApiCall),
    timeout: timeout || 0,
    method: method || 'GET',
    headers: customHeaders,
    withCredentials: true,
    ...rest,
  })
    .then(res => success(res))
    .catch(err => error(err));

  next(action);
};
