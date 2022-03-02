import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";

import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";

function MovieList() {
  const [moviesData, setMoviesData] = useState(moviesDataJSON); //this should be your DB
  const [movies, setMovies] = useState(moviesDataJSON);

  function addMovie(newMovie){
    setMoviesData([...moviesData, newMovie])
    // What if I want to sort or filter before setting the state?
    setMovies([...movies, newMovie].sort((a, b)=>{return a.title > b.title}))
  }

  function filterMovieList(selection){

    const filteredMovies = moviesData.filter((movie)=>{

      if(selection === "All") return true;
      else return movie.title[0].toLowerCase() === selection.toLowerCase();
    })

    setMovies(filteredMovies);
  }


  return (
    <div>
      <FilterMovies filterMovieList={filterMovieList} />
      <AddMovie moviesData={moviesData} addMovie={addMovie} />
      {movies.map((movie) => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
