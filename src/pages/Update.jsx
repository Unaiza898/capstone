import { useEffect,useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import SideNav from "../components/sidenav";
import supabase from "../config/client";
const Update = () => {
    const {id} = useParams()
const navigate = useNavigate();
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [image,setImage] = useState("")
const [formError, setformError] = useState("");


const handleSubmit   = async (e) =>{
e.preventDefault();

if(!title || !description){
    setformError('Please fill in all the fields correctly')

  }
  const {data,error} = await supabase
  .from('post')
  .update({title,description,image})
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
        const fetch = async () =>{
            const{data, error} = 
            await supabase
            .from('post')
            .select()
            .eq('id',id)
            .single()

            if(error){
                navigate('/', {replace : true})
            }
            if(data){
                setTitle(data.title)
                setDescription(data.description)
                setImage(data.image)
                console.log("update", data)
            }
        }
        fetch()
    },[id,navigate]  )
    return (
        <div className=" Page update">
            <h2> Update - {id}</h2>

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
    <button> Update</button>
    {formError && <p className="error"> {formError}</p>}
      </form >
    </div>



</div>
    )
}

export default Update