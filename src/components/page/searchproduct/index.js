import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  useLocation,
  useHistory,
} from 'react-router-dom';
import Layout from '../../productdetaillayout';
import productstyle from '../../../styles/Product.module.css';
import loginstyle from '../../../styles/loginpage.module.css';
import { searchInAllProduct } from '../../../utils/userAPI';
import SearchBar from '../../searchbar';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
export default function ProductDetails() {
  let query = useQuery();
  let history = useHistory();
  const [showProduct, setShowProduct] = useState([
    {
      id: '1',
      previewurl: '/images/SneakerRed.jpg',
      brand: 'รองเท้ายี่ห้อ',
      Shop: {
        shopName: 'ร้านแมวๆ',
      },
    },
    {
      id: '2',
      previewurl: '/images/SneakerRed.jpg',
      brand: 'รองเท้ายี่ห้อ',
      Shop: {
        shopName: 'ร้านแมวๆ',
      },
    },
    {
      id: '3',
      previewurl: '/images/SneakerRed.jpg',
      brand: 'รองเท้ายี่ห้อ',
      Shop: {
        shopName: 'ร้านแมวๆ',
      },
    },
  ]);
  useEffect(async () => {
    let myobj = {
      brand: query.get('brand'),
      tag: query.get('tag'),
      productfrom: query.get('productfrom'),
    };
    if (!query.get('brand')) delete myobj['brand'];
    if (!query.get('tag')) delete myobj['tag'];
    if (!query.get('productfrom')) delete myobj['productfrom'];
    console.log(myobj);
    let result = await searchInAllProduct({ ...myobj });
    setShowProduct(result);
  }, [query]);
  return (
    <Layout>
      <SearchBar></SearchBar>
      <h2 style={{ alignSelf: 'start' }}>
        คำที่ค้นหา :{' '}
        <span className="colorpink">
          {query.get('brand') ? `brand=${query.get('brand')}` : ''}
        </span>
        <span className="colorpink">
          {query.get('tag') ? `tag=${query.get('tag')}` : ''}
        </span>
        <span className="colorpink">
          {query.get('productfrom')
            ? `productfrom=${query.get('productfrom')}`
            : ''}
        </span>
      </h2>
      <div className="flexproductcontainer">
        {showProduct.map((obj) => (
          <Link to={`/product/${obj.id}`}>
            <img src={obj.previewurl} className="imageresult m-2" alt="img" />
            <br />
            <h3 className="m-0">{obj.brand}</h3>
            <h3 className="m-0">{obj.Shop.shopName}</h3>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
