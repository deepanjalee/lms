import axios from "axios";

const lmsAPIHost = "http://localhost:3001";

const instance = axios.create({
  baseURL: lmsAPIHost
});

export default instance;