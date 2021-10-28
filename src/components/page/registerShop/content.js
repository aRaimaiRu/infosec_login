import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../../store';
import { registerShop, realRegisterShop } from '../../../utils/userAPI';
import { Link } from 'react-router-dom';
import Layout from '../../productdetaillayout';
import { Controller, useForm } from 'react-hook-form';
import loginstyle from '../../../styles/loginpage.module.css';
import PageDetails from '../../../styles/PageDetails.module.css';
import FileUploader from '../../FileUploadBtn';
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function Content() {
  const [token, setToken] = useRecoilState(tokenState);
  const { register, handleSubmit } = useForm();
  const [errortxt, setErrortxt] = useState('');
  const submit = (data) => {
    console.log(data);
    realRegisterShop(token.token, data);
    alert('submit');
  };
  return (
    <Layout>
      <div className={PageDetails.Gridheader}>
        <h1></h1>
        <h1>เปิดร้าน</h1>
        <h1>ย้อนกลับ {'>'}</h1>
      </div>
      <form
        className={loginstyle.inputcontainer}
        onSubmit={handleSubmit(submit)}
        style={{ color: 'black' }}
      >
        {/* Name Lastname */}
        <div className={loginstyle.loginwithcontainer}>
          <div
            className={loginstyle.inputcontainer}
            style={{ marginRight: '10px', color: 'black' }}
          >
            <label>ชื่อ</label>
            <input
              type="text"
              className={loginstyle.inputwidth100}
              {...register('name')}
              required
            />
          </div>
          <div
            className={loginstyle.inputcontainer}
            style={{ marginLeft: '10px', color: 'black' }}
          >
            <label>นามสกุล</label>
            <input
              type="text"
              className={loginstyle.inputwidth100}
              {...register('lastname')}
              required
            />
          </div>
        </div>
        {/* END Name Lastname */}
        <label>ที่อยู่</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('shopAddress')}
          required
        />
        <label>ชื่อร้าน</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('shopName')}
          required
        />
        {/* <label>Shop description</label>
        <textarea
          className={loginstyle.inputwidth100}
          {...register('description')}
          style={{ height: '120px' }}
        /> */}
        <label>เลขบัตรประชาชน</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('IDcard')}
          required
        />
        {/* Link ID Line  Tel */}
        <div className={loginstyle.loginwithcontainer}>
          <div
            className={loginstyle.inputcontainer}
            style={{ marginRight: '10px', color: 'black' }}
          >
            <label>Link ID Line</label>
            <input
              type="text"
              className={loginstyle.inputwidth100}
              {...register('LinkIDLine')}
              required
            />
          </div>
          <div
            className={loginstyle.inputcontainer}
            style={{ marginLeft: '10px', color: 'black' }}
          >
            <label>เบอร์โทร</label>
            <input
              type="text"
              className={loginstyle.inputwidth100}
              {...register('shopTel')}
              required
            />
          </div>
        </div>
        {/* END */}
        <label>แนบ QR CODE(Promp pay)</label>
        <input type="file" {...register('promptPayImg')} required />
        <label>Logo</label>
        <input type="file" {...register('logo')} required />
        <label>แนบรูปบัตรประชาชน</label>
        <input type="file" {...register('IDcardImage')} required />
        <div
          className={loginstyle.loginwithcontainer}
          style={{ margin: '10px 0' }}
        >
          <input type="checkbox" required />
          <span className={loginstyle.font12}> ข้าพเจ้ายอมรับเงื่อนไข</span>
        </div>
        <div className={loginstyle.flexcolumncenter}>
          {/* <Link href="/register"> */}
          <button
            className={loginstyle.roundbutton}
            style={{ margin: '5px 0', backgroundColor: 'var(--pink)' }}
            type="submit"
            value="submit"
          >
            ขอเปิดร้านค้า
          </button>
          {/* </Link> */}
        </div>
      </form>
    </Layout>
  );
}

export default Content;
