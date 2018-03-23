import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      movies: null
    };
    this.searchButtonClicked = this.searchButtonClicked.bind(this);
  }

  onSearchBoxInputChange(event) {
    event.preventDefault();
    this.setState({
      query: event.target.value
    });
  }

  searchButtonClicked(event) {
    event.preventDefault();
    console.log('this.state', this.state);
    const SEARCH_MOVIES_URL = `
		https://api.themoviedb.org/3/search/movie?api_key=6eaf1be79a07c4258e4eed732dfbb9a2&language=en-US&query=${
      this.state.query
    }&page=1&include_adult=false`;
    fetch(SEARCH_MOVIES_URL)
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log('result', result);
        this.setState({
          movies: result.results
        });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Movie Master</div>
        <FormGroup className="App-search-form">
          <InputGroup>
            <FormControl
              placeholder="Search movie"
              onChange={event => this.onSearchBoxInputChange(event)}
            />
            <InputGroup.Addon onClick={this.searchButtonClicked}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="Gallery">
          {this.state.movies &&
            this.state.movies.map(movie => {
              return (
                <div key={movie.id} className="Gallery-movie-card">
                  <img
                    className="Gallery-movie-card-image"
                    alt=""
                    onerror="this.src='/movie_alt.svg';"
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : '/movie_alt.svg'
                    }
                  />
                  <div className="Gallery-movie-card-title">{movie.title}</div>
                </div>
              );
            })}
        </div>
        <div className="Copyright">{'© 2018 Hapreet Singh'}</div>
      </div>
    );
  }
}

export default App;
