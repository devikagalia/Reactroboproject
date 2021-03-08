import React from 'react';
import robo from './robo.jpg';
import './PaintImage.css'
const paintImage = ( props ) => {

    return (
        <div>

            <img className="transform" src={robo} alt="robo" style={{position: props.pos, left : props.x ,top : props.y }} />
        </div>
    )
};

export default paintImage;