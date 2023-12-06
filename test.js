import fetch from "node-fetch";

(function test(params) {
  let data = {
    userName: "test123",
    password: "test123",
  };

  let globHost = "http://127.0.0.1:4001";

  fetch(`${globHost}/users/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
})();
