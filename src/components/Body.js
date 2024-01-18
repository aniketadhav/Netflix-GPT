import React from 'react'
import Login from './Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import FormTest from './FormTest';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/brouser",
          element: <Browse />,
        },
        {
          path: "/formtest",
          element: <FormTest />,
        },
      ]);
      return (
        <div>
          <RouterProvider router={appRouter} />
        </div>
      );
}

export default Body;