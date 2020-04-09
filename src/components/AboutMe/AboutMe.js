import React from "react";
import "../AboutMe/style.css"

function AboutMe() {
    return (
        <>
            <div className="jumbotron2">
                <h1 className="display-4">About Me!</h1>
                <hr className="my-4" />
                    <section className="container">
                        <section className="row">
                            <article className="col-sm-12 card">
                                <section className="card-body1">
                                    <img src="images/cooldude.jpeg" className="float-left mr-2" width="495" height="400"
                                        alt="cooldude" />
                                        <div className="aboutMe">
                                            <p><strong>"A smooth sea never made a skilled sailor"-FDR.</strong></p>
                                            <p> HELLO WORLD!
                                                My name is Trion. I am from Maryland but moved to New Jersey. I have a niche
                                                for
                                                problem solving, a passion
                                                for everything fast, from jets,to bikes, to cars and the movies. I enjoy pushing my
                                                limits
                                                to see what I am truly capable of. I am a lover of all music but specifically I enjoy
                                                listening to Reggae, Hip Hip/Rap and R&B (90s-2000s only).
                                                I come from a construction background and now I am currently learning Full-Stack Development.
                                          </p>
                                        </div>
                                 </section>
                             </article>
                         </section>
                  </section>
            </div>
         </>
        );
    }
            
export default AboutMe;