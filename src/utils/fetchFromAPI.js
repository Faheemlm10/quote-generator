import axios from "axios";
const BASE_URL = "https://api.adviceslip.com/advice";

const options = {
  url: BASE_URL,
};

export const fetchFromAPI = async () => {
  const { data } = await axios.get(`${BASE_URL}`, options);
  return data;
};
