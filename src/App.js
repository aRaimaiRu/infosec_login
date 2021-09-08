import React, { useState,useEffect } from "react";
import { useRecoilState,RecoilRoot } from 'recoil';
import { tokenState } from '../src/store';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginContent from "./components/page/Login/Content";
import RegisterContent from "./components/page/Register/content";
import Home from "./components/page/Home/content";
import E401 from "./components/page/Error/content";
import CustomerOwn from "./components/page/customerOwn/content";
import OwnShop from "./components/page/OwnShop/content";
import {callrefreshToken } from "./utils/userAPI"
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
import ManageRole from "./components/page/manageRolePermission/content"
function App() {
  const [token,setToken] = useRecoilState(tokenState)
  if(token){
    console.log("auto call refresh Token")
    setInterval(callrefreshToken(token,setToken), 1000*60*50);
  }
  useEffect(async()=>{
     callrefreshToken(token,setToken)
  },[])


  return (
    <>

      {!token && (
        <div>
          <Router>
            <Switch>
              <Route path="/login">
                <Header>kut</Header>
                <LoginContent setToken={setToken} />
              </Route>
              <Route path="/register">
                <Header></Header>
                <RegisterContent setToken={setToken} />
              </Route>
              <Route path="*" component={E401} status={401} />
            </Switch>
            <Footer></Footer>
          </Router>
        </div>
      )}
      {/* if have token show below*/}
      {token && (
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
                    <ManageRole>

                    </ManageRole>
                </CustomerOwn>
              </Route>

              <Route path="/">
                {/* <Home token={token}></Home> */}
                <CustomerOwn></CustomerOwn>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
  </>
  );

}

export default App;
