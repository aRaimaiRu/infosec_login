import React from "react";
import "./content.css";
import PropTypes from "prop-types";

function Content(props) {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <div className="flexbtw">
              <span>ชื่อ {}</span>
              <span>ที่อยู่ {}</span>

              <button type="button" class="btn btn-primary">Create Shop</button>
          </div>
        </div>
        <div class="col-sm"></div>
        <div class="col-sm"></div>
      </div>
    </div>
  );
}

export default Content;
