import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Hello name ="Alex" country="Russia" city="Astrachan" link="#"/>
        <Hello name ="Mark" country="Mexico" city="Rio" link="#"/>
        <Hello name ="Isabella" country="Ispain" city="Madrid" link="#"/>
      </div> 
    );
  }
}
function Hello(props) {
  return(
    <div>
    <h3> My name is {props.name}. And i'm from {props.country}. I was born in {props.city} city</h3>
    <h4> I like <a href={props.link}> this site</a></h4>
    </div>
    )
}
  
export default App;
