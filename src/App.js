import React from "react";
import Header from "../src/components/Header/index";
import AboutMe from "../src/components/AboutMe/AboutMe";
import Portfolio from "../src/components/Portfolio/Porfolio";
import HomePage from "../src/components/HomePage/HomePage";
import Contact from "../src/components/Contact/Contact";
import Projects from "../src/components/Projects/Projects";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter,Route,Switch } from "react-router-dom";

function App (){
  return (
        <>
        <Header />
        <BrowserRouter>
        <Switch>
          <Route exact path="/index.html" component={HomePage} />
          <Route exact path="/About.html" component={AboutMe} />
          <Route exact path="/Portfolio.html" component={Portfolio} />
          <Route exact path="/Contact.html" component={Contact} />
        </Switch>
        </BrowserRouter>
        <Projects />
        <Footer />
        </>
  );
}
export default App;


