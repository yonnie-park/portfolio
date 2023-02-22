import React, {useState} from 'react';
import Header from '../component/Header';
import "../style/App.css"
import { useNavigate } from "react-router-dom";

const App = () => {
  const [name, setName]=useState("")
  const navigate=useNavigate()
  const handleChange = ({ target: { value } }) => setName(value);
  function handleSubmit(e){
    e.preventDefault();
    console.log(name)
    navigate("/intro")
  }
  return (
    <div className="main">
      <Header/>
      <h1>Hi There,</h1>
      <h1>How should I call you?</h1>

    <form onSubmit={handleSubmit} className="main__form">
      <input className="main__input" type="name" placeholder='Insert name here' onChange={handleChange}></input>
      <button type="submit" className="main__next" >next</button>
    </form>
    </div>
  );
};

export default App;