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
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function Content() {
  const [token, setToken] = useRecoilState(tokenState);
  const { register, handleSubmit } = useForm();
  const [errortxt, setErrortxt] = useState('');
  const submit = (data) => {
    console.log(data);
    realRegisterShop(token.token, data.logo);
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
        <label>Shop name</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('name')}
        />
        <label>Shop description</label>
        <textarea
          className={loginstyle.inputwidth100}
          {...register('description')}
          style={{ height: '120px' }}
        />
        <label>Shop address</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('address')}
        />
        <label>Shop tel</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('shoptel')}
        />
        {/* name lastname */}

        <label>Prompt Pay QRCode</label>
        <input type="file" {...register('qrcodelink')} />
        <label>Logo</label>
        <input type="file" {...register('logo')} />
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
            style={{ margin: '5px 0' }}
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
