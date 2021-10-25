import React, { useState } from "react";
import Layout from "../../layout";
import "./addproduct.css";

const addproduct = (props) => {
  return (
    <Layout>
      <div style={{ width: "100%" }} className="addproduct p-3 mt-5">
        <div className="row">
          <div className="col text-center">
            <img
              src="/images/image_test.jpg"
              alt="kuro"
              width={300}
              height={300}
              className="center-cropped"
            />
            <button class="btn-img">Take</button>
          </div>
        </div>

        <div className="row font-kanit">
          <div className="col-md-12">
            <h4 className="ascend">รายละเอียดสินค้า</h4>
            <hr />
            <form>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">ร้องเท้ายี่ห้อ:</label>
                <div class="col-sm-10">
                  <input class="form-control" placeholder="ร้องเท้ายี่ห้อ" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">size:</label>
                <div class="col-sm-10">
                  <input class="form-control" placeholder="Size" />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">ประเภท:</label>
                <div class="col-sm-10">
                  <input class="form-control" placeholder="ประเภท" />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">ส่งจาก:</label>
                <div class="col-sm-10">
                  <input class="form-control" placeholder="ส่งจาก" />
                </div>
              </div>
            </form>
            <hr />
          </div>
        </div>
        <div className="row ">
          <div className="col pt-30">
            <div className="d-flex justify-content-around ">
              <button className="btn btn-danger button-custom">
                <h4>ยกเลิก</h4>
              </button>
              <button className="btn btn-success button-custom">
                <h4>ยืนยัน</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default addproduct;
