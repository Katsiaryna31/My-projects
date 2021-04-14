import React from 'react';
import ImageGallery from 'react-image-gallery';
import './PhotoGallery.css';
import "react-image-gallery/styles/css/image-gallery.css";

function PhotoGallery(props) {
  const { data, titles } = props;
  const { photos } = data;
  const images = [
      {
        original: photos[0].src,
        thumbnail: photos[0].src,
      },
      {
          original: photos[1].src,
          thumbnail: photos[1].src,
      },
      {
          original: photos[2].src,
          thumbnail: photos[2].src,
      },
      {
        original: photos[3].src,
        thumbnail: photos[3].src,
      },
    ];
    return (
      <div className="photo-gallery">
         <p className="photo-gallery-title">{titles.gallery}</p>
         <ImageGallery items={images} />
      </div>
  );
}

export default PhotoGallery;
