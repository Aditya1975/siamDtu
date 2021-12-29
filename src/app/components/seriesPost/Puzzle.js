import React from "react-dom";
import Card from  "./ServiceCard";
import "../seriesPost/series.css";
// import image2 from "../../components/seriesPost/images/scr2.jpg.jpeg"
// import image3 from "../../components/seriesPost/images/scr3.jpeg"
// import image4 from "../../components/seriesPost/images/scr4.jpeg"
// import image5 from "../../components/seriesPost/images/scr5.jpeg"
// import image6 from "../../components/seriesPost/images/scr6.jpeg"
import seriesData from "./seriesData";
import ServiceCards from "../serviceCard/serviceMaker";

//  function Puzzle(){
//     return(
//      <div className="row instruct-puzzle">
    
//      <div className="col-md-3">
//      <Card heading=" Step 1 " content="Register"  img ={image2}/>
//      </div>
//      <div className="col-md-3">
//       <Card heading=" Step 2 " content="Look for a pet" img={image3}/>
//      </div>
//      <div className="col-md-3">
//       <Card heading=" Step 3 " content="Select a pet" img={image4}/>
//     </div>
//      <div className="col-md-3">
//      <Card heading=" Step 4 " content="Leave the rest to us" img={image5}/>
//      </div>
//      <div className="col-md-3">
//      <Card heading=" Step 4 " content="Leave the rest to us" img={image6}/>
//      </div>

//     </div>
//     )
//  }
function ServiceCardss(props)
{
    return(


        <div className="row instruct-puzzle ">
        
        {seriesData.map( seriesData=> <div className="col-md-3"><Card link={seriesData.link} font={seriesData.font}/></div>)}
       
        
        
        </div>
       

        
    );
}
export default ServiceCardss;
