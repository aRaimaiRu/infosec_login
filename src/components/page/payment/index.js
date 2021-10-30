import React, { useState, useEffect } from 'react';
import { DefaultValue, useRecoilState } from 'recoil';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  useHistory,
} from 'react-router-dom';
import { getOrderProduct } from '../../../utils/userAPI';
import { tokenState } from '../../../store';
import Layout from '../../layout';
import './payment.css';
const orderData = {
  size: 42,
  type: 'แบบสวม',
  from: 'somewhere',
};

const profileData = {
  name: 'ยินดี จ่ายเงิน',
  address: 'อะไรก็ไม่รู้ สมมุติว่ายาวมาก ยาวมากกกกกกกกก 112112112',
  tel: '0123456789',
};

const sellerData = {
  name: 'อยากจ่าย จะได้รวย',
};
const Payment = (props) => {
  let history = useHistory();
  let { id } = useParams();
  const [token, setToken] = useRecoilState(tokenState);
  const [product, setProduct] = useState({
    product: {
      price: '1000',
      sizestocks: [{ size: '42' }],
      tag: 'แบบสวม',
      productfrom: 'ที่ไหนสักแห่ง',
      previewurl: '/images/image_test.jpg',
    },
    user: {
      firstName: 'ยินดี',
      lastName: 'จ่ายเงิน',
      address:
        '432/55329 หมู่บ้านร่ำรวยอะครัช ข.หาเจอให้20 ถนนไหน 99 เขตอันตราย จังหวะประเทศไทย 909998',
      tel: '0688884328',
    },
    shop: {
      shopName: 'ชื่อร้าน',
      promptPayImg: '/images/image_test.jpg',
      LinkIDLine: 'https://www.google.com/',
    },
  });
  useEffect(async () => {
    const data = await getOrderProduct(token.token, id);
    if (data) {
      setProduct(data);
    }
  }, []);
  return (
    <Layout>
      <div style={{ width: '100%' }} className="p-3 payment">
        <div className="row">
          <div className="col-md-12 pt-5">
            <div className="d-flex justify-content-center">
              <img
                src={product.shop.promptPayImg}
                className="img-payment m-1 "
                alt="payment"
              />
            </div>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-md-12">
            {/* <h4 className="ascend">เลือกธนาคารในการชำระ</h4> */}
            <h4>ชื่อเจ้าของร้าน : {product.shop.shopName}</h4>
            {/* <div className="kbank row align-items-center justify-content-center">
              KBANK XXXXXXXXXXX
            </div>

            <div className="scb row align-items-center justify-content-center">
              SCB XXXXXXXXXXX
            </div>

            <div className="bbl row align-items-center justify-content-center">
              BBL XXXXXXXXXXX
            </div> */}
          </div>
        </div>

        <div className="row ">
          <div className="col pt-30">
            <div className="d-flex justify-content-around ">
              <button className="btn btn-danger button-custom">
                <h4>ยกเลิก</h4>
              </button>
              <a href={product.shop.LinkIDLine}>
                <button className="btn btn-success button-custom">
                  <h4>ยืนยัน</h4>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
