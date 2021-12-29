import { useState } from "react";
import React from "react-dom";
import "../seriesPost/series.css";
import Puzzle from "./Puzzle";
import SelectCard from "./SelectionCard";
import SelectCard2 from "./SelectionCardCp";
import Cp from "./Cp";

function SeriesPOST() {
  const [select, setSelect] = useState(false);

  function handleClick1() {
    setSelect(false);
  }
  function handleClick2() {
    setSelect(true);
  }
  const style1 = { backgroundColor: "#f1e189"};
  const style2 = {  };

  return (
    <section><div className=' container-fluid about-main'>
      <h1> Welcome!!!</h1>
      <h2> What are you looking for?</h2>
      <div className='row r1'>
        <div onClick={handleClick1} className='col-md-6'>
          <SelectCard customStyle={!select ? style1 : style2} />
        </div>
        <div className='col-md-6' onClick={handleClick2}>
          <SelectCard2 customStyle={select ? style1 : style2} />
        </div>
      </div>

      {select ? <Cp /> : <Puzzle />}
    </div>
    </section>
  );
}
export default SeriesPOST;