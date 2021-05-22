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
        data: { movieList }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movie: movieList, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {
          isLoading? 
            "Loading..." 
            : movies.map(movie => 
                  movie.title)
        }
      </div>
    );
  }
}

export default App;
