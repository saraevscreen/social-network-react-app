import React from 'react';
import style from './Feed.module.css';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';
import Profile from './Profile/Profile';

function Feed() {
    return(
        <div className={style.Feed}>
            <Profile />
            <NewPost/>
            <Posts/>
        </div>
    );
}

export default Feed;