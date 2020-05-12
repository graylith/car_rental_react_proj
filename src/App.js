import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/Layout/header';
import car_cards from './components/Pages/car_cards';
import Footer from './components/Layout/footer';
import Aboutus from './components/Pages/Aboutus';
import BookCar from './components/Pages/car_booking';
import './App.css';
import car_details from './components/Pages/car_details';


class App extends Component {
  
  render(){
  return (
    <Router>
    <div className="App">
    <Header/>
    <Switch>
      <Redirect exact from="/index.html" to="/home" />
      <Route exact path="/home" component={car_cards}/>
      <Route exact path="/car-details/:car_id" component={car_details} />
      <Route exact path="/book-car/:car_id" component={BookCar} />
      <Route exact path="/Aboutus" component={Aboutus}/>   
    </Switch>
      <Footer/>
    </div>
    </Router>
    );
  }
}

export default App;
