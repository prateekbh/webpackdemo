import React, {Component} from 'react';
import { render } from 'react-dom';
import Home from './home.jsx';
import Search from './search.jsx';
import Browse from './browse.jsx';


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