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
import './order.css';
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
const Order = (props) => {
  const [isOrderWarrant, setOrderWarrant] = useState(false);
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
  });
  useEffect(async () => {
    const data = await getOrderProduct(token.token, id);
    if (data) {
      setProduct(data);
    }
  }, []);

  const orderwarrant = (
    <>
      {' '}
      <div className="row pt-3">
        <div className="col">
          <h4 className="ascend">เงื่อนไขในการรับประกันสินค้า</h4>
          <h4>
            A long time ago, a group of special girls known as ‘mahou shoujos’
            saved the world after a fierce battle where blood and tears were
            shed and prayers were made. It was an overly common battle tale.
            However, no one thanked or praised them for their victory. In fact,
            no one even knew them at all. Even so, the future of humanity was
            protected and it came to a happy end.
          </h4>
        </div>
      </div>
      <hr />
      <div className="row ">
        <div className="col pt-30">
          <div className="d-flex justify-content-around ">
            <button className="btn btn-danger button-custom">
              <h4>ยกเลิก</h4>
            </button>
            <Link to={`/payment/${id}`}>
              <button className="btn btn-success button-custom">
                <h4>ยืนยัน</h4>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <Layout>
      <div style={{ width: '100%' }} className="p-3 mt-3 order">
        <div className="row">
          <div className="col-md-6 pt-5">
            <div className="d-flex justify-content-center">
              <img
                src={product.product.previewurl}
                className="img-product m-1 "
                alt="product"
              />
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="ascend">รายละเอียดสินค้า</h4>
            <hr />
            <h4>
              size: {product.product.sizestocks.map((c) => `  ${c.size}  `)}
            </h4>

            <h4>ประเภท: {product.product.tag}</h4>

            <h4>ส่งจาก: {product.product.productfrom}</h4>
          </div>
        </div>
        <hr />
        {isOrderWarrant && orderwarrant}
        {!isOrderWarrant && (
          <>
            <div className="row pt-3">
              <div className="col">
                <h4 className="ascend">ที่อยู่สำหรับจัดส่ง</h4>
                <h4>
                  {product.user.firstName} {product.user.lastName}{' '}
                  {product.user.tel}
                </h4>
                <h4>{product.address}</h4>
              </div>
            </div>
            <hr />
            <div className="row pt-3">
              <div className="col">
                <h4 className="ascend">รายละเอียดคำสั่งซื้อ</h4>
                <h4>รวมการสั่งซื้อ: {product.product.price} บาท</h4>
                <h4>ค่าส่ง: {product.product.price} บาท</h4>
                <h4>ยอดเงินที่กำหนด: {product.product.price} บาท</h4>
              </div>
            </div>
            <div className="row ">
              <div className="col pt-30">
                <div className="d-flex justify-content-around ">
                  <button
                    className="btn btn-danger button-custom"
                    onClick={() => {
                      history.goBack();
                    }}
                  >
                    <h4>ยกเลิก</h4>
                  </button>
                  {/* <Link to={`/payment/${id}`}> */}
                  <button
                    className="btn btn-success button-custom"
                    onClick={() => {
                      console.log(isOrderWarrant);
                      if (isOrderWarrant) {
                        console.log('push history');
                        history.push(`/payment/${id}`);
                      } else {
                        setOrderWarrant(true);
                      }
                    }}
                  >
                    <h4>ยืนยัน</h4>
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Order;
