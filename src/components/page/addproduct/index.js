import React, { useState } from 'react';
import { DefaultValue, useRecoilState } from 'recoil';
import { tokenState } from '../../../store';
import { Controller, useForm, useFieldArray } from 'react-hook-form';
import FileUploader from '../../FileUploadBtn';
import Layout from '../../layout';
import './addproduct.css';
import { addProduct } from '../../../utils/userAPI';

function Addproduct(props) {
  const [token, setToken] = useRecoilState(tokenState);
  const [exImg, setExImg] = useState('/images/image_test.jpg');
  const [imgFile, setImgFile] = useState('');
  const { register, handleSubmit, control } = useForm({
    // defaultValues: {
    //   allsize: [{ size: '42' }],
    // },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'allsize', // unique name for your Field Array
      // keyName: 'size', //default to "id", you can change the key name
    }
  );
  const handleFile = (file) => {
    setImgFile(file);
    setExImg(URL.createObjectURL(file));
  };
  const submit = async (data) => {
    console.log('submit add product', data);
    const res = await addProduct(token.token, { ...data, previewurl: imgFile });
  };
  return (
    <Layout>
      <form
        style={{ width: '100%' }}
        className="addproduct p-3 mt-5"
        onSubmit={handleSubmit(submit)}
      >
        <div className="row">
          <div className="col text-center">
            <img
              src={exImg}
              alt="kuro"
              width={300}
              height={300}
              className="center-cropped"
              style={{ borderRadius: '20%' }}
            />
            <FileUploader handleFile={handleFile}></FileUploader>
            {/* <button class="btn-img">Take</button> */}
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
                  <input
                    class="form-control"
                    placeholder="ร้องเท้ายี่ห้อ"
                    {...register('brand')}
                    required
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">size:</label>
                {fields.map((field, ind) => (
                  <input
                    class="form-control"
                    placeholder="Size"
                    key={field.id}
                    name={`allsize.${ind}.size`}
                    {...register(`allsize.${ind}.size`)}
                  />
                ))}
                <div class="col-sm-10">
                  <button
                    className="btn btn-danger button-custom"
                    onClick={(e) => {
                      e.preventDefault();
                      append({ size: '' });
                    }}
                  >
                    เพิ่ม Size รองเท้า
                  </button>
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">ประเภท:</label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    placeholder="ประเภท"
                    {...register('tag')}
                  />
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">ผลิตจาก:</label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    placeholder="ผลิตจาก"
                    {...register('productfrom')}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">ราคา:</label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    placeholder="ราคา"
                    {...register('price')}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">รายละเอียด:</label>
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    placeholder="รายละเอียด"
                    {...register('description')}
                  />
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
              <button
                className="btn btn-success button-custom"
                type="submit"
                value="submit"
              >
                <h4>ยืนยัน</h4>
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}

export default Addproduct;
