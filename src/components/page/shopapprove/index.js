import React, { useEffect, useState } from 'react';
import { DefaultValue, useRecoilState } from 'recoil';
import { getShopStatus } from '../../../utils/userAPI';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  useHistory,
} from 'react-router-dom';
import { tokenState } from '../../../store';
import Layout from '../../layout';
import './shopapprove.css';

// const shopProfile = {
//   name: 'ยินดี จ่ายเงิน',
//   address: 'อะไรก็ไม่รู้ สมมุติว่ายาวมาก ยาวมากกกกกกกกก 112112112',
//   brand: 'uniko',
//   size: 42,
//   type: '??',
//   from: 'somewhere',
// };
const ShopApprove = (props) => {
  let history = useHistory();
  const [token, setToken] = useRecoilState(tokenState);
  const [shoplist, setShoplist] = useState([
    {
      id: 1,
      logo: '/images/image_test.jpg',
      shopName: 'ร้านชื่ออะไรซักอย่าง',
    },
    {
      id: 2,
      logo: '/images/image_test.jpg',
      shopName: 'ร้านชื่ออะไรซักอย่าง',
    },
  ]);
  // fetch pending shop
  useEffect(async () => {
    console.log('shopapprove token =', token);
    let shoplistdata = await getShopStatus(token.token, 'pending');
    setShoplist(shoplistdata);
  }, []);

  return (
    <Layout>
      <div style={{ width: '100%' }} className="shopapprove p-3">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1>อนุมัติร้าน</h1>
            <div className="text-right">
              <h3>ย้อนกลับ</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {shoplist.map((l, ind) => (
            <div className="col-md-12 text-center p-2" key={ind}>
              <button
                className="btn button-custom pri-color"
                onClick={() => {
                  history.push(`/shopapproveprocess/${l.id}`);
                }}
              >
                <span>
                  <img
                    src={l.logo}
                    alt="kuro"
                    width={50}
                    height={50}
                    className="center-cropped img-logo"
                  />
                  <h4>
                    {l.shopName}
                    {ind}
                  </h4>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ShopApprove;
