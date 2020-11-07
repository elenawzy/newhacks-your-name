import React from 'react';
import classes from './BackgroundVideo.module.css';
import source from "../assets/comet3.mp4";


const BackgroundVideo = () => {
    return(
        <div className={classes.Container}>
            <video autoPlay loop muted className={classes.Video}>
                <source src={source} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            
            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>your name.</h1>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo