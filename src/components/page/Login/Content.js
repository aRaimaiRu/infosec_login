import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../../store';
import { valEmail, valPassword } from '../../../utils/validate';
import './Content.css';
import { login } from '../../../utils/userAPI';
import { Link } from 'react-router-dom';
import sha256 from 'sha256';
import { Controller, useForm } from 'react-hook-form';
import Layout from '../../loginlayout';
import loginstyle from '../../../styles/loginpage.module.css';
function LoginContent(props) {
  const { register, handleSubmit } = useForm();
  const [token, setToken] = useRecoilState(tokenState);

  const [errortxt, setErrortxt] = useState('');

  // const sendLogin = async () => {
  //   let result = login({
  //     username: data.email,
  //     password: data.password,
  //   });
  //   result = JSON.parse(result);
  //   props.setToken(result.setToken);
  // };

  const submit = (data) => {
    if (!(valEmail(data.email) && valPassword(data.password))) {
      setErrortxt('Invalid Email or Password!');
      return;
    }

    setErrortxt('');
    //send api
    login({ username: data.email, password: sha256(data.password) })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          console.log('login res=', res);
          setToken(res);
        } else {
          alert(res.message);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };
  return (
    <Layout>
      <div className={loginstyle.legoimage}>LEGO</div>
      <form
        className={loginstyle.inputcontainer}
        onSubmit={handleSubmit(submit)}
      >
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
        {/* <div
          className={loginstyle.loginwithcontainer}
          style={{ margin: '10px 0' }}
        >
          <img
            src="/images/facebookicon.png"
            alt="facebookicon"
            width={30}
            height={30}
          />
          <img
            src="/images/googleicon.png"
            alt="googleicon"
            width={30}
            height={30}
          />
        </div> */}
        <div className={loginstyle.flexcolumncenter}>
          <button
            className={loginstyle.roundbutton}
            style={{ margin: '10px 0' }}
            type="submit"
            value="submit"
          >
            เข้าสู่ระบบ
          </button>
          <Link href="/register">
            <button
              className={loginstyle.roundbutton}
              style={{ margin: '5px 0' }}
            >
              สมัครสมาชิก
            </button>
          </Link>
          <Link href="/forgotpassword">
            <a className={loginstyle.font12}>ลืมรหัสผ่าน</a>
          </Link>
        </div>
      </form>
    </Layout>
  );
}

export default LoginContent;
