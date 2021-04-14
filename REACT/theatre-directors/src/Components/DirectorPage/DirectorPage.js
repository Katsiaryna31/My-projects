import React from 'react';
import DirectorMainInfo from './DirectorMainInfo/DirectorMainInfo';
import DirectorBiography from './DirectorBiography/DirectorBiography';
import DirectorWorks from './DirectorWorks/DirectorWorks';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Video from './Video/Video';
import Map from './Map/Map';
import './DirectorPage.css';

function DirectorPage(props) {
    const { data, titles } = props;
    return (
      <div className="director-page">
        <DirectorMainInfo data={data} />
        <DirectorBiography titles={titles} data={data} />
        <DirectorWorks titles={titles} data={data} />
        <Video data={data} />
        <Map titles={titles} data={data} />
        <PhotoGallery titles={titles} data={data} />
      </div>
    );
}

export default DirectorPage;
