import React, { Component } from 'react'
import './MyThings.css'
import project3Photo from './../../images/Project3.png'
import project2Photo from './../../images/Project2.png'
import project1Photo from './../../images/Project1.png'

class MyThings extends Component{
    render(){
        return(
        <div className="container">
            <div className="Project">
                <h1 className="ProjectTitle">Photos From the Great Beyond</h1>
                <div className="ProjectInfo">
                    <img className="ProjectPhoto" src={project3Photo} alt="Photos from the Great Beyond"></img>
                    <p className="ProjectDescription">Photos From the Great Beyond is a full stack app created as a group project by me and three of my classmates at General Assembly. I Primarily worked on the front-end which is built in Class-Based-React and retrieves data from an API built by my teammates. My team and I utilized color schemes, animations, and Styled Components to create a cohesive "Space" theme. The front-end also utilizes Responsive Design techniques to optimize its display on mobile devices and smaller windows. This was the first time that I worked on an application with a group larger than two, and as such was my first experience with multiple collaborators pushing changes and merging branches to the same Github Repo. This process went surprisingly smooth, with no merge conflicts occuring. This project provided me an opportunity to utilize and expand my skills in React, the Github Workflow, and UI design while working with a team in a deadline-driven environment.</p>
                    <div className="ProjectLinks">
                        <a href="https://photos-from-the-great-beyond.netlify.com" target="_blank" rel="noopener noreferrer" className="projectLink"><h3>Deployed App</h3></a>
                        <a href="https://github.com/willmca/NASA-frontend" target="_blank" rel="noopener noreferrer" className="projectLink"><h3>Github Repo</h3></a>
                        <a href="https://medium.com/@mcallister.william.r/photos-from-the-great-beyond-803cb79b0ac6" target="_blank" rel="noopener noreferrer" className="projectLink"><h3>Blog Post</h3></a>
                    </div>
                </div>
            </div>
            <div className="Project">
                <h1 className="ProjectTitle">Who's That Pokemon</h1>
                <div className="ProjectInfo">
                    <img className="ProjectPhoto" src={project1Photo} alt="Who's That Pokemon"></img>
                    <p className="ProjectDescription">Who's That Pokemon was the first project I ever built on my own. A couple weeks into my boot camp at General Assembly we were tasked with building a game using HTML, CSS, and Javascript. We were given a list of game types to choose from such as trivia and flash cards. I wanted to build a game that would look good and stand out from the crowd. When I was a kid I remember watching Pokemon on TV and getting excited about the "Who's That Pokemon" segments going into and coming out of commercial breaks, and I figured this would make for a great twist on a trivia game. We were given approximately three days to complete the project. By the last day prior to our deadline I had it fully functional, but it was not up to my stylistic standards. I spent the last day fine-tuning the design and implementing Responsive Design so the game would look great on mobile devices. This project helped me develop a love for creating clean, responsive designs with a strong theme.</p>
                    <div className="ProjectLinks">
                    <a href="https://willmca.github.io/WhosThatPokemon/" target="_blank" rel="noopener noreferrer" className="projectLink"><h3>Deployed Link</h3></a>
                    <a href="https://github.com/willmca/WhosThatPokemon" target="_blank" rel="noopener noreferrer" className="projectLink"><h3>Github Repo</h3></a>
                    <a href="https://medium.com/@mcallister.william.r/whos-that-pokemon-a-game-made-using-html-css-and-javascript-884bbe6871e4" target="_blank" rel="noopener noreferrer" className="projectLink"><h3>Blog Post</h3></a>
                    </div>
                </div>
            </div>
            <div className="Project">
                <h1 className="ProjectTitle">Pokemon API</h1>
                <div className="ProjectInfo">
                    <img className="ProjectPhoto" src={project2Photo} alt="Pokemon API"></img>
                    <p className="ProjectDescription">Pokemon API is a REST API with full CRUD (Create, read, update, delete) functionality that displays data on the first 151 Pokemon. The API allows you to view Pokemon names, types, and generations. I built and deployed this project for my boot camp using Express, Node, Mongoose and Heroku. I originally intended for this API to serve as a back-end to my Who's That Pokemon game, but due to the specific requirements of the project that I had to meet to acheive a passing grade I was unable to format it in a way that would work with my existing game. Up until this point, most of my work had been with front-end technologies. This project gave me an opportunity to further develop my back-end skills and become more comfortable building full-stack applications.</p>
                    <div className="ProjectLinks">
                    <a href="https://wills-pokemon-api.herokuapp.com/api/pokemon" target="_blank" rel="noopener noreferrer" className="projectLink"><h3>Deployed Link</h3></a>
                    <a href="https://github.com/willmca/PokemonAPI" target="_blank" rel="noopener noreferrer" className="projectLink"><h3>Github Repo</h3></a>
                    <a href="https://willmca.github.io/WhosThatPokemon/" target="_blank" rel="noopener noreferrer" className="projectLink"><h3>Blog Post</h3></a> 
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MyThings