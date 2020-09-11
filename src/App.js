import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import Photo from './Components/Photo';
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';
import Search from './Components/Search'

class App extends Component {

  render(){

    return (
      <BrowserRouter>
        <div className="App">
          <SearchForm search={this.performSearch}/>
          <Nav/>
          <div className="main-content">
            <Switch>
              <Route exact path="/" render={ () => (<PhotoList data={this.state.search} loading={this.state.loading} /> )}/>
              <Route path="/cats" render={ () => (<PhotoList data={this.state.cats} loading={this.state.loading} /> )}/>
              <Route path="/dogs" render={ () => (<PhotoList data={this.state.dogs} loading={this.state.loading} /> )}/>
              <Route path="/computers" render={ () => (<PhotoList data={this.state.computers} loading={this.state.loading} /> )}/>
              <Route component={NotFound} />
            </Switch>
            <PhotoList/>

          </div>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
