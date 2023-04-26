import { Outlet, Link } from "react-router-dom";
import SideNav from "../components/sidenav";
import { useEffect, useState } from 'react'
import supabase from "../config/client";
import Card from "../components/card";

const Gallery = () => {

    
  const [fetchError, setFetchedError] = useState(null)
  const [crewmate, setCrewmate]  = useState(null)

//   useEffect(()=> {

//     const fetchcrew = async () => {

//       const{ data , error} = await supabase
//       .from('amongus')
//       .select()

//       if(error){
//         setFetchedError('could not fetch the srewmates')
//         setCrewmate(null)
//         console.log(error)
//       }
//       if(data){
//         setCrewmate(data)
//         setFetchedError(null)
//       }
//     }
// fetchcrew()

//   },[])

    return (
     
      <div>
    <SideNav/>

   {fetchError && (<p>{fetchError}</p>)}

   {/* {crewmate &&( */}
    {/* <div className="crewmates">
   
            <div className="crewmates-grid">
        {crewmate.map(crewmate => (
      
           <Card key={crewmate.id} crewmate={crewmate}/>
        ))}
        </div>
        </div> */}
   {/* )} */}

      </div>
    );
  };
  
  export default Gallery;