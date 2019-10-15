import React, { Component } from 'react'
import './MyThings.css'
import project3Photo from './../../images/Project3.png'

class MyThings extends Component{
    render(){
        return(
        <div className="container">
            <div className="Project">
                <h1 className="ProjectTitle">Photos From the Great Beyond</h1>
                <div className="ProjectInfo">
                    <img className="ProjectPhoto" src={project3Photo}></img>
                    <p className="ProjectDescription">Photos From the Great Beyond is full stack app created as a group project by me and three of my classmates at General Assembly. I Primarily worked on the front-end which is built in Class-Based-React and retreives data from an API built by my teammates. My team and I utilized colors schemes, animations, and Styled Components to create a cohesive "Space" theme. The front-end also utilizes Responsive Design techniques to optimize its display on mobile devices and smaller windows. This project provided me an opportunity to utilize and expand my skills in React and UI design while working with a team in a deadline-driven environment.</p>
                    <div className="ProjectLinks">
                        <a href="https://photos-from-the-great-beyond.netlify.com" target="_blank"><h3 className="links">Deployed App</h3></a>
                        <a href="https://github.com/willmca/NASA-frontend" target="_blank" className="links"><h3>Github Repo</h3></a>
                        <a href="https://medium.com/@mcallister.william.r" target="_blank" className="links"><h3>Blog Post</h3></a>
                    </div>
                </div>
            </div>
            <div className="Project">
                <h1 className="ProjectTitle">Photos From the Great Beyond</h1>
                <div className="ProjectInfo">
                    <img className="ProjectPhoto" src={project3Photo}></img>
                    <p className="ProjectDescription">Photos From the Great Beyond is full stack app created as a group project by me and three of my classmates at General Assembly. I Primarily worked on the front-end which is built in Class-Based-React and retreives data from an API built by my teammates. My team and I utilized colors schemes, animations, and Styled Components to create a cohesive "Space" theme. The front-end also utilizes Responsive Design techniques to optimize its display on mobile devices and smaller windows. This project provided me an opportunity to utilize and expand my skills in React and UI design while working with a team in a deadline-driven environment.</p>
                    <div className="ProjectLinks">
                        <h3>Link 1</h3>
                        <h3>Link 2</h3>
                        <h3>Link 3</h3>
                    </div>
                </div>
            </div>
            <div className="Project">
                <h1 className="ProjectTitle">Photos From the Great Beyond</h1>
                <div className="ProjectInfo">
                    <img className="ProjectPhoto" src={project3Photo}></img>
                    <p className="ProjectDescription">Photos From the Great Beyond is full stack app created as a group project by me and three of my classmates at General Assembly. I Primarily worked on the front-end which is built in Class-Based-React and retreives data from an API built by my teammates. My team and I utilized colors schemes, animations, and Styled Components to create a cohesive "Space" theme. The front-end also utilizes Responsive Design techniques to optimize its display on mobile devices and smaller windows. This project provided me an opportunity to utilize and expand my skills in React and UI design while working with a team in a deadline-driven environment.</p>
                    <div className="ProjectLinks">
                        <h3>Link 1</h3>
                        <h3>Link 2</h3>
                        <h3>Link 3</h3>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MyThings