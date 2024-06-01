import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "Nj55OICODi_12b9y-MIoxcRFNAACCVH8GcJF8bAvTIY";

export type APIresponse = {
  results: APIresults[],
  total: number,
  total_pages: number,
};

export type APIresults = {
  alt_description: string,
  urls: { small: string, regular: string },
  user: { name: string, location: string, id: string },
  likes: number,
};

export const fetchData = async (
  searchQuery: string,
  currentPage: number
): Promise<APIresults[]> => {
  try {
    const response: AxiosResponse<APIresponse> = await axios.get(
      "/search/photos",
      {
        params: {
          query: searchQuery,
          page: currentPage,
          per_page: 12,
          client_id: ACCESS_KEY,
          orientation: "landscape",
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
