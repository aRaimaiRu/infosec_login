async function register(data) {
    return fetch(`http://${process.env.HOSTAPI || "localhost"}:${process.env.PORT || "3002"}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...data}),
    });
  }

  async function login(data) {
    return fetch(`http://${process.env.HOSTAPI || "localhost"}:${process.env.PORT || "3002"}/api/user/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...data}),
    });
  }

  async function getOwnData() {
    return fetch(`http://${process.env.HOSTAPI || "localhost"}:${process.env.PORT || "3002"}/api/user/current`, {
      method: "GET",
      headers: {
        "Authorization": 'Bearer '+localStorage.getItem("x-auth-token").replace (/"/g,''),
        "Content-Type": "application/json",
      },
    });
  }

  // http://localhost:3002/api/shop/2
  async function getShop(shopid) {
    return fetch(`http://${process.env.HOSTAPI || "localhost"}:${process.env.PORT || "3002"}/api/shop/${shopid}`, {
      method: "GET",
      headers: {
        "Authorization": 'Bearer '+localStorage.getItem("x-auth-token").replace (/"/g,''),
        "Content-Type": "application/json",
      },
    });
  }

  // http://localhost:3002/api/shop/contact/1
  async function getIsContact(shopid) {
    return fetch(`http://${process.env.HOSTAPI || "localhost"}:${process.env.PORT || "3002"}/api/shop/contact/${shopid}`, {
      method: "GET",
      headers: {
        "Authorization": 'Bearer '+localStorage.getItem("x-auth-token").replace (/"/g,''),
        "Content-Type": "application/json",
      },
    });
  }
  // http://localhost:3002/api/shop/contact/2(:shopid)
  async function UserContact(shopid) {
    return fetch(`http://${process.env.HOSTAPI || "localhost"}:${process.env.PORT || "3002"}/api/shop/contact/${shopid}`, {
      method: "POST",
      headers: {
        "Authorization": 'Bearer '+localStorage.getItem("x-auth-token").replace (/"/g,''),
        "Content-Type": "application/json",
      },
    });
  }
// http://localhost:3002/api/shop/approve
async function changeShopStatus(shopid,status) {
  return fetch(`http://${process.env.HOSTAPI || "localhost"}:${process.env.PORT || "3002"}/api/shop/approve`, {
    method: "POST",
    headers: {
      "Authorization": 'Bearer '+localStorage.getItem("x-auth-token").replace (/"/g,''),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      shopid,
      status
  
  }),
  });
}


export { login,register,getOwnData,getShop ,UserContact,getIsContact};