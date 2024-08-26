import axios from "axios";

export default axios.create({
  baseURL: "http://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer ",
  },
});
