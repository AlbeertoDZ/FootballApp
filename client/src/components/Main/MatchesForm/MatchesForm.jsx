import React, {useState} from "react";

const MatchesForm = () => {

  const [values , setValues] = useState({
    home_team: '',
    away_team: '',
    home_score: '',
    away_score: '',
    date: ''
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      home_team: '',
      away_team: '',
      home_score: '',
      away_score: '',
      date: ''
    }); 
  };

  return <div className="form-matches">
    <h2>Nuevo Partido</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="homeTeam">Equipo Local</label>
        <input type="text" name="homeTeam" id="homeTeam" value={values.home_team} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="awayTeam">Equipo Visitante</label>
        <input type="text" name="awayTeam" id="awayTeam" value={values.away_team} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="homeScore">Goles Local</label>
        <input type="number" name="homeScore" id="homeScore" value={values.home_score} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="awayScore">Goles Visitante</label>
        <input type="number" name="awayScore" id="awayScore" value={values.away_score} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="date">Fecha</label>
        <input type="date" name="date" id="date" value={values.date} onChange={handleChange} />
      </div>
      <button type="submit">Guardar Partido</button>
    </form>
  </div>;
};

export default MatchesForm;
