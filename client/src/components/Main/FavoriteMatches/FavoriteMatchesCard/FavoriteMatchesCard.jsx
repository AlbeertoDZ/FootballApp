import React from "react";
import "./FavoriteMatchesCard.css";

const FavoriteMatchesCard = ({favoriteMatch}) => {
  return <article className="favorite-card">
    <div className="local-team">
      <img src= {favoriteMatch.home_team_logo} alt="home_team_logo" />
      <h4>{favoriteMatch.home_team}</h4>
      <p>{favoriteMatch.home_team_id}</p>
    </div>
    <div className="info-match">
      <h2>{favoriteMatch.home_score} {" - "} {favoriteMatch.away_score}</h2>
      <p>{favoriteMatch.date}</p>
      <p>{"ID partido: "}{favoriteMatch.fixture_id}</p>
    </div>
    <div className="away-team">
      <img src= {favoriteMatch.away_team_logo} alt="away_team_logo" />
      <h4>{favoriteMatch.away_team}</h4>
      <p>{favoriteMatch.away_team_id}</p>
    </div>
  </article>;
};

export default FavoriteMatchesCard;
