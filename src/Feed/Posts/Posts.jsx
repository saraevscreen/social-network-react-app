import React from 'react';
import EveryPost from './EveryPost/EveryPost';
import style from './Posts.module.css';


function Posts(props) {
    return (
        <div className={style.Posts}>
            <EveryPost posts={props.state} />
        </div>
    );
}


export default Posts;