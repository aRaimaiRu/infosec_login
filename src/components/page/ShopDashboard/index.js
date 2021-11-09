import React, { useEffect, useState } from 'react';
import { useRecoilState, RecoilRoot } from 'recoil';
import { tokenState } from '../../../store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  useHistory,
} from 'react-router-dom';
import Layout from '../../layout';
import './shopdashboard.css';
import './shopfooter.css';
import { getAShop, searchproduct } from '../../../utils/userAPI';
const ShopProfile = (props) => {
  const [token, setToken] = useRecoilState(tokenState);
  let history = useHistory();
  let { id } = useParams();
  const [shopProfile, setshopProfile] = useState({
    shopName: 'ยินดี จ่ายเงิน',
    shopAddress: 'อะไรก็ไม่รู้ สมมุติว่ายาวมาก ยาวมากกกกกกกกก 112112112',
    shopTel: '0888888888',
    logo: '/images/image_test.jpg',
    LinkIDLine: 'https://www.google.com/',
    like: 0,
    dislike: 0,
  });
  const [shopProudct, setShopProduct] = useState([
    {
      id: 4,
      shopId: 1,
      description: 'รายละเอียด',
      brand: 'รองเท้ายี่ห้อ',
      productfrom: 'หลังจาก',
      tag: 'ประเภท',
      previewurl: '/images/image_test.jpg',
      price: 'ราคา',
      createdAt: '2021-10-28T13:08:32.000Z',
      updatedAt: '2021-10-28T13:08:32.000Z',
    },
    {
      id: 4,
      shopId: 1,
      description: 'รายละเอียด',
      brand: 'รองเท้ายี่ห้อ',
      productfrom: 'หลังจาก',
      tag: 'ประเภท',
      previewurl: '/images/image_test.jpg',
      price: 'ราคา',
      createdAt: '2021-10-28T13:08:32.000Z',
      updatedAt: '2021-10-28T13:08:32.000Z',
    },
    {
      id: 4,
      shopId: 1,
      description: 'รายละเอียด',
      brand: 'รองเท้ายี่ห้อ',
      productfrom: 'หลังจาก',
      tag: 'ประเภท',
      previewurl: '/images/image_test.jpg',
      price: 'ราคา',
      createdAt: '2021-10-28T13:08:32.000Z',
      updatedAt: '2021-10-28T13:08:32.000Z',
    },
    {
      id: 4,
      shopId: 1,
      description: 'รายละเอียด',
      brand: 'รองเท้ายี่ห้อ',
      productfrom: 'หลังจาก',
      tag: 'ประเภท',
      previewurl: '/images/image_test.jpg',
      price: 'ราคา',
      createdAt: '2021-10-28T13:08:32.000Z',
      updatedAt: '2021-10-28T13:08:32.000Z',
    },
    {
      id: 4,
      shopId: 1,
      description: 'รายละเอียด',
      brand: 'รองเท้ายี่ห้อ',
      productfrom: 'หลังจาก',
      tag: 'ประเภท',
      previewurl: '/images/image_test.jpg',
      price: 'ราคา',
      createdAt: '2021-10-28T13:08:32.000Z',
      updatedAt: '2021-10-28T13:08:32.000Z',
    },
  ]);
  useEffect(async () => {
    let shop = await getAShop(id);
    let product = await searchproduct({ shopId: id });

    console.log(shop, product);
    setshopProfile(shop);
    setShopProduct(product);
  }, []);
  return (
    <Layout>
      <div style={{ width: '100%' }} className="shopprofile p-3">
        <div className="row p-1">
          <div className="col-8 banner">
            <div className="row">
              <div className="col-3">
                <img
                  src={shopProfile.logo}
                  alt="kuro"
                  width={60}
                  height={60}
                  className="center-cropped"
                />
              </div>
              <div className="col-9">
                <h4 className="">{shopProfile.shopName}</h4>
              </div>
            </div>
          </div>

          <div
            className="col-4 text-right pointer"
            onClick={() => {
              history.goBack();
            }}
          >
            <h3>ย้อนกลับ</h3>
          </div>
        </div>
        <h4> รายการสินค้า </h4>
        <div className="row">
          {shopProudct.map((c) => (
            <div className="col-md-6 p-2 text-center">
              <Link to={`/product/${c.id}`}>
                <img
                  src={c.previewurl}
                  alt="kuro"
                  width={200}
                  height={200}
                  className="center-cropped "
                  style={{ borderRadius: '30px' }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {
        <div className="shopfooter">
          <div className="row align-items-center h-100 ">
            <div className="col d-flex justify-content-around">
              <Link to="/addproduct">
                <button className="btn btn-custom text-center">+</button>
              </Link>
            </div>
          </div>
        </div>
      }
    </Layout>
  );
};

export default ShopProfile;
