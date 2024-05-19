import axios from "axios";
import { ADD_ITEM_, FETCH_DATA_LOADING, FETCH_EXPENSES_Faliure, FETCH_EXPENSES_SUCCESS, FETCH_INCOME_FAILURE, FETCH_INCOME_SUCCESS, FETCH_SAVINGS_FAILURE, FETCH_SAVINGS_SUCCESS, FILTER_EXPENSE_, FILTER_INCOME_, FILTER_SAVINGS_, SORT_EXPENSE_, SORT_INCOME_, SORT_SAVINGS_ } from "./utility/constant";


const baseAPIUrl = "https://finance-api-lemon.vercel.app";
export const fetchIncome = () => async(dispatch)  =>{
    try {

        dispatch({type : FETCH_DATA_LOADING})
        const response = await axios.get(`${baseAPIUrl}/incomes`);
        dispatch({type : FETCH_INCOME_SUCCESS, payload: response.data.incomes})
        
    } catch (error) {
        console.error("Error in fetching the income data: ", error)
        dispatch({type: FETCH_INCOME_FAILURE})
    }
}
export const fetchExpenses = () => async(dispatch)  =>{
    try {

        dispatch({type : FETCH_DATA_LOADING})
        const response = await axios.get(`${baseAPIUrl}/expenses`);
        dispatch({type : FETCH_EXPENSES_SUCCESS, payload: response.data.expenses})
        
    } catch (error) {
        console.error("Error in fetching the expenses data: ", error)
        dispatch({type: FETCH_EXPENSES_Faliure})
    }
}

export const fetchSavings = () => async(dispatch)  =>{
    try {

        dispatch({type : FETCH_DATA_LOADING})
        const response = await axios.get(`${baseAPIUrl}/savings`);
        dispatch({type : FETCH_SAVINGS_SUCCESS, payload: response.data.savings})
        
    } catch (error) {
        console.error("Error in fetching the savings data: ", error)
        dispatch({type: FETCH_SAVINGS_FAILURE})
    }
}

export const addRecord = (entry) => async(dispatch)  =>{
   
        try {
          let endPoint;
      
          if (entry.entryType === "income") {
            endPoint = `${baseAPIUrl}/income`;
          } else if (entry.entryType === "expense") {
            endPoint = `${baseAPIUrl}/expense`;
          } else {
            endPoint = `${baseAPIUrl}/saving`;
          }
      
          const {
            data: { data },
          } = await axios.post(endPoint, entry);
      
          dispatch({ type: ADD_ITEM_, payload: data });
        } catch (error) {
          console.error("Error while fetching saving data!", error);
        }
      };
export const handleSort = (type, value)=> (dispatch)=>{
    console.log("Sorting", type, "with value:", value);

    if(type === "income")
    {
        dispatch({type : SORT_INCOME_, payload: value})
    }
    if(type === "expense"){
        dispatch({type: SORT_EXPENSE_, payload: value})
    }
    if(type ==="savings"){
        dispatch({type: SORT_SAVINGS_, payload: value})
    }


}

export const handleFilterByCategory = (type, value) =>(dispatch)=>{
    console.log("Filtering", type, "with value:", value);


    if(type === "income")
    {
        dispatch({type : FILTER_INCOME_, payload: value})
    }
    if(type === "expense"){
        dispatch({type: FILTER_EXPENSE_, payload: value})
    }
    if(type ==="savings"){
        dispatch({type: FILTER_SAVINGS_, payload: value})
    }
}