import MessagesList from './MessagesList/MessagesList';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
import style from './App.module.css';
import { Route, Routes } from 'react-router-dom';


function App(props) {
    return (
        <div className={style.App} >
            <div><Header /></div>
            <div className={style.App_wrapper}>
                <div className={style.App_navbar}><Navbar /></div>
                <div>
                        <Routes >
                            <Route index path="/" element={<Feed state={props.state.profilePage}  addPost={props.addPost} onChangeText={props.onChangeText}/> }/>
                            <Route path='/messages' element={<MessagesList state={props.state.messagesPage}/>} />
                        </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;