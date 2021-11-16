import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  useHistory,
} from 'react-router-dom';
import Layout from '../../productdetaillayout';
import productstyle from '../../../styles/Product.module.css';
import loginstyle from '../../../styles/loginpage.module.css';
import { getAProduct } from '../../../utils/userAPI';
import SearchBar from '../../searchbar';

import './ProductDetails2.css';

export default function ProductDetails() {
  let history = useHistory();
  let { id } = useParams();
  useEffect(async () => {
    const data = await getAProduct(id);
    if (data) {
      setProduct(data);
    }
  }, []);
  const [product, setProduct] = useState({
    shopName: 'ร้าน LEGO การรองเท้า',
    logo: 'http://localhost:3002/uploads/A.jpg',
    shopId: 2,
    shopdescription: 'ร้านรองเท้าสำหรับทุกเพศทุกวัยจ้า',
    previewurl: 'http://localhost:3002/uploads/A.jpg',
    productname: 'รองเท้ายี่ห้อ XYZ',
    tag: 'แบบสวม',
    productfrom: 'ที่ไหนสักแห่ง',
    description: 'discription',
    price: 1000,
    releasedate: Date.now(),
    sizestocks: [
      {
        productId: 1,
        size: '40',
        stock: 1,
      },
      {
        productId: 1,
        size: '42',
        stock: 1,
      },
      {
        productId: 1,
        size: '44',
        stock: 1,
      },
    ],
  });
  // const footer = (
  //   <footer className={productstyle.buyproductfooter}>
  // <p>ราคา: {product.price}</p>
  // <p>บาท</p>
  // <p className={productstyle.cancelfooterbtn}>
  //   <button className={productstyle.roundbutton}>ยกเลิก</button>
  // </p>
  // <p className={productstyle.buyfooterbtn}>
  //   <Link to={`/order/${id}`}>
  //     <button
  //       className={productstyle.roundbutton}
  //       style={{ backgroundColor: 'green' }}
  //     >
  //       สั่งซื้อ
  //     </button>
  //   </Link>
  //     </p>
  //     <p>ค่าส่ง: XXXX</p>
  //     <p>บาท</p>
  //   </footer>
  // );
  const footer = (
    <div className="homefooter ">
      <div className="row align-items-center h-100 ">
        <div className="col d-flex justify-content-around align-items-center">
          <p className="colorwhite">
            ราคา: &nbsp;
            {product.price}
          </p>
          <p></p>
          <p className="colorwhite">บาท</p>
          <p className={productstyle.cancelfooterbtn}>
            <button
              className="roundbutton_custom"
              onClick={() => {
                history.push('/');
              }}
            >
              ยกเลิก
            </button>
          </p>
          <p className={productstyle.buyfooterbtn}>
            <Link to={`/order/${id}`}>
              <button
                className="roundbutton_custom"
                style={{ backgroundColor: 'green' }}
              >
                สั่งซื้อ
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <Layout footer={footer}>
      <SearchBar></SearchBar>
      <img src={product.previewurl} className={productstyle.mainimage}></img>

      <div className={productstyle.productdetailcontainer}>
        <div className="p-2">
          <div>
            <h2 className={productstyle.colorpink}>{product.productname}</h2>
            <h3>รายละเอียดสินค้า</h3>
            {product.description}
          </div>
          <div className={`${productstyle.productattributecontainer} my-2`}>
            <table>
              <tr>
                <td>Size:</td>
                {/* <td>{product.sizestocks.map((obj) => `  ${obj.size}  `)}</td> */}
              </tr>
              <tr>
                <td>ประเภท:</td>
                <td>{product.tag}</td>
              </tr>
              <tr>
                <td>ส่งจาก:</td>
                <td>{product.productfrom}</td>
              </tr>
            </table>
          </div>
          {/* Shop Preview */}
          <div className={productstyle.flexrowleft}>
            {' '}
            {/* row*/}
            <div
              className={loginstyle.legoimage}
              style={{
                width: '60px',
                height: '60px',
                fontSize: '20px',
                padding: '15px',
                backgroundImage: `url(${product.logo})`,
                backgroundSize: 'cover',
              }}
            ></div>
            <div className={productstyle.columngap1}>
              <h3
                className={productstyle.colorpink}
                style={{ padding: 0, margin: 0 }}
              >
                {product.shopName}
              </h3>
              <p>{product.shopdescription}</p>
              <Link to={`/shopprofile/${product.shopId}`}>
                <button
                  className={productstyle.roundbutton}
                  style={{
                    height: 'fit-content',
                    backgroundColor: 'var(--pink)',
                    fontSize: '16px!important',
                  }}
                >
                  ติดต่อร้านค้า
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
