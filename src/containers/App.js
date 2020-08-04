import React, { useEffect, useState } from 'react';
import './App.css';
import ShowList from '../components/showList/ShowList.js';
import getDataFromApi from '../services/getDataFromApi.js';

//SHOWLIST
class App extends React.Component {
  constructor() {
    super();
    this.showList = getDataFromApi;
  }

  render() {
    return(
      <div className="App">
        {this.showList.length ? <ShowList list={this.showList} /> : <p>CARGANDO</p>}
      </div>
    )
  }
}

export default App;