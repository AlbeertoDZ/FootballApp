import React, {useState, useEffect} from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import StandingCard from "./StandingsCard/StandingsCard.jsx";

const Standings = () => {

  const [standingsList, setStandingsList] = useState([]);
  useEffect(() => {
    async function fetchStandings() {
      try {
        const res = await axios.get('http://localhost:4000/api/standings');
        const data = res.data;
        console.log(data);
        setStandingsList(data);
      } catch (error) {
        console.error("Error fetching standings:", error);
      }
    }
    fetchStandings();
  }, []);

  const paintStandings = () => {
    if (standingsList.length === 0) {
      return <p>No hay clasificaciones disponibles</p>;
    }
    return standingsList.map((standings) => {
      return <StandingCard key={uuidv4()} standings={standings}/>
    });
  }

  return <>
    <section className="standings-base-data">
    <p>Posicion</p>
    <p>Logo</p>
    <p>Equipo</p>
    <p>PTS</p>
    <p>PJ</p>
    <p>PG</p>
    <p>PE</p>
    <p>PP</p>
    </section>
    <section className="standings-list-container">
      {paintStandings()}
    </section>
  </>;
};

export default Standings;
