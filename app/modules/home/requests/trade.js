// import Libraries
import axios from 'axios';
import config from "../../../../config/config.json";

var loginInstance = axios.create({
  baseURL: config.ip,
  headers: {
    'Content-Type': 'application/json'
  }
});

// API Users static class
export default class TradeAPI {

  static fetchUsers(action) {
    //console.log(action.payload.token)
    //loginInstance.defaults.headers['Authorization'] = action.payload.token;
    return new Promise(resolve => {
      loginInstance.get('/home')
    //  axios.get(config.ip + '/home',{headers: {"Access-Control-Allow-Origin": "*",'Content-Type': 'application/json','Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiYWNjTmFtZSI6ImF5dXNoaS03ZGY1N2YzaDJjIiwiaWF0IjoxNTQxMTQzMTMxLCJleHAiOjE1NDEyMjk1MzF9.5ZEn9LldAPtEhHT03-44OPkc9Z5RE_2Y-9SlNvTvSnI'}})
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          resolve(error.response)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          let newError = {
            message: "Something Went Wrong",
            status: 500
          }
          console.log(error.request);
          resolve(newError)
        } else {
          // Something happened in setting up the request that triggered an Error
          let newError = {
            message: "Something Went Wrong",
            status: 501
          }
          console.log(error.config);
          resolve(newError)
        }
      });
    });
  }
}
