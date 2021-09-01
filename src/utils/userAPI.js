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



export { login,register,getOwnData };