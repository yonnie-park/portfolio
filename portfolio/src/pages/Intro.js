import React, {useState} from 'react';
import Header from '../component/Header';
import "../style/Intro.css"
import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import Project from "../component/Project"
import me from "../images/me.PNG"
const Intro = () => {

  return (
    <div className="intro">
      <Header/>
      <section id='intro__intro'>
        <h1>👋 Nice to meet you VISITOR,</h1>
        <h3>Let me show you around.</h3>
      </section>
      <section id='intro__profile'>
        <img className="intro__mypic" src={me} alt="me"/>
        <div className='intro__description'>
        <h1> I'm Jung Yeon</h1>
        <h2> You can also call me Jessie!</h2>
        <p>I'm a frontend developer with a passion for creating seamless and user-friendly web experiences. I specialize in React, Javascript, CSS, and Next.js, and have a knack for bringing ideas to life with clean and efficient code.
        <p>Lately, I've been eager to step into the world of WEB3 technologies and dive into the exciting world of decentralized applications. I've been learning Solidity and exploring the limitless possibilities of the blockchain, and I can't wait to bring my skills to the table and contribute to this dynamic and innovative space.</p>
        <p>I'm always on the lookout for new challenges and opportunities to grow as a developer, and I believe that the WEB3 world has so much to offer. I'm excited to see where this journey takes me and I'm eager to collaborate and learn from others in the community.</p>
        </p>
        </div>
        
      </section>
      <section id="intro__proj">
        <h1>These are the projects I've been working on</h1>
        <div className="intro__projects">
        <Project/>
        <Project/>
        <Project/>
        </div>
      </section>
      <div className=""></div>
    </div>
  );
};

export default Intro;