import style from "./productdetaillayout.module.css";
import SearchBar from "./searchbar";
export default function Productdetaillayout({ children, footer }) {
  return (
    <>
      <div
        className={style.webcontainer}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/loginBG.jpg"}`,
        }}
      >
        <div className={style.container}>
          <div
            className={style.container}
            style={{ width: "80%", height: "100%", position: "relative" }}
          >
            {children}
          </div>
          {footer}
        </div>
      </div>
    </>
  );
}
