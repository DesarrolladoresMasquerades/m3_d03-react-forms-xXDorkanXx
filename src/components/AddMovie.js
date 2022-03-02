import { useState } from "react";

function AddMovie(props) {

  const [formData, setFormData] = useState({
    title: "",
    director: "",
    IMDBRating: "",
    hasOscars: false
  })

  function handleDataChange(event){
    const key = event.target.name; //key is same as inputName
    
    let value = "";
    // if(key === "hasOscars"){
    //   value = event.target.checked;
    // }else{
    //   value = event.target.value;
    // }
    if(key === "hasOscars") value = event.target.checked;
    else value = event.target.value;

    //setFormData(formData => Object.assign({}, formData, {[key]: value}));
    setFormData(formData=> ({...formData, [key]: value}));
  }

  function handleSubmit(event){
    event.preventDefault();
    //axios.post() or fetch({method: "post"}) goes here

    console.log("formData: ", formData);
    props.addMovie({...formData, _id: "1ae22ff" + (props.moviesData.length - 1)}) // We send the sate up to the nearest parent && _id: Math.random()*100000

    setFormData({
      title: "",
      director: "",
      IMDBRating: "",
      hasOscars: false
    })
  }


  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleDataChange}/>

        <label>Director:</label>
        <input type="text" name="director" value={formData.director} onChange={handleDataChange}/>

        <label>IMDB Rating:</label>
        <input type="number" name="IMDBRating" value={formData.IMDBRating} onChange={handleDataChange}/>

        <label>Won Oscars:</label>
        <input type="checkbox" name="hasOscars" checked={formData.hasOscars} onChange={handleDataChange}/>
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
