import React from 'react';
import './profileSection.styles.scss';

const ProfileSection= ({displayName, username, imgUrl}) => (
    <div className='profile-section'>
        <div
            className='background-img'
            style= {{
                backgroundImage: `url(${imgUrl})`
            }}
        />
        <div className='about'>
            <h2>{username}</h2>
            <pre className='tab'>3 Posts        |       654 Followers</pre>
            <h4>{displayName}</h4>
            <ul>
                <li>IIT Kanpur</li>
                <li>Web Developer</li>
            </ul>
        </div>
    </div>
);

export default ProfileSection;