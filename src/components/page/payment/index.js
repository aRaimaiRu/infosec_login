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

const sellerData = {
  name: "อยากจ่าย จะได้รวย",
};
const Payment = (props) => {
  return (
    <Layout>
      <div style={{ width: "100%" }} className="p-3 payment">
        <div className="row">
          <div className="col-md-12 pt-5">
            <div className="d-flex justify-content-center">
              <img
                src="/images/image_test.jpg"
                className="img-payment m-1 "
                alt="payment"
              />
            </div>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-md-12">
            <h4 className="ascend">เลือกธนาคารในการชำระ</h4>
            <h4>ชื่อเจ้าของร้าน : {sellerData.name}</h4>
            <div className="kbank row align-items-center justify-content-center">
              KBANK XXXXXXXXXXX
            </div>

            <div className="scb row align-items-center justify-content-center">
              SCB XXXXXXXXXXX
            </div>

            <div className="bbl row align-items-center justify-content-center">
              BBL XXXXXXXXXXX
            </div>
          </div>
        </div>

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
