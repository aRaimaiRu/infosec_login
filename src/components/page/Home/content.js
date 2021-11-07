import React, { useState, useEffect } from "react";
import Productdetaillayout from "../../productdetaillayout";
import homestyle from "../../../styles/HomePage.module.css";
import "./home.css";
import EmblaCarousel from "../../EmblaCarousel";
import { getOwnData, refreshToken, logout } from "../../../utils/userAPI";
import { useHistory, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "../../../store";
import SearchBar from "../../searchbar";
import HomeFooter from "./HomeFooter";
function HomeContent(props) {
  const SLIDE_COUNT = 2;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  let history = useHistory();
  const [token, setToken] = useRecoilState(tokenState);
  console.log("hometoken =", token);

  const showOpenShopOrOwnShop =
    (token.Role === "Customer" && (
      <div
        className={homestyle.divider}
        onClick={() => {
          history.push("/ShopRegister");
        }}
      >
        <h1>เปิดร้าน</h1>
      </div>
    )) ||
    // if Role ShopOwner
    (token.Role === "ShopOwner" && (
      <div
        className={homestyle.divider}
        onClick={() => {
          history.push("/OwnShop");
        }}
      >
        <h1>ดูร้าน</h1>
      </div>
    ));

  const showProduct = [
    {
      url: "/product/1",
      img: "/images/SneakerRed.jpg",
    },
    {
      url: "/product/2",
      img: "/images/SneakerRed.jpg",
    },
    {
      url: "/product/2",
      img: "/images/SneakerRed.jpg",
    },
  ];
  return (
    <Productdetaillayout>
      <div className="p-2">
        <SearchBar></SearchBar>
        <div className={homestyle.homenavbar}>
          {/* Name User */}
          {token.firstName !== undefined && (
            <div className={homestyle.divider}>
              <h1>{token.firstName}</h1>
            </div>
          )}
          {/* END Name User */}
          {/* Customer */}
          {showOpenShopOrOwnShop}
          {/* END Customer */}
          <div className={homestyle.divider}>
            <h1>รายการสินค้า</h1>
          </div>
          {/* login   /   logout */}
          {token.firstName === undefined ? (
            <div
              className={homestyle.divider}
              style={{ border: "none" }}
              onClick={() => {
                history.push("/login");
              }}
            >
              <h1>login</h1>
            </div>
          ) : (
            <div
              className={homestyle.divider}
              style={{ border: "none" }}
              onClick={() => logout(setToken)}
            >
              <h1>logout</h1>
            </div>
          )}
          {/* END  */}
        </div>
        <div style={{ width: "100%" }}>
          <h1 style={{ alignSelf: "start" }}>ข่าวสาร</h1>
          <EmblaCarousel slides={slides}></EmblaCarousel>
          <h1>รายการสินค้า</h1>
          <div
            // className={searchstyle.searchresultcontainer}
            className=""
          >
            {showProduct.map((obj) => (
              <Link to={obj.url}>
                <img src={obj.img} className="imageresult m-2" alt="img" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <HomeFooter />
    </Productdetaillayout>
  );
}

export default HomeContent;
