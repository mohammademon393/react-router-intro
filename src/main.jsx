import { StrictMode, Suspense } from 'react'
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
import User2 from './components/User2/User2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "mobile", Component: Mobiles },
      { path: "laptop", Component: Laptop },

      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },

      {
        path: "users2",
        element: (
          <Suspense fallback={<span>Lodding...</span>}>
            <User2 userPromise={userPromise}></User2>
          </Suspense>
        ),
      },
      {
        path: "users/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: "posts",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      }
    ],
  },
  {
    path: "app",
    Component: App,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
