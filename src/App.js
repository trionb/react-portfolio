import React from "react";
import Header from "./components/Header/index";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Porfolio";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects"
import { BrowserRouter,Route,Switch } from "react-router-dom";


function App (){
  return (
        <>
        <Header />

        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        </BrowserRouter>
        <Projects/>
        <Footer />
        </>
  );
}
export default App;


