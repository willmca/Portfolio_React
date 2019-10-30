import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './Home.css'
import me from "./../../images/me.jpg"
import reactIcon from './../../images/react.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
        faCss3Alt,
        faJsSquare,
        faReact,
        faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import responsive from './../../images/responsive-design.png'
import node from './../../images/nodejslogo.png'
import js from './../../images/js.png'
import html from './../../images/html.png'
import css from './../../images/css.png'
import rest from './../../images/rest.png'
import mongoose from './../../images/mongoose.png'
import express from './../../images/express.png'



class Home extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <div className="home">
                <div className="titleHolder">
                <img className="lilMe" src={me} alt="Will McAllister" />
                    <h1>Will McAllister | Software Engineer
                    </h1>
                </div>
                <div className="introHolder">
                    <p className="intro">Full-stack Software Engineer with a passion for bringing a client's desires to life on the web. I enjoy working directly with people and businesses to help them achieve their goals. I bring to the table a relentless work-ethic and drive to succeed and help others do the same. My skills include React, Responsive Design, CSS, Javascript, Node, Express and more.</p>
                </div>
                <div className="skillzHolder">
                    <h2 className="skillzTitle">Skills</h2>
                    <div className="skillzRowHolder">
                    <div className="skillzRow">
                    <div className="skillAndName">  
                    <img  src={reactIcon} className="skillIcon" alt="React" />
                    <h4>React</h4>
                    </div> 
                    <div className="skillAndName">  
                    <img className="skillIcon" src={css} alt="CSS" />
                    <h4>CSS</h4>
                    </div>
                    <div className="skillAndName">  
                    <img className="skillIcon" src={js} alt="Javascript"/>     
                    <h4>Javascript</h4>
                    </div> 
                    <div className="skillAndName">  
                    <img className="skillIcon" src={html} alt="HTML" />
                    <h4>HTML</h4>
                    </div>
                    <div className="skillAndName">  
                    <img className="skillIcon" src={responsive} alt="Responsive Design"/>
                    <h4>Responsive Design</h4>
                    </div>
                    </div>
                    <div className="skillzRow">
                    <div className="skillAndName">
                    <img className="skillIcon" src={node} alt="Node.js"/>
                    <div className="skillzRow">
                    <h4>Node.js</h4>
                    </div>
                    </div>
                    <div className="skillAndName">
                    <img className="skillIcon" src={express} alt="RestAPI"/>
                    <h4>Express.js</h4>
                    </div>
                    <div className="skillAndName">
                    <img className="skillIcon" src={mongoose} alt="MongoDB"/>
                    <h4>MongoDB</h4>
                    </div>
                    <div className="skillAndName">
                    <img className="skillIcon" src={rest} alt="RestAPI"/>
                    <h4>REST API</h4>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="skillsHolder">
                    <p className="skills">When I'm not writing code I enjoy playing video games, playing basketball, watching my beloved Washington Wizards and Redskins disapoint me year after year, and hanging out with my dogs, Harley and Daisy. </p>
                </div>
                <div className="contactHolder">
                    <p className="contact">Please feel free to contact me via email at mcallister.william.r@gmail.com</p>
                </div>
    
            </div>
        )
    }
}


export default Home