import React from "react";
import "../Portfolio/Portfolio.css"
import Projects from "../Projects/Projects";


function Portfolio () {
    return (
        <>
        <div className="jumbotron3">
        <h1 className="display-4">Portolio!</h1>
        <hr className="my-4" />
      <section className="container">
        <p>Welcome to my portfolio page.</p>
        <Projects />
      </section>
      </div>
      
      </>
    );
}

export default Portfolio;