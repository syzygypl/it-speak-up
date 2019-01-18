export { default as theme } from './src/theme';

import './src/bootstrap.js';
import hello from './src/slides/hello.mdx';
import agenda from './src/slides/agenda.mdx';
import introduction from './src/slides/introduction.mdx';
import showcase from './src/slides/showcase.mdx';
import problems from './src/slides/problems.mdx';
import optimizations from './src/slides/optimizations.mdx';
import finalThoughts from './src/slides/finalThoughts.mdx';
import goodbye from './src/slides/goodbye.mdx';

export default [
  ...hello,
  ...agenda,
  ...introduction,
  ...showcase,
  ...problems,
  ...optimizations,
  ...finalThoughts,
  ...goodbye,
];
