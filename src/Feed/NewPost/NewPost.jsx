import React from 'react';
import style from './NewPost.module.css';

function NewPost(){
    return(
        <div className={style.NewPost}>
                <div><textarea  placeholder="Remember, be nice!" cols="80" rows="3"/></div>
                <div className={style.NewPost_button}><button>Send</button></div>
        </div>
    );
}

export default NewPost;