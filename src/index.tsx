import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import TVShow from './pages/TVShow';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "powerpuff-girls",
    element: <TVShow />
  }
]);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement)
  .render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


