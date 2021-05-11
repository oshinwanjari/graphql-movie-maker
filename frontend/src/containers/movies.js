import React, { Component } from "react";
import Movie from "../components/Movie";

export default class Movies extends Component {
  state = {
    movies: [
      {
        id: 1,
        name: "John Wick",
        genre: "Action",
        year: 2019,
        image: "https://bit.ly/3biMP8J"
      },
      {
        id: 2,
        name: "John Wick",
        genre: "Action",
        year: 2019,
        image: "https://bit.ly/3biMP8J"
      },
      {
        id: 3,
        name: "John Wick",
        genre: "Action",
        year: 2019,
        image: "https://bit.ly/3biMP8J"
      },
      {
        id: 4,
        name: "John Wick",
        genre: "Action",
        year: 2019,
        image: "https://bit.ly/3biMP8J"
      },
      {
        id: 5,
        name: "John Wick",
        genre: "Action",
        year: 2019,
        image: "https://bit.ly/3biMP8J"
      },
      {
        id: 6,
        name: "John Wick",
        genre: "Action",
        year: 2019,
        image: "https://bit.ly/3biMP8J"
      },
      {
        id: 7,
        name: "John Wick",
        genre: "Action",
        year: 2019,
        image: "https://bit.ly/3biMP8J"
      },
      {
        id: 8,
        name: "John Wick",
        genre: "Action",
        year: 2019,
        image: "https://bit.ly/3biMP8J"
      }
    ]
  };
  render() {
    return (
      <div className="movies">
        {this.state.movies.map((movie, key) => {
          return (
            <Movie
              key={movie.id}
              name={movie.name}
              genre={movie.genre}
              year={movie.year}
              image={movie.image}
            />
          );
        })}
      </div>
    );
  }
}
