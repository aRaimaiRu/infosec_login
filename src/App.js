import React, { useState, useEffect } from "react";
import { useRecoilState, RecoilRoot } from "recoil";
import { tokenState } from "../src/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginContent from "./components/page/Login/Content";
import RegisterContent from "./components/page/Register/content";
import Home from "./components/page/Home/content";
import E401 from "./components/page/Error/content";
import CustomerOwn from "./components/page/customerOwn/content";
import OwnShop from "./components/page/OwnShop/content";
import { callrefreshToken } from "./utils/userAPI";
import ProfileContent from "./components/page/profile";
import ForgotPassword from "./components/page/repassword/forget";
import Repassword from "./components/page/repassword/repassword";
import HomeContent from "./components/page/Home/content";
import ProductDetails from "./components/page/ProductDetails/ProductDetails";
import OrderContent from "./components/page/order";
import OrderWarrantContent from "./components/page/orderwarrant";
import PaymentContent from "./components/page/payment";
import AddProductContent from "./components/page/addproduct";
import ShopProfileContent from "./components/page/shopprofile";
import ShopApproveContent from "./components/page/shopapprove";
import ShopApproveProcessContent from "./components/page/shopapproveprocess";
import { Controller, useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";
import ShopRegister from "./components/page/registerShop/content";
import ManageRole from "./components/page/manageRolePermission/content";
function App() {
  const { register, handleSubmit } = useForm();
  const [token, setToken] = useRecoilState(tokenState);
  // if (token) {
  //   console.log('auto call refresh Token', token);
  //   setInterval(callrefreshToken(token, setToken), 1000 * 60 * 50);
  // }
  // setToken({
  //   id: 7,
  //   firstName: 'abc',
  //   lastName: 'def',
  //   username: 'first18011@gmail.com',
  //   address: null,
  //   tel: null,
  //   isVerify: true,
  //   createdAt: '2021-09-18T14:24:06.000Z',
  //   updatedAt: '2021-10-24T13:48:46.000Z',
  //   RoleId: 2,
  //   Role: 'ShopOwner',
  //   token:
  //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZmlyc3ROYW1lIjoiYWJjIiwibGFzdE5hbWUiOiJkZWYiLCJ1c2VybmFtZSI6ImZpcnN0MTgwMTFAZ21haWwuY29tIiwiYWRkcmVzcyI6bnVsbCwidGVsIjpudWxsLCJpc1ZlcmlmeSI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMS0wOS0xOFQxNDoyNDowNi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMS0xMC0yNFQxMzo0ODo0Ni4wMDBaIiwiUm9sZUlkIjoyLCJSb2xlIjoiU2hvcE93bmVyIiwiaWF0IjoxNjM1MTQ5NTk1LCJleHAiOjE2MzUxNTAxOTV9.XktjFkWv40joa7qGdP5eKaPqggmZfn6Hzu3j5EVD3oU',
  // });
  // useEffect(async () => {
  //   callrefreshToken(setToken);
  // }, []);

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
      <Router>
        <Switch>
          <Route path="/product/:id">
            <ProductDetails setToken={setToken} />
          </Route>

          <Route path="/profile">
            <Header></Header>
            <ProfileContent />
          </Route>

          <Route path="/order">
            <Header></Header>
            <OrderContent />
          </Route>

          <Route path="/orderwarrant">
            <Header></Header>
            <OrderWarrantContent />
          </Route>

          <Route path="/payment">
            <Header></Header>
            <PaymentContent />
          </Route>

          <Route path="/payment">
            <Header></Header>
            <PaymentContent />
          </Route>

          <Route path="/addproduct">
            <Header></Header>
            <AddProductContent />
          </Route>

          <Route path="/shopprofile">
            <Header></Header>
            <ShopProfileContent />
          </Route>

          <Route path="/shopapprove">
            <Header></Header>
            <ShopApproveContent />
          </Route>

          <Route path="/shopapproveprocess">
            <Header></Header>
            <ShopApproveProcessContent />
          </Route>
          {token.firstName === undefined && (
            <>
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
                <HomeContent setToken={setToken} />
              </Route>
            </>
          )}
          {token.firstName !== undefined && (
            <>
              <Route path="/">
                <HomeContent setToken={setToken} />
              </Route>
            </>
          )}

          <Route path="*" component={E401} status={401} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
