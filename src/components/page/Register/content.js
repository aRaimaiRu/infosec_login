import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Content.css";

import { valEmail, valPassword,valName } from "../../../utils/validate"
import {register} from "../../../utils/userAPI"
import { Link } from "react-router-dom";
const bcrypt = require('bcryptjs');
const saltRounds = bcrypt.genSaltSync(10);

function RegisterContent(props) {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    address:""
  })
  const [errortxt, setErrortxt] = useState("");

  const handleChange = (type, value) => {
    console.log(data);
    setData({
      ...data,
      [type]: value
    }

    )

  }

  const submit = async () => {

    if(!(valEmail(data.email) && valPassword(data.password) )) {
      setErrortxt("Invalid Email or Password!");
      return
    };
    if (!(valName(data.name) && valName(data.surname) && valName(data.address))) {
      setErrortxt("Invalid name or address");
      return
    };
      bcrypt.hash(data.password, "10", function(err, hash) {
          handleChange("password",hash)
          alert("submit");
          setErrortxt("");
          register({
            firstName:data.name,
            lastName:data.surname,
            username:data.email,
            password: data.password,
            address:data.address
          }).then(
            res=>res.json()
          ).then(res=>{
            alert(res.message)
            
          }).catch(e=>{
            console.log(e)
          })
      });



   
  


  }



  return (
    <div className="bgorange marg0auto center" style={{ height: "50rem" }}>
      <div className="width50P">
        <form
          class="loginform bg-white size-lg"
          style={{
            justifyContent: "space-evenly",
            padding: "50px",
            backgroundColor: "white",
            overflow: "auto"
          }}
        ><center>
            <form class="form-inline">
              <div class="form-group row mb-4">
                <label
                  class="block text-grey-darker text-sm font-bold col-sm-2"
                  for="username"
                >
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control mr-sm-2"
                    id="username"
                    type="text"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  /></div>
              </div>
            </form>
            <form class="form-inline">
              <div class="form-group row mb-4">
                <label
                  class="block text-grey-darker text-sm font-bold col-sm-2"
                  for="password"
                >
                  Password
                </label>
                <div class="col-sm-9">
                  <input
                    class="form-control mr-sm-2"
                    id="password"
                    type="password"
                    placeholder="******************"
                    value={data.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                  /></div>
              </div>
            </form>
            <form class="form-inline">
              <div class="form-group row mb-4">
                <label
                  class="block text-grey-darker text-sm font-bold col-sm-2"
                  for="password"
                >
                  Name
                </label>
                <div class="col-sm-10">
                  <input
                    class="form-control mr-sm-2"
                    id="Name"
                    type="Text"
                    placeholder="Name"
                    value={data.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  /></div>
              </div>
            </form>
            <form class="form-inline">
              <div class="form-group row mb-4">
                <label
                  class="block text-grey-darker text-sm font-bold col-sm-2"
                  for="password"
                >
                  Surname
                </label>
                <div class="col-sm-9">
                  <input
                    class="form-control mr-sm-2"
                    id="Surname"
                    type="Text"
                    placeholder="Surname"
                    value={data.surname}
                    onChange={(e) => handleChange("surname", e.target.value)}
                  /></div>
              </div>
            </form>
            <form class="form-inline">
              <div class="form-group row mb-4">
                <label
                  class="block text-grey-darker text-sm font-bold col-sm-2"
                  for="password"
                >
                  address
                </label>
                <div class="col-sm-9">
                  <input
                    class="form-control mr-sm-2"
                    id="address"
                    type="Text"
                    placeholder="address"
                    value={data.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                  /></div>
              </div>
            </form>
            <div className="flex items-center justify-between">
              <button
                class="btn btn-primary btn-md mx-sm-2"
                type="button"
                onClick={()=>submit()}
              >
                Register
              </button>
              <Link to="/login">
              <button
                class="btn btn-outline-primary my-2 my-sm-0 mx-sm-2"
                type="button"
             
              >
                Sign In
              </button></Link>
            </div>
            <p className="colorRed">{errortxt}</p>
          </center>
          <hr></hr>
          <ul className="circle">
            <li>Email validation</li>
            <li>Password Length more {'>'}8  {'<=64'}</li>
            <li>Must have Email and Password</li>
            <li>secret password</li>
            <li>Strong password</li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default RegisterContent;
