import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login  from './components/User/Login';
import { ViewProdcuts } from './components/Products/ViewProdcuts';
import  AddProduct  from './components/Products/AddProduct';
import { AdminDashboard } from './components/AdminDashboard';
import  Sidebar  from './components/Sidebar';
import { AddCategory } from './components/Category/AddCategory';
import { EditProduct } from './components/Products/EditProduct';
import { ViewCategory } from './components/Category/ViewCategory';
import { EditCategory } from './components/Category/EditCategory';
import SellProduct from './components/Products/SellProduct';
import GetBill from './components/Bill/GetBill';
import Logout from './components/User/Logout';
import { AllBills } from './components/Bill/AllBills';
function App() {
const storedPrice = sessionStorage.getItem('price');
const price = storedPrice !== null ? parseFloat(storedPrice) : 0; 
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path='/view' element={<ViewProdcuts/>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/dashboard' element={<AdminDashboard/>}/>
      <Route path='sidebar' element={<Sidebar/>}/>
      <Route path='/addcategory' element={<AddCategory/>}/>
      <Route path='/editproduct/:id' element={<EditProduct/>}/>
      <Route path='/viewcategory' element={<ViewCategory/>}/>
      <Route path='/editcategory/:id' element={<EditCategory/>}/>
      <Route path='sellproduct' element={<SellProduct/>}/>
      <Route path='/billdata' element={<GetBill />}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/allbills' element={<AllBills/>}/>
    </Routes>
  </Router>
  );
}

export default App;
