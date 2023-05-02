import { useState } from "react";
import supabase from "../config/client";

import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image,setImage] = useState("")
  const [formError, setformError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {


    e.preventDefault()

    if(!title ||!description ){
      setformError('Please fill in all the fields correctly')
  
    }
   
    console.log(title, description, image)

    const {data, error} = await supabase
    .from('post')
    .insert([{title, description, image}])

    if(error){
      console.log(error)
    }
    if(data){
      console.log(data)
      setformError(null)

    }
    if(!error){
      navigate('/')
    }
   
  }
  return (
    <div className=" page create">
  
      <h2> Create a Post</h2>

      <form onSubmit={handleSubmit}>
        <div>
        <label > Title </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>
    
    <div>
    <label > description </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
    </div>
     
     <div>
     <label >Image url:</label>
     <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
     </div>
    <button> Create Post</button>
    {formError && <p className="error"> {formError}</p>}
      </form >
    </div>
  );
};

export default Create;