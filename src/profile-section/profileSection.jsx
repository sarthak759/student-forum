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
            <p>{username}</p>
            <pre className='tab'><b>3</b> Posts    <b>654</b> Followers</pre>
            <h4>{displayName}</h4>
            <ul>
                <li>IIT Kanpur</li>
                <li>Web Developer</li>
            </ul>
        </div>
    </div>
);

export default ProfileSection;