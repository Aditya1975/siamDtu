import React from "react-dom";
import "../seriesPost/series.css";

function Card(props) {
  return (
    <div class='card text-white  mb-3 cp-card' style={{maxWidth: "18rem;"}}>
      <div class='card-header'>heading</div>
      <div class='card-body'>
        <h5 class='card-title'>temp</h5>
        
        <p class='card-text'>
         <div class='image-area'><img src={props.font}></img></div>
       
        </p>
      </div>
    </div>
  );
}
export default Card;
//{props.heading}
//{props.title}