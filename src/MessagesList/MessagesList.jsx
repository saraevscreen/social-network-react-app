import React from 'react';
import Dialogues from './Dialogues/Dialogues';
import style from './MessagesList.module.css';
import MessageUsersList from './MessageUsersList/MessageUsersList';


function MessagesList() {
    return (
        <div className={style.MessagesList}>
            <div className={style.MessagesList_Users}>
                <MessageUsersList />
            </div>
            <div className={style.MessagesList_Messages}>
                <Dialogues/>
            </div>
        </div>
    );
}

export default MessagesList;