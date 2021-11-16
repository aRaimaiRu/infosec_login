import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import sha256 from 'sha256';
import { valEmail, valPassword, valName } from '../../../utils/validate';
import { registerapi } from '../../../utils/userAPI';
import { Link } from 'react-router-dom';
import Layout from '../../loginlayout';
import loginstyle from '../../../styles/loginpage.module.css';
import toast from 'react-hot-toast';
import './Content.css';
function RegisterContent(props) {
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    console.log('submit data =', data);
    if (data.password != data.repassword) {
      toast.error('password must equal to repassword');
      return;
    }
    if (!(valEmail(data.email) && valPassword(data.password))) {
      toast.error('Invalid Email or Password!');
      return;
    }
    if (
      !(valName(data.name) && valName(data.lastname) && valName(data.address))
    ) {
      toast.error('Invalid name or address');
      return;
    }
    toast.success('submit');

    registerapi({
      firstName: data.name,
      lastName: data.lastname,
      username: data.email,
      password: sha256(data.password),
      address: data.address,
      tel: data.tel,
    })
      .then((res) => res.json())
      .then((res) => {
        toast.success(res.message);
        window.location.replace('/login');
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
        <h1 style={{ textAlign: 'center' }}> สมัครสมาชิก</h1>
        <label>อีเมลล์</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('email')}
          placeholder="abc@email.com"
        />
        <label>รหัสผ่าน</label>
        <input
          type="password"
          className={loginstyle.inputwidth100}
          {...register('password')}
          placeholder="ตัวอักษร A-Z,a-z,0-9"
        />
        <label>ยืนยันรหัสผ่าน</label>
        <input
          type="password"
          className={loginstyle.inputwidth100}
          {...register('repassword')}
          placeholder="ตัวอักษร A-Z,a-z,0-9"
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
          required
        />
        <div
          className={loginstyle.loginwithcontainer}
          style={{ margin: '10px 0' }}
        >
          <input type="checkbox" required />
          <span className={loginstyle.font16}> ข้าพเจ้ายอมรับเงื่อนไข</span>
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
//stackoverflow.com/questions/60151566/display-file-name-for-custom-input-file-using-reactjs
export default RegisterContent;
