import React from 'react';
import profileImg from '../assets/vishnu-image.jpg';

import './AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            <img alt="profile-img" src={profileImg} width={300} height={300} />
            <div>

            <p className='name-text'>Hi I'm Vishnu</p>
            <p>I'm a software developer having experience in MEAN and MERN stack. I worked as part of the "Center of Excellence" team in Mindtree and then joined GeekyAnts. I'm a fun loving person who loves to explore places. </p>
            <p>I joined the MCDA program to get used to data handling and analysis as it is one of the most needed skill for any developer in the current industry.</p>
            </div>
        </div>
    )
}

export default AboutMe;