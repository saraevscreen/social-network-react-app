import React from 'react';
import style from './EveryPost.module.css';



function EveryPost(props) {
    let PostsData = props.posts.map(pData => <UsersPost text={pData.text} likes={pData.likes} />);

    function UsersPost(props) {

        return (
            <div>
                <div className={style.Post}>
                    <img src="https://ic.pics.livejournal.com/canary_green/31365578/11124/11124_900.jpg" alt=''/>
                    <p>{props.text}</p>
                </div>
                <div>
                    <p className={style.Post_likes_counter}>Likes: {props.likes}</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            {PostsData}
        </div>

    );
}




export default EveryPost;