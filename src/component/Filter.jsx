import React from 'react'
import { filterTypes } from '../utility/constant'

export const Filter = ({
  handleSort,sortBy,handleFilter, categoryValue, categories

}) => {

  const handleRadioChange = (event) => {
    handleSort(event.target.value);
  };

  const handleSelectChange = (event) => {
    handleFilter(event.target.value);
  };


  return (
    <div>
       <fieldset>
    <legend>Sort And Filter</legend>
    <div>
      {filterTypes?.map(sortType => (
        <div>
          <input type="radio" name={sortType?.value} 
          id={sortType.value} onChange={handleRadioChange}
          checked = {sortBy === sortType?.value}
          value = {sortType?.value}/>
          <label >{sortType?.display}</label>
          </div>
      ))}
      <div>
       Filter <select 
       value={categoryValue}
       onChange={handleSelectChange}
       
       name="categories" id="categories">
        <option value="">Select Category</option>

          {
            categories && 
            categories?.map(category => (
              <option key = {category}value={category}>{category}</option>
           )
            )
          }
        </select>
      </div>
    </div>
    </fieldset>
    </div>
  )
}

