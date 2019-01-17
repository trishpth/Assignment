// import Libraries
import axios from 'axios';
import config from "../../../../config/config.json";

// API Users static class
export default class SignupAPI {
  static userSignup(action) {

    return new Promise(resolve => {
      axios.post(config.ip, action.payload,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
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
