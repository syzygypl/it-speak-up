import React, { Component } from 'react';
import isEqual from 'react-fast-compare';

const updateOnPropsChange = WrappedComponent =>
  class extends Component {
    shouldComponentUpdate(nextProps) {
      return !isEqual(this.props, nextProps);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default updateOnPropsChange;
