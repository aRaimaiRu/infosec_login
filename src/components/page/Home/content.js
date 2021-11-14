import React, { useState, useEffect } from 'react';
import Productdetaillayout from '../../productdetaillayout';
import homestyle from '../../../styles/HomePage.module.css';
import './home.css';
import EmblaCarousel from '../../EmblaCarousel';
import {
  getOwnData,
  refreshToken,
  logout,
  getLastestProduct,
} from '../../../utils/userAPI';
import { useHistory, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../../store';
import SearchBar from '../../searchbar';
import HomeFooter from './HomeFooter';
function HomeContent(props) {
  const SLIDE_COUNT = 2;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  let history = useHistory();
  const [token, setToken] = useRecoilState(tokenState);
  console.log('hometoken =', token);

  const showOpenShopOrOwnShop =
    (token.Role === 'Customer' && (
      <div
        className={homestyle.divider}
        onClick={() => {
          history.push('/ShopRegister');
        }}
      >
        <h2>เปิดร้าน</h2>
      </div>
    )) ||
    // if Role ShopOwner
    (token.Role === 'ShopOwner' && (
      <div
        className={homestyle.divider}
        onClick={() => {
          history.push('/OwnShop');
        }}
      >
        <h2>ดูร้าน</h2>
      </div>
    ));
  const [showProduct, setShowProduct] = useState([
    {
      id: '1',
      previewurl: '/images/SneakerRed.jpg',
    },
    {
      id: '2',
      previewurl: '/images/SneakerRed.jpg',
    },
    {
      id: '3',
      previewurl: '/images/SneakerRed.jpg',
    },
  ]);

  useEffect(async () => {
    let result = await getLastestProduct();
    if (Array.isArray(result)) {
      console.log('home result = ', result);
      setShowProduct(result);
    }
  }, []);
  return (
    <Productdetaillayout>
      <div className="" style={{ width: '100%' }}>
        <SearchBar></SearchBar>
        <div className={homestyle.homenavbar}>
          {/* Name User */}

          {token.firstName !== undefined && (
            <div className={homestyle.divider} style={{ cursor: 'pointer' }}>
              <Link to={`/profile/${token.id}`}>
                <h2>{token.firstName}</h2>
              </Link>
            </div>
          )}
          {/* END Name User */}
          {/* Customer */}
          {showOpenShopOrOwnShop}
          {/* END Customer */}

          <div className={homestyle.divider}>
            {' '}
            <Link to="/search">
              <h2>รายการสินค้า</h2>
            </Link>
          </div>

          {/* login   /   logout */}
          {token.firstName === undefined ? (
            <div
              className={homestyle.divider}
              style={{ border: 'none' }}
              onClick={() => {
                history.push('/login');
              }}
            >
              <h2>login</h2>
            </div>
          ) : (
            <div
              className={homestyle.divider}
              style={{ border: 'none', cursor: 'pointer' }}
              onClick={() => logout(setToken)}
            >
              <h2>logout</h2>
            </div>
          )}
          {/* END  */}
        </div>
        <div style={{ width: '100%' }}>
          <h2 style={{ alignSelf: 'start' }}>ข่าวสาร</h2>
          <EmblaCarousel slides={slides}></EmblaCarousel>
          <h2>รายการสินค้า</h2>
          <div
            // className={searchstyle.searchresultcontainer}
            className="flexproductcontainer"
          >
            {showProduct.map((obj) => (
              <Link to={`/product/${obj.id}`}>
                <img
                  src={obj.previewurl}
                  className="imageresult m-2"
                  alt="img"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <hr />
        </div>
      </div>
      {token.RoleId == 3 && (
        <>
          <HomeFooter />
        </>
      )}
    </Productdetaillayout>
  );
}

export default HomeContent;
