import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//* Routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddPost from './posts/AddPost';
import EditPost from './posts/EditPost';
import AllPosts from './posts/AllPosts';
import Login from './posts/LoginPost';

//* React-Redux
import { Provider } from 'react-redux';

import store from './store/store';
import Protected from './components/Protected';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  //? Initially rendering App.js

    children: [
      {
        path: "/AddPost/:para",
        element: <Protected children = {<AddPost/>}/>
        //element: <AddPost/>
      },
      {
        path: "/Login",
        element: <Protected children = {<Login/>}/>
      },
      {
        path: "/EditPost/:id",
        element: <EditPost/>
      },
      {
        path: "/",
        element: <AllPosts/>
      },
      {

      }
    ]
  }
])


root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
  
);


