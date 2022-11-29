import axios from "axios";

let baseURL = "http://10.233.7.105:2333/api/v1/";

const http = axios.create({
  baseURL: baseURL,
});

export default http;
