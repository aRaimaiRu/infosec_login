import React, { useEffect, useState } from 'react';
import Layout from '../../layout';
import './shopapproveprocess.css';
import { getAShop, changeShopStatus } from '../../../utils/userAPI';
import { DefaultValue, useRecoilState } from 'recoil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  useHistory,
} from 'react-router-dom';

import { tokenState } from '../../../store';
const ShopApproveProcess = (props) => {
  let history = useHistory();
  let { id } = useParams();
  const [token, setToken] = useRecoilState(tokenState);
  const [ShopApproveProcessData, setShopApproveProcessData] = useState({
    logo: '/images/image_test.jpg',
    shopName: 'ยินดี จ่ายเงิน',
    shopAddress: 'อะไรก็ไม่รู้ สมมุติว่ายาวมาก ยาวมากกกกกกกกก 112112112',
    // brand: 'uniko',
    // size: 42,
    // type: '??',
    // from: 'somewhere',
  });
  useEffect(async () => {
    let shopdata = await getAShop(id);
    setShopApproveProcessData(shopdata);
  }, []);
  return (
    <Layout>
      <div style={{ width: '100%' }} className="shopapproveprocess p-3">
        <div className="row">
          <div className="col-4">
            <h3>โปรไฟล์ร้านค้า</h3>
          </div>
          <div className="col-4"></div>
          <div
            className="col-4 text-right pointer"
            onClick={() => {
              history.goBack();
            }}
          >
            <h3>ย้อนกลับ</h3>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <img
              src={ShopApproveProcessData.logo}
              alt="kuro"
              width={300}
              height={300}
              className="center-cropped"
            />
            <button class="btn-img">Take</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>รายละเอียดร้านค้า</h3>
            <hr />
            <p>ชื่อผู้ใช้ : {ShopApproveProcessData.shopName}</p>
            <p>ที่อยู่ร้าน : {ShopApproveProcessData.shopAddress}</p>
            {/* <h4>รองเท้ายี่ห้อ : {ShopApproveProcessData.brand}</h4>
            <h4>Size : {ShopApproveProcessData.size}</h4>
            <h4>ประเภท : {ShopApproveProcessData.type}</h4>
            <h4>ส่งจาก : {ShopApproveProcessData.from}</h4> */}
          </div>
        </div>
        <hr />

        <div className="row ">
          <div className="col pt-30">
            <div className="d-flex justify-content-around ">
              <button
                className="btn btn-danger button-custom"
                onClick={() => {
                  history.goBack();
                }}
              >
                <h4>ไม่ผ่าน</h4>
              </button>
              <button
                className="btn btn-success button-custom"
                onClick={async () => {
                  let res = await changeShopStatus(id, 'opened', token.token);
                  history.push('/');
                }}
              >
                <h4>ผ่าน</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopApproveProcess;
