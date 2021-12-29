import React from "react-dom";
import "../seriesPost/series.css";
import seriesData from "./seriesData";
function Card(props) {
  return (
    <div class='card text-white  mb-3 puzzle-card' style={{maxWidth: "18rem;",backgroundColor:"#7579e7;"}}>
      
      <div class='card-body'>
       
        
         <div class='image-area'><img src={props.font}></img></div>
         <a
              href={props.link}
              class="btn-custom d-flex align-items-center justify-content-center"
            >
              <span class="arrow fa fa-chevron-right"></span>
              <i class="sr-only">Read more</i>
            </a>
      
      </div>
    </div>
  );
}

export default Card;

//{props.heading}
 //props.content