import { handleResponse } from "../_helpers/handle-response";

const fetch = require("node-fetch");

const apiUrl = "http://127.0.0.1:8080";

export function getUserInfo(userId) {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json;charset=UTF-8",
      "Content-Type": "application/json",
      Cache: "no-cache",
    },
  };
  return fetch(`${apiUrl}/users/${userId}`, requestOptions).then(
    handleResponse
  );
}

export function getUserEducations(userId) {
  const requestOptions = {
    method: "GET",
    headers: {
      Accept: "application/json;charset=UTF-8",
      "Content-Type": "application/json",
      Cache: "no-cache",
    },
  };
  return fetch(`${apiUrl}/users/${userId}/educations`, requestOptions).then(
    handleResponse
  );
}
