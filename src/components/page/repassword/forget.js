import React, { useState } from "react";
import PropTypes from "prop-types";

import sha256 from "sha256";
import { valEmail, valPassword,valName } from "../../../utils/validate"
import {forgotpassword} from "../../../utils/userAPI"
import { Link } from "react-router-dom";



function RegisterContent(props) {
 
  const [data, setData] = useState({
    email: "",
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

    if(!(valEmail(data.email))) {
      setErrortxt("Invalid Email or Password!");
      return
    };
  let res = await forgotpassword(data.email);

 



   
  


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
            <hr></hr>
            <hr></hr>

            
            <div className="flex items-center justify-between">
              <button
                class="btn btn-primary btn-md mx-sm-2"
                type="button"
                onClick={()=>submit()}
              >
                Submit
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
