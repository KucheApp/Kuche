import axios from "axios";

export default {
  login: function(state) {
    let {username, password} = state;
    return axios.post("/api/account/verify", {
      username: username,
      password: password
    })
    .then(() => "token")
    .catch(err => {
      console.log(err);
      return "no token";
    });
  },
  registerUser: function(state) {
    let {registerUsername, registerDisplayName, registerPassword} = state;
    return axios.post("/api/account/register", {
      username: registerUsername,
      displayName: registerDisplayName,
      password: registerPassword
    })
    .then(() => "token") // TODO: do tokens for real
    .catch(err => {
      console.log(err);
      return "no token";
    });
  },
}
