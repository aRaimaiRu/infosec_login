import React, { useState } from "react";
import Layout from "../../layout";
import "./shopapprove.css";

const shopProfile = {
  name: "ยินดี จ่ายเงิน",
  address: "อะไรก็ไม่รู้ สมมุติว่ายาวมาก ยาวมากกกกกกกกก 112112112",
  brand: "uniko",
  size: 42,
  type: "??",
  from: "somewhere",
};
const ShopApprove = (props) => {
  return (
    <Layout>
      <div style={{ width: "100%" }} className="shopapprove p-3">
        <div className="row">
          <div className="col-sm-4">
            <h3>โปรไฟล์ร้านค้า</h3>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4 text-right">
            <h3>ย้อนกลับ</h3>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <img
              src="/images/image_test.jpg"
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
            <h4>ชื่อผู้ใช้ : {shopProfile.name}</h4>
            <h4>ที่อยู่ร้าน : {shopProfile.address}</h4>
            <h4>รองเท้ายี่ห้อ : {shopProfile.brand}</h4>
            <h4>Size : {shopProfile.size}</h4>
            <h4>ประเภท : {shopProfile.type}</h4>
            <h4>ส่งจาก : {shopProfile.from}</h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6 text-center">
            <i class="fa fa-thumbs-up like"></i>
            <h4>15</h4>
          </div>

          <div className="col-6 text-center">
            <i class="fa fa-thumbs-down dislike"></i>
            <h4>3</h4>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <div className="d-flex justify-content-around">
              <button className="btn btn-danger button-custom">
                <h4>ยกเลิก</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopApprove;