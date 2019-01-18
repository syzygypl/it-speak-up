const actionIndex = async (req, res, next) => {
  const urlToValidate = decodeURIComponent(req.originalUrl).replace(
    '/hotel',
    '',
  );
  const { store } = storeFactory({ isSSR: true });
  const { dispatch } = store;
  const md = new MobileDetect(req.headers['user-agent']);
  const isPhone = md.phone() !== null;
  const isTablet = md.tablet() !== null;

  try {
    const serializedCookies = Object.entries(req.cookies)
      .reduce((acc, cur) => {
        if (!cur[1]) return acc;

        return `${acc}${cur[0]}=${cur[1]}; `;
      }, '')
      .trim();

    const validationResponse = await dispatch(
      validateUrl({
        mockResponse: {
          url: urlToValidate,
          hotelCode: '123123',
        },
        originalUrl: urlToValidate,
        cookies: serializedCookies,
      }),
    );

    const {
      host: urlHost,
      url: validUrl,
      hotelCode,
      offerCode,
    } = validationResponse;

    const {
      mobileConfigurator: mobileConfiguratorParam,
      mobileFilter: mobileFilterParam,
    } = config.routing.pages;

    const parsedUrl = url.parse(validUrl);
    const isMobileConfiguratorUrl =
      parsedUrl.search &&
      parsedUrl.search.indexOf(mobileConfiguratorParam) !== -1;
    const isMobileFilterUrl =
      parsedUrl.search && parsedUrl.search.indexOf(mobileFilterParam) !== -1;

    if (validUrl !== urlToValidate) {
      const redirectUrl =
        process.env.NODE_ENV === 'development' ? `/hotel${validUrl}` : validUrl;

      res.redirect(301, redirectUrl);
    } else if (isMobileConfiguratorUrl || isMobileFilterUrl) {
      const { pathname, search, hash } = parsedUrl;
      const pathWithoutMobileParams = getFullPathWithoutParam({
        pathname,
        search,
        hash,
        paramToRemove: [mobileConfiguratorParam, mobileFilterParam],
      });

      res.redirect(301, pathWithoutMobileParams);
    } else {
      const data = await dispatch(
        initialApiCall(
          getContentUrlWithCodes(hotelCode, offerCode),
          serializedCookies,
        ),
      );

      dispatch(
        setIsDevice({
          isMobile: isPhone,
          isTablet,
          isDesktop: !isPhone && !isTablet,
        }),
      );

      dispatch(
        initHotelCard({
          data,
          hotelCode,
          offerCode,
          urlHost,
        }),
      );

      try {
        await dispatch(loadToasts(hotelCode));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error fetching toasts, will retry client-side');
      }

      serverRenderer(store)(req, res, next);
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      // Axios sets `error.request._currentRequest._redirectable` as a circular reference.
      // Express does not support such references.
      const parsedErrorObject = JSON.parse(
        CircularJSON.stringify(error, null, 0, true),
      );
      res.status(500).json(parsedErrorObject);
    } else {
      console.log(error); // eslint-disable-line no-console
      res.redirect('/errorPage');
    }
  }
};

router.get('/hotel/*', actionIndex);
