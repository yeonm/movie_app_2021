import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading : true,
    movies:[]
  };
  getMovies = async() => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section class = "container">
        {isLoading ? (
          <div class = "loader">
            <span class = "loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies"></div>
        )}
      </section>
    );
  }
}

export default App;
