import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../../store';
import Layout from '../../layout';
import FileUploader from '../../FileUploadBtn';
import { getOwnShop } from '../../../utils/userAPI';
import './shopprofile.css';

const ShopProfile = (props) => {
  const [token, setToken] = useRecoilState(tokenState);
  const [shopProfile, setshopProfile] = useState({
    shopName: 'ยินดี จ่ายเงิน',
    shopAddress: 'อะไรก็ไม่รู้ สมมุติว่ายาวมาก ยาวมากกกกกกกกก 112112112',
    shopTel: 'uniko',
    logo: '/images/image_test.jpg',
  });
  const handleFile = (file) => {
    setshopProfile((prev) => ({
      ...prev,
      logo: URL.createObjectURL(file),
    }));

    // shopProfile.logo = URL.createObjectURL(file);
  };
  useEffect(async () => {
    let myshop = await getOwnShop(token.token);
    console.log('myshop =', myshop);
    setshopProfile(myshop);
  }, []);
  return (
    <Layout>
      <div style={{ width: '100%' }} className="shopprofile p-3">
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
            <FileUploader handleFile={handleFile}></FileUploader>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>รายละเอียดร้านค้า</h3>
            <hr />
            <h4>ชื่อผู้ใช้ : {shopProfile.name}</h4>
            <h4>ที่อยู่ร้าน : {shopProfile.shopAddress}</h4>
            <h4>เบอร์โทร : {shopProfile.shopTel}</h4>
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
