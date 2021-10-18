import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './content.css';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../../store';
import PropTypes from 'prop-types';
import { getOwnData, refreshToken, logout } from '../../../utils/userAPI';
function Content(props) {
  let history = useHistory();
  const [token, setToken] = useRecoilState(tokenState);
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState({
    name: '',
    surname: '',
    address: '',
  });

  useEffect(() => {
    getOwnData(token)
      .then((res) => res.json())
      .then((res) => {
        setData({ name: res.firstName, surname: res.lastName });
      });
  }, []);
  const redirectToCreateShop = () => {
    history.push('/ShopRegister');
  };
  const Toshop = (shopid) => {
    history.push('/shop/' + shopid);
  };

  const reToken = () => {
    refreshToken(token)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log('error = ', e));
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
              ชื่อ {data.name} นามสกุล {data.surname}{' '}
              {data.address ? 'ที่อยู่ {data.address}' : ''}
            </div>

            <div className="flexitem">
              <button
                type="button"
                id="sidebarCollapse"
                class="btn btn-info"
                onClick={() => {
                  setToggle((toggle) => !toggle);
                }}
              >
                <i class="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
              </button>
            </div>
            <div className="flexitem">
              <button
                type="button"
                id="sidebarCollapse"
                class="btn btn-info"
                onClick={() => {
                  redirectToCreateShop();
                }}
              >
                <i class="fas fa-align-left"></i>
                <span>Create Shop</span>
              </button>
            </div>
            <div className="flexitem">
              <button
                type="button"
                id="sidebarCollapse"
                class="btn btn-info"
                onClick={() => {
                  Toshop(5);
                }}
              >
                <i class="fas fa-align-left"></i>
                <span>Shop5</span>
              </button>
            </div>
            <div className="flexitem">
              <button
                type="button"
                id="sidebarCollapse"
                class="btn btn-info"
                onClick={() => {
                  reToken();
                }}
              >
                <i class="fas fa-align-left"></i>
                <span>RefreshToken</span>
              </button>
            </div>
            <div className="flexitem">
              <button
                type="button"
                id="sidebarCollapse"
                class="btn btn-info"
                onClick={() => {
                  logout(token, setToken);
                }}
              >
                <i class="fas fa-align-left"></i>
                <span>Logout</span>
              </button>
            </div>
            <Link to="/admin/RolePermission">
              <div className="flexitem">
                <button type="button" id="sidebarCollapse" class="btn btn-info">
                  <i class="fas fa-align-left"></i>
                  <span>Manage Role</span>
                </button>
              </div>
            </Link>
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
        {props.children}
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
