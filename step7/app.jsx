import React, {Component} from 'react';
import { render } from 'react-dom';
const Home = require('./home.jsx').default;
const Search = require('./search.jsx').default;
const Browse = require('./browse.jsx').default;

class App extends Component{
  render(){
    return(
      <div>
        <Home />
        <Search />
        <Browse />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);