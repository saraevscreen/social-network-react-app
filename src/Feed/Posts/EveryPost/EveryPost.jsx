import React from 'react';
import style from './EveryPost.module.css';


function EveryPost() {
    function UsersPost(props) {
        return (
            <div>
                <div className={style.Post}>
                    <img src="https://ic.pics.livejournal.com/canary_green/31365578/11124/11124_900.jpg" />
                    <p>{props.text}</p>
                </div>
                <div>
                    <p classname={style.Post_likes_counter}>Likes: {props.likes}</p>
                </div>
            </div>
        );
    }
    
    let Posts = [
        { id: 1, text: 'Ex aliquip mollit aute ex commodo.', likes: 16 },
        { id: 2, text: 'Ex aliquip mollit aute ex commodo.', likes: 96 },
        { id: 3, text: 'Ex aliquip mollit aute ex commodo.', likes: 18 },
        { id: 4, text: 'Ex aliquip mollit aute ex commodo.', likes: 62 },
        { id: 5, text: 'Ex aliquip mollit aute ex commodo.', likes: 21 },
    ]
    
    let PostsData = Posts.map(pData => <UsersPost text={pData.text} likes={pData.likes} />);

    return (
        <div>
            {PostsData}
        </div>

    );
}


export default EveryPost;