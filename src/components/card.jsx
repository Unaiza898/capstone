import React from "react";
import { Outlet, Link } from "react-router-dom";

import supabase from "../config/client";
import { useNavigate } from "react-router-dom";
const Card = ({ post }) => {
  const navigate = useNavigate()
  const deletePost = async (event) => {
    event.preventDefault();
    await supabase
    .from('post')
    .delete()
    .eq('id', post.id); 
    navigate('/')
    .then(()=>{
      window.location.reload();
    })
   

}

const likePost =  async (event) => {
  event.preventDefault();
  await supabase
  .from('post')  
  .update({ like: post.like+1 })
  .eq('id', post.id);
  navigate('/')
  .then(()=>{
    window.location.reload();
  })
 
}


  return(
    <div className="card">
  

    <h3> {post.title}</h3>
    <p> description: {post.description}</p>
    <p> Likes: {post.like}</p>
    {console.log(post.comment)}

    {/* <Link className="buttons" to={"/" + crewmate.id}>Edit</Link> */}
       <span> </span>
    {/* <Link className="buttons" to={"/gallery/" + crewmate.id}>View</Link> */}
<div>
 <button onClick={deletePost}> Delete</button> 
 <button onClick={likePost}> Like</button> 
</div>

  </div>
  )
 
}



export default Card;
