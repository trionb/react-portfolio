import React from "react";
import Header from "../src/components/Header/index";
import AboutMe from "../src/components/AboutMe/AboutMe";
import Portfolio from "../src/components/Portfolio/Porfolio";
import HomePage from "../src/components/HomePage/HomePage";
import Footer from "../src/components/Footer/Footer";
import Projects from "../src/components/Projects/Projects"
import { BrowserRouter,Route,Switch } from "react-router-dom";


function App (){
  return (
        <>
        <Header />

        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/Portfolio" component={Portfolio} />
        </Switch>
        </BrowserRouter>
        <Projects/>
        <Footer />
        </>
  );
}
export default App;


