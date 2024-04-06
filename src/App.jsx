import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import CaloriesCalculator from './components/CaloriesCalculator'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import logo from './components/logo.png'
import About from './components/About'

import BMICalculator from './components/BMICalculator'
import CaloriesTracker from './components/CaloriesTracker';


function App() {
 const router = createBrowserRouter([
  {
    path: "/",
    element: <CaloriesTracker/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/bmi',
    element: <BMICalculator/>
  },
  {
    path: '/cal',
    element: <CaloriesCalculator/>
    
  }

 ])  

  return(
    <>
    
    
    <ToastContainer></ToastContainer>
    
    
    <div className="App">
      
      <header className="header">
        <div className='head-img'>
        <img src={logo} alt="" className='img' />
        <h1>Let's Get Fit</h1>
        </div>
         <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/bmi">BMI Calculator</a></li>
            <li><a href="/cal">Calories Calculator</a></li>
            <li><a href="/about">About</a></li>
           
            
          </ul>
          </nav>
      </header>
     
      <RouterProvider router={router} />
      
    </div>

    
    </>
  )
    
  

}

export default App
