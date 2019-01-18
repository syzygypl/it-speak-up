import React from 'react';
import styled from 'styled-components';

const listTypes = {
  ul: 'ul',
  li: 'li',
};

class List extends React.Component {
  constructor() {
    super();

    this.styledList = null;
  }

  componentDidMount() {
    this.styledList = styled(this.props.type)`
      text-align: left;
    `;
  }

  render() {
    const { type, ...props } = this.props;

    return this.styledList && <this.styledList {...props} />;
  }
}

export { List, listTypes };
