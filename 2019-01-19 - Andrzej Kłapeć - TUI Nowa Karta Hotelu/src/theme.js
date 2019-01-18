import { dark } from 'mdx-deck/themes';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

export default {
  ...dark,
  font:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  css: {
    fontSize: '16px',
    textAlign: 'center',
    '@media screen and (min-width:64em)': {
      fontSize: '38px',
    },
  },
  monospace: '"Dank Mono", monospace',
  colors: {
    text: '#d6deeb',
    background: 'rgb(1, 22, 39)',
  },
  codeSurfer: {
    ...nightOwl,
    plain: {
      color: '#d6deeb',
      backgroundColor: 'rgb(1, 21, 39)',
    },
    showNumbers: false,
  },
  blockquote: {
    padding: '0.5em 2em',
    fontSize: '1.25em',
    borderLeft: '2px solid #d6deeb',
  },
};
