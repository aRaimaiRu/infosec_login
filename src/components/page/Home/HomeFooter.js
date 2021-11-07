import React from "react";
import PropTypes from "prop-types";
import "./homefooter.css";
function HomeFooter(props) {
  return (
    <div className="homefooter ">
      <div className="row align-items-center h-100 ">
        <div className="col text-center">
          <button className="btn btn-custom">อนุมัติเปิดร้าน</button>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
