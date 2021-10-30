import React, { useState } from 'react';
import Layout from '../../layout';
import './shopapprove.css';

const shopProfile = {
  name: 'ยินดี จ่ายเงิน',
  address: 'อะไรก็ไม่รู้ สมมุติว่ายาวมาก ยาวมากกกกกกกกก 112112112',
  brand: 'uniko',
  size: 42,
  type: '??',
  from: 'somewhere',
};
const ShopApprove = (props) => {
  const shoplist = [
    {
      logo: '/images/image_test.jpg',
      shopName: 'ร้านชื่ออะไรซักอย่าง',
    },
    {
      logo: '/images/image_test.jpg',
      shopName: 'ร้านชื่ออะไรซักอย่าง',
    },
  ];
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
          <div className="col-md-12 text-center p-2">
            <button className="btn button-custom pri-color">
              <span>
                <img
                  src="/images/image_test.jpg"
                  alt="kuro"
                  width={50}
                  height={50}
                  className="center-cropped img-logo"
                />
                <h4>ร้านชื่ออะไรซักอย่าง</h4>
              </span>
            </button>
          </div>
          <div className="col-md-12 text-center p-2">
            <button className="btn button-custom pri-color">
              <span>
                <img
                  src="/images/image_test.jpg"
                  alt="kuro"
                  width={50}
                  height={50}
                  className="center-cropped img-logo"
                />
                <h4>ร้านชื่ออะไรซักอย่าง</h4>
              </span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopApprove;
