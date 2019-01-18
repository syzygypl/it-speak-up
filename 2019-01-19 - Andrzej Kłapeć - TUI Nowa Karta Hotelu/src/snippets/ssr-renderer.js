export default store => (req, res) => {
  const context = {};
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
  fs.readFile(filePath, 'utf8', (err, indexContent) => {
    if (err) {
      console.error('err', err); // eslint-disable-line no-console
      res.status(404).end();
    }

    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>,
    );

    const reduxState = JSON.stringify(store.getState());
    const helmet = Helmet.renderStatic();

    const rendered = indexContent
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      .replace('window.REDUX_STATE=void 0', `window.REDUX_STATE=${reduxState}`)
      .replace('<helmet-title/>', helmet.title.toString())
      .replace('<helmet-meta/>', helmet.meta.toString())
      .replace('<helmet-link/>', helmet.link.toString())
      .replace('<helmet-ssr/>', helmet.script.toString())
      .replace('<helmet-ssr-body/>', helmet.noscript.toString());

    res.send(rendered);
  });
};
