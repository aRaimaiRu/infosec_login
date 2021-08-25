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



export { login,register };