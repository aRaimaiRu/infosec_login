import React, { useState, useEffect } from 'react';
import Productdetaillayout from '../../productdetaillayout';
import homestyle from '../../../styles/HomePage.module.css';
import searchstyle from '../../../styles/search.module.css';
import EmblaCarousel from '../../EmblaCarousel';
import { getOwnData, refreshToken, logout } from '../../../utils/userAPI';
import { useHistory, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../../store';
function HomeContent(props) {
  const SLIDE_COUNT = 2;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  let history = useHistory();
  const [token, setToken] = useRecoilState(tokenState);
  console.log('hometoken =', token);
  return (
    <Productdetaillayout>
      <div className={homestyle.homenavbar}>
        <div className={homestyle.divider}>
          <h1>เปิดร้าน</h1>
        </div>
        <div className={homestyle.divider}>
          <h1>รายการสินค้า</h1>
        </div>
        {/* login   /   logout */}
        {token === undefined ? (
          <div
            className={homestyle.divider}
            style={{ border: 'none' }}
            onClick={() => {
              history.push('/login');
            }}
          >
            <h1>login</h1>
          </div>
        ) : (
          <div
            className={homestyle.divider}
            style={{ border: 'none' }}
            onClick={() => logout()}
          >
            <h1>logout</h1>
          </div>
        )}
        {/* END  */}
      </div>
      <h1 style={{ alignSelf: 'start' }}>ข่าวสาร</h1>
      <EmblaCarousel slides={slides}></EmblaCarousel>
      <h1>รายการสินค้า</h1>
      <div className={searchstyle.searchresultcontainer}>
        <img
          src="/images/SneakerRed.jpg"
          className={searchstyle.imageresult}
        ></img>
        <img
          src="/images/SneakerRed.jpg"
          className={searchstyle.imageresult}
        ></img>
      </div>
    </Productdetaillayout>
  );
}

export default HomeContent;
