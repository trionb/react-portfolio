import React from "react";
import "../Projects/Projects.css"


function Projects () {
    return (
        <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <div className="card">
            <img src="images/soundtrackmovie.png" className="card-img-top1" alt="soundtrack to that movie website" />
            <div className="card-body">
              <h5 className="card-title">Soundtrack to that Movie!</h5>
              <a href="https://trionb.github.io/soundtrack-that-movie/" className="btn btn-outline-dark">View Web Page</a>
              <a href="https://github.com/trionb/soundtrack-that-movie" className="btn btn-outline-dark">Github Repo</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="images/fyre.png" className="card-img-top" alt="music" />
            <div className="card-body">
              <h5 className="card-title">Fyre</h5>
              <p className="note">Note:A Spotify premium account is needed for the songs to be loaded</p>
              <a href="https://fathomless-basin-76899.herokuapp.com/" className="btn btn-outline-dark">View Web Page</a>
              <a href="https://github.com/trionb/Fyre" className="btn btn-outline-dark">Github Repo</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="images/passwordgenerator.png" className="card-img-top" alt="random password generator" />
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <a href="https://trionb.github.io/passwordGenerator/" className="btn btn-outline-dark">View Web Page</a>
              <a href="https://github.com/trionb/passwordGenerator" className="btn btn-outline-dark">Github Repo</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="images/Employee Generator.png" className="card-img-top" alt="employeeGenerator" />
            <div className="card-body">
              <h5 className="card-title">Employee Generator</h5>
              <a href="https://github.com/trionb/employeeTracker" className="btn btn-outline-dark">Github Repo</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="images/note-taker.png" className="card-img-top" alt="random password generator" />
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <a href="https://note-taking12.herokuapp.com/" className="btn btn-outline-dark">View Web Page</a>
              <a href="https://github.com/trionb/note-taker" className="btn btn-outline-dark">Github Repo</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="images/Eat-Da-Sushi.png" className="card-img-top" alt="random password generator" />
            <div className="card-body">
              <h5 className="card-title">Eat-Dat-Sushi</h5>
              <a href="https://eat-dat-sushi.herokuapp.com/" className="btn btn-outline-dark">View Web Page</a>
              <a href="https://github.com/trionb/Eat-Dat-Sushi" className="btn btn-outline-dark">Github Repo</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Projects;