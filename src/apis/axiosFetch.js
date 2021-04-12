import axios from "axios";
import { URL } from "../constants";

export default axios.create({
  baseURL: URL,
});
