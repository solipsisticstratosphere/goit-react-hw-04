import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
import { fetchImages } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (image) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImages(image);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery items={images} />
    </>
  );
}

export default App;
