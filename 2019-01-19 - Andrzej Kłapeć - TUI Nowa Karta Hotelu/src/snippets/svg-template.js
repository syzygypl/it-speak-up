/**
 * Disclaimer: Do not modify SvgAllIcons.js directly. It is generated with `yarn svg`
 */
import React, { Fragment } from 'react';

const shapes = [
  {{#shapes}}
    {
      key: '{{name}}',
      svg: {{{svg}}},
    },
  {{/shapes}}
];

const wrapperStyles = {
  height: 0,
  width: 0,
  position: 'absolute',
  visibility: 'hidden',
};

const SvgAllIcons = () => {
  // PageSpeed recommends fewer than 60 children elements
  const maxChunkSize = 59;
  const chunkedShapes = new Array(Math.ceil(shapes.length / maxChunkSize))
    .fill()
    .map((_, i) =>
      shapes.slice(i * maxChunkSize, i * maxChunkSize + maxChunkSize),
    );

  return (
    <div className="svg-all-icons" style={wrapperStyles}>
      {chunkedShapes.map((shapesChunk, shapesIndex) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="0"
          height="0"
          key={shapesIndex}
        >
          {shapesChunk.map(shape => (
            <Fragment key={shape.key}>{shape.svg}</Fragment>
          ))}
        </svg>
      ))}
    </div>
  );
};

export { shapes as availableShapes };
export default SvgAllIcons;
