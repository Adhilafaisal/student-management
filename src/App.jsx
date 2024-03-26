import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import {Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Registration from './components/Registration'
import Login from './components/Login'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import List from './components/List'
import AddStudent from './components/AddStudent'
import Edit from './components/Edit'


function App() {


  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/reg' Component={Registration} />
        
        <Route path='/dash' Component={Dashboard}>
        <Route path='' Component={Home} />
        <Route path='/dash/list' Component={List} />
        <Route path='/dash/add' Component={AddStudent} />
        <Route path='/dash/edit/:id' Component={Edit} />

        </Route>
      </Routes>
      
      <Footer/>
      
      <ToastContainer/>
    </>
    
  )
}

export default App
