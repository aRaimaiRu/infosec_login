import React, { useState } from 'react';
import PropTypes from 'prop-types';
import sha256 from 'sha256';
import { valEmail, valPassword, valName } from '../../../utils/validate';
import { resetpassword } from '../../../utils/userAPI';
import { Link, useLocation } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import loginstyle from '../../../styles/loginpage.module.css';
import Layout from '../../loginlayout';
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function RegisterContent(props) {
  const { register, handleSubmit } = useForm();
  const query = useQuery();
  const [errortxt, setErrortxt] = useState('');

  const submit = async (data) => {
    if (!valPassword(data.password)) {
      setErrortxt('Invalid Email or Password!');
      return;
    }
    if (data.password != data.repassword) {
      setErrortxt('Password != repassword');
      return;
    }
    setErrortxt('');
    resetpassword(query.get('token'), { password: sha256(data.password) })
      .then((res) => {
        alert('Reset Password Successful');
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

        <div className={loginstyle.flexcolumncenter}>
          {/* <Link href="/register"> */}
          <button
            className={loginstyle.roundbutton}
            style={{ margin: '5px 0' }}
            type="submit"
            value="submit"
          >
            เปลี่ยนรหัสผ่าน
          </button>
          <p className="colorRed">{errortxt}</p>
          {/* </Link> */}
        </div>
      </form>
    </Layout>
  );
}

export default RegisterContent;
