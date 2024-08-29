import axios from "axios";
export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbum = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchNewAlbum = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchFilters = async () => {
  try {
    const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    console.log(response.data);
    return response.data.data;
  } catch (e) {
    console.error(e);
  }
};
