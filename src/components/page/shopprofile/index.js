import React, { useEffect, useState } from 'react';
import Layout from '../../layout';
import { useRecoilState, RecoilRoot } from 'recoil';
// import logo from '../../../../public/shopping_basket.png';
import FileUploader from '../../FileUploadBtn';
import './shopprofile.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  useHistory,
} from 'react-router-dom';
import { tokenState } from '../../../store';

import {
  getAShop,
  changeShopStatus,
  UserContact,
} from '../../../utils/userAPI';
import toast from 'react-hot-toast';
const ShopProfile = (props) => {
  const admin = true;
  const [token, setToken] = useRecoilState(tokenState);

  let history = useHistory();
  let { id } = useParams();
  const [shopProfile, setshopProfile] = useState({
    shopName: 'ยินดี จ่ายเงิน',
    shopAddress: 'อะไรก็ไม่รู้ สมมุติว่ายาวมาก ยาวมากกกกกกกกก 112112112',
    shopTel: '0888888888',
    logo: '/images/image_test.jpg',
    LinkIDLine: 'https://www.google.com/',
    like: 0,
    dislike: 0,
  });
  useEffect(async () => {
    let shop = await getAShop(id);
    console.log(shop);
    setshopProfile(shop);
  }, []);
  const handleFile = async (file) => {
    setshopProfile((prev) => ({
      ...prev,
      logo: URL.createObjectURL(file),
    }));

    // shopProfile.imageurl = URL.createObjectURL(file);
  };

  const closeshop = async () => {
    console.log('try to close shop');
    let result = await changeShopStatus(id, 'closed', token.token);
  };
  const likeshop = async (like) => {
    if (token.token == undefined) {
      toast.error('need to login');
      return;
    } else {
      let res = await UserContact(id, token.token, like);
      toast.success(res);
    }
  };

  return (
    <Layout>
      <div style={{ width: '100%' }} className="shopprofile p-3">
        <div className="row">
          <div className="col-4">
            <h3>
              โปรไฟล์ร้านค้า <img src="/shopping_basket.png" />
            </h3>
          </div>
          <div className="col-4"></div>
          <div
            className="col-4 text-right pointer"
            onClick={() => {
              history.goBack();
            }}
          >
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
        <div className="row mb-0">
          <div className="col mb-0">
            <div className="d-flex">
              <h3 className="mr-auto">รายละเอียดร้านค้า &nbsp;</h3>

              <h4 className="">ADD LINE :</h4>
              <a href={shopProfile.LinkIDLine}>
                <button className="btn btn-sm bg-success btn-sm mt-2 mx-2 text-white">
                  Click
                </button>
              </a>
            </div>
            <hr />
            <p>ชื่อผู้ใช้ : {shopProfile.name}</p>
            <p>ที่อยู่ร้าน : {shopProfile.shopAddress}</p>
            <p>เบอร์โทร : {shopProfile.shopTel}</p>
          </div>
        </div>
        <hr />
        <div className="row mb-2">
          <div className="col-6 text-center" onClick={() => likeshop('1')}>
            <i class="fa fa-thumbs-up like"></i>
            <h4>{shopProfile.like}</h4>
            {token
              ? token.RoleId == 3 && (
                  <button className="btn btn-check">
                    <i className="bi bi-check"></i>
                  </button>
                )
              : ''}
          </div>

          <div className="col-6 text-center" onClick={() => likeshop('-1')}>
            <i className="fa fa-thumbs-down dislike"></i>
            <h4>{shopProfile.dislike}</h4>
            {token
              ? token.RoleId == 3 && (
                  <button className="btn btn-x" onClick={() => closeshop()}>
                    <i className="bi bi-x"></i>
                  </button>
                )
              : ''}
          </div>
        </div>
        <div className="row ">
          <div className="col-12">
            <div className="d-flex justify-content-around">
              <Link to={'/shopdashboard/' + id}>
                <button className="btn btn-danger button-custom">
                  <h4>DashBoard</h4>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShopProfile;
