
import { useEffect,useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Outlet, Link } from "react-router-dom";
import SideNav from "../components/sidenav";
import supabase from "../config/client";
import white from "../assets/white.png";
import black from "../assets/black.png";
import blue from "../assets/blue.png";
import red from "../assets/red.png";

const Info = () => {
    const [name, setName] = useState("");
const [speed, setSpeed] = useState("");
const [color, setColor] = useState("");
    const {id} = useParams()
    const navigate = useNavigate();
const [speedcal, setSpeedcal] = useState("")





    useEffect(()=> {
        const fetchcrewmate = async () =>{
            const{data, error} = 
            await supabase
            .from('amongus')
            .select()
            .eq('id',id)
            .single()

            if(error){
                // navigate('/', {replace : true})
            }
            if(data){
                setName(data.name)
                setSpeed(data.speed)
                setColor(data.color)
                console.log("update", data)
            }

            if(speed <200){
                setSpeedcal(" You may want to chooose a different crewmate this one is kind of slow")
            }
            else{
                setSpeedcal("This is an excellent choice with an amazing speed!!")
           
            }
        }
        fetchcrewmate()
    },[id]  )
return (
    <div >
        <SideNav/>

        {color == "white"?
        <div>
         <img width="250px" height="300px" src={white}/>
         </div> :""
        }
         {color == "red"?
         <div>
         <img width="250px" height="300px" src={red}/>
         </div> : ""
        }
               {color == "blue"?
               <div>
         <img width="250px" height="300px"  src={blue}/> </div>: ""
        }
             {color == "black"?
      <div>   <img width="250px" height="300px"  src={black}/> </div>: ""
        }
     
        <div class="row container">
  <div class="column">
  <h4 > Name</h4>
  <h4 > Speed</h4>
  <h4> Color</h4>
  </div>
  <div class="column">

  <p className="label">{name}</p>
  <p className="label">{speed} mph</p>
  <p className="label">{color}</p>

  </div>


</div>
<div className="speed">
   {speedcal}
  </div>

<Link className="info" to = {'/' + id}>
Wanna edit this crewmate
</Link>

    </div>
)

}

export default Info