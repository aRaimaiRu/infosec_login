import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import "./dashboard.css";

const ShopProfile = (props) => {
  return (
    <Layout>
      <div style={{ width: "100%" }} className="shopprofile p-3">
        <div className="row">
          <div className="col-4">
            <h3>โปรไฟล์ร้านค้า</h3>
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
            {/* <FileUploader handleFile={handleFile}></FileUploader> */}
          </div>
        </div>
        <div className="row mb-0">
          <div className="col mb-0">
            <div className="d-flex">
              <h3 className="mr-auto">รายละเอียดร้านค้า</h3>

              <h4 className="">ADD LINE :</h4>
              <button className="btn btn-sm bg-success btn-sm mt-2 mx-2 text-white">
                Click
              </button>
            </div>
            <hr />
          </div>
        </div>
        <hr />
        <div className="row mb-2">
          <div className="col-6 text-center">
            <i class="fa fa-thumbs-up like"></i>
            <h4>15</h4>

            <button className="btn btn-check">
              <i className="bi bi-check"></i>
            </button>
          </div>

          <div className="col-6 text-center">
            <i class="fa fa-thumbs-down dislike"></i>
            <h4>3</h4>

            <button className="btn btn-x">
              <i className="bi bi-x"></i>
            </button>
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <div className="d-flex justify-content-around">
              <button className="btn btn-danger button-custom">
                <h4>DashBoard</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopProfile;
