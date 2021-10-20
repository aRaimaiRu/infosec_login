import React, { useState } from 'react';
import PropTypes from 'prop-types';

import sha256 from 'sha256';
import { valEmail, valPassword, valName } from '../../../utils/validate';
import { forgotpassword } from '../../../utils/userAPI';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import loginstyle from '../../../styles/loginpage.module.css';
import Layout from '../../loginlayout';

function RegisterContent(props) {
  const { register, handleSubmit } = useForm();
  const [errortxt, setErrortxt] = useState('');

  const submit = async (data) => {
    if (!valEmail(data.email)) {
      setErrortxt('Invalid Email or Password!');
      return;
    }
    setErrortxt('');
    let res = await forgotpassword(data.email);
  };

  return (
    <Layout>
      <form
        className={loginstyle.inputcontainer}
        onSubmit={handleSubmit(submit)}
      >
        <h1> ลืมรหัสผ่าน</h1>
        <label>อีเมลล์</label>
        <input
          type="text"
          className={loginstyle.inputwidth100}
          {...register('email')}
        />

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
          <p className="colorRed">{errortxt}</p>
          {/* </Link> */}
        </div>
      </form>
    </Layout>
  );
}

export default RegisterContent;
