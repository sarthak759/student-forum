import React from 'react';
import Posts from '../../posts/posts';
import ProfileSection from '../../profile-section/profileSection';
import './profile.styles.scss';

class Profile extends React.Component{
    constructor(){
        super();

        this.state={
            username: 'Fenton',
            displayName: 'Sarthak',
            imgUrl: 'https://static8.depositphotos.com/1002238/829/v/450/depositphotos_8292471-stock-illustration-waving-robot.jpg'
        }
    }

    render(){
        return(
            <div className='profile'>
                <ProfileSection imgUrl={this.state.imgUrl} username={this.state.username} displayName={this.state.displayName} />
                <Posts/>
            </div>
        )
    }
}

export default Profile;