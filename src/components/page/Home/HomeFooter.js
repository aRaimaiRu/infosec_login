import React from 'react';
import PropTypes from 'prop-types';
import './homefooter.css';
import { Link } from 'react-router-dom';
function HomeFooter(props) {
  return (
    <div className="homefooter ">
      <div className="row align-items-center h-100 ">
        <div className="col d-flex justify-content-around">
          <Link to="/shopapprove">
            <button className="btn btn-custom">อนุมัติเปิดร้าน</button>
          </Link>
          <Link to="/shopreport">
            <button className="btn btn-custom-2 bg-primary">
              รายชื่อร้านค้า
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
