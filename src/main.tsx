import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import { Info } from './components/Info.tsx';
import { Login } from './components/Login.tsx';
import { FormField } from './components/form/field.tsx';


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: 'info',
    element: <Info></Info>
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'form/field',
    element: <FormField></FormField>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);