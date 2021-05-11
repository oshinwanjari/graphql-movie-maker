import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./containers/movies";
import AddMovies from "./components/AddMovies";

export default function App() {
  return (
    <div>
      <Header />
      <Movies />
      <AddMovies />
      <Footer />
    </div>
  );
}
