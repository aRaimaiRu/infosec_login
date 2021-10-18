import style from './productdetaillayout.module.css';
import SearchBar from './searchbar';
export default function Productdetaillayout({ children, footer }) {
  return (
    <>
      <div
        className={style.webcontainer}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/loginBG.jpg'}`,
        }}
      >
        <div className={style.container}>
          <div
            className={style.container}
            style={{ width: '66%', height: '100%', position: 'relative' }}
          >
            <SearchBar></SearchBar>
            {children}
          </div>
          {footer}
        </div>
      </div>
    </>
  );
}
