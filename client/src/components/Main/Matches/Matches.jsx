import React, {useState, useEffect} from "react";
import axios from "axios";
import{ v4 as uuidv4 } from "uuid";
import MatchesCard from "./MatchesCard/MatchesCard.jsx";

const Matches = () => {
  
  const [matchesList, setMatchesList] = useState([]);
  
  useEffect(() => {
    async function fetchMatches() {
      try {
        const res = await axios.get('http://localhost:4000/api/matches');
        setMatchesList(res.data);
        // console.log(res.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    }
    fetchMatches();
  }, []);
  
  const paintMatches = () => {
  if (matchesList.length === 0) {
    return <p>No hay partidos disponibles</p>;
  }
  return matchesList.map((match) => {
    return <MatchesCard key={uuidv4()} match={match} />;
    });
  }

  
  // console.log(matchesList);
  return <>
    <section className="matches-list-container">
      {paintMatches()}
    </section>
    </>;
};

export default Matches;
