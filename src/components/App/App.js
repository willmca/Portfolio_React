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
import "./App.css";

document.body.style.margin = 0;

const NavBar = styled.nav`
  background-color: lightblue;
  height: 100vh;
  width: 33%;
  left: 0;
  position: fixed;
  color: #f4f5f6;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <NavBar>
          <div className="logosAndPhoto">
            <div className="placeholder"></div>
            <h1 className="nameTitle">Will McAllister | Software Engineer
            </h1>
            <div className="componentNav">
            <nav>
              <ul>
                <Link to="/">
                  <li className="SideNav">Home</li>
                </Link>
                <Link to="/about">
                  <li className="SideNav">About Me</li>
                </Link>
                <Link to="/work">
                  <li className="SideNav">My Work</li>
                </Link>
                <Link to="/contact">
                  <li className="SideNav">Contact Me</li>
                </Link>
                <a 
                  href="https://docs.google.com/document/d/1x5_HZlT6-dOgHXLkvWtyHwwCQ3V0H1UeE8rvw63_QHE/edit?usp=sharing"
                  target="_blank"
                >
                  <li className="SideNav">Resumé</li>
                </a>
              </ul>
            </nav>
            <div className="logos">
              <a className="links"
                href="https://www.linkedin.com/in/will-mcallister/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="logo" />
              </a>
              <a className="links" href="https://www.github.com/willmca" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="logo" />
              </a>
              <a className="links"
                href="https://medium.com/@mcallister.william.r"
                target="_blank"
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
