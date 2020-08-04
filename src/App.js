import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Articles from "./containers/Articles";
import Article from "./containers/Article";
import Category from "./containers/CategoryArticles";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  );
}

export default App;
