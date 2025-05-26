import React, {useState} from "react";
import axios from "axios"

const FavoriteMatchesForm = () => {

  const [values, setValues] = useState({
    fixture_id: ''
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
      await axios.post('http://localhost:4000/api/favoriteMatches', values)
      setSuccessMessage("¡Partido favorito guardado correctamente!");
      setValues({
        fixture_id:''
      });
      setTimeout(() => setSuccessMessage(""), 3000)
    } catch (error) {
      console.error("Error guardando el favorito:", error);
    }
  };


  return <section className="form-favorites">
    <h2>Nuevo partido favorito</h2>
    {successMessage && <p className="success-message">{successMessage}</p>}
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fixtureID">ID del partido</label>
        <input type="number" name="fixture_id" id="fixture_ID" placeholder="Introduce ID de partido" value={values.fixture_id} onChange={handleChange} />
      </div>
      <button type="submit">Guardar Favorito</button>
    </form>
    </section>;


};

export default FavoriteMatchesForm;
