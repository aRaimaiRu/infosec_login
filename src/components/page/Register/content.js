import React,{useState} from "react";
import PropTypes from "prop-types";
import "./Content.css";
import md5 from "md5";
import {valEmail, valPassword } from "../../../utils/validate"
function RegisterContent(props) {
  const [data,setData] = useState({
    email:"",
    password:"",
    name:"",
    surname:""
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
            overflow:"auto"
          }}
        >
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Email"
              value={data.email}
              onChange={(e)=>handleChange("email",e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              value={data.password}
              onChange={(e)=>handleChange("password",e.target.value)}
            />
            
          </div>
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              value={data.name}
              onChange={(e)=>handleChange("name",e.target.value)}
            />
            
          </div>
          <div class="mb-4">
            <label
              class="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Surname
            </label>
            <input
              class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              value={data.surname}
              onChange={(e)=>handleChange("surname",e.target.value)}
            />
                        <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={summit}
            >
              Sign In
            </button>
          </div>
          <p class="text-red text-xs colorRed">{errortxt}</p>
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

export default RegisterContent;
