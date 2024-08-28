import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (photo, page = 1) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: photo,
      page: page,
      per_page: 10,
      client_id: "pIMlVlFK1OaNDAkTEmPjh4t3RJ2X6ExZNYwv70Dce2c",
    },
  });

  return {
    results: response.data.results,
    total_pages: response.data.total_pages,
  };
};
