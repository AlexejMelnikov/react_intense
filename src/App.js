import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';

// как достать картинку из папки паблик
const url =process.env.PUBLIC_URL + '/img/bg.png';
const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8
  `
const MenuWrapper = styled.div`
  height: 89px;
  padding-top: 20px;
`
const MainWrapper = styled.main`
  height: 600px;
  padding-top: 130px;
  // как достать картинку заднего фона
  // класиическая интерполляция 
  background: url(${url}) no-repeat;
  background-size: cover;

`
class App extends Component {
  render() {
    return (
        <div className="App">
         <HeaderWrapper> 
           <Grid>
            <Header />
          </Grid>
         </HeaderWrapper>
         <MenuWrapper>
              <Grid>
                <Menu />
              </Grid>
         </MenuWrapper>
         <MainWrapper>
          <Grid>
             <Main />
          </Grid>  
         </MainWrapper> 
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
