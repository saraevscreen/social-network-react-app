import React from 'react';
import style from './Dialogues.module.css';


function Message(props) {
    return (
        <p className={style.Dialogues_message}>
            {props.text}
        </p>
    );
}


function Dialogues(props) {

    let DialogueItems = props.text.map(message_text => <Message text={message_text.text} />);

    return (
        <div className={style.Dialogues}>
            {DialogueItems}
        </div>
    );
}


export default Dialogues;