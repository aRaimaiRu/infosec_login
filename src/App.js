import React, { useState, useEffect } from 'react';
import { useRecoilState, RecoilRoot } from 'recoil';
import { tokenState } from '../src/store';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginContent from './components/page/Login/Content';
import RegisterContent from './components/page/Register/content';
import Home from './components/page/Home/content';
import E401 from './components/page/Error/content';
import CustomerOwn from './components/page/customerOwn/content';
import OwnShop from './components/page/OwnShop/content';
import { callrefreshToken } from './utils/userAPI';
import ForgotPassword from './components/page/repassword/forget';
import Repassword from './components/page/repassword/repassword';
import HomeContent from './components/page/Home/content';
import { Controller, useForm } from 'react-hook-form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import './App.css';
import ShopRegister from './components/page/registerShop/content';
import ManageRole from './components/page/manageRolePermission/content';
function App() {
  const { register, handleSubmit } = useForm();
  const [token, setToken] = useRecoilState(tokenState);
  // if (token) {
  //   console.log('auto call refresh Token', token);
  //   setInterval(callrefreshToken(token, setToken), 1000 * 60 * 50);
  // }
  useEffect(async () => {
    callrefreshToken(setToken);
  }, []);

  // const onsubmit = (data) => {
  //   const mydata = new FormData();
  //   mydata.append('avatar', data.avatar[0]);
  //   fetch(`http://localhost:3002/api/shop/register`, {
  //     method: 'POST',
  //     headers: {},
  //     body: mydata,
  //   })
  //     .then((data) => data.json())
  //     .then((data) => {
  //       if (data.message) {
  //         alert(data.message);
  //       } else {
  //         return data;
  //       }
  //     })
  //     .catch((e) => alert(e));
  // };
  return (
    <>
      {token.firstName === undefined && (
        <Router>
          <Switch>
            {/* <Route path="*">
              <form
                // action="/profile"
                // method="post"
                // enctype="multipart/form-data"
                onSubmit={handleSubmit(onsubmit)}
              >
                <input type="file" name="avatar" {...register('avatar')} />
                <input
                  type="submit"
                  value="Get me the stats!"
                  class="btn btn-default"
                />
              </form>
            </Route> */}
            <Route path="/login">
              <Header></Header>
              <LoginContent setToken={setToken} />
            </Route>
            <Route path="/register">
              <Header></Header>
              <RegisterContent setToken={setToken} />
            </Route>
            <Route path="/forgotpassword">
              <ForgotPassword></ForgotPassword>
            </Route>
            <Route path="/repassword">
              <Repassword></Repassword>
            </Route>
            <Route path="/">
              <Header></Header>
              <HomeContent setToken={setToken} />
            </Route>
            <Route path="*" component={E401} status={401} />
          </Switch>
          <Footer></Footer>
        </Router>
      )}
      {/* if have token show below*/}
      {token.firstName !== undefined && (
        <div>
          <Router>
            <Switch>
              <Route path="/ShopRegister">
                <ShopRegister />
              </Route>
              <Route path="/shop/:shopid">
                <OwnShop></OwnShop>
              </Route>
              <Route path="/admin/RolePermission">
                <CustomerOwn>
                  <ManageRole></ManageRole>
                </CustomerOwn>
              </Route>

              <Route path="/">
                {/* <img src="http://localhost:3002/uploads/qrcodelink-1635080644721-418296245.jpg"></img> */}
                <HomeContent setToken={setToken} />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
