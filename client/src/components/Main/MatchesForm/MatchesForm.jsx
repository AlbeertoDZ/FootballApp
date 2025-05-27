import React, { useState } from "react";
import axios from "axios";
import "./MatchesForm.css";

const MatchesForm = () => {

  const [values, setValues] = useState({
    home_team: '',
    home_team_id: '',
    home_team_logo: '',
    away_team: '',
    away_team_id: '',
    away_team_logo: '',
    home_score: '',
    away_score: '',
    date: ''
  });

  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/matches', values);
      setSuccessMessage("¡Partido guardado correctamente!");
      setValues({
        home_team: '',
        home_team_id: '',
        home_team_logo: '',
        away_team: '',
        away_team_id: '',
        away_team_logo: '',
        home_score: '',
        away_score: '',
        date: ''
      });
      setTimeout(() => setSuccessMessage(""), 3000)
    } catch (error) {
      console.error("Error guardando el partido:", error);
    }
  };
  //Agregar placeholders a los inputs
  return <section className="form-matches">
    <h2>Nuevo Partido</h2>
    {successMessage && <p className="success-message">{successMessage}</p>}
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="homeTeam">Equipo Local</label>
        <input type="text" name="home_team" id="homeTeam" placeholder="Introduce equipo" value={values.home_team} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="homeTeam_ID">ID Equipo Local</label>
        <input type="number" name="home_team_id" id="homeTeam_ID" placeholder="Introduce ID" value={values.home_team_id} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="homeTeamLogo">Logo Equipo Local</label>
        <input type="url" name="home_team_logo" id="homeTeamLogo" placeholder="Introduce Url logo" value={values.home_team_logo} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="awayTeam">Equipo Visitante</label>
        <input type="text" name="away_team" id="awayTeam" placeholder="Introduce equipo" value={values.away_team} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="awayTeam_ID">ID Equipo Visitante</label>
        <input type="number" name="away_team_id" id="awayTeam_ID" placeholder="Introduce ID" value={values.away_team_id} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="awayTeamLogo">Logo Equipo Visitante</label>
        <input type="url" name="away_team_logo" id="awayTeamLogo" placeholder="Introduce Url logo" value={values.away_team_logo} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="homeScore">Goles Local</label>
        <input type="number" name="home_score" id="homeScore" placeholder="Introduce nº goles" value={values.home_score} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="awayScore">Goles Visitante</label>
        <input type="number" name="away_score" id="awayScore" placeholder="Introduce nº goles" value={values.away_score} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="date">Fecha</label>
        <input type="date" name="date" id="date" value={values.date} onChange={handleChange} />
      </div>
      <button type="submit" className="btn-submit">Guardar Partido</button>
    </form>
  </section>;
};

export default MatchesForm;
