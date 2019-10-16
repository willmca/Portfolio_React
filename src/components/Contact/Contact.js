import React, { Component } from 'react';
import './Contact.css'



class Contact extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
        return(
            <div className="wrapper">
                <div className="contact">
                <h1>Will McAllister | Software Engineer</h1>
                <h2>Contact Information:</h2>
                <h3>Email: mcallister.william.r@gmail.com</h3>
                </div>
            </div>
        )
    }
}


export default Contact