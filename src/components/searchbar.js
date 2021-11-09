import loginpage from '../styles/loginpage.module.css';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  useHistory,
} from 'react-router-dom';
export default function SearchBar({ children }) {
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    history.push('/search?' + data.search);
  };
  return (
    <form
      className={loginpage.loginwithcontainer}
      style={{ marginTop: '30px', width: '100%' }}
      onSubmit={handleSubmit(submit)}
    >
      <input
        type="text"
        className={loginpage.inputwidth100}
        style={{ marginRight: '20px' }}
        {...register('search')}
        placeholder={`brand=รองเท้ายี่ห้อ&tag=รองเท้าประเภท&productfrom=ผลิตจาก`}
      />
      <button type="submit" value="submit" className="btn">
        <img
          src="/images/searchimg2.png"
          width={50}
          height={50}
          color="red"
          alt="img"
        ></img>
      </button>
    </form>
  );
}
