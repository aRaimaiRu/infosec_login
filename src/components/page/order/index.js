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
    console.log('order product = ', data);
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
          <p>
            <ol>
              <li>สินค้าเสียหายจากการผลิตเปลี่ยนให้ฟรี</li>
              <li>
                การประกันนี้ไม่ครอบคลุมถึงความ เสียหาย ในกรณีดังต่อไปนี้
                <ol>
                  <li>การดัดแปลง แก้ไข โดยบุคคลอื่น โดย ไม่ใช่ทางบริษัท </li>
                  <li>
                    การใช้สินค้าผิดประเภท หรืออุบัติเหตุ การขนส่ง ความประมาท
                    เกี่ยวกับการรักษาผิดวิธี{' '}
                  </li>
                  <li>ใช้งานผิดวัตถุประสงค์ </li>
                </ol>
              </li>
              <li>การรับประกันนี้ไม่รวมค่าขนส่งและค่า เดินทาง </li>
              <li>
                บริษัทฯ จะยกเลิกการรับประกันทันที เมื่อ
                บัตรรับประกันถูกขีดฆ่าหรือ
                แก้ไขอันทำให้บัตรรับประกันนี้มีข้อความไม่
                ครบหรือข้อมูลที่เปลี่ยนแปลง ไม่สมบูรณ์{' '}
              </li>
              <li>
                บัตรรับประกันนี้ใช้เฉพาะกับผู้ซื้อที่ระบุ
                อยู่ในบัตรเท่านั้นไม่สามารถโอน สิทธิ์เปลี่ยนมือให้ผู้อื่นได้ได้{' '}
              </li>
            </ol>
          </p>
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
            <p>
              size: {product.product.sizestocks.map((c) => `  ${c.size}  `)}
            </p>

            <p>ประเภท: {product.product.tag}</p>

            <p>ส่งจาก: {product.product.productfrom}</p>
          </div>
        </div>
        <hr />
        {isOrderWarrant && orderwarrant}
        {!isOrderWarrant && (
          <>
            <div className="row pt-3">
              <div className="col">
                <h4 className="ascend">
                  ที่อยู่สำหรับจัดส่ง &nbsp;
                  <img src="/addressIcon.png" />
                </h4>
                <p>
                  {product.user.firstName} {product.user.lastName}{' '}
                  {product.user.tel}
                </p>
                <h4>{product.user.address}</h4>
              </div>
            </div>
            <hr />
            <div className="row pt-3">
              <div className="col">
                <h4 className="ascend">รายละเอียดคำสั่งซื้อ</h4>
                <p>รวมการสั่งซื้อ: {product.product.price} บาท</p>
                <p>ค่าส่ง: {50} บาท</p>
                <p>
                  ยอดเงินที่กำหนด: {Number(product.product.price) + Number(50)}{' '}
                  บาท
                </p>
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
