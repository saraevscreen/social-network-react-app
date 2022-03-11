import React from 'react';
import style from './Dialogues.module.css';


function Message(props) {
    return(
        <p className={style.Dialogues_message}>
               {props.text}
        </p>
    );
}

let DialoguesData = [
    {id: 1, text: 'hello!!! how re you dowing?'},
    {id: 2, text: 'Ad labore ea aliqua voluptate exercitation pariatur quis ullamco elit sunt culpa quis.'},
    {id: 3, text: 'Velit irure ea laborum voluptate nisi officia nulla excepteur in occaecat cupidatat.'},
    {id: 4, text: 'Sit sint Lorem occaecat laborum reprehenderit Lorem eiusmod laboris dolor non Lorem deserunt nulla.'},
    {id: 5, text: 'Commodo ullamco aute aute esse. Consectetur cupidatat tempor ea ullamco Lorem eu ullamco velit sint ullamco ipsum. Quis magna sunt qui eu dolore sint velit sint officia dolor ex Lorem. Culpa ex enim velit duis. Incididunt esse qui dolor do aute dolor incididunt commodo cillum.'},
    {id: 6, text: 'Occaecat sit nulla esse laborum aute anim labore.'}
];

function Dialogues() {

    let DialogueItems = DialoguesData.map( message_text => <Message text={message_text.text}/> );

    return (
        <div className={style.Dialogues}>
            {DialogueItems}
        </div>
    );
}


export default Dialogues;