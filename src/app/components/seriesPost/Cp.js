import React from "react-dom";
import Card from "./ServiceCardCp";
import "../seriesPost/series.css"
import seriesDatacp from "./seriesDatacp";
// function Puzzle() {
//   return (
//     <div className='row instruct-puzzle'>
//       <div className='col-md-3'>
//         <Card heading='Step1' content='Register your pet' />
//       </div>
//       <div className='col-md-3'>
//         <Card heading='Step2' content='Look for puzzle'/>
//       </div>
//       <div className='col-md-3'>
//         <Card heading='Step3' content='Select a puzzle'/>
//       </div>
//       <div className='col-md-3'>
//         <Card heading='Step4' content='Leave the rest to us'/>
//       </div>
//     </div>
//   );
// }
// export default Puzzle;
function ServiceCardss(props)
{
    return(


        <div className="row instruct-puzzle">
        
        {seriesDatacp.map( seriesDatacp=> <div className="col-md-3"><Card  font={seriesDatacp.font}/></div>)}
       
        
        
        </div>
       

        
    );
}
export default ServiceCardss;
