import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogPage from './pages/BlogPage';
import InsideAboutUs from './pages/InsideAboutUs';
import { InsideOueAgent } from './pages/InsideOueAgent';
import Navbar from './component/navbar';
// import Contact from './contact';
import ContactSchool from './contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "blog",
    element: <BlogPage/>
  },
  {
    path: "newpage",
    element: <BlogPage/>
  },
  {
    path: "insideaboutus",
    element: <InsideAboutUs/>
  },
  {
    path: "OurAgent",
    element: <InsideOueAgent />
  },
  {
    path: "Dashboard",
    element: <Navbar />
  },
  {
    path: "contactus",
    element: <ContactSchool />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
