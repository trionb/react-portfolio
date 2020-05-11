import React from "react";
import "../AboutMe/style.css"
import Me from "../Images/me.jpeg"

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
                                    <img src={Me} className="float-left mr-2" width="495" height="400"
                                        alt="cooldude" />
                                        <div className="aboutMe">
                                            <p><strong>"A smooth sea never made a skilled sailor"-FDR.</strong></p>
                                            <p> HELLO WORLD!</p>
                                            <p>
                                            I'm a currently learning full-stack development. I am Trion Bailey and I am from Maryland but moved to New Jersey. Taking something from thought and being able to see it come to life is the reason I enjoy learning and developing projects. Since graduating from Penn bootcamp I have developed the skills to efficiently communicate in a group setting in order to successfully complete and present a project along with being equipped to work remotely.
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