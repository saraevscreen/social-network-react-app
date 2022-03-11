import React from 'react';
import style from './Profile.module.css';


function Profile () {
    return (
        <div className={style.Profile}>
            <div className={style.Profile_avatar}>
                <img src="https://avatars.mds.yandex.net/i?id=b26a4bdc2f27680dfb2a73c72d07c001-4518497-images-thumbs&n=13" alt="user-avatar"/>
            </div>
            <div className={style.Profile_description}>
                <ul>
                    <li>Age:</li>
                    <li>City:</li>
                    <li>Political:</li>
                    <li>About yourself:</li>
                </ul>
            </div>
        </div>
    );
}

export default Profile