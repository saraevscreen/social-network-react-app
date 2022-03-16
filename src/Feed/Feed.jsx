import React from 'react';
import style from './Feed.module.css';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import Profile from './Profile/Profile';

function Feed(props) {
 
    return(
        <div className={style.Feed}>
            <Profile />
            <NewPost value={props.state.onChangeValue} addPost={props.addPost} onChangeText={props.onChangeText}/>
            <Posts state={props.state.posts}/>
        </div>
    );
}

export default Feed;