import React from 'react';
import { Link} from 'react-router-dom';
import style from './MessageUsersList.module.css';

function UserLink (props) {
    let path = 'messages/' + props.id;

    return (
        <div className={style.MessageUsersList_user}>
            <Link to={path}>{props.name}</Link>
        </div>
    );
}

let UsersList = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Ваня'},
    {id: 3, name: 'Варя'},
    {id: 4, name: 'Валя'},
    {id: 5, name: 'Рома'},
    {id: 6, name: 'Женя'}
]


function MessageUsersList() {

    let Users = UsersList.map (userNames => <UserLink name={userNames.name} id={userNames.id} />);

    return (
        <div className={style.MessageUsersList}>
            {Users}
        </div>
    );
}

export default MessageUsersList;