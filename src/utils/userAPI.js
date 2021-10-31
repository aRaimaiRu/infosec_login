// import { useRecoilState } from 'recoil';
// import { tokenState } from '../store';

const HOSTAPI = '';

async function registerapi(data) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
  });
}

async function login(data) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/user/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ ...data }),
  });
}

async function getOwnData(token) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/user/current`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token.replace(/"/g, ''),
      'Content-Type': 'application/json',
    },
  });
}

// http://localhost:3002:3002/api/shop/2
async function getShop(shopid) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/shop/${shopid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}

// http://localhost:3002:3002/api/shop/contact/1
async function getIsContact(shopid, token) {
  return fetch(
    `http://${HOSTAPI || 'localhost:3002'}/api/shop/contact/${shopid}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token.replace(/"/g, ''),
        'Content-Type': 'application/json',
      },
    }
  );
}
// http://localhost:3002:3002/api/shop/contact/2(:shopid)
async function UserContact(shopid, token) {
  return fetch(
    `http://${HOSTAPI || 'localhost:3002'}/api/shop/contact/${shopid}`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token.replace(/"/g, ''),
        'Content-Type': 'application/json',
      },
    }
  );
}
// http://localhost:3002:3002/api/shop/approve
async function changeShopStatus(shopid, status, token) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/shop/approve`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token.replace(/"/g, ''),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      shopId: shopid,
      status,
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}
// http://localhost:3002:3002/api/user/register/shop
async function registerShop({ name, address }, token) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/user/register/shop`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token.replace(/"/g, ''),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      address,
    }),
  });
}

// http://localhost:3002:3002/api/user/refreshToken
async function refreshToken() {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/user/refreshToken`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}

async function callrefreshToken(setToken) {
  refreshToken()
    .then((res) => res.json())
    .then((res) => {
      if (res.token) {
        setToken(res);
      } else {
        console.log(res.message);
      }
      return res;
    })
    .catch((e) => alert(e));
}

// http://localhost:3002:3002/api/user/refreshToken
async function logout(setToken) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/user/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((res) => res.json())
    .then((res) => {
      setToken({});
      console.log('res  logout=', res);
      alert('logout', res);
      return res;
    })
    .catch((e) => alert(e));
}

// http://localhost:3002:3002/api/role/
async function getAllRole(token) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/role/`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token.replace(/"/g, ''),
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}
// http://localhost:3002:3002/api/role/update
async function updateRolePermission(token, data) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/role/update`, {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + token.replace(/"/g, ''),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
    credentials: 'include',
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}
// http://localhost:3002:3002/api/user/sendforgetpasswordemail
async function forgotpassword(username) {
  return fetch(
    `http://${HOSTAPI || 'localhost:3002'}/api/user/sendforgetpasswordemail`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
      credentials: 'include',
    }
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}
// http://localhost:3002:3002/api/user/repassword
async function resetpassword(token, data) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/user/repassword`, {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + token.replace(/"/g, ''),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
    credentials: 'include',
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}

// http://localhost:3002:3002/api/shop/register
async function realRegisterShop(token, data) {
  let myformdata = new FormData();
  for (let key in data) {
    myformdata.append(key, data[key]);
  }
  myformdata.set('logo', data.logo[0]);
  myformdata.set('promptPayImg', data.promptPayImg[0]);
  myformdata.set('IDcardImage', data.IDcardImage[0]);

  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/shop/register`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token.replace(/"/g, ''),
    },
    body: myformdata,
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}
async function getOwnShop(token) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/shop/OwnShop`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token.replace(/"/g, ''),
    },
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}

async function addProduct(token, data) {
  console.log('TEST api add product data =', data);
  let myformdata = new FormData();
  for (let key in data) {
    myformdata.append(key, data[key]);
  }
  myformdata.set('allsize', JSON.stringify(data.allsize));
  myformdata.set('previewurl', data.previewurl);

  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/product/add`, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token.replace(/"/g, ''),
    },
    body: myformdata,
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}

// http://localhost:3002/api/product/4
async function getAShop(id) {
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/shop/${id}`, {
    method: 'GET',
    headers: {},
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}

// http://localhost:3002/api/product/4
async function getOrderProduct(token, id) {
  return fetch(
    `http://${HOSTAPI || 'localhost:3002'}/api/product/order/${id}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token.replace(/"/g, ''),
      },
    }
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}

// http://localhost:3002/api/shop/getShopStatus/:shopstatus
async function getShopStatus(token, shopstatus) {
  return fetch(
    `http://${
      HOSTAPI || 'localhost:3002'
    }/api/shop/getShopStatus/${shopstatus}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token.replace(/"/g, ''),
      },
    }
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}

// http://localhost:3002/api/shop/updateShop
async function changeOwnShopLogo(token, data) {
  let myformdata = new FormData();
  for (let key in data) {
    myformdata.append(key, data[key]);
  }
  myformdata.set('logo', data.logo);
  return fetch(`http://${HOSTAPI || 'localhost:3002'}/api/shop/updateShop`, {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer ' + token.replace(/"/g, ''),
    },
    body: myformdata,
  })
    .then((data) => data.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((e) => alert(e));
}
export {
  login,
  registerapi,
  getOwnData,
  getShop,
  UserContact,
  getIsContact,
  changeShopStatus,
  registerShop,
  refreshToken,
  callrefreshToken,
  logout,
  getAllRole,
  updateRolePermission,
  forgotpassword,
  resetpassword,
  realRegisterShop,
  getOwnShop,
  addProduct,
  getAShop,
  getOrderProduct,
  getShopStatus,
  changeOwnShopLogo,
};
