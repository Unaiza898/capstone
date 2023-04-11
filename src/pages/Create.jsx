import { useState } from "react";
import supabase from "../config/client";
import SideNav from "../components/sidenav";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");
  const [formError, setformError] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {


    e.preventDefault()

    if(!name ||!color || !speed ){
      setformError('Please fill in all the fields correctly')
  
    }
   
    console.log(speed,color,name)

    const {data, error} = await supabase
    .from('amongus')
    .insert([{name,speed, color}])

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
      <SideNav/>
      <h2> Create a Crewmate</h2>

      <form onSubmit={handleSubmit}>
        <div>
        <label > Name </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
    
    <div>
    <label > Speed </label>
        <input
          type="text"
          id="speed"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />
    </div>
     
     <div>
     <label >Choose a color:</label>
        <select id="color" name="color"
         onChange={e => setColor(e.target.value)}
        >
          <option defaultChecked>Please select of the options</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="white">white</option>
          <option value="black">black</option>
        </select>
     </div>
    <button> Create Crewmate</button>
    {formError && <p className="error"> {formError}</p>}
      </form >
    </div>
  );
};

export default Create;