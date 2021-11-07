import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import FileUploader from "../../FileUploadBtn";
import "./shopprofile.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  useHistory,
} from "react-router-dom";

import { getAShop } from "../../../utils/userAPI";
const ShopProfile = (props) => {
  const admin = true;
  let history = useHistory();
  let { id } = useParams();
  const [shopProfile, setshopProfile] = useState({
    shopName: "ยินดี จ่ายเงิน",
    address: "อะไรก็ไม่รู้ สมมุติว่ายาวมาก ยาวมากกกกกกกกก 112112112",
    brand: "uniko",
    size: 42,
    type: "??",
    from: "somewhere",
    logo: "/images/image_test.jpg",
  });
  // useEffect(async () => {
  //   let shop = await getAShop(id);
  //   console.log(shop);
  //   setshopProfile(shop);
  // }, []);
  // const handleFile = async (file) => {
  //   setshopProfile((prev) => ({
  //     ...prev,
  //     logo: URL.createObjectURL(file),
  //   }));

  //   // shopProfile.imageurl = URL.createObjectURL(file);
  // };
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
              src={shopProfile.logo}
              alt="kuro"
              width={300}
              height={300}
              className="center-cropped"
            />
            {/* <FileUploader handleFile={handleFile}></FileUploader> */}
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
        <div className="row mb-2">
          <div className="col-6 text-center">
            <i class="fa fa-thumbs-up like"></i>
            <h4>15</h4>
            {admin && (
              <button className="btn btn-check">
                <i className="bi bi-check"></i>
              </button>
            )}
          </div>

          <div className="col-6 text-center">
            <i class="fa fa-thumbs-down dislike"></i>
            <h4>3</h4>
            {admin && (
              <button className="btn btn-x">
                <i className="bi bi-x"></i>
              </button>
            )}
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
