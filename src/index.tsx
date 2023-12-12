import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
import App from './App';
import Episode from './pages/Episode';
import { defaultTheme } from '@xstyled/styled-components';
import SiteHeader from './components/SiteHeader';

const theme = defaultTheme;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "episode/:id" ,
    element: <Episode />
  }
]);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement)
  .render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Preflight />
        <SiteHeader />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


