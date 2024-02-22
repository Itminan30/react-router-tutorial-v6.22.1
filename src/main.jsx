import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/Root'
import ErrorPage from './ErrorPage'
import Contact from './routes/Contact'
import { contactLoader, contactsLoader as rootLoader } from './loaders/contactLoader'
import { deleteContactAction as destroyAction, editContactAction as editAction, favouriteUpdateAction as favouriteAction, action as rootAction } from './actions/contactAction'
import EditContact from './routes/Edit'
import Index from './routes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />
          },
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: favouriteAction
          },
          {
            path: "/contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "/contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There Was an Error</div>
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
