import React from "react";

const StandingsCard = ({standings}) => {
  return <article className="standings-card">
    <div>
      <p>{standings.position}</p>
      <img src={standings.logo} alt="logo-team" />
      <p>{standings.team_name}</p>
      <p>{standings.points}</p>
      <p>{standings.games_played}</p>
      <p>{standings.games_win}</p>
      <p>{standings.games_draw}</p>
      <p>{standings.games_lost}</p>
    </div>
    </article>;
};

export default StandingsCard;
