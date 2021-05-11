import React from "react";

export default function AddMovies() {
  return (
    <div className="addMovie">
      <form onSubmit={() => alert("Movie Added!")}>
        <label>Name</label>
        <input type="text" required />
        <label>Genre</label>
        <input type="text" required />
        <label>Year</label>
        <input type="text" placeholder="optional" />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}
