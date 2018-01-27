import axios from "axios";

let GetToken = () => {
  let token = window.localStorage.getItem("access_token");
  if (token == undefined) return null;
  return token;
};

let SaveToken = (token) => window.localStorage.setItem("access_token", token);

let IfHasToken = () => {
  if (GetToken() === null) return Promise.resolve(false);
  return axios.get("/api/username")
  .then(response => {
    console.log(response)
    return false
    // if (response)
  })
  .catch(err => {
    console.log(err);
    SaveToken("");
    return false;
  })
}

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
};

let RegisterNewUser = (email, password, username) => {
  SaveEmail(email);
  return axios.post("/api/signup", {email, password, username})
  .then(RejectIfErr)
  .then(data => {
    SaveToken(data.session.token);
    return data.session.token;
  });
};

let ResetToken = (email, password) => {
  SaveEmail(email);
  let username = email;
  return axios({
    url: "/api/token",
    auth: { username, password }
  })
  .then(RejectIfErr)
  .then(data => {
    SaveToken(data.token);
    return data.token;
  });
};

let UpdateAccount = (oldEmail, oldPassword, oldUsername, newEmail, newPassword, newUsername) => {
  let url = "/api/account";
  let auth = {
    username: oldEmail,
    password: oldPassword
  };
  let token = GetToken();
  if (token === null) {
    // logout
    return Promise.reject();
  }
  let headers = { "x-access-token": token };
  let method = "put";
  let data = {
    email: newEmail,
    password: newPassword,
    username: newUsername
  };
  return axios({ url, method, auth, headers, data })
  .then(RejectIfErr)
  .then(() => SaveEmail(newEmail));
};

let DeleteAccount = (email, password, username) => {
  let url = "/api/account";
  let auth = {
    username: email,
    password: password
  };
  let token = GetToken();
  if (token === null) {
    // logout
    return Promise.reject();
  }
  let headers = { "x-access-token": token };
  let method = "delete";
  let data = { username };
  return axios({ url, method, auth, headers, data })
  .then(RejectIfErr)
  .then(() => LogOut())
};

let LogOut = () => {
  SaveToken("");
  return Promise.resolve();
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

// let nutrition_heroku_name = "fathomless-chamber-12891";
// let SearchFood = (query) => {
//   let escaped_query = encodeURIComponent(query);
//   let url = `https://${nutrition_heroku_name}.herokuapp.com/search?food=${escaped_query}`;
//   return axios.get(url)
//   .then(response => response.data);
// };
// let SearchFoodById = (id) => {
//   let url = `https://${nutrition_heroku_name}.herokuapp.com/search?id=${id}`;
//   return axios.get(url)
//   .then(response => response.data)
//   .then(results => {
//     if (results.length < 1) return null;
//     return results[0];
//   })
// };

/*
fooditem schema:
id: number [REQUIRED]
name: string [REQUIRED]
location: string ("counter", "fridge", "groceries", etc) [REQUIRED]
quantity: number [REQUIRED]
quanityUnits: string ("lbs", "cans", "boxes") [OPTIONAL]
purchased: date [OPTIONAL]
expires: date [OPTIONAL]
nutritionId: number [OPTIONAL]
*/

export default {
  GetToken,
  RegisterNewUser, // takes email, password, and username as strings. returns a promise that resolves to a new token, and also saves that token to localstorage.
  ResetToken, // takes email and password as strings. returns a promise that resolves to a new token, and also saves that token to localstorage.
  IfHasToken, // takes no arguments, returns true if localstorage token is valid, otherwise false.
  GetEmail, // takes no arguments. returns either the localStorage email or null.
  GetUsername: () => Get("/username"), // takes no arguments. uses saved token to get user's display name.
  UpdateAccount, // takes oldEmail, oldPassword, oldUsername, newEmail, newPassword, newUsername as strings. returns a promise.
  DeleteAccount, // takes email, password, and username as strings. returns a promise.
  LogOut, // takes no arguments.
  GetFood:    (id) => Get("/food/" + id), // id is a number. returns a promise.
  GetFoodIn:  (location) => Get("/food/in/" + location), // location is a string. returns a promise.
  PostFood:   (food) => Post("/food", food), // food is a fooditem object. returns a promise.
  UpdateFood: (food) => Put("/food/" + food.id, food), // food is a fooditem object. returns a promise.
  DeleteFood: (food) => Delete("/food/" + food.id), // food is a fooditem object. returns a promise.
  GetFoodExpiringSoon: () => Get("/food/expiring/soon"), // returns a promise that resolves to an object with a fooditems field.
  // SearchFood, // takes a query string. returns a promise that resolves to a list of possible items with nutrition information.
  // SearchFoodById, // takes an id as number or string. returns a promise that resolves to a list of a single item with nutrition information.

  getRecipes: (query) => {
    return axios.get("/api/recipes", { params: { q: query}})
    .then( response => response.data)
  },


}
