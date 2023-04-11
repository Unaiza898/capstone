import React from "react";
import { Outlet, Link } from "react-router-dom";
import white from "../assets/white.png";
import black from "../assets/black.png";
import blue from "../assets/blue.png";
import red from "../assets/red.png";
const Card = ({ crewmate }) => (
  <div className="card">
    {crewmate.color == "white" ? (
      <div>
        <img width="150px" height="100px" src={white} />
      </div>
    ) : (
      ""
    )}
    {crewmate.color == "red" ? (
      <div>
        <img width="100px" height="100px" src={red} />
      </div>
    ) : (
      ""
    )}
    {crewmate.color == "blue" ? (
      <div>
        <img width="100px" height="100px" src={blue} />{" "}
      </div>
    ) : (
      ""
    )}
    {crewmate.color == "black" ? (
      <div>
        {" "}
        <img width="150px" height="100px" src={black} />{" "}
      </div>
    ) : (
      ""
    )}

    <h3> Name: {crewmate.name}</h3>
    <p> Speed: {crewmate.speed}</p>
    <p> Color: {crewmate.color}</p>
    <Link className="buttons" to={"/" + crewmate.id}>Edit</Link>
       <span> </span>

    <Link className="buttons" to={"/gallery/" + crewmate.id}>View</Link>
  </div>
);

export default Card;
