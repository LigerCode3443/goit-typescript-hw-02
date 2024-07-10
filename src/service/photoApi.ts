import axios from "axios";
import { Photo } from "../App";

axios.defaults.baseURL = "https://api.unsplash.com";

export interface PhotosProps {
  results: Photo[];
  total: number;
  total_pages: number;
}

export const getPhotos = async (
  query: string,
  page: number
): Promise<PhotosProps> => {
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
