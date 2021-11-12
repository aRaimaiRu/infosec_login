import style from './productdetaillayout.module.css';
import SearchBar from './searchbar';
export default function Layout({ children, footer }) {
  return (
    <>
      <div
        className={style.webcontainer}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/loginBG.png'}`,
        }}
      >
        <div className={style.container}>
          <div
            className={style.container}
            style={{ width: '90%', height: '100%', position: 'relative' }}
          >
            {children}
          </div>
          {footer}
        </div>
      </div>
    </>
  );
}
