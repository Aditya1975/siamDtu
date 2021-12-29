import React from "react";
import services from "./services";
import "./serviceCard.css";

function Card(props) {
  return (
      <div class="col-md-4  d-flex align-self-stretch px-4 ">
        <div class="d-block text-center  services">
          <div class="icon d-flex align-items-center justify-content-center">
            <span >
              <img class="font" src={props.font} />
            </span>
          </div>
          <div class="media-body">
            <h3 class="heading">{props.title}</h3>
            <p>{props.content}</p>
            <a
              href="#"
              class="btn-custom d-flex align-items-center justify-content-center"
            >
              <span class="arrow fa fa-chevron-right"></span>
              <i class="sr-only">Read more</i>
            </a>
          </div>
        </div>
    </div>
  );
}

export default Card;