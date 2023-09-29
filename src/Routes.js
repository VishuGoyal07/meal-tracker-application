import React from "react";
import {HashRouter as Router,Routes,Route} from 'react-router-dom';
import { HomePage } from "./home";
import { AddIngredientPage } from "./ingredients";
import { ShoppingListPage } from "./shopping-list";
import { RecipesSearchPage } from "./recipes";

const routes =[
    {
        path:'/',
        Component:HomePage,
        exact:true,
    },
    {
        path:'/add-ingredient',
        Component:AddIngredientPage,
        exact:true,
    },
    {
        path:'/recipes',
        Component:RecipesSearchPage,
        exact:true,
    },
    {
        path:'/shopping-list',
        Component:ShoppingListPage,
        exact:true,
    }
];

export const PageRoutes=()=>(
    <Router>
        <Routes>
            {
                routes.map((route,index)=>(
                <Route key={index} path={route.path} element={<route.Component/>} />
               ))
            }
        </Routes>
    </Router>
)