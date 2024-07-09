import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getPhotos = async (query, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      client_id: "d-kSS07CZXsVzl7MXbW3GxFp__cP840oMtAXN6qEo6o",
      query,
      page,
      per_page: 9,
    },
  });

  return data;
};
