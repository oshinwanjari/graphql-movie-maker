import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import { flowRight as compose } from "lodash";
import { allMovies, addMovie } from "../queries/queries";

class AddMovies extends Component {
  state = {
    name: "",
    genre: "",
    year: ""
  };

  submitMovie = (event) => {
    event.preventDefault();
    this.props.addMovie({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        year: this.state.year
      },
      refetchQueries: [{ query: allMovies }]
    });
  };
  render() {
    return (
      <div className="addMovie" id="form">
        <form onSubmit={this.submitMovie}>
          <label>Name</label>
          <input
            type="text"
            required
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <label>Genre</label>
          <input
            type="text"
            required
            onChange={(e) => this.setState({ genre: e.target.value })}
          />
          <label>Year</label>
          <input
            type="text"
            placeholder="optional"
            onChange={(e) => this.setState({ year: e.target.value })}
          />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    );
  }
}

export default compose(
  graphql(addMovie, { name: "addMovie" }),
  graphql(allMovies, { name: "allMovies" })
)(AddMovies);
