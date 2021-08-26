import React, { useState } from "react";
import md5 from "md5";
import PropTypes from "prop-types";
import { valEmail, valPassword } from "../../../utils/validate"
import "./Content.css";
import {login} from "../../../utils/userAPI"
import { Link } from "react-router-dom";
const saltRounds = 10;
function LoginContent(props) {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [errortxt, setErrortxt] = useState("");

  const handleChange = (type, value) => {
    setData({
      ...data,
      [type]: value
    }

    )

  }
  const sendLogin = async ()=>{
    let result = login({
      username:data.email,
      password:data.password
    })
    result = JSON.parse(result)
    alert(result);
    props.setToken(result.setToken);
  }
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  const submit = () => {

    if (!valEmail(data.email)) {
      setErrortxt("Invalid Email or Password!");
      return
    };
    if (!valPassword(data.password)) {
      setErrortxt("Invalid Email or Password!");
      return
    };
    setErrortxt("");
    let hash = md5(data.password);
    console.log("hash =",hash);
    login({username:data.email,
      password:hash
    }).then(res=>res.json()
    ).then(res=>{
      if(res.token)props.setToken(res?.token)
    }).catch(e=>{
      console.log("error =",e)
    })
    window.location.replace("/home");


  }
  return (
    <div className="bgorange marg0auto center" style={{ height: "50rem" }}>
      <div className="width50P">
        <form
          class="loginform bg-white size-lg"
          style={{
            justifyContent: "space-evenly",
            padding: "10px",
            backgroundColor: "white",
          }}
        >
          <center>
            <div>
              <label for="username"></label>
              <p>Email</p>
              <input class="form-control mr-sm-2"
                id="username"
                type="text"
                placeholder="Email"
                value={data.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            <div>
              <label for="password">
              </label>
              <p>Password</p>
              <input class="form-control mr-sm-2"
                id="password"
                type="password"
                placeholder="******************"
                value={data.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />
              <p class="text-red text-xs colorRed">{errortxt}</p>
            </div>

            <div className="flex items-center justify-between">
              
              <button class="btn btn-primary btn-md mx-sm-2"
                type="button"
                onClick={()=>submit()} 
              >
                Sign In
              </button>
              <Link to="/register">

              <button class="btn btn-outline-primary my-2 my-sm-0 mx-sm-2"
                type="button"

              >
                register
              </button></Link>
              <br></br>
              <a

                href="#"
              >
                Forgot Password?
              </a>
            </div>

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

export default LoginContent;
