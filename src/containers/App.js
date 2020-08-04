import React from "react";
import './App.css';
import ShowList from '../components/showList/ShowList.js';
import Filter from '../components/filter/Filter.js';

//SHOWLIST
const API_DATA = 'http://api.tvmaze.com/search/shows'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showList: [],
      inputText: '',
    };

    this.getDataFromApi = this.getDataFromApi.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi = () => {
    return fetch(API_DATA + '?q=girls') //girls = ${inputName}
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        this.setState({showList: responseData});
      });
  }

  filterHandler = (ev) => {
    console.log(ev.currentTarget.value);
    this.setState({inputText: ev.currentTarget.value});
  }

  render() {
    const inputText = this.state.inputText;
    const unfilteredShows = this.state.showList;
    const filteredShows = unfilteredShows.filter(serie =>
      inputText ? serie.show.name.toLowerCase().includes(inputText.toLowerCase()) : true
    );

    console.log(filteredShows);

    return(
      <div className="App">
        <Filter filterHandler={this.filterHandler} />
        {unfilteredShows.length ? <ShowList showList=
          {filteredShows ? filteredShows : unfilteredShows}
        /> : <p>CARGANDO</p>}
      </div>
    )
  }
}

export default App;