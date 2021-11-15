import React, { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import sha256 from 'sha256';
import { valEmail, valPassword, valName } from '../../../utils/validate';
import { forgotpassword } from '../../../utils/userAPI';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import loginstyle from '../../../styles/loginpage.module.css';
import Layout from '../../loginlayout';

function RegisterContent(props) {
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    if (!valEmail(data.email)) {
      toast.error('Invalid Email ');
      return;
    }
    let res = await forgotpassword(data.email);
  };

  return (
    <Layout>
      <form
        className={loginstyle.inputcontainer}
        onSubmit={handleSubmit(submit)}
      >
        <h1 style={{ textAlign: 'center' }}>รีเซ็ตรหัสผ่าน</h1>
        <label>อีเมลล์</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('email')}
        />

        <div className={loginstyle.flexcolumncenter} style={{ margin: '10px' }}>
          {/* <Link href="/register"> */}
          <button
            className={loginstyle.roundbutton}
            style={{ margin: '5px 0', marginBottom: '30px' }}
            type="submit"
            value="submit"
          >
            ยืนยัน
          </button>
          {/* </Link> */}
        </div>
      </form>
    </Layout>
  );
}

export default RegisterContent;
