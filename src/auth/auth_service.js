import axios from "axios";

const url = 'http://localhost:4000';

/**
 * Sends user information to backend to create new user. 
 * @param {Object} user New user object with keys for username, email, and password.
 */
const signup = function (user) {
    return axios.post(url + "/signup", user)
        .then(response => {
            console.log(response.data);
            return response.data;
        }).catch(error => {
            console.log(error);
        });
}

/**
 * Sends user information to backend to get JSON auth token and sign in user. 
 * @param {Object} user User object with keys for email and password.
 */
const login = function (user) {
    return axios.post(url + "/login", user)
        .then(response => {
            console.log(response.data);
            if (response.data.token) {
                localStorage.setItem("uid", JSON.stringify(response.data));
            }
            return response.data;
        }).catch(error => {
            console.log(error);
        });
}

/**
 * Removes user's token from client-side local storage. 
 */
const logout = function () {
    localStorage.removeItem("uid");
}

/**
 * Retrieves and parses user token from client-side local storage into JS object. 
 */
const getCurrentUser = function () {
    return JSON.parse(localStorage.getItem("uid"));
}

const auth_service = {
    signup,
    login,
    logout,
    getCurrentUser,
}

export default auth_service;