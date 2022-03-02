import { useState } from "react";

function FilterMovies(props) {

  const [firstLetter, setSelectData] = useState("All")

  function handleSelect(event){
    const value = event.target.value;
    setSelectData(value)

    props.filterMovieList(value) //props.filterMovieList(firstLetter)
    

  }

  return (
    <div className="FilterMovies">
      <label>Show movies by first letter:</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}

export default FilterMovies;
