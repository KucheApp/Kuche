import axios from "axios";

let GetToken = () => {
  let token = window.localStorage.getItem("access_token");
  if (token == undefined) return null;
  return token;
};

let SaveToken = (token) => window.localStorage.setItem("access_token", token);

let GetEmail = () => {
  let email = window.localStorage.getItem("saved_email");
  if (email == undefined) return null;
  return email;
};

let SaveEmail = (email) => window.localStorage.setItem("saved_email", email);

let RejectIfErr = (response) => {
  return new Promise((resolve, reject) => {
    if (response.status !== 200) {
      return reject(response);
    }
    let data = response.data;
    if (data.error) {
      return reject(data.errorMsg);
    }
    delete data["error"];
    return resolve(data);
  });
}

let RegisterNewUser = (email, password, username) => {
  SaveEmail(email);
  return axios.post("/api/signup", {email, password, username})
  .then(RejectIfErr)
  .then(data => SaveToken(data.session.token));
};

let ResetToken = (username, password) => {
  SaveEmail(username);
  return axios({
    url: "/api/token",
    auth: { username, password }
  })
  .then(RejectIfErr)
  .then(data => SaveToken(data.token));
};

let UpdateAccount = (email, password, username) => {
  return axios.put("/api/account", {email, password, username})
  .then(RejectIfErr)
  .then(() => SaveEmail(email));
};

let DeleteAccount = (email, password, username) => {
  let url = "/api/account";
  let auth = {
    username: email,
    password: password
  };
  let method = "delete";
  data = {
    username
  }
  return axios({ url, auth, data })
  .then(RejectIfErr)
  .then(() => {
    SaveEmail("");
    SaveToken("");
  })
};

let Get = (url) => {
  url = "/api" + url;
  let token = GetToken();
  if (token === null) {
    // logout
    return Promise.reject();
  }
  let headers = { "x-access-token": token };
  return axios({ url, headers })
  .then(RejectIfErr);
};

let Post = (url, data) => {
  url = "/api" + url;
  let token = GetToken();
  if (token === null) {
    // logout
    return Promise.reject();
  }
  let headers = { "x-access-token": token };
  let method = "post";
  return axios({ url, method, headers, data })
  .then(RejectIfErr);
};

let Put = (url, data) => {
  url = "/api" + url;
  let token = GetToken();
  if (token === null) {
    // logout
    return Promise.reject();
  }
  let headers = { "x-access-token": token };
  let method = "put";
  return axios({ url, method, headers, data })
  .then(RejectIfErr);
};

let Delete = (url) => {
  url = "/api" + url;
  let token = GetToken();
  if (token === null) {
    // logout
    return Promise.reject();
  }
  let headers = { "x-access-token": token };
  let method = "delete";
  return axios({ url, method, headers })
  .then(RejectIfErr);
};

export default {
  RegisterNewUser,
  ResetToken,
  GetEmail,
  UpdateAccount,
  DeleteAccount,
  GetFood: (id) => Get("/food/" + id),
  GetFoodIn: (location) => Get("/food/in/" + location),
  PostFood: (food) => Post("/food", food),
  UpdateFood: (food) => Put("/food/" + food.id, food),
  DeleteFood: (food) => Delete("/food/" + food.id),
}
