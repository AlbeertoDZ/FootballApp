import React from "react";
import "./MatchesCard.css";

const MatchesCard = ({match}) => {
  // console.log(match);
  return <article className="match-card">
    <div className="local-team">
      <img src= {match.home_team_logo} alt="home_team_logo" />
      <h4>{match.home_team}</h4>
      <p>{match.home_team_id}</p>
    </div>
    <div className="info-match">
      <h2>{match.home_score}{" - "} {match.away_score}</h2>
      <p>{match.date}</p>
      <p>{"ID partido: "}{match.fixture_id}</p>
    </div>
    <div className="away-team">
      <img src= {match.away_team_logo} alt="away_team_logo" />
      <h4>{match.away_team}</h4>
      <p>{match.away_team_id}</p>
    </div>
  </article>;
};

export default MatchesCard;
