import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import Protected from './components/AuthLayout'
import { Provider } from 'react-redux';
import store from './store/store';
import LogString from './pages/LogString';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Protected childern={<Login />} />,
      },
      {
        path: "addStudent",
        element: (
          <Protected childern={<AddStudent />} />
      ),
      },
      {
        path: "editStudent",
        element: (
          // <Protected childern={<EditStudent />} />
          <EditStudent/>
      )
      },
      {
        path: "log",
        element: (
          // <Protected childern={<EditStudent />} />
          <LogString/>
      )
      },
     
      
    ],
  },
]);
root.render(
  
    <Provider store = {store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
