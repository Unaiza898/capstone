import { useEffect,useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import supabase from "../config/client";
const Update = () => {
    const {id} = useParams()
const navigate = useNavigate();
const [name, setName] = useState("");
const [speed, setSpeed] = useState("");
const [color, setColor] = useState("");
const [formError, setformError] = useState("");

const handleSubmit   = async (e) =>{
e.preventDefault();

if(!name ||!color || !speed ){
    setformError('Please fill in all the fields correctly')

  }
  const {data,error} = await supabase
  .from('amongus')
  .update({name,color,speed})
  .eq('id',id)

  if(error){
    console.log(error)
    setformError('Please fill in all the fields correctly')

  }

  if(data){
    console.log(data)
    setformError(null)

  }
  if(!error){
    navigate('/')
  }
 


}
    useEffect(()=> {
        const fetchcrewmate = async () =>{
            const{data, error} = 
            await supabase
            .from('amongus')
            .select()
            .eq('id',id)
            .single()

            if(error){
                navigate('/', {replace : true})
            }
            if(data){
                setName(data.name)
                setSpeed(data.speed)
                setColor(data.color)
                console.log("update", data)
            }
        }
        fetchcrewmate()
    },[id,navigate]  )
    return (
        <div className=" Page update">
            <h2> Update - {id}</h2>


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
               {color} 
        <select id="color" name="color"
         onChange={e => setColor(e.target.value)}
        >
          <option >Please select of the options</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="white">white</option>
          <option value="black">black</option>
        </select>
     </div>
    <button> Update Crewmate</button>
    {formError && <p className="error"> {formError}</p>}
      </form >
        </div>
    )
}

export default Update