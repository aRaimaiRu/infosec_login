import React from 'react';
import Productdetaillayout from '../../productdetaillayout';
import homestyle from '../../../styles/HomePage.module.css';
import EmblaCarousel from '../../EmblaCarousel';
function HomeContent(props) {
  const SLIDE_COUNT = 2;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const userInfo = {
    name: 'name',
  };
  return (
    <Productdetaillayout>
      <div className={homestyle.homenavbar}>
        <div className={homestyle.divider}>
          <h1>{userInfo.name ? userInfo.name : 'โปรไฟล์'}</h1>
        </div>
        <div className={homestyle.divider}>
          <h1>เปิดร้าน</h1>
        </div>
        <div className={homestyle.divider}>
          <h1>รายการสินค้า</h1>
        </div>
        <div className={homestyle.divider} style={{ border: 'none' }}>
          <h1>{userInfo ? 'Logout' : 'Login'}</h1>
        </div>
      </div>
      <h1 style={{ alignSelf: 'start' }}>ข่าวสาร</h1>
      <EmblaCarousel slides={slides}></EmblaCarousel>
    </Productdetaillayout>
  );
}

export default HomeContent;
