import React, {useState,useEffect} from "react";
import axios from "axios";
import{ v4 as uuidv4 } from "uuid";
import FavoriteMatchesCard from "./FavoriteMatchesCard/FavoriteMatchesCard.jsx";

const FavoriteMatches = () => {

  const [favoriteMatchesList, setFavoriteMatchesList] = useState([]);
  
  useEffect(() => {
    async function fetchFavoriteMatches() {
      try {
        const res = await axios.get('http://localhost:4000/api/favoriteMatches');
        setFavoriteMatchesList(res.data);
        // console.log(res.data);
      } catch (error) {
        console.error("Error fetching favorite matches:", error);
      }
    }
    fetchFavoriteMatches();
  }, []);
  
  const paintFavoriteMatches = () => {
  if (favoriteMatchesList.length === 0) {
    return <p>No hay partidos favoritos disponibles</p>;
  }
  return favoriteMatchesList.map((favoriteMatch) => {
    return <FavoriteMatchesCard key={uuidv4()} favoriteMatch={favoriteMatch} />;
    });
  }


  return <>
  <section className="favorite-list-container">
  {paintFavoriteMatches()}
  </section>
  </>;
};

export default FavoriteMatches;
