
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import Home from './Home/Home';
import Main from './Layout/Main';
import Statistics from './Statistics/Statistics';

function App() {

  const router = createBrowserRouter([
    {
      Path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/home',
          loader: () => fetch('quiz.json'),
          element: <Home></Home>,
        },

        {
          path: '/statistics',
          element: <Statistics></Statistics>,
        },

        {
          path: '/blog',
          element: <Blog></Blog>,
        },

      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
