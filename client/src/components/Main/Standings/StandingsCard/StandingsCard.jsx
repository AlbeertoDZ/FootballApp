import React from "react";
import "./StandingsCard.css";

const StandingsCard = ({standings}) => {
  return (
    <article className="standings-row">
      <div className="team-position">{standings.position}</div>
      <div>
        <img src={standings.logo} alt="logo-team" className="team-logo" />
      </div>
      <div className="team-name">{standings.team_name}</div>
      <div className="team-points">{standings.points}</div>
      <div className="team-played">{standings.games_played}</div>
      <div className="team-win">{standings.games_win}</div>
      <div className="team-draw">{standings.games_draw}</div>
      <div className="team-lost">{standings.games_lost}</div>
    </article>
  );
};

export default StandingsCard;
