import React, { useState } from "react";
import Layout from "../../layout";
import "./payment.css";
const orderData = {
  size: 42,
  type: "แบบสวม",
  from: "somewhere",
};

const profileData = {
  name: "ยินดี จ่ายเงิน",
  address: "อะไรก็ไม่รู้ สมมุติว่ายาวมาก ยาวมากกกกกกกกก 112112112",
  tel: "0123456789",
};
const Payment = (props) => {
  return (
    <Layout>
      <div style={{ width: "100%" }} className="p-3 mt-3 order">
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

        <div className="row ">
          <div className="col pt-30">
            <div className="d-flex justify-content-around ">
              <button className="btn btn-danger button-custom">
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

export default Payment;
