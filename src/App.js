import React from 'react';
import logo from './logo.svg';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Projects from "./components/projects";
import Timeline from "./components/timeline";
import './App.css';

function App() {
  return (
    <div id="colorlib-page">
      <div id="container-wrap">
        <Sidebar/>
          <div id="colorlib-main">
            <Introduction/>
            <About/>
            <Timeline/>
            <Projects/>
          </div>
      </div>
    </div>
  );
}

export default App;
