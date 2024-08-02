import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// components
import './App.css'
import DefaultLayout from './components/layouts/DefaultLayout'
import HomePage from './pages/home/HomePage'
import Voting from './pages/voting/Voting'
import Breeds from './pages/breeds/Breeds'
import Gallery from './pages/gallery/Gallery'
import Likes from './pages/likes/Likes'
import Favourites from './pages/favourites/Favourites'
import Dislikes from './pages/dislikes/Dislikes'
import BreedDetail from './pages/breeds/BreedDetail'



const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/voting',
        element: <Voting />
      },
      {
        path: '/breeds',
        element: <Breeds />
      },
      {
        path: '/breeds/breed-detail/:id',
        element: <BreedDetail />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/likes',
        element: <Likes />
      },
      {
        path: '/favourites',
        element: <Favourites />
      },
      {
        path: '/dislikes',
        element: <Dislikes />
      },
    ]
  }
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
