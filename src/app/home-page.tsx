import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styles.css"; 
interface Film {
  id: string;
  title: string;
  image: string;
  price: number;
}

const HomePage: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")
      .then((response) => {
       
        const filmsWithPrice = response.data.map((film: any) => ({
          ...film,
          price: Math.floor(Math.random() * 100) + 1, 
        }));
        setFilms(filmsWithPrice);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching films:", error);
        setError("Failed to fetch films. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (filmId: string) => {

    console.log(`Added film with ID ${filmId} to cart`);
    
  };

  if (loading) {
    return <div className="container">Loading...</div>; 
  }

  if (error) {
    return <div className="container">{error}</div>;
  }

  return (
    <div className="container home-page">
      {films.map((film) => (
        <div key={film.id} className="film-item">
          <Link to={`/${film.id}`}>
            <img src={film.image} alt={film.title} className="film-image" />
            <p className="film-title">{film.title}</p>
          </Link>
          <p className="film-price">${film.price.toFixed(2)}</p>
          <button
            className="add-to-cart-button"
            onClick={() => handleAddToCart(film.id)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
