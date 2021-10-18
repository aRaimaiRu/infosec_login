import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../../store';
import './content.css';
import PropTypes from 'prop-types';
import {
  getShop,
  getOwnData,
  UserContact,
  getIsContact,
  changeShopStatus,
} from '../../../utils/userAPI';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
function Content(props) {
  const [token, setToken] = useRecoilState(tokenState);
  console.log('shop Token =', token);
  const [toggle, setToggle] = useState(true);
  const [isAlreadyContact, setIsAlreadyContact] = useState(false);

  const [data, setData] = useState({
    name: '',
    surname: '',
    address: '',
    status: '',
    ownerId: '',
  });
  const [situation, setSituation] = useState(0);
  let { shopid } = useParams();

  //1 ownShop
  //2 Customer see normal Shop
  //3 Admin see Shop

  useEffect(async () => {
    let res = await getShop(shopid, token);
    let resjson = await res.json();
    setData({ ...resjson });
    let res2 = await getOwnData(token.token);
    let res2json = await res2.json();
    if (res2json.id == data.ownerId) {
      setSituation(1);
    } else if (res2json.RoleId == 3) {
      setSituation(3);
    } else {
      setSituation(2);
      let res3 = await getIsContact(shopid, token);
      let res3json = await res3.json();
      if (res3json.isAlreadyContact == 1) setIsAlreadyContact(true);
    }
    // getShop(shopid)
    // .then(res=>res.json())
    // .then(res=>{
    //     setData({...res})
    //     return res
    // })
    // .then(res=>{
    //     console.log(data)
    // })
    // .then(res=>{
    //     genshop()
    //     .them
    // })
    // .catch(e=>{
    //     console.log(e)
    // })

    //get shop data from url
    //check if this user is owner
    //switch case
    // ownShop
    // Customer see normal Shop
    // Admin see Shop
  }, []);
  const Contact = async () => {
    let res = await UserContact(shopid, token);
    let resjson = await res.json();
    if (resjson === 'successful contact shop') {
      setIsAlreadyContact(true);
    }
  };

  const changeShopStatusCall = async () => {
    let res = await changeShopStatus(
      shopid,
      data.status == 'pending'
        ? 'closed'
        : data.status == 'closed'
        ? 'pending'
        : '',
      token
    );
    let resjson = await res.json();
    console.log('change shop status =', resjson);
  };
  return (
    <div class="wrapper">
      <nav
        id="sidebar"
        className={toggle ? 'active bd-sidebar' : 'bd-sidebar'}
        style={{ position: 'sticky', height: '970px' }}
      >
        <div class="sidebar-header">
          <h3>Contact</h3>
        </div>

        <ul class="list-unstyled components">
          <li>
            <a href="#">Shop name 1</a>
          </li>
          <li>
            <a href="#">Shop name 2</a>
          </li>
          <li>
            <a href="#">Shop name 3</a>
          </li>
        </ul>
      </nav>

      {/* <!-- Page Content  --> */}
      <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid flexstr">
            <div className="flexitem">
              {data.name ? `ชื่อ ${data.name}` : ''}{' '}
              {data.surname ? `นามสกุล ${data.surname}` : ''}{' '}
              {data.address ? `ที่อยู่ ${data.address}   ` : ''}
              {data.status ? `status:${data.status}` : ''}
            </div>

            <div className="flexitem">
              {situation == 2 && (
                <button
                  type="button"
                  id="sidebarCollapse"
                  class="btn btn-info"
                  onClick={() => {
                    Contact();
                  }}
                  disabled={isAlreadyContact}
                >
                  <i class="fas fa-align-left"></i>
                  <span>Contact</span>
                </button>
              )}

              {situation == 3 && (
                <button
                  type="button"
                  id="sidebarCollapse"
                  class="btn btn-info"
                  onClick={() => {
                    changeShopStatusCall();
                  }}
                >
                  <i class="fas fa-align-left"></i>
                  <span>
                    {
                      (shopid,
                      data.status == 'pending'
                        ? 'closed'
                        : data.status == 'closed'
                        ? 'pending'
                        : '')
                    }
                  </span>
                </button>
              )}
            </div>
            {/* <div className="flexitem">
                    <button type="button" id="sidebarCollapse" class="btn btn-info" onClick={()=>{setToggle(toggle=>!toggle)}} >
                        <i class="fas fa-align-left"></i>
                        <span>Toggle Contact</span>
                    </button>
                    </div> */}
            {/* <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button> */}

            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                        </ul>
                    </div> */}
          </div>
        </nav>

        {/* <h2>Collapsible Sidebar Using Bootstrap 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
      </div>
    </div>
  );
}

export default Content;
