import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 80vh;
  margin: 0 auto;
`;

const Image = ({ name, extension }) => (
  <StyledImage
    src={require(`file-loader!../images/${name}.${extension || 'png'}`)}
  />
);

export { Image };
