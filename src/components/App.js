import React from 'react';
import Searchbar from './Searchbar';
import ImageList from  './ImageList';
import unsplash from './api/unsplash.js';
import './App.css';


class  App extends React.Component {

 state= {images : []} 

  OnSearchSubmit = async (term) => {
    
    const response  = await unsplash.get('/search/photos' , {
      params : {query : term}
    });

    this.setState({images : response.data.results})
  }

  render(){
 
 
  return(
      <div>
          
          <Searchbar OnSubmit={this.OnSearchSubmit} />
          Found {this.state.images.length} matching images
          <ImageList data = {this.state.images} />
      </div> 
    );
}
}

export default App;

