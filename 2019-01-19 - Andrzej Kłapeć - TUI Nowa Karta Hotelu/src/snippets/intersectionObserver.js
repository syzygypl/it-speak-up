import Observer from 'react-intersection-observer';

class SectionToObserve extends Component {
  ...

  onChange = inView => {
    const { onShow, onHide } = this.props;

    if (inView) {
      onShow(this.slugifiedTitle);
    } else {
      onHide(this.slugifiedTitle);
    }
  };

  render() {
    const { children } = this.props;

    return (
      <Observer
        threshold={optimalThreshold}
        onChange={this.onChange}
        id={this.slugifiedTitle}
      >
        {children}
      </Observer>
    );
  }

  ...
}
