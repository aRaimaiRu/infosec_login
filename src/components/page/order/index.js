import React, { useState } from "react";
import Layout from "../../productdetaillayout";
import "./order.css";

const orderData = {
  name: "ยินดี จ่ายเงิน",
  address: "อะไรก็ไม่รู้ สมมุติว่ายาวมาก ยาวมากกกกกกกกก 112112112",
  tel: "0123456789",
};
const Order = (props) => {
  return (
    <Layout>
      <div style={{ width: "100%" }} className="p-3 order">
        <div className="row">
          <div className="col-md-6">
            <h3>โปรไฟล์</h3>
          </div>
          <div className="col-md-6">
            <h4>รายละเอียดสินค้า</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
