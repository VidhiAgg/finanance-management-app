import { ADD_ITEM_, FETCH_DATA_LOADING, FETCH_EXPENSES_SUCCESS, FETCH_INCOME_SUCCESS, FETCH_SAVINGS_SUCCESS, FILTER_EXPENSE_, FILTER_INCOME_, FILTER_SAVINGS_, SORT_EXPENSE_, SORT_INCOME_, SORT_SAVINGS_ } from "./utility/constant";

const initialState = {
    income: [],
    expenses:[],
    savings:[],
    loading: false,
    error: null,
    incomeFilter: {
        sortBy:"",
        sortCategory:""
    },
    expenseFilter:{
        sortBy:"",
        sortCategory:""
    },
    savingFilter :{
        sortBy:"",
        sortCategory:""
    }

}

export const financeReducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_INCOME_SUCCESS : 
        return{
             ...state, income: action.payload,
             loading : false,
             error: null
        };
        case FETCH_EXPENSES_SUCCESS : 
        return{
             ...state, expenses: action.payload,
             loading : false,
             error: null
        };
        case FETCH_SAVINGS_SUCCESS : 
        return{
             ...state, savings: action.payload,
             loading : false,
             error: null
        };
        case FETCH_DATA_LOADING : return {
            ...state,
            loading: true
        };

        case SORT_INCOME_ : return{
            
            ...state, incomeFilter : {...state.incomeFilter,
                sortBy : action.payload
            }
        };

        case FILTER_INCOME_ : return{
            
            ...state, incomeFilter : {...state.incomeFilter,
                sortCategory : action.payload
            }
        };

        case SORT_EXPENSE_ : return{
            
            ...state, expenseFilter : {...state.expenseFilter,
                sortBy : action.payload
            }
        };

        case FILTER_EXPENSE_ : return{
            
            ...state, expenseFilter : {...state.expenseFilter,
                sortCategory : action.payload
            }
        };

        case SORT_SAVINGS_ : return{
            
            ...state, savingFilter : {...state.savingFilter,
                sortBy : action.payload
            }
        };

        case FILTER_SAVINGS_ : return{
            
            ...state, savingFilter : {...state.savingFilter,
                sortCategory : action.payload
            }
        };


        case ADD_ITEM_:
      if (action.payload.entryType === "income") {
        return {
          ...state,
          income: [...state.income, action.payload],
          error: null
        };
      } else if (action.payload.entryType === "expense") {
        return {
          ...state,
          expense: [...state.expenses, action.payload],
          error: null
        };
      } else {
        return {
          ...state,
          saving: [...state.savings, action.payload],
          error: null
        };
      };

        default : return state;
    }
}