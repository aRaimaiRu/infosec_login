import style from './loginlayout.module.css';
export default function Loginlayout({ children }) {
  return (
    <>
      <div
        className={style.background}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/loginBG.png'}`,
        }}
      >
        <div className={style.logincontainer}>{children}</div>
      </div>
    </>
  );
}
