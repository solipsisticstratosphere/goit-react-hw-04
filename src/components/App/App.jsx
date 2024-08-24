import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
import { fetchImages } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true);
        // 2. Використовуємо HTTP-функцію
        const data = await fetchImages("react");
        setImages(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  return (
    <>
      <SearchBar />
      <ImageGallery items={images} />
    </>
  );
}

export default App;
