import React from 'react';
import {Link} from 'react-router-dom';
import style from './UsersList.module.css';


function UsersList (props) {
    let path = '#' + props.id;

    return (
        <div className={style.MessageUsersList_user}>
            <Link to={path}>{props.name}</Link>
        </div>
    );
}

export default UsersList;