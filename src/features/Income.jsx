import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncome, handleFilterByCategory, handleSort } from "../action";
import { getCategories, getSortedAndFilteredData, getTotal } from "../utility/common";
import "../App.css";
import { Filter } from "../component/Filter";
import "./income.css"

export const Income = () => {
  const dispatch = useDispatch();
  const { loading, income, incomeFilter } = useSelector((state) => state);
  const [showAddPrompt, setShowAPrompt] = useState(false);
  const [selectedType, setSelectedType] = useState("income");
const handleSelectChange = (event)=>{
    setSelectedType(event.target.value);
}
  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);
const getFilteredData = getSortedAndFilteredData(income, incomeFilter?.sortBy, incomeFilter?.sortCategory);
  return (
    <div className="main-window">
      <h1>Income</h1>
      <Filter
      handleSort={(value) => dispatch(handleSort("income",value ) )}
      sortBy = {incomeFilter?.sortBy}
      handleFilter = {(value)=> dispatch(handleFilterByCategory("income", value) )}
      categoryValue = {incomeFilter.sortCategory}
      categories={getCategories(income)}

      />
     
      <div style={{display : showAddPrompt ? "none" : ""}}> 
        <button onClick={() => setShowAPrompt(!showAddPrompt)}>
          {showAddPrompt ? "Hide Add Button" : "Add New Income"}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <td>S.No</td>
            <td>Amount</td>
            <td>Description</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <h1>Loading the data</h1>
          ) : (
            getFilteredData?.map((income, index) => (
              <tr key={income._id}>
                <td>{index + 1}</td>
                <td>{income.amount}</td>
                <td>{income.description}</td>
                <td>{income.category}</td>
              </tr>
            ))
          )}
        </tbody>
        {showAddPrompt && (
          <div className="prompt-window">
            <div className="close-btn">
            <button onClick={() => setShowAPrompt(false)}> X</button>

            </div>
            <form className="form-class"> 
              <label htmlFor="amount">
                Amount
                <input type="number" id="amount" required/>
              </label>
              <label htmlFor="description">Description</label>
                <input id="desc" placeholder="What this is about" maxLength={100}/>
              <label htmlFor="Category">
                Category
                <input type="text" id="category" required
                placeholder="Category"
                />
              </label>
              <label htmlFor="entryType">
              <select  required
       value={selectedType}
       onChange={handleSelectChange} >
<option value="expense">
Expense
</option>
<option value="savings">Savings</option>
<option value="income">Income</option>
</select>


              </label>
              <div className="submit-btn">
              <button>Submit</button>
              </div>
             
            </form>
          </div>
        )}
        <div>
          <h2>Total Income: ${getTotal(income)}</h2>
        </div>
      </table>
    </div>
  );
};
