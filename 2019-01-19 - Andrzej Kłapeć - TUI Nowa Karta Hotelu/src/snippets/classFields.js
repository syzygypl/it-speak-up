class CarouselItem extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    shouldFetchImage: PropTypes.bool.isRequired,
    altText: PropTypes.string,
    onItemClick: PropTypes.func,
  };

  static defaultProps = {
    altText: '',
    onItemClick: () => {},
  };

  state = {
    hasBeenLoaded: false,
    errorFetchingImage: false,
  };

  imageRef = React.createRef();

  onImageLoad = () => this.setState({ hasBeenLoaded: true });

  onImageError = () => this.setState({ errorFetchingImage: true });
}
