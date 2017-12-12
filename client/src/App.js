import React from 'react';
import WeatherListBox from './WeatherListBox';
import SearchForm from './SearchForm';
import './App.css'; 



class App extends React.Component {
  constructor(props) {
    super(props);
    //bind this to functions
    this.removeWeatherBox = this.removeWeatherBox.bind(this);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    
    //Declare local state
    this.state = {
      cards: []
    }

  }
  search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
  }

  onSubmitSearchForm(string) { 
    this.setState(prevState => ({
      cards: prevState
        .cards
        .concat(string)
    }));
  };

  removeWeatherBox(string) {
    console.log(string);
    const newState = this.state.cards.slice();
    if (newState.indexOf(string) > -1) {
      newState.splice(newState.indexOf(string), 1);
      this.setState({cards: newState})
    }
  };

  render() {
    return (
      <div className="container">
        <div>
          <h2>Weather app</h2>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm}/>
        </div>
        <WeatherListBox
          cards={this.state.cards}
          removeWeatherBox={this.removeWeatherBox}/>
      </div>
    );
  }
}

export default App;