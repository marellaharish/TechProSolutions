import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import ImageSlider from './Components/ImageSlider';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<NavBar />} />
        <Route path="/home" index element={<Home />} />
        <Route path="/is" index element={<ImageSlider />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
