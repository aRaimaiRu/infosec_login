import style from './productdetaillayout.module.css';
import SearchBar from './searchbar';
export default function Productdetaillayout({ children, footer }) {
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
            style={{
              width: '80%',
              height: '100%',
              position: 'relative',
              padding: 1,
              marginBottom: footer ? '100px' : '',
            }}
          >
            {children}
          </div>
          {footer}
        </div>
      </div>
    </>
  );
}
