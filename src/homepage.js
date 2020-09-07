import React from 'react';
import logo from './logo.svg';
import './App.css';
import App1 from './login/loginRegister';
import image1 from "./image/buscopy1.jpg";
import LoginRegister from './login/loginRegister';
import Register from './login/registration'

function Homepage() {
  return (
    
    <div id="App">
  <div class>
  <h1></h1>
  
  <div class="row">
    <div class="col-sm-8" ><img src={image1} style={{height:"600px"}}></img></div>
    
    <div class="col-sm-4"><LoginRegister/></div>
  </div>
</div>
    </div>
    
    
  );
}

export default Homepage;
