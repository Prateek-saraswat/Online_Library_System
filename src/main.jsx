import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import BrowseBooks from './pages/BrowseBook.jsx'
import BookDetails from './pages/BookDetails.jsx'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/browse-books',
        element: <BrowseBooks />
      },
      {
        path: '/books/:category',        
        element: <BrowseBooks />
      },
      {
        path: '/books/:category/:id',      
        element: <BookDetails />
      },
      // {
      //   path: '/add-book',                
      //   element: <AddBook />
      // }
    ]
  },
  {
    path: '*',                            
    element: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={appRouter}/> 
  </StrictMode>,
)
