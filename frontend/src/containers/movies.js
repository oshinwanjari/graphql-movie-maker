import React, { Component } from "react";
import Movie from "../components/Movie";
import { graphql } from "@apollo/client/react/hoc";
import { allMovies } from "../queries/queries";

class Movies extends Component {
  render() {
    let data = this.props.data;

    if (data.loading) {
      return <h2>Loading movies...</h2>;
    }
    if (data.movies.length === 0) {
      return <h2>Please add movies</h2>;
    }
    return (
      <div className="movies">
        {data.movies.map((movie, key) => {
          return (
            <Movie
              key={movie.name}
              name={movie.name}
              genre={movie.genre}
              year={movie.year}
            />
          );
        })}
      </div>
    );
  }
}

export default graphql(allMovies)(Movies);
