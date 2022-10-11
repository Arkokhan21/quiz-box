
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Errorpage from './Components/Errorpage/Errorpage';
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Statistics from './Components/Statistics/Statistics';
import Topicdetails from './Components/Topicdetails/Topicdetails';

function App() {

  const router = createBrowserRouter([
    {
      Path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
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
        {
          path: '/quiz/:quizId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <Topicdetails></Topicdetails>
        },
        {
          path: '*',
          element: <Errorpage></Errorpage>
        }

      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
