import React, { Component } from 'react';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Movie Master</div>
        <div>
          <input type="text" placeholder="Search movie" />
          <button>Search</button>
        </div>
        <div>Gallery</div>
      </div>
    );
  }
}

export default App;
