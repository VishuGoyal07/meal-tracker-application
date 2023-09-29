import {useState,useEffect} from 'react';
export const useMeals=()=>{
   const [isLoading,setIsLoading]=useState(true);
   const [rawMeals,setRawMeals]=useState([]);

   useEffect(()=>{
      const loadMeals=async()=>{
        const response =await fetch('https://first-meal-tracker-application.herokuapp.com/meals'); //get request to /meals endpoint at server
        const rawMealsResponse=await response.json();
        setRawMeals(rawMealsResponse);
        setIsLoading(false);
      }
      loadMeals();
   },[]);

   return {isLoading,
      meals:rawMeals.map(rawMeal=>(
         {
            ...rawMeal,
            plannedDate:new Date(rawMeal.plannedDate),
         }
      )),
      setMeals:setRawMeals};
}