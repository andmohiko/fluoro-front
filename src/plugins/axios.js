import axios from "axios";

export default axios.create({
  baseURL: process.env.ENV == 'develop'
    ? process.env.DEV_BASE_URL
    : process.env.PROD_BASE_URL
})
