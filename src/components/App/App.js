import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "../Home/Home";
import MyThings from "../My_Work/MyThings";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import {Helmet} from "react-helmet";
import preview from "./../../images/preview.png"
import "./App.css";
import me from "./../../images/me.jpg";
import MetaTags from 'react-meta-tags';



document.body.style.margin = 0;

const NavBar = styled.nav`
  background-color: lightblue;
  min-height: 100vh;
  width: 33%;
  left: 0;
  position: fixed;
  color: #f4f5f6;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  top:0;
  bottom:0;
  overflow:auto;
  @media (max-width:500px){
    display:none;
  }
`

const HeaderNav = styled.header`
background-color:lightblue;
height:50px;
width:100%;
top:0;
position:fixed;
color:white;
font-size:18px;
display:none;
align-items:center;
@media (max-width:500px) {
  display:flex;
  flex-direction:row;
}
`

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <MetaTags>
            <title>Will McAllister | Software Engineer</title>
            <meta id="meta-description" name="description" content="Where There's a Will, There's a Way!" />
            <meta id="og-title" property="og:title" content="Will McAllister | Software Engineer" />
            <meta id="og-image" property="og:image" content={preview} />
        </MetaTags>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Will McAllister | Software Engineer</title>
                <meta name="og:type" content="website" />
                <meta name="og:description" content="Where there's a Will there's a way!" />
                <meta name="og:image" content={preview} />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Will McAllister | Software Engineer"/>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab&display=swap" rel="stylesheet" />
                <link rel="apple-touch-icon" href={me} />



       </Helmet>
       <HeaderNav>
            <Link className="headerLinks"  to="/">
                <li className="HeaderNavLinks">Home</li>
            </Link>
            <Link className="headerLinks"  to="/work">
                <li className="HeaderNavLinks">My Work</li>
            </Link>
                <a className="headerLinks"
                  href="https://docs.google.com/document/d/1yPOjjKHxHC2UtGSwJIIn4vhL-Db5Lw1MWmlBnHZabe4/edit?usp=sharing"
                  target="_blank" rel="noopener noreferrer">
                <li className="HeaderNavLinks">Resumé</li>
                </a>
            <div className="logos">
              <a className="headerLogoLinks"
                href="https://www.linkedin.com/in/will-mcallister/"
                target="_blank" rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="logo" />
              </a>
              <a className="headerLogoLinks" href="https://www.github.com/willmca" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="logo" />
              </a>
              <a className="headerLogoLinks"
                href="https://medium.com/@mcallister.william.r"
                target="_blank" rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMedium} className="logo" />
              </a>
            </div>
       </HeaderNav>
        <NavBar>
          <div className="logosAndPhoto">
            <div className="placeholder"></div>
            <h1 className="nameTitle">Will McAllister | Software Engineer
            </h1>
            <div className="componentNav">
            <nav>
              <ul>
                <Link className="links"  to="/">
                  <li className="SideNav">Home</li>
                </Link>
                {/* <Link className="links" to="/about">
                  <li className="SideNav">About Me</li>
                </Link> */}
                <Link className="links" to="/work">
                  <li className="SideNav">My Work</li>
                </Link>
                {/* <Link className="links" to="/contact">
                  <li className="SideNav">Contact Me</li>
                </Link> */}
                <a className="links"
                  href="https://docs.google.com/document/d/1x5_HZlT6-dOgHXLkvWtyHwwCQ3V0H1UeE8rvw63_QHE/edit?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                >
                  <li className="SideNav">Resumé</li>
                </a>
              </ul>
            </nav>
            <div className="logos">
              <a className="logoLinks"
                href="https://www.linkedin.com/in/will-mcallister/"
                target="_blank" rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="logo" />
              </a>
              <a className="logoLinks" href="https://www.github.com/willmca" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="logo" />
              </a>
              <a className="logoLinks"
                href="https://medium.com/@mcallister.william.r"
                target="_blank" rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMedium} className="logo" />
              </a>
            </div>
            </div>
          </div>
        </NavBar>
        <main>
          <Route path="/" exact render={props => <Home {...props} />} />
          <Route path="/work" exact render={props => <MyThings {...props} />} />
          <Route path="/about" exact render={props => <About {...props} />} />
          <Route
            path="/contact"
            exact
            render={props => <Contact {...props} />}
          />
        </main>
      </div>
    );
  }
}

export default App;
