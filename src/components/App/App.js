import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from "react-router-dom"
import styled from 'styled-components';
import Home from '../Home/Home'
import './App.css';

document.body.style.margin = 0


const NavBar = styled.nav`
background-color:lightblue;
height:100vh;
width:33%;
left:0;
position:fixed;
color:#f4f5f6;
text-align:center;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
`
// const Footer = styled.footer`
// background-color:#009980;
// position:fixed;
// bottom:0;
// height:25px;
// width:67%;
// color:white;
// margin-left:33%;
// `

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
    <div className="App">
      <NavBar>
        <img className="placeholder" src={require("../../images/me.jpg")} alt="placeholder"></img>
        <nav>
          <ul>
            <li className="SideNav">About Me</li>
            <li className="SideNav">My Work</li>
            <li className="SideNav">Contact Me</li>
            <a href="https://www.github.com/willmca" target="_blank"><li className="SideNav">Github</li></a>
            <a href="https://www.linkedin.com/in/will-mcallister/" target="_blank"><li className="SideNav">LinkedIn</li></a>
            <a href="https://medium.com/@mcallister.william.r" target="_blank"><li className="SideNav">Blog</li></a>
            <a href="https://docs.google.com/document/d/1x5_HZlT6-dOgHXLkvWtyHwwCQ3V0H1UeE8rvw63_QHE/edit?usp=sharing" target="_blank"><li className="SideNav">Resumé</li></a>
          </ul>
        </nav>
      </NavBar>
      <main>
        <Route path="/" exact render = {props => <Home {...props}/>}/>
      </main>
      {/* <Footer>
        <ul className="footer">
          <li className="footerLink">Github</li>
          <li className="footerLink">Linkedin</li>
        </ul>
      </Footer> */}
    </div>
    )
  }
}

export default App;
