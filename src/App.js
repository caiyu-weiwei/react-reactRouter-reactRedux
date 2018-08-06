import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginReactRedux from './pages/login/LoginReactRedux'
import HomeReactRedux from './pages/home/HomeReactRedux'
import About from './pages/about/About'
import NewsReactRedux from './pages/news/NewsReactRedux'
import NavReacRedux from './pages/nav/NavReactRedux'
import NotFind from './pages/notFind/NotFind'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavReacRedux/>
        <div>
          <Switch>
            <Route exact path="/" component={LoginReactRedux}/>
            <Route exact path="/Home" component={HomeReactRedux}/>
            <Route path="/About" component={About}/>
            <Route path="/News" component={NewsReactRedux}/>
            <Route component={NotFind}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
