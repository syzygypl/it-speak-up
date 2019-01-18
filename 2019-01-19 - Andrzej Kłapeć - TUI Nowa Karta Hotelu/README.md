# Presentation about TUI NKH

[Live preview](https://presentation-tui.netlify.com)

## Development

Run `yarn` and `yarn start` to run a dev server.

## Ideas to talk about:

- Basic thoughts about the project (from the IT-side of things),
- Rendering optimization and how Redux impacts component updates,
- Optimization techniques for Google PageSpeed Insights (Lighthouse) score -
  e.g. creating dynamic imports and fetching them in reaction to user
  engagement,
- SSR: why & how, initializing main components server-side, dispatching
  additional actions client-side,
- New language/DOM features: async/await, IntersectionObserver, font-display,
  requestIdleCallback,
- Redux store as a global state container for the app, fetching data from the
  backend through redux thunk middleware with per-endpoint mocking capabilities,
- Tests: jest, snapshots, enzyme, how we noticed a problem with tests
  maintenance due to the fact that many of them are in fact testing
  implementation details,
- Configurator: challenges, differences between desktop/mobile, react-router,
- Offer seasons switching without page reload,
- What we're not happy about? e.g. GTM, Continuous Deployment being introduced
  late in the development, lack of gzip compression for key assets.

## Agenda

1. Introduction

   Few introductory words about the presentation - what's on the agenda, what
   did we work on for the last couple of months.

2. Technical showcase

   Start off with what technologies we've used - React (Create React App),
   Redux, Redux-thunk, Sass for styling, Express on the server. Explain how a
   modern stack (CRA) enabled us to use modern language features and APIs
   (async/await, IntersectionObserver, font-display, requestIdleCallback.) Few
   words about the tooling as well - eslint, prettier, husky for linting
   automatization, svg-sprite for generating a React SVG sprite component,
   webpack-bundle-analyzer. Explain how we're managing app data using a
   centralized Redux store, how we fetch data using Redux-thunk middleware and
   how it allows us to mock API responses. Showcase our SSR implementation and
   the benefits it brings.

3. Problems we've encountered

   - page parts,
   - configurator,
   - testing.

4. Optimizations

   - scrolling performance - shouldComponentUpdate, complex selectors
     memoization using reselect,
   - Google PageSpeed Insights (Lighthouse) score - splitting chunks using
     `await import`, `font-display: swap` for efficient font loading,
     `<link rel="preload">` for preloading critical assets, lazy-loading images,
     toggling component visibility for specific viewports with React,

5. Final thoughts

   Closing remarks about what mistakes we've made, what we've learned and what
   are our plans for the future (TUI offer listing).
