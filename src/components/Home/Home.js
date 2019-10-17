import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './Home.css'



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
                    <h1>Will McAllister | Software Engineer
                    </h1>
                </div>
                <div className="introHolder">
                    <p className="intro">Full-stack Software Engineer with a passion for bringing a client's desires to virtual life on the web. I enjoy working directly with people and businesses to help them achieve their goals. I bring to the table a relentless work-ethic and drive to succeed and help others do the same. My skills include React, Responsive Design, CSS, Javascript, Node, Express and more.</p>
                </div>
                <div className="skillsHolder">
                    <p className="skills">When I'm not writing code I enjoy playing gaming, playing basketball, watching my beloved Washington Wizards and Redskins disapoint me year after year, and hanging out with my dogs, Harley and Daisy. </p>
                </div>
                <div className="contactHolder">
                    <p className="contact">Please feel free to contact me via email at mcallister.william.r@gmail.com</p>
                </div>
    
            </div>
        )
    }
}


export default Home