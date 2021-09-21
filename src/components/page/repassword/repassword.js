import React, { useState } from "react";
import PropTypes from "prop-types";
import sha256 from "sha256";
import { valEmail, valPassword,valName } from "../../../utils/validate"
import {resetpassword} from "../../../utils/userAPI"
import { Link,useLocation  } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function RegisterContent(props) {
  const query = useQuery()
  const [data, setData] = useState({
    password: "",
    repassword: "",
  })
  const [errortxt, setErrortxt] = useState("");

  const handleChange = (type, value) => {

    setData({
      ...data,
      [type]: value
    }

    )

  }

  const submit = async () => {

    if(!(valPassword(data.password) )) {
      setErrortxt("Invalid Email or Password!");
      return
    };
    if (data.password != data.repassword) {
      setErrortxt("Password != repassword");
      return
    };
      setErrortxt("");
      resetpassword(query.get("token"),{password:sha256(data.password)})
      .then(res=>{
        alert("Reset Password Successful")
        
      }).catch(e=>{
        console.log(e)
      })

 



   
  


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
                  for="password"
                >
                  New Password
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
                  New Password Again
                </label>
                <div class="col-sm-9">
                  <input
                    class="form-control mr-sm-2"
                    id="password"
                    type="password"
                    placeholder="******************"
                    value={data.repassword}
                    onChange={(e) => handleChange("repassword", e.target.value)}
                  /></div>
              </div>
            </form>
            <div className="flex items-center justify-between">
              <button
                class="btn btn-primary btn-md mx-sm-2"
                type="button"
                onClick={()=>submit()}
              >
               Change Password
              </button>
            </div>
            <p className="colorRed">{errortxt}</p>
          </center>
          <hr></hr>
         
        </form>
      </div>
    </div>
  );
}

export default RegisterContent;
