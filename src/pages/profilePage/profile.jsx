import React from 'react';
import Posts from '../../posts/posts';
import ProfileSection from '../../profile-section/profileSection';
import './profile.styles.scss';

class Profile extends React.Component{
    constructor(){
        super();

        this.state={
            username: 'Fenton',
            displayName: 'Sarthak Goyal',
            imgUrl: 'https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-2060x1288.jpg'
        }
    }

    render(){
        return(
            <div className='profile'>
                <ProfileSection imgUrl={this.state.imgUrl} username={this.state.username} displayName={this.state.displayName} />
                <span>Posts</span>
                
                <Posts/>
            </div>
        )
    }
}

export default Profile;