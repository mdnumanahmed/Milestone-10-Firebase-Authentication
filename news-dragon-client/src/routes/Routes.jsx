import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='category/0' />,
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [      
      {
        path: ":categoryId",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.categoryId}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":newsId",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.newsId}`),
      },
    ],
  },
]);

export default router;
