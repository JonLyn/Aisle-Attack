import React, { useState, Fragment } from 'react';


function EnterItem() {


  return (
    <Fragment>
      <header>
        <h1>Aisle Attack</h1>
      </header>

      <form>
        <div>
          <label htmlFor="newItem">Item: </label>
          <input 
            type="text"
            id="newItem"
            placeholder="Enter an item"
            required
          />
        </div>
        <div>
          <label htmlFor="deptInput">Dept / aisle: </label>
          <select
            id="deptInput"
          >
            <option value="bakery">Bakery</option>
            <option value="produce">Produce</option>
          </select>
        </div>
      </form>
    </Fragment>
  )
}

export default EnterItem;