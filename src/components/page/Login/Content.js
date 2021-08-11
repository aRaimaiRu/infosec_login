import React,{useState} from "react";
import md5 from "md5";
import PropTypes from "prop-types";
import {valEmail, valPassword } from "../../../utils/validate"
import "./Content.css";

const saltRounds = 10;
function LoginContent(props) {
  const [data,setData] = useState({
    email:"",
    password:""
  })
  const [errortxt ,setErrortxt] = useState("");

  const handleChange = (type,value)=>{
    console.log(data);
    setData({
      ...data,
      [type]:value
    }
      
    )

  }
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

  const summit = ()=>{
    
    if(!valEmail(data.email)) {
      setErrortxt("Invalid Email or Password!"); 
      return
    };
    if(!valPassword(data.password)){
      setErrortxt("Invalid Email or Password!"); 
      return
    };
    setErrortxt("");
    let hash = md5(data.password);
    console.log(hash);
    

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
          }}
        >
          <div class="mb-4">
            <label
              
              for="username"
            >
              Email
            </label>
            <input
              
              id="username"
              type="text"
              placeholder="Email"
              value={data.email}
              onChange={(e)=>handleChange("email",e.target.value)}
            />
          </div>
          <div class="mb-6">
            <label
              
              for="password"
            >
              Password
            </label>
            <input
              
              id="password"
              type="password"
              placeholder="******************"
              value={data.password}
              onChange={(e)=>handleChange("password",e.target.value)}
            />
            <p class="text-red text-xs colorRed">{errortxt}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              
              type="button"
              onClick={summit}
            >
              Sign In
            </button>
            <a
              
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <div className="width50P">
        <div
          class="loginform bg-white size-lg"
          style={{
            justifyContent: "space-evenly",
            padding: "50px",
            backgroundColor: "white",
          }}
        >
          <ul className="circle">
            <li>Email validation</li>
            <li>Password Length more {'>'}8  {'<=64'}</li>
            <li>Must have Email and Password</li>
            <li>secret password</li>
            <li>Strong password</li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default LoginContent;
