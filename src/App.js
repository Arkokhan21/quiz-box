
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import Errorpage from './Errorpage/Errorpage';
import Home from './Home/Home';
import Main from './Layout/Main';
import Statistics from './Statistics/Statistics';
import Topicdetails from './Topicdetails/Topicdetails';

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
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
