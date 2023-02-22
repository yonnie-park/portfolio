import React, {useState} from 'react';
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main.js"
import Intro from "./pages/Intro.js"
import Header from './component/Header.js'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/intro' element={<Intro/>}/>
      </Routes>
    </BrowserRouter>

  );
};

export default App;