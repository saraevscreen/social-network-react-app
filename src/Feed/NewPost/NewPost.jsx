import React from 'react';
import style from './NewPost.module.css';

function NewPost(props){
    
    let domId = React.createRef();
    let thisValue = props.value;

    function addNewPost(){
        //push new post to state at './src/data/state.js'
       props.addPost();
       //props.onChangeText('');
    }
    
    function onChangeText (){
        let text = domId.current.value;
        //debugger;
        //alert(text);
        props.onChangeText(text)
    }
    return(
        <div className={style.NewPost}>
                <div>
                    <textarea value={thisValue} onChange={onChangeText} ref={domId} placeholder="Remember, be nice!" cols="80" rows="3"/></div>
                <div className={style.NewPost_button}>
                    <button onClick={addNewPost}>Send</button></div>
        </div>
    );
}

export default NewPost;