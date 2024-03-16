import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contatti from './pages/Contatti.jsx'
import CreaRicetta from './pages/CreaRicetta.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contatti",
    element: <Contatti />,
  },
  {
    path: "/ricette",
    element: <CreaRicetta />,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
