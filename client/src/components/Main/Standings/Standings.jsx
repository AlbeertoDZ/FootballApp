import React, {useState, useEffect} from "react";
import axios from "axios";
import StandingCard from "./StandingsCard/StandingsCard.jsx";
import "./Standings.css";

const Standings = () => {
  const [standingsList, setStandingsList] = useState([]);
  useEffect(() => {
    async function fetchStandings() {
      try {
        const res = await axios.get('http://localhost:4000/api/standings');
        setStandingsList(res.data);
      } catch (error) {
        console.error("Error fetching standings:", error);
      }
    }
    fetchStandings();
  }, []);

  return (
    <section className="standings-table-container">
      <div className="standings-header">
        <div>Pos</div>
        <div>Logo</div>
        <div className="team-class">Equipo</div>
        <div>PTS</div>
        <div>PJ</div>
        <div>PG</div>
        <div>PE</div>
        <div>PP</div>
      </div>
      <div className="standings-list">
        {standingsList.length === 0 ? (
          <p>No hay clasificaciones disponibles</p>
        ) : (
          standingsList.map((standings) => (
            <StandingCard key={standings.position + standings.team_name} standings={standings} />
          ))
        )}
      </div>
    </section>
  );
};

export default Standings;
