/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "../Contact/Contact.css"

function Contact () {
return (
         <>
            <div className="jumbotron1">
                <h1 className="display-4">Contact!</h1>
                <hr className="my-4" />
                <section className="container">
                    <section className="row">
                        <article className="col-8 card">
                            <section className="card-body">
                                <h1 className="card-title"> contact</h1>
                                <br />
                                <form action="#">
                                    <a href="mailto: baileytrion@gmail.com" className="btn btn-outline-dark1"
                                        target="_blank" rel="noopener noreferrer">Email</a>
                                    <br/>
                                    <br />
                                    <a href="https://github.com/trionb" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"
                                            className="btn btn-outline-dark1" >GitHub</i></a> 
                                    <br />
                                    <a href="https://www.linkedin.com/in/trion-bailey-7717811a3/" target="_blank" rel="noopener noreferrer"><i
                                            className="fab fa-linkedin" className="btn btn-outline-dark1">LinkedIn</i></a>
                                    <br />
                                    <br />
                                    <a href="download/Resume2020.pdf" className="btn btn-outline-dark1" target="_blank" type="submit"
                                        download="resume2020.pdf">Resume</a>
                                </form>
                            </section>
                        </article>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Contact;