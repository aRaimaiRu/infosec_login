import React, { useState } from "react";
import Layout from "../../productdetaillayout";
import "./profile.css";
const Profile = (props) => {
  return (
    <Layout>
      <div style={{ backgroundColor: "skyblue", width: "100%" }}>
        <div className="row">
          <div className="col-md-4">
            <h3>โปรไฟล์</h3>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4 text-right">
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
        <div className="row"></div>
      </div>
    </Layout>
  );
};

export default Profile;
