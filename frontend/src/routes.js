import { BrowserRouter, Route, Routes } from 'react-router-dom';//erro
import React from 'react';
import Login from './pages/Login';
import Main from './pages/Main';



export default function MyRoutes(){

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" component={<Login/>}/>
            <Route path="/main" component={Main}/>
        </Routes>
    </BrowserRouter>
    );
}