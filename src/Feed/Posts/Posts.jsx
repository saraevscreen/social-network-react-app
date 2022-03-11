import React from 'react';
import EveryPost from './EveryPost/EveryPost';
import style from './Posts.module.css';


function Posts() {
    return (
        // <div className={style.Posts}>
        //     <img src="https://ic.pics.livejournal.com/canary_green/31365578/11124/11124_900.jpg" />
        //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic laborum quaerat ad cum molestias ea exercitationem dolor illo? Adipisci modi eius corrupti at necessitatibus quas blanditiis consequatur commodi porro dignissimos!</p>
        // </div>
        <div className={style.Posts}>
            <EveryPost/>
        </div>
    );
}


export default Posts;