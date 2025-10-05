import React from "react";
import { Route, Router, Routes } from 'react-router-dom'
import Homepage from "./components/Homepage";
import Chalisa from "./components/Chalisa";

function App() {
  return (
   <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chalisa" element={<Chalisa />} />
        </Routes>
   </div>
  )
}

export default App;