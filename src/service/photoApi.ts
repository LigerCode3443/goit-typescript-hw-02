import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

// interface PhotosProps {
//   results: [];
//   total: number;
//   total_pages: number;
// }

export const getPhotos = async (query: string, page: number) => {
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
