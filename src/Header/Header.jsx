import style from './Header.module.css';

function Header() {
  return (
    <div className={style.Header}>
      <div className={style.Header_logo}>
        <img src="https://avatars.mds.yandex.net/i?id=af07013e77d6fee2f7cb61144bb4dc23-5905964-images-thumbs&ref=rim&n=33&w=188&h=188" alt="logo" />
      </div>
      <div className={style.Header_naming}>
        <h1>Имя сайта</h1>
      </div>
    </div>
  );
}

export default Header;