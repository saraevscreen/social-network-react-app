import style from './Navbar.module.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className={style.Navbar}>
      <div className={style.Navbar_link}><Link to="/">Profile</Link></div>
      <div className={style.Navbar_link}><Link to="/messages">Messages</Link></div>
      <div className={style.Navbar_link}>Music</div>
      <div className={style.Navbar_link}>Friends</div>
      <div className={style.Navbar_link}>Settings</div>
    </div>
  );
}

export default Navbar;