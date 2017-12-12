import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './common/Header';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


class AppWrapper extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <div className="container">
            <Routes/>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
registerServiceWorker();
