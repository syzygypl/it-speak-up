import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  padding: 10px 0;
  font-weight: 300;
  font-size: 48px;
`;

const ListItem = props => <StyledListItem {...props} />;

export { ListItem };
