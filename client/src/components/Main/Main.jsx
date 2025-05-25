import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import Standings from "./Standings/Standings.jsx";
import Matches from "./Matches/Matches.jsx";
import MatchesForm from "./MatchesForm/MatchesForm.jsx";

const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<Navigate to="/matches"/>}/>
      <Route path="/new" element={<MatchesForm/>}/>
      <Route path="/standings" element={<Standings/>}/>
      <Route path="/matches" element={<Matches/>}/>
    </Routes> 
    </main>;
};

export default Main;
