import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
import apiKey from './Config';

import PhotoContainer from './Components/Container';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import Photo from './Components/Photo';
import SearchForm from './Components/SearchForm';
import PhotoList from './Components/PhotoList';


class Main extends Component {

constructor(){
  super();
    this.state = {
      cats: [],
      dogs: [],
      computers: [],
      loading: true,
      search: ''
    }
  }

  componentDidMount() {
    this.performSearch();
    this.catSearch();
    this.dogSearch();
    this.computerSearch();
  }

//Search Feed Data
performSearch = (query) => {
  axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      photos: response.data.photos.photo,
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
        photos: response.data.photos.photo,
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
        photos: response.data.photos.photo,
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
        photos: response.data.photos.photo,
        loading: false
      });
    })
    .catch(error => {
    console.log('Error fetching and parsing data', error);
    });
  }

}

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={(() => (<PhotoContainer data={this.state.search} loading={this.sate.loading}/>} />
        <Route path={`/search/${this.state.query}`} render={()=>(<PhotoContainer data={this.state.search} loading={this.state.loading} query={this.state.query} /> )}/
        <Route path="/" component={PhotoContainer} />
        <Route path="/" component={PhotoContainer} />
      </Switch>

      <SearchForm/>
      <Nav/>
      <PhotoContainer/>

    </BrowserRouter>
        //<div className="App">
      //  <div className="main-content">

      //  </div>
    //  </div>


  );
}

export default App;

/*
<header className="App-header">

</header>
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learnssdsdddeddd
</a>
*/
