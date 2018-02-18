import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap';
import { Link, Route, Switch } from 'react-router-dom';
import NavbarKu from './components/NavbarKu.jsx';
import HalamanA from './pages/HalamanA.jsx';
import HalamanB from './pages/HalamanB.jsx';
import HalamanC from './pages/HalamanC.jsx';
import about_us from './pages/about_us.jsx';
import login from './pages/login.jsx';
import signup from './pages/signup.jsx';
class App extends Component {
  // state = {
  //   angka: 0,
  //   halaman: "A"
  // }

  // _naik = () => {
  //   this.setState({ angka: this.state.angka + 1})
  // }

  // _keA = () => {
  //   this.setState({halaman: "A"})
  // }

  // _keB = () => {
  //   this.setState({halaman: "B"})
  // }

  // _keC = () => {
  //   this.setState({halaman: "C"})
  // }


  render() {
    return(
    <div>
    <NavbarKu />
    <Route exact={true} path="/" component={HalamanA} />
    <Route exact={true} path="/training" component={HalamanB} />
    <Route exact={true} path="/camp" component={HalamanC} />
    <Route exact={true} path="/aboutus" component={about_us} />
    <Route exact={true} path="/login" component={login} />
    <Route exact={true} path="/signup" component={signup} />
    </div>
    )
    // if(this.state.halaman == "A"){
    //   return(
    //       <HalamanA keA={this._keA} keB={this._keB} keC={this._keC}/>
    //   )
    // }

    // if(this.state.halaman == "B"){
    //   return(
    //       <HalamanB keA={this._keA} keB={this._keB} keC={this._keC}/>
    //   )
    // }

    // if(this.state.halaman == "C"){
    //   return(
    //       <HalamanC keA={this._keA} keB={this._keB} keC={this._keC}/>
    //   )
    // }
  }
}

export default App;