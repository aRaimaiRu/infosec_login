import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Layout from '../../layout';
import './orderwarrant.css';
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
const OrderWarrant = (props) => {
  let history = useHistory();
  return (
    <Layout>
      <div style={{ width: '100%' }} className="p-3 mt-3 order">
        <div className="row">
          <div className="col-md-6 pt-5">
            <div className="d-flex justify-content-center">
              <img
                src="/images/image_test.jpg"
                className="img-product m-1 "
                alt="product"
              />
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="ascend">รายละเอียดสินค้า</h4>
            <hr />
            <h4>size: {orderData.size}</h4>

            <h4>ประเภท: {orderData.type}</h4>

            <h4>ส่งจาก: {orderData.from}</h4>
          </div>
        </div>
        <hr />
        <div className="row pt-3">
          <div className="col">
            <h4 className="ascend">เงื่อนไขในการรับประกันสินค้า</h4>
            <h4>
              {`เงื่อนไขการรับประกันสินค้า 1.) สินค้าเสียหายจากการผลิตเปลี่ยนให้ฟรี
              2.) การประกันนี้ไม่ครอบคลุมถึงความ เสียหาย ในกรณีดังต่อไปนี้ 2.1.)
              การดัดแปลง แก้ไข โดยบุคคลอื่น โดย ไม่ใช่ทางบริษัท 2.2.)
              การใช้สินค้าผิดประเภท หรืออุบัติเหตุ การขนส่ง ความประมาท
              เกี่ยวกับการรักษาผิดวิธี 2.3) ใช้งานผิดวัตถุประสงค์ 3.)
              การรับประกันนี้ไม่รวมค่าขนส่งและค่า เดินทาง 4.) บริษัทฯ
              จะยกเลิกการรับประกันทันที เมื่อ บัตรรับประกันถูกขีดฆ่าหรือ
              แก้ไขอันท าให้บัตรรับประกันนี้มีข้อความไม่
              ครบหรือข้อมูลที่เปลี่ยนแปลง ไม่สมบูรณ์ 5.)
              บัตรรับประกันนี้ใช้เฉพาะกับผู้ซื้อที่ระบุ
              อยู่ในบัตรเท่านั้นไม่สามารถโอน สิทธิ์เปล่ียนมือใหผ้อู้่ืนได้`}
            </h4>
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
              <button className="btn btn-success button-custom">
                <h4>ยืนยัน</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderWarrant;
