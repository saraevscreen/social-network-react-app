import React from 'react';
import style from './MessageUsersList.module.css';
import UsersList from './UsersList/UsersList';


function MessageUsersList(props) {
    
    let UsersLinks = props.users.map(userNames => <UsersList name={userNames.name} id={userNames.id} />);
    return (
        <div className={style.MessageUsersList}>
            {UsersLinks}
        </div>
    );
}


export default MessageUsersList;