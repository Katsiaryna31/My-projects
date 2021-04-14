import React from 'react';
import img from '../../../Assets/Images/youtube.jpg';
import './Video.css';

function Video(props) {
  const { data } = props;

  function showPopUp() {
    document.getElementById('director-video').src = `${data.video}`;
    document.querySelector('body').style.overflow = 'hidden';
    document.getElementById('popup-window').style.display = 'flex';
  }
    return (
      <div type='button' className='video' onClick={showPopUp}>
        <p className="youtube-title">Youtube</p>
        <div
          className='youtube-image'
          style={
            {background:`url(${img})`}
          }
        >
        </div>
      </div>
    );
}

export default Video;
