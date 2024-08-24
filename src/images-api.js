import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (photo) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: photo,
      client_id: "pIMlVlFK1OaNDAkTEmPjh4t3RJ2X6ExZNYwv70Dce2c", // Your API key
    },
  });

  // Return the relevant results
  return response.data.results;
};
