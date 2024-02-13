import axios from "axios";

export const getReq = () => {
  return axios.get("Host:/sample");
}