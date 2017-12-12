import React from 'react';
import axios from 'axios';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            city: []
        }
    }
    
    handleSubmit(event){
        event.preventDefault();//<== will prevent the original code from taking place (Submit/CLick etc)
        var url = `http://samples.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=4f0255987339a8db68505a37dd5cf4f3`
       
        axios.get(url)
        .then(response => {
            const temp = response.data.main.temp-273.15;//Prep temp
            //Create a new object from the data we have received.
            var stracture = {
                name: response.data.name,
                icon: 'http://openweathermap.org/img/w/'+response.data.weather[0].icon+'.png',
                feelslike_c: temp.toFixed(2),
                text: response.data.weather[0].description,
                comments: []
            };
            this.props.onSubmitSearchForm(stracture);
            this.setState({city: ''});
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
    }

    render() {
        return (
            <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter city"
                        required
                        value={this.state.city}
                        onChange={(event) => this.setState({city: event.target.value})}/>
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Go!</button>
                    </span>
                </div>
            </form>
        );
    }
}
export default SearchForm;