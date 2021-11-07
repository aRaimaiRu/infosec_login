import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import "./shopdashboard.css";
import "./shopfooter.css";
const ShopProfile = (props) => {
  return (
    <Layout>
      <div style={{ width: "100%" }} className="shopprofile p-3">
        <div className="row p-1">
          <div className="col-8 banner">
            <div className="row">
              <div className="col-3">
                <img
                  src="/images/image_test.jpg"
                  alt="kuro"
                  width={60}
                  height={60}
                  className="center-cropped"
                />
              </div>
              <div className="col-9">
                <h4 className="">ร้าน AstralAir</h4>
              </div>
            </div>
          </div>

          <div className="col-4 text-right">
            <h3>ย้อนกลับ</h3>
          </div>
        </div>
        <h4> รายการสินค้า </h4>
        <div className="row">
          <div className="col-md-6 p-2 text-center">
            <img
              src="/images/image_test.jpg"
              alt="kuro"
              width={250}
              height={250}
              className="center-cropped "
            />
          </div>
          <div className="col-md-6 p-2 text-center">
            <img
              src="/images/image_test.jpg"
              alt="kuro"
              width={250}
              height={250}
              className="center-cropped"
            />
          </div>
          <div className="col-md-6 p-2 text-center">
            <img
              src="/images/image_test.jpg"
              alt="kuro"
              width={250}
              height={250}
              className="center-cropped"
            />
          </div>
          <div className="col-md-6 p-2 text-center">
            <img
              src="/images/image_test.jpg"
              alt="kuro"
              width={250}
              height={250}
              className="center-cropped"
            />
          </div>
        </div>
      </div>

      <div className="shopfooter">
        <div className="row align-items-center h-100 ">
          <div className="col d-flex justify-content-around">
            <button className="btn btn-custom">อนุมัติเปิดร้าน</button>
            <button className="btn btn-custom-2 bg-primary">
              รายชื่อร้านค้า
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopProfile;
