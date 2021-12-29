import { useState } from "react";
import React from "react-dom";
import "./Form.css";
function Form() {
  const [name, setName] = useState("");
  function HandleName(event) {
    setName(event.target.value);
    console.log(name);
  }
  const [email, setEmail] = useState("");
  function HandleEmail(event) {
    setEmail(event.target.value);
    console.log(email);
  }
  const [number, setNumber] = useState("");
  function HandleNumber(event) {
    setNumber(event.target.value);
    console.log(number);
  }
  const [city, setCity] = useState("");
  function HandleCity(event) {
    setCity(event.target.value);
    console.log(city);
  }
  const [stateUser, setStateUser] = useState("");
  function HandleName(event) {
    setStateUser(event.target.value);
    console.log(number);
  }

  return (
    <div class='form-main'>
      <h1>Contact Us</h1>
      <form class='form-content'>
        <div class='form-row'>
          <div class='form-group col-md-6'>
            <label for='inputFirstName'>First Name</label>
            <input
              type='text'
              class='form-control'
              id='inputFirstName'
              placeholder='First Name'
              onChange={HandleName}
            />
          </div>
          <div class='form-group col-md-6'>
            <label for='inputLastName'>Last Name</label>
            <input
              type='text'
              class='form-control'
              id='inputLastName'
              placeholder='Last Name'
            />
          </div>
        </div>
        <div class='form-row'>
          <div class='form-group col-md-6'>
            <label for='inputEmail'>Email</label>
            <input
              type='email'
              class='form-control'
              id='inputEmail'
              placeholder='Email'
            />
          </div>
          <div class='form-group col-md-6'>
            <label for='inputNumber'>Password</label>
            <input
              type='text'
              class='form-control'
              id='inputNumber'
              placeholder='Mobile Number'
            />
          </div>
        </div>

        <div class='form-row'>
          <div class='form-group col-md-6'>
            <label for='inputAddress'>City</label>
            <input
              type='text'
              class='form-control'
              id='inputAddress'
              placeholder='Address'
            />
          </div>
          <div class='form-group col-md-4'>
            <label for='inputState'>State</label>
            <input
              type='text'
              id='inputState'
              class='form-control'
              placeholder='State'
            />
          </div>
          <div class='form-group col-md-2'>
            <label for='inputZip'>Zip</label>
            <input
              type='text'
              class='form-control'
              id='inputZip'
              placeholder='ZIP'
            />
          </div>
        </div>
        <div class='form-group'>
          <div class='form-check'>
            <input class='form-check-input' type='checkbox' id='gridCheck' />
            <label class='form-check-label customTitle' for='gridCheck'>
              Looking to Adopt
            </label>
          </div>
        </div>
        <button type='button' class='btn btn-primary btn-lg '>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;