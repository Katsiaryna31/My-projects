import React, { useState, useEffect } from 'react';
import birdsData from './birdsData';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Description = ({ level, clickedId }) => {
    console.log(clickedId);
    const [name, setName] = useState();
    const [image, setImage] = useState();
    const [species, setSpecies] = useState();
    const [audio, setAudio] = useState();
    const [description, setDescription] = useState();
    useEffect(() => {
        if (clickedId !== null) {
            const { name, image, species, audio, description } = birdsData[level][clickedId];
            setName(name);
            setImage(image);
            setSpecies(species);
            setAudio(audio);
            setDescription(description);
        }
    }, [level, clickedId]);
    return (<div className="description_wrapper">
        {(clickedId === null) && <div >
            <p>Послушайте плеер.</p>
            <p>Выберите птицу из списка.</p>
        </div>}
        {(clickedId !== null) && <div>
            <div className="description_main">
                <img src={image} alt='Bird' width='200' height='150'></img>
                <div className="description_bird">
                    <h3>{name}</h3>
                    <p>{species}</p>
                    <AudioPlayer
                        src={audio} autoPlay={false}
                    />
                </div>
            </div>
            <div className="description_text">
                <p>{description}</p>
            </div>
        </div>}
    </div>)
}

export default Description;