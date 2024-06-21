import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Film } from "./film.interface"; 
import "./styles.css"; 
const FilmDetail: React.FC = () => {
  const { filmId } = useParams<{ filmId: string }>();
  const [filmDetails, setFilmDetails] = useState<Film | null>(null);
  const [addToCartSuccess, setAddToCartSuccess] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`https://ghibliapi.vercel.app/films/${filmId}`)
      .then((response) => setFilmDetails(response.data))
      .catch((error) => console.error("Error fetching film details:", error));
  }, [filmId]);

  const handleAddToCart = () => {
    
    setAddToCartSuccess(true);
    setTimeout(() => setAddToCartSuccess(false), 3000); 
  };

  if (!filmDetails) {
    return <div className="container">Loading...</div>; 
  }

  return (
    <div className="container film-details">
      <div className="film-content">
        
        <img
          src={filmDetails.image}
          alt={filmDetails.title}
          className="film-image1"
        />
        <h2>{filmDetails.title}</h2>
        <p>{filmDetails.description}</p>
        <p>
          <strong>Director:</strong> {filmDetails.director}
        </p>
        <p>
          <strong>Producer:</strong> {filmDetails.producer}
        </p>
        <p>
          <strong>Release Date:</strong> {filmDetails.release_date}
        </p>
        <button className="add-to-cart-button1" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {addToCartSuccess && (
          <p className="add-to-cart-success">Added to cart successfully!</p>
        )}
        <Link to="/" className="back-link">

          Go Back
        </Link>
      </div>
    </div>
  );
};

export default FilmDetail;
