import { useState,useEffect } from "react";

export const useShoppingList=()=>{
    const [isLoading,setIsLoading]=useState(true);
    const [items,setItems]=useState([]);

    useEffect(()=>{
        const loadShoppingList=async ()=>{
            const response=await fetch('https://first-meal-tracker-application.herokuapp.com/shopping-list');
            const items=await response.json();
            setItems(items);
            setIsLoading(false);
          
        }
        loadShoppingList();
    },[]);
    return {isLoading,items};
};