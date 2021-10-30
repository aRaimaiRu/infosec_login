import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import sha256 from 'sha256';
import { valEmail, valPassword, valName } from '../../../utils/validate';
import { registerapi } from '../../../utils/userAPI';
import { Link } from 'react-router-dom';
import Layout from '../../loginlayout';
import loginstyle from '../../../styles/loginpage.module.css';
function RegisterContent(props) {
  const { register, handleSubmit } = useForm();

  const [errortxt, setErrortxt] = useState('');

  const submit = async (data) => {
    console.log('submit data =', data);
    // if (!(valEmail(data.email) && valPassword(data.password))) {
    //   setErrortxt('Invalid Email or Password!');
    //   return;
    // }
    // if (
    //   !(valName(data.name) && valName(data.lastname) && valName(data.address))
    // ) {
    //   setErrortxt('Invalid name or address');
    //   return;
    // }
    alert('submit');
    setErrortxt('');
    registerapi({
      firstName: data.name,
      lastName: data.lastname,
      username: data.email,
      password: sha256(data.password),
      address: data.address,
    })
      .then((res) => res.json())
      .then((res) => {
        alert(res.message);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Layout>
      <form
        className={loginstyle.inputcontainer}
        onSubmit={handleSubmit(submit)}
      >
        <h1> สมัครสมาชิก</h1>
        <label>อีเมลล์</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('email')}
        />
        <label>รหัสผ่าน</label>
        <input
          type="password"
          className={loginstyle.inputwidth100}
          {...register('password')}
        />
        <label>ยืนยันรหัสผ่าน</label>
        <input
          type="password"
          className={loginstyle.inputwidth100}
          {...register('repassword')}
        />
        {/* name lastname */}
        <div className={loginstyle.loginwithcontainer}>
          <div
            className={loginstyle.inputcontainer}
            style={{ marginRight: '10px' }}
          >
            <label>ชื่อ</label>
            <input
              type="text"
              className={loginstyle.inputwidth100}
              {...register('name')}
            />
          </div>
          <div
            className={loginstyle.inputcontainer}
            style={{ marginLeft: '10px' }}
          >
            <label>นามสกุล</label>
            <input
              type="text"
              className={loginstyle.inputwidth100}
              {...register('lastname')}
            />
          </div>
        </div>

        <label>ที่อยู่</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('address')}
        />
        <label>เบอร์โทร</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('tel')}
        />
        <p className="colorRed">{errortxt}</p>
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
            สมัครสมาชิก
          </button>
          {/* </Link> */}
        </div>
      </form>
    </Layout>
  );
}

export default RegisterContent;
