import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import Standings from "./Standings/Standings.jsx";
import Matches from "./Matches/Matches.jsx";
import MatchesForm from "./MatchesForm/MatchesForm.jsx";
import FavoriteMatches from "./FavoriteMatches/FavoriteMatches.jsx"
import FavoriteMatchesForm from "./FavoriteMatchesForm/FavoriteMatchesForm.jsx";
// import "../../styles/styles.scss"
import "./Main.css";

const Main = () => {
  return <>
    <Routes>
      <Route path="/" element={<Navigate to="/matches"/>}/>
      <Route path="/new" element={<MatchesForm/>}/>
      <Route path="/standings" element={<Standings/>}/>
      <Route path="/matches" element={<Matches/>}/>
      <Route path="/favoritematches" element={<FavoriteMatches/>}/>
      <Route path="/createfavoritematches" element={<FavoriteMatchesForm/>}/>
    </Routes> 
    </>;
};

export default Main;
