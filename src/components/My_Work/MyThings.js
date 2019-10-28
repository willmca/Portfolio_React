import React, { Component } from 'react'
import './MyThings.css'
import project4Photo from './../../images/FF_TA.png'
import project3Photo from './../../images/Project3.png'
import project2Photo from './../../images/Project2.png'
import project1Photo from './../../images/Project1.png'

class MyThings extends Component{
    render(){
        return(
        <div className="container">
            <div className="Project">
                <h1 className="ProjectTitle">Fantasy Football Trade Analyzer</h1>
                <div className="ProjectInfo">
                    <img className="ProjectPhoto" src={project4Photo} alt="Fantasy Football Trade Analyzer"></img>
                    <h2 className="tech">Technologies used: React, Node.js, Express.js, Mongoose</h2>
                    <p className="ProjectDescription">Fantasy Football Trade Analyzer is a full stack application that utilizes a database I created with MongoDB, Express and Node. The database contains 300 NFL players and utilizes an algorithm I created to assign the players ratings on a scale of 0-15 based on their a collection of rankings form fantasy football experts. The front-end is built using React, and allows the user to construct a potential trade and evaluate the strength of each side to determine the winner and loser of the trade. I utilized styled components, the component life-cycle, and responsive-design to create a front-end that looks great on any device. This project provided me a great opportunity to combine my passion for fantasy sports with my passion for software engineering and create a full-stack application that serves a purpose for Fantasy Football players everywhere.</p>
                    <div className="ProjectLinks">
                        <a href="https://fantasy-football-trade-analyzer.netlify.com" target="_blank" rel="noopener noreferrer" className="projectLink"><h3>Deployed App</h3></a>
                        <a href="https://github.com/willmca/Fantasy_Football_Trade_Analyzer_Frontend" target="_blank" rel="noopener noreferrer" className="projectLink"><h3>Github Repo</h3></a>
                        <a href="https://medium.com/@mcallister.william.r/building-a-fantasy-football-trade-analyzer-6daa5dc4980f" target="_blank" rel="noopener noreferrer" className="projectLink"><h3>Blog Post</h3></a>
                    </div>
                </div>
            </div>
            <div className="Project">
                <h1 className="ProjectTitle">Photos From the Great Beyond</h1>
                <div className="ProjectInfo">
                    <img className="ProjectPhoto" src={project3Photo} alt="Photos from the Great Beyond"></img>
                    <h2 className="tech">Technologies used: React, Node.js, Express.js, Mongoose</h2>
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
                    <h2 className="tech">Technologies used: HTML, CSS, Javascript</h2>
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
                    <h2 className="tech">Technologies used: Node.js, Express.js, Mongoose</h2>
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