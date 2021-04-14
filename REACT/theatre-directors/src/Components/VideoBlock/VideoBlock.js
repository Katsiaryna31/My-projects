import React, { PureComponent } from 'react';
import './VideoBlock.css';

export default class VideoBlock extends PureComponent {
  render() {
    const { close } = this.props;

    function closePopUp() {
      document.getElementById('director-video').src = '';
      document.getElementById('popup-window').style.display = 'none';
      document.querySelector('body').style.overflow = 'scroll';
    }

    return (
      <div id="popup-window">
        <div id="video-block">
          <button id="close-video" type="button" onClick={closePopUp}>{close}</button>
          <iframe title="youtube" id="director-video" width="817" height="470" src="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    );
  }
}
