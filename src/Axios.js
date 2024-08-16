import axios from "axios";
import { baseurl } from "./Const/const";
const instance = axios.create({
    baseURL: baseurl,
  });
  export default instance;