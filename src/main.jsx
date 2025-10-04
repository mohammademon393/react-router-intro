import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptop from './components/Laptop/Laptop.jsx';
import Users from './components/Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path: 'about', Component: About},
      {path: 'mobile', Component: Mobiles},
      {path: 'laptop', Component: Laptop},

      {
        path: 'users', 
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      }
    ]
  },
  {
    path: 'app',
    Component: App
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
