import React from "react";
import PropTypes from "prop-types";
import "./footer.css";
function Footer(props) {
  return (
    <div className="footer ">
      <div className="row align-items-center h-100 ">
        <div className="col text-center">
          <button className="btn btn-custom">อนุมัติเปิดร้าน</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
