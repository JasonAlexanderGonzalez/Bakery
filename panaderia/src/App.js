import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import Resena from "./components/Products/Resena";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Agregar from "./components/agregar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br>
      <br></br>
      <br></br>

      <p></p>
      <p></p>
      <Routes>
        <Route path="/nosotros" element={<Resena />} />
        <Route path="/contacto" element={<Agregar />} />
        <Route path="/login" element={<Login />} />
        
        {/* Otras rutas aquí, si las tienes */}
      </Routes>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <Footer />
    </div>
  );
}

export default App;
