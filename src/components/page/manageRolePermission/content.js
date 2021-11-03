import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useJwt } from 'react-jwt';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../../store';
import PropTypes from 'prop-types';
import {
  getOwnData,
  refreshToken,
  logout,
  getAllRole,
  updateRolePermission,
} from '../../../utils/userAPI';

function Content(props) {
  let history = useHistory();
  const [token, setToken] = useRecoilState(tokenState);
  const { decodedToken, isExpired } = useJwt(token);
  const [toggle, setToggle] = useState(true);
  const [data, setData] = useState();

  useEffect(async () => {
    getAllRole(token.token).then((res) => {
      setData(res);
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

  const handleChange = (changeTo, ind, key) => {
    setData((prevState) =>
      prevState.map((s, i) => (i == ind ? { ...s, [key]: changeTo } : s))
    );
  };
  return (
    <div>
      <p>Column = Table Name</p>
      <p>Field = CRUD </p>
      <p>0 = not permit </p>
      <p>1 = permit to self data in Table</p>
      <p>2 = permit To all Data in Table </p>
      {data && (
        <table class="table table-dark table-hover" style={{ width: '500px' }}>
          <tr>
            {Object.keys(data[0]).map((h) => (
              <th>{h}</th>
            ))}
            <th>Action</th>
          </tr>
          {Array(data.length)
            .fill(1)
            .map((r, i) => (
              <tr>
                {Object.keys(data[i]).map((d) => (
                  <td>
                    <input
                      type="text"
                      onChange={(e) => handleChange(e.target.value, i, d)}
                      value={data[i][d]}
                    />
                  </td>
                ))}
                <button
                  onClick={() => {
                    updateRolePermission(token.token, data[i]);
                  }}
                >
                  Update {data[i].id}
                </button>
              </tr>
            ))}
        </table>
      )}
    </div>
  );
}

export default Content;
