import React from "react";
import Card from "./serviceCard";
import services from "./services";


function ServiceCards(props)
{
    return(

<div class="cards" style={{ position: "relative", marginTop: "-50px" }}>
        <div class="container">
        <div class="row">
        {services.map( services=> <Card id={services.id} title={services.title} content ={services.content} font={services.font}/>)}
        
        </div>
        </div>
        </div>

        
    );
}

export default ServiceCards;