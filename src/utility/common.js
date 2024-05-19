import { HIGH_TO_LOW, LOW_TO_HIGH_ } from "./constant";

export const getTotal = (data) => data?.reduce((acc,curr) => acc+curr.amount, 0);

export const getFormattedDate = (date) => {
    return new Date(date).toLocaleDateString().substring(0,11);
}

export const getCategories = (data)=>{
    return [...new Set(data.map(details => details.category))];
}

export const getSortedData = (data, sortBy) =>{
    if(sortBy === LOW_TO_HIGH_){
        return [...data]?.sort((a,b)=> a.amount - b.amount);
    }
    else if(sortBy === HIGH_TO_LOW){
        return [...data]?.sort((a,b)=> b.amount - a.amount);

    }else{
        return data;
    }
}

export const getFilteredData = (data, filterCategory)=>{
    return data?.filter((record,index)=>
    record?.category?.toLowerCase() === filterCategory?.toLowerCase() );

};


export const getSortedAndFilteredData = (data, sortBy,filteredCategory)=>{
    let dataClone = [...data];
    if(sortBy){
        dataClone = getSortedData(dataClone, sortBy);
    }
    if(filteredCategory){
        dataClone = getFilteredData(dataClone, filteredCategory);
    }
    return dataClone;
}