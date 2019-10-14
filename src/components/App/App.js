import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from "react-router-dom"
import styled from 'styled-components';
import Home from '../Home/Home'
import MyThings from '../My_Work/MyThings'
import About from '../About/About'
import Contact from '../Contact/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faMedium, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
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
        <div className="placeholder"></div>
        <div className="logos">
        <a href="https://www.linkedin.com/in/will-mcallister/" target="_blank"> <FontAwesomeIcon icon={faLinkedinIn} className="logo"/></a>
          <a href="https://www.github.com/willmca" target="_blank">        <FontAwesomeIcon icon={faGithub} className="logo"/></a>
          <a href="https://medium.com/@mcallister.william.r" target="_blank"> <FontAwesomeIcon icon={faMedium} className="logo"/></a>
        </div>
        <nav>
          <ul>
            <Link to="/"><li className="SideNav">Home</li></Link>
            <Link to="/about"><li className="SideNav">About Me</li></Link>
            <Link to="/work"><li className="SideNav">My Work</li></Link>
            <Link to="/contact"><li className="SideNav">Contact Me</li></Link>
            <a href="https://docs.google.com/document/d/1x5_HZlT6-dOgHXLkvWtyHwwCQ3V0H1UeE8rvw63_QHE/edit?usp=sharing" target="_blank"><li className="SideNav">Resumé</li></a>
          </ul>
        </nav>
      </NavBar>
      <main>
        <Route path="/" exact render = {props => <Home {...props}/>}/>
        <Route path="/work" exact render = {props => <MyThings {...props}/>}/>
        <Route path="/about" exact render = {props => <About {...props}/>}/>
        <Route path="/contact" exact render = {props => <Contact {...props}/>}/>
      </main>
    </div>
    )
  }
}

export default App;
