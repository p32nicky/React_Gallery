import React, {Component} from 'react';
import apiKey from './Config.js';
import axios from 'axios';

class Search extends Component{
  constructor(props){
    super(props);
    state = {
         performSearch: [],
         cats: [],
         dogs: [],
         computers: [],
         loading: true,
         search: ''
    };
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
       performSearch: response.data.photos.photo,
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
}

export default Search;
