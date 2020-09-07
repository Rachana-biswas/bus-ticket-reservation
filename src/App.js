import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './homepage';
import { Router, Switch, Route, Link } from "react-router-dom";
import Buslist from './buslist/busList';
import Payment from './payment/payment';
import Seatbooking from './seat/seatBooking';
import history from './history/history';
import ConfirmPage from './confirm/confirmpage';

function App() {
  return (

    <div id="App">
      <Router history={history}>
        <div class="row" style={{ backgroundColor: " darkslategrey" }}>
          <div class="col-sm-3">
            <nav class="navbar navbar-expand-sm">
              <ul className="navbar-nav"><li className="nav-item">
                <Link to="/"><h7>Home</h7></Link>
              </li>
                <li className="nav-item">
                  <Link to="/buslist"><h7>Buslist</h7></Link>
                </li></ul></nav>
          </div>
          <div class="col-sm-5"><h2 style={{ color: "white", textAlign: "center" }}>Travel Goose</h2></div>
          <div class="col-sm-4">
            <nav class="navbar navbar-expand-sm ">


              <ul className="navbar-nav">
        
              </ul></nav>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <Homepage />
          </Route>
          <Route path="/buslist">
            <Buslist />
          </Route>


          <Route path="/Payment" component={Payment} />
          <Route path="/confirmPage" component={ConfirmPage} />

          <Route path="/seatbook" component={Seatbooking} />
        </Switch>
      </Router>


    </div>


  );
}

export default App;
/*<nav class="navbar navbar-expand-sm bg-dark justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/"><h4>Home</h4></Link>
            </li>
            <li className="nav-item">
              <Link to="/buslist"><h4>Buslist</h4></Link>
            </li>
            <li><h2 style={{color:"white",textAlign:"center"}}>Khisti Khasta Travellers</h2></li>
            <li><h4>Contact Us</h4></li>
            <li><h4>Gallery</h4></li>
            <li>
              <Link to="/payment"><h4>Payment</h4></Link>
            </li>
          </ul>
        </nav>*/
