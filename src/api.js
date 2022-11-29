import axios from "axios";

let baseURL = "http://10.233.5.180:2333/api/v1/register";

const http = axios.create({
  baseURL: baseURL,
});

export default http;
