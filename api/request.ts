import axios from "axios";

const httpInstance = axios.create({
  baseURL: "",
  timeout: 10000,
});
