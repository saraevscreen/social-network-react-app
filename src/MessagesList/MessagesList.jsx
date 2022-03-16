import React from 'react';
import Dialogues from './Dialogues/Dialogues';
import style from './MessagesList.module.css';
import MessageUsersList from './MessageUsersList/MessageUsersList';


function MessagesList(props) {
    return (
        <div className={style.MessagesList}>
            <div className={style.MessagesList_Users}>
                <MessageUsersList users={props.state.users}/>
            </div>
            <div className={style.MessagesList_Messages}>
                <Dialogues text={props.state.text}/>
            </div>
        </div>
    );
}

export default MessagesList;