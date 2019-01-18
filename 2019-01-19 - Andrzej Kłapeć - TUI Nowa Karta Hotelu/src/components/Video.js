import React from 'react';
import styled from 'styled-components';
import Observer from 'react-intersection-observer';

const StyledVideo = styled.video`
  width: 80vw;
  max-height: 80vh;
`;

class Video extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
  }

  onVisibilityChange(isVisible) {
    setTimeout(() => {
      const videoEl = this.videoRef.current;
      if (isVisible) {
        videoEl.play();
      } else if (!videoEl.paused) {
        videoEl.pause();
      }
    }, 500);
  }

  render() {
    const { videoProps, sourceProps, name } = this.props;

    return (
      <Observer onChange={this.onVisibilityChange}>
        <StyledVideo loop muted innerRef={this.videoRef} {...videoProps}>
          <source
            src={require(`!file-loader!../videos/${name}.mp4`)}
            type="video/mp4"
            {...sourceProps}
          />
        </StyledVideo>
      </Observer>
    );
  }
}

export { Video };
