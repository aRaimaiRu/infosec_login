import React, { useState } from "react";
import Layout from "../../layout";
import "./profile.css";
import Footer from "../../Footer";
const profileData = {
  name: "ยินดี จ่ายเงิน",
  address: "อะไรก็ไม่รู้ สมมุติว่ายาวมาก ยาวมากกกกกกกกก 112112112",
  tel: "0123456789",
};
const Profile = (props) => {
  return (
    <Layout>
      <div style={{ width: "100%" }} className="profile p-3">
        <div className="row">
          <div className="col-4">
            <h3>โปรไฟล์</h3>
          </div>
          <div className="col-4"></div>
          <div className="col-4 text-right">
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
            <h3>รายละเอียดโปรไฟล์</h3>
            <hr />
            <h4>ชื่อผู้ใช้ : {profileData.name}</h4>
            <h4>ที่อยู่ : {profileData.address}</h4>
            <h4>เบอร์โทร : {profileData.tel}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>สินค้าที่ดูล่าสุด</h3>
          </div>
        </div>
        <div className="row">
          <img
            src="/images/image_test.jpg"
            className="img-product m-1"
            alt="product"
          />

          <img
            src="/images/image_test.jpg"
            className="img-product m-1"
            alt="product"
          />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Profile;
