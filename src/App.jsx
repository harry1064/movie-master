import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Movie Master</div>
        <FormGroup className="App-search-form">
          <InputGroup>
            <FormControl placeholder="Search movie" />
            <InputGroup.Addon>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div>Gallery</div>
      </div>
    );
  }
}

export default App;
