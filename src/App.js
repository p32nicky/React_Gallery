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
import apiKey from './Components//Config.js';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
         search: [],
         cats: [],
         dogs: [],
         computers: [],
         loading: true,
         searchText: ''

       };
  }
   componentDidMount() {
     this.performSearch();
     this.catSearch();
     this.dogSearch();
     this.computerSearch();
   }

  //Search Feed Data
  performSearch = (query = this.state.search) => {
   axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
   .then(response => {
     this.setState({
       search: response.photos.photo,
       loading: false
     });
   })
   .catch(error => {
   console.log('Error fetching and parsing data', error);
   });
  }

  //Button Fetching Data
   catSearch = (query = 'Cats') => {
     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
     .then(response => {
       this.setState({
         cats: response.data.photos.photo,
         loading: false
       });
     })
     .catch(error => {
     console.log('Error fetching and parsing data', error);
     });
   }

   dogSearch = (query = 'Dogs') => {
     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
     .then(response => {
       this.setState({
         dogs: response.data.photos.photo,
         loading: false
       });
     })
     .catch(error => {
     console.log('Error fetching and parsing data', error);
     });
   }

   computerSearch = (query = 'Computers') => {
     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
     .then(response => {
       this.setState({
         computers: response.data.photos.photo,
         loading: false
       });
     })
     .catch(error => {
     console.log('Error fetching and parsing data', error);
     });
   }

  render(){

    return (
      <BrowserRouter>
      <div className="container">
          <SearchForm search={this.performSearch}/>
          <Nav/>
            <Switch>
              <Route exact path="/" render={ () => (<PhotoList data={this.state.cats} loading={this.state.loading} /> )}/>
              <Route path ={'/search/:query'} render={()=>(<PhotoList data={this.state.search} loading={this.state.loading} /> )}/>
              <Route path="/cats" render={ () => (<PhotoList data={this.state.cats} loading={this.state.loading} /> )}/>
              <Route path="/dogs" render={ () => (<PhotoList data={this.state.dogs} loading={this.state.loading} /> )}/>
              <Route path="/computers" render={ () => (<PhotoList data={this.state.computers} loading={this.state.loading} /> )}/>
              <Route path='/' component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
